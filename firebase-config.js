// ═══════════════════════════════════════════════════════════════
//  firebase-config.js  —  ضع هنا بيانات مشروعك من Firebase Console
//  تعليمات: https://console.firebase.google.com
//    1. أنشئ مشروعاً جديداً
//    2. أضف تطبيق ويب (</> Web)
//    3. انسخ الـ firebaseConfig وضعها هنا
//    4. من Realtime Database → Rules: { "rules": { ".read": true, ".write": true } }
// ═══════════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyA_O4MmUccnk4xKmNVTzOH6YtKFCWQgZQ4",
  authDomain:        "media-literacy-training.firebaseapp.com",
  databaseURL:       "https://media-literacy-training-default-rtdb.firebaseio.com",
  projectId:         "media-literacy-training",
  storageBucket:     "media-literacy-training.firebasestorage.app",
  messagingSenderId: "652579612215",
  appId:             "1:652579612215:web:081508aa102a4b3948c1b2"
};

// هل تم الإعداد؟ (لا تعدّل هذا السطر)
const FIREBASE_READY = true;
