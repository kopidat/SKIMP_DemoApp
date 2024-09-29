package skimp.common.app.demo.pinlock;

public interface PinLockListener {
    void onComplete(String var1);

    void onEmpty();

    void onPinChange(int var1, String var2);
}
