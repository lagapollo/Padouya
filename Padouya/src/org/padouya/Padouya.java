package org.padouya;

import org.apache.cordova.DroidGap;

import android.app.Activity;
import android.os.Bundle;

public class Padouya extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///assets/www/index.html");	
    }
}