/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package haribol.ekadasi.app;

import android.os.Bundle;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.graphics.Color;
import android.view.View;

import org.apache.cordova.*;

public class MainActivity extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE,
                             WindowManager.LayoutParams.FLAG_SECURE);

        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);

        // Отключаем масштабирование
        WebView webView = (WebView) appView.getEngine().getView();
        WebSettings webSettings = webView.getSettings();
        webSettings.setSupportZoom(false);  // Отключаем поддержку зума
        webSettings.setBuiltInZoomControls(false);  // Отключаем встроенные элементы управления зумом
        webSettings.setDisplayZoomControls(false);  // Отключаем отображение кнопок зума
        webSettings.setTextZoom(100);  // Фиксированный размер текста

    }
    
}
