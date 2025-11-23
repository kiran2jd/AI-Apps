# Voice Chat App (Kids Mode)

A multilingual, voice-first chat application built with React Native Expo. Designed for kids and non-educated users with a simple, high-contrast UI.

## Features
- 🎤 **Voice-First**: Big animated microphone button.
- 🗣️ **Multilingual**: English, Telugu, Tamil (UI + Mock STT/TTS).
- 🎨 **Kids Mode**: Bright colors and simplified interface.
- 📱 **Responsive**: Works on Mobile (Android/iOS) and Web.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Locally**:
    ```bash
    npx expo start
    ```
    - Press `w` to open in the browser.
    - Scan QR code to open on phone.

## How to Deploy to GitHub Pages (Live Demo)

You can host this app for free on GitHub Pages!

1.  **Initialize Git**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a Repo on GitHub** and link it:
    ```bash
    git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
    git push -u origin main
    ```

3.  **Install Deploy Tool**:
    ```bash
    npm install --save-dev gh-pages
    ```

4.  **Configure `package.json`**:
    Add these lines to your `package.json`:
    ```json
    "homepage": "https://<YOUR_USERNAME>.github.io/<REPO_NAME>",
    "scripts": {
      "deploy": "expo export -p web && gh-pages -d dist"
    }
    ```

5.  **Deploy**:
    ```bash
    npm run deploy
    ```

Your app will be live at `https://<YOUR_USERNAME>.github.io/<REPO_NAME>`!
