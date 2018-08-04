# rag-tag-react-native
For some odd reason, `react native init` makes an empty project with only `node_modules` and `package.json`, so use "Create React Native App" CRNA:
`create-react-native-app init project_name`
And later in this document you'll read I'm against CRNA because it uses 'Expo' app client.
So let's get rid of the Expo by immediately doing:
`npm run eject`
So this will 'eject out of CRNA' and the script involved in this will give you the project file structure that `react native init` was supposed to give you to begin with! For more info on how `npm run eject` works, see `node_modules/react-native/local-cli/eject` :)

**Why Avoid CRNA Expo?**
Limits the amount of plugins you can use, and other disadvantages if you search 'react native vs Expo crna'. This is despite the react native 'Get Started Quickly' docs telling you to use it. And if you dare eject once your months into development,
I read multiple horror stories about how if you're months into development and decide you need to 'eject' because Expor CRNA is troublesome, *then lots of things will break*.  `react native init` from start. I compare it to 'ejecting' from an jet craft that got hit by a missile; sure it shoots you out of the airplane to survive (hooray!) but then you're falling parachuting into **enemy territory** and have no plan. Same could happen if you really tihnk you can lead a team of developers on a repo for months and simply change gears mid race. Don't bother!

**Cool Note on how Android/iOS Native React-Native Might be Working...**
If you look at the `/android` directory in the project at `/android/app/build.gradle` it has:
```
dependencies {
    compile fileTree(dir: "libs", include: ["*.jar"])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"  // From node_modules
}
```
And those same `com.facebook.react*` dependencies are referenced and called in `/android/app/src/main/java/com/ragtag/MainApplication.java`'s lifecycle methods, so it's like the Android java/kotlin code is calling functions from a bunch of javascript node_modules? WOAH! Great job Facebook team :)
```
// java/kotlin
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
```

## IOS Native Setup
1. Download Xcode
2. react-native run-ios; react-native log-ios
3. command+r to Reload
4. command+d to find debugger (opens a tab in Chrome, then open Dev tools and its there)
5. not aware yet of how to make LiveReload work
## Android Native Setup
First do:
```
create-react-nativeapp init project_name
cd project_name
npm run eject
```
next lets simulate an android device using the AVD Emulator...

### AVD EMULATOR
1. AndroidStudio is not fun for solely managing AVD's. AS annoys you with popups, multiple consoles opening, rendering over a period of several seconds, things error'ing, upgrades needed, and you MUST open through a Project. You can't do AndroidStudio-to-AVD without having a project open, and we don't want our RN javascript code open inside React Studio.
2. So I asked, Can I run AVD without AndroidStudio? Yes, from CLI using 'emulator'.
Emulator creates and configs AVD (configurations) [is there a difference between emulator and AVD](https://stackoverflow.com/questions/11574601/dfference-between-emulator-and-avd)
3. Run `emulator -list-avds` and it throws some error about the absolute/relative path to a emulator binary...
4. So figure out where emulator really lives on your machine and use that:
```
which emulator
/Users/YourHome/Library/Android/sdk/tools/emulator
/Users/YourHome/Library/Android/sdk/tools/emulator -list-avds
```
5. Make a alias for this in `.bashrc/.zshrc` like `alias emulator=/Users/YourHome/Library/Android/sdk/tools/emulator`
6. If no avds from `-list-avds` then can open Android Studio > AVD Manager > and create one with API 23 Marshmallow (that's the only one that works with RN right now)  
7. can also use [emulator CLI](https://developer.android.com/studio/run/emulator-commandline) to create the AVD's for you. This could be useful if you're testing lots of Android API levels and want to run tests. Maybe make a big shellscript.sh that does it all for you :)  
8. Note - the AVD's live here on MacOS and Linux `~/Library/Android/sdk/system-images/android-apiLevel/variant/arch/`
9.
```
/Users/WillsHome/Library/Android/sdk/tools/emulator -avd Nexus_6_Marshmallow
// emulator AVD opens...looks good so far
```
10. If getting weird emulator behavior you can reset it (similar to Wipe Data feature in AndroidStudio AVD Manager) using:
`/Users/WillsHome/Library/Android/sdk/tools/emulator -avd Nexus_6_Marshmallow -prop persist.sys.language=en -prop persist.sys.country=GB`
11. If you get this error I was having:
```
running error `CANNOT Translate DNS ip`
```
Then you can research and try passing all sorts of args like:
`-dns-server 192.168.1.1` etc. and have no luck...
12. But the solution will be: AndroidStudio --> SDK Tools --> update emulator to +v27 because v25 had bugs.  
13. re-run:
```
/Users/WillsHome/Library/Android/sdk/tools/emulator -avd Nexus_6_Marshmallow
...looks good so far and no more error about Translate DNS ip
```
14. Let's run the RN app now:
```
cd react-native run-android
react-native run-android
```
runs with no errors :)  
15. Problem - LiveReloading not working after makign changes to javascript source files.  
16. Solution - command+m for Developer Menu, Enable LiveReload

If you get any error about 'Missing Platform: NDK' then go into AndroidStudio SDK Manager and install the 'NDK' plug-in.

Errors on react:react-native-maps...
```
compileOnly "com.facebook.react:react-native:+"
implementation "com.google.android.gms:play-services-base:$googlePlayServicesVersion"
implementation "com.google.android.gms:play-services-maps:$googlePlayServicesVersion"
implementation "com.google.maps.android:android-maps-utils:$androidMapsUtilsVersion"
```
  needs to be:
```
  provided "com.facebook.react:react-native:+"
  compile "com.google.android.gms:play-services-base:$googlePlayServicesVersion"
  compile "com.google.android.gms:play-services-maps:$googlePlayServicesVersion"
  compile "com.google.maps.android:android-maps-utils:$androidMapsUtilsVersion"
```
https://github.com/react-native-community/react-native-camera/issues/1490

### USB To Physical Mobile Device
1. connect device via USB. enable developer options(link)
2.
```
cd react-native run-android
react-native run-android
```
This ^^ opens Terminal, with Metro Bundle (React Package Manager), loads dependency graph, and app opens on your phone
3. shake phone for dev menu and touch `Enable Live Reload`

## Android Genymotion Emulator
Skipping for now as there is no consensus that it's really superior.
https://www.appcelerator.com/blog/2013/11/genymotion-an-android-emulator-you-can-use/
https://www.plightofbyte.com/android/2017/09/03/genymotion-vs-android-emulator/
https://www.androidauthority.com/android-virtual-devices-avd-manager-versus-genymotion-653093/
https://stackoverflow.com/questions/18683656/android-genymotion-vs-emulator
Might not support some advanced features (wearables) some features are Paid
They say AVD if you config it right its better

## Expo (avoid)
```
git clone https://github.com/thinkocapo/rag-tag-react-native.git
npm install
npm install exp --global
```
and download 'Expo' app on android/iOS
1.
```
cd rag-tag-react-native
exp start
```
2. Scan the QR code produced by `exp start`
3. The project starts to build, see the log, then look at phone.

### Connecting to Development Server,adb reverse, connect via wi-fi
Haven't set these up yet...Sticking with emulator AVD's for now. I'd rather not develop initially on my smart phone because there's too many distractions there and screen turns off a lot.

## Running the Apps
// ANDROID INSTRUCTIONS
// Terminal 1
// /Users/WillsHome/Library/Android/sdk/tools/emulator -avd Nexus_6_Marshmallow
// opens a Mac Terminal log showing React Package Manager builds (for every save), keeps original terminal blocked

// Terminal 2
// react-native run-android; react-native log-android

// IOS INSTRUCTIONS
// Terminal 1
// react-native run-ios

// * MULTIPLE APPS YOU CAN PLUG AND PLAY *