package skimp.common.app.demo;

import m.client.android.library.core.utils.Logger;
import m.client.android.library.core.utils.PLog;
import m.client.android.library.core.view.MainActivity;
import skimp.common.app.demo.common.Const;
import skimp.common.app.demo.common.Utils;
import skimp.common.app.demo.manager.InterfaceManager;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Intent;
import android.graphics.Bitmap;
import android.text.TextUtils;
import android.util.Log;
import android.webkit.WebView;

/**
 * BaseActivity Class
 * 
 * @author 김태욱(<a mailto="tukim@uracle.co.kr">tukim@uracle.co.kr</a>)
 * @version v 1.0.0
 * @since Android 2.1 <br>
 *        <DT><B>Date: </B>
 *        <DD>2013.08.01</DD>
 *        <DT><B>Company: </B>
 *        <DD>Uracle Co., Ltd.</DD>
 * 
 * 모피어스 내에서 제공되는 모든 Web 페이지의 기본이 되는 Activity
 * html 화면은 모두 BaseActivity 상에서 출력된다.
 * 제어를 원하는 이벤트들은 overriding 하여 구현하며, 각각 페이지 별 이벤트는 화면 단위로 분기하여 처리한다.
 * 플랫폼 내부에서 사용하는 클래스로 해당 클래스의 이름은 변경할 수 없다.
 * 
 * Copyright (c) 2001-2011 Uracle Co., Ltd. 
 * 166 Samseong-dong, Gangnam-gu, Seoul, 135-090, Korea All Rights Reserved.
 */

public class BaseActivity extends MainActivity {
	private static final String TAG = BaseActivity.class.getSimpleName();

	/**
	 * Webview가 시작 될 때 호출되는 함수
	 */
	@Override
	public void onPageStarted (WebView view, String url, Bitmap favicon) {
		super.onPageStarted(view, url, favicon);
	}
	
	/**
	 * Webview내 컨텐츠가 로드되고 난 후 호출되는 함수
	 */
	@Override
	public void onPageFinished(WebView view, String url)  {
		super.onPageFinished(view, url);
		
	}

	@Override
	public void onActivityResult(int requestCode, int resultCode, Intent data) {
		PLog.i(TAG, "onActivityResult(int requestCode, int resultCode, Intent data)");
		PLog.d(TAG, "requestCode = " + requestCode);
		PLog.d(TAG, "resultCode = " + resultCode);
		PLog.d(TAG, "data = " + data);

		Utils.debugIntent(TAG, data);

		if(data == null) return;

		super.onActivityResult(requestCode, resultCode, data);

		// 간편 인증
		if (requestCode == Const.REQ_AUTH_PIN) {
			Log.d("KDS", "result = "+data.getStringExtra("KEY_RESULT"));
			Log.d("KDS", "pin = "+data.getStringExtra("pin"));
			String result = data.getStringExtra("KEY_RESULT");
			String pin = data.getStringExtra("pin");
			String message = data.getStringExtra("message");
			JSONObject obj = new JSONObject();
			try {
				obj.put("result", result);
				obj.put("message", TextUtils.isEmpty(message)? result:message);
				if(!TextUtils.isEmpty(pin) || resultCode == Const.REQ_AUTH_PIN_GET)
					obj.put("pin", pin);
			} catch (JSONException e) {
				e.printStackTrace();
			}
			InterfaceManager.getInstance().loadUrl(this, Const.JS_PinAuthManager, result, obj);
		} else if (requestCode == Const.REQ_AUTH_PATTERN) {
			Log.d("KDS", "result = "+data.getStringExtra("KEY_RESULT"));
			Log.d("KDS", "KEY_CODE = "+data.getStringExtra("KEY_CODE"));
			String result = data.getStringExtra("KEY_RESULT");
			String KEY_CODE = data.getStringExtra("KEY_CODE");
			String message = data.getStringExtra("message");
			JSONObject obj = new JSONObject();
			try {
				obj.put("result", result);
				obj.put("message", TextUtils.isEmpty(message)? result:message);
				if(!TextUtils.isEmpty(KEY_CODE)) obj.put("KEY_CODE", KEY_CODE);
			} catch (JSONException e) {
				e.printStackTrace();
			}
			InterfaceManager.getInstance().loadUrl(this, Const.JS_PatternAuthManager, result, obj);
		}
	}

}
