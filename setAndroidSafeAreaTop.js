/** [JavaScript]
 * Android App에서 userAgent에 넣어줘야 할 값
 *   1. top-safe-area fixel 값
 *   2. Android App임을 확인 할 수 있는 문자열
 * 
 *   userAgent ex) 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 liivm_android marginTop=36'
 */
function setAndroidSafeAreaTop () {
    const userAgent = navigator.userAgent;      // userAgent (Android 앱에서 여기에 top-safe-area 값과 안드로이드 앱임을 확인할 수 있는 문자열을 담아서 보내줘야 한다.)
    const aosApp = /liivm_android/i;            // Android 앱에서 넘겨 줄 문자열

    if ( aosApp.test(userAgent) ) {             // Android 앱에서 넘겨준 문자열이 userAgent에 포함되어 있으면 실행
        
        try {
            let sh = navigator.userAgent.split("marginTop=");   // TODO: 대문자, 소문자 구분하는지 확인 필요
            /**
             * userAgent에서 "marginTop="를 기점으로 문자열을 분리한다. (Array로 반환 됨)
             * ex) sh = ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 liivm_android ", "36" ]
             */
            
            sh = sh[sh.length-1]*1;     // sh의 마지막 index 값을 반환한다.
            sh = Math.floor(sh);        // 소수점 제거  1.6 ==> 1


            document.documentElement.style.setProperty('--sat', `${sh}px`);
            /**
             * css 변수로 사용할 수 있는 값을 html태그에 등록한다.
             * ex) <html lang="ko" style="--sat: 4px;">
             * 
             * html에 inline으로 등록되기 때문에 우선순위가 높아진다.
             */
        } catch (e) {
        }
    };
}


/** [CSS]

:root {
    --sat:constant(safe-area-inset-top);
    --sat:env(safe-area-inset-top);
}

.header {  padding-top: var(--sat) }

*/

