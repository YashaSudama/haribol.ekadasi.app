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

#import "AppDelegate.h"
#import "MainViewController.h"

@interface AppDelegate ()
// Заглушка для защиты содержимого
@property (strong, nonatomic) UIView *privacyScreen;
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary<UIApplicationLaunchOptionsKey, id> *)launchOptions
{
    // Создание основного контроллера
    self.viewController = [[MainViewController alloc] init];
    
    // Создание окна приложения
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.rootViewController = self.viewController; // Устанавливаем корневой контроллер
    [self.window makeKeyAndVisible]; // Делаем окно видимым и активным

    // Настраиваем защиту от записи экрана для iOS 11+
    if (@available(iOS 11.0, *)) {
        // Создаем заглушку (черный слой)
        self.privacyScreen = [[UIView alloc] initWithFrame:self.window.bounds];
        self.privacyScreen.backgroundColor = [UIColor blackColor];
        self.privacyScreen.hidden = YES; // По умолчанию скрыта
        [self.window addSubview:self.privacyScreen];

        // Слушаем изменения записи экрана
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(handleScreenCaptureChange)
                                                     name:UIScreenCapturedDidChangeNotification
                                                   object:nil];

        // Проверяем начальное состояние
        [self handleScreenCaptureChange];
    }

    // Слушаем события перехода в фон и возвращения в активное состояние
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(applicationDidEnterBackground)
                                                 name:UIApplicationDidEnterBackgroundNotification
                                               object:nil];

    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(applicationWillEnterForeground)
                                                 name:UIApplicationWillEnterForegroundNotification
                                               object:nil];

    return YES; // Успешная загрузка
}

// Обработка изменений записи экрана
- (void)handleScreenCaptureChange {
    if (@available(iOS 11.0, *)) {
        if ([UIScreen mainScreen].isCaptured) {
            // Показываем заглушку, если запись экрана активна
            self.privacyScreen.hidden = NO;
        } else {
            // Скрываем заглушку, если запись экрана отключена
            self.privacyScreen.hidden = YES;
        }
    }
}

// Обработка ухода приложения в фон
- (void)applicationDidEnterBackground {
    self.privacyScreen.hidden = NO; // Показываем заглушку
}

// Обработка возвращения приложения из фона
- (void)applicationWillEnterForeground {
    if (@available(iOS 11.0, *)) {
        // Обновляем состояние заглушки на основе записи экрана
        [self handleScreenCaptureChange];
    } else {
        self.privacyScreen.hidden = YES; // Скрываем заглушку, если запись экрана недоступна
    }
}

@end
