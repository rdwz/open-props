!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):(e||self).openProps=a()}(this,function(){function e(){return e=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},e.apply(this,arguments)}return OpenProps=e({},{"--animation-fade-in":["op-fade-in .5s var(--ease-3)","\n@keyframes op-fade-in {\n  to { opacity: 1 }\n}"],"--animation-fade-out":["op-fade-out .5s var(--ease-3)","\n@keyframes op-fade-out {\n  to { opacity: 0 }\n}"],"--animation-slide-out-up":["op-slide-out-up .5s var(--ease-3)","\n@keyframes op-slide-out-up {\n  to { transform: translateY(-100%) }\n}"],"--animation-slide-out-down":["op-slide-out-down .5s var(--ease-3)","\n@keyframes op-slide-out-down {\n  to { transform: translateY(100%) }\n}"],"--animation-slide-out-right":["op-slide-out-right .5s var(--ease-3)","\n@keyframes op-slide-out-right {\n  to { transform: translateX(100%) }\n}"],"--animation-slide-out-left":["op-slide-out-left .5s var(--ease-3)","\n@keyframes op-slide-out-left {\n  to { transform: translateX(-100%) }\n}"],"--animation-slide-in-up":["op-slide-in-up .5s var(--ease-3)","\n@keyframes op-slide-in-up {\n  from { transform: translateY(100%) }\n}"],"--animation-slide-in-down":["op-slide-in-down .5s var(--ease-3)","\n@keyframes op-slide-in-down {\n  from { transform: translateY(-100%) }\n}"],"--animation-slide-in-right":["op-slide-in-right .5s var(--ease-3)","\n@keyframes op-slide-in-right {\n  from { transform: translateX(-100%) }\n}"],"--animation-slide-in-left":["op-slide-in-left .5s var(--ease-3)","\n@keyframes op-slide-in-left {\n  from { transform: translateX(100%) }\n}"],"--animation-shake-x":["op-shake-x .75s var(--ease-out-5)","\n@keyframes op-shake-x {\n  0%, 100% { transform: translateX(0%) }\n  20% { transform: translateX(-5%) }\n  40% { transform: translateX(5%) }\n  60% { transform: translateX(-5%) }\n  80% { transform: translateX(5%) }\n}"],"--animation-shake-y":["op-shake-y .75s var(--ease-out-5)","\n@keyframes op-shake-y {\n  0%, 100% { transform: translateY(0%) }\n  20% { transform: translateY(-5%) }\n  40% { transform: translateY(5%) }\n  60% { transform: translateY(-5%) }\n  80% { transform: translateY(5%) }\n}"],"--animation-spin":["op-spin 2s linear infinite","\n@keyframes op-spin {\n  to { transform: rotate(1turn) }\n}"],"--animation-ping":["op-ping 5s var(--ease-out-3) infinite","\n@keyframes op-ping {\n  90%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}"],"--animation-blink":["op-blink 1s var(--ease-out-3) infinite","\n@keyframes op-blink {\n  0%, 100% {\n    opacity: 1\n  }\n  50% {\n    opacity: .5\n  }\n}"],"--animation-float":["op-float 3s var(--ease-inout-3) infinite","\n@keyframes op-float {\n  50% { transform: translateY(-25%) }\n}"],"--animation-bounce":["op-bounce 2s var(--ease-squish-2) infinite","\n@keyframes op-bounce {\n  25% { transform: translateY(-20%) }\n  40% { transform: translateY(-3%) }\n  0%, 60%,100% { transform: translateY(0) }\n}"],"--animation-pulse":["op-pulse 2s var(--ease-out-3) infinite","\n@keyframes op-pulse {\n  50% { transform: scale(.9,.9) }\n}"]},{"--size-000":"-.5rem","--size-00":"-.25rem","--size-1":".25rem","--size-2":".5rem","--size-3":"1rem","--size-4":"1.25rem","--size-5":"1.5rem","--size-6":"1.75rem","--size-7":"2rem","--size-8":"2.5rem","--size-9":"3rem","--size-10":"3.5rem","--size-11":"4rem","--size-12":"5rem","--size-13":"7rem","--size-14":"9rem","--size-15":"10rem","--size-fluid-1":"clamp(.5rem, 1vw, 1rem)","--size-fluid-2":"clamp(1rem, 2vw, 1.5rem)","--size-fluid-3":"clamp(1.5rem, 3vw, 2rem)","--size-fluid-4":"clamp(2rem, 4vw, 3rem)","--size-fluid-5":"clamp(3rem, 5vw, 4rem)","--size-fluid-6":"clamp(4rem, 6vw, 5rem)","--size-fluid-7":"clamp(5rem, 7vw, 6rem)","--size-fluid-8":"clamp(6rem, 8vw, 7rem)","--size-fluid-9":"clamp(7rem, 9vw, 8rem)","--size-fluid-10":"clamp(8rem, 10vw, 10rem)","--size-content-1":"20ch","--size-content-2":"45ch","--size-content-3":"60ch","--size-header-1":"20ch","--size-header-2":"25ch","--size-header-3":"45rem"},{"--gray-0":"#f8f9fa","--gray-1":"#f1f3f5","--gray-2":"#e9ecef","--gray-3":"#dee2e6","--gray-4":"#ced4da","--gray-5":"#adb5bd","--gray-6":"#868e96","--gray-7":"#495057","--gray-8":"#343a40","--gray-9":"#212529","--red-0":"#fff5f5","--red-1":"#ffe3e3","--red-2":"#ffc9c9","--red-3":"#ffa8a8","--red-4":"#ff8787","--red-5":"#ff6b6b","--red-6":"#fa5252","--red-7":"#f03e3e","--red-8":"#e03131","--red-9":"#c92a2a","--pink-0":"#fff0f6","--pink-1":"#ffdeeb","--pink-2":"#fcc2d7","--pink-3":"#faa2c1","--pink-4":"#f783ac","--pink-5":"#f06595","--pink-6":"#e64980","--pink-7":"#d6336c","--pink-8":"#c2255c","--pink-9":"#a61e4d","--grape-0":"#f8f0fc","--grape-1":"#f3d9fa","--grape-2":"#eebefa","--grape-3":"#e599f7","--grape-4":"#da77f2","--grape-5":"#cc5de8","--grape-6":"#be4bdb","--grape-7":"#ae3ec9","--grape-8":"#9c36b5","--grape-9":"#862e9c","--violet-0":"#f3f0ff","--violet-1":"#e5dbff","--violet-2":"#d0bfff","--violet-3":"#b197fc","--violet-4":"#9775fa","--violet-5":"#845ef7","--violet-6":"#7950f2","--violet-7":"#7048e8","--violet-8":"#6741d9","--violet-9":"#5f3dc4","--indigo-0":"#edf2ff","--indigo-1":"#dbe4ff","--indigo-2":"#bac8ff","--indigo-3":"#91a7ff","--indigo-4":"#748ffc","--indigo-5":"#5c7cfa","--indigo-6":"#4c6ef5","--indigo-7":"#4263eb","--indigo-8":"#3b5bdb","--indigo-9":"#364fc7","--blue-0":"#e7f5ff","--blue-1":"#d0ebff","--blue-2":"#a5d8ff","--blue-3":"#74c0fc","--blue-4":"#4dabf7","--blue-5":"#339af0","--blue-6":"#228be6","--blue-7":"#1c7ed6","--blue-8":"#1971c2","--blue-9":"#1864ab","--cyan-0":"#e3fafc","--cyan-1":"#c5f6fa","--cyan-2":"#99e9f2","--cyan-3":"#66d9e8","--cyan-4":"#3bc9db","--cyan-5":"#22b8cf","--cyan-6":"#15aabf","--cyan-7":"#1098ad","--cyan-8":"#0c8599","--cyan-9":"#0b7285","--teal-0":"#e6fcf5","--teal-1":"#c3fae8","--teal-2":"#96f2d7","--teal-3":"#63e6be","--teal-4":"#38d9a9","--teal-5":"#20c997","--teal-6":"#12b886","--teal-7":"#0ca678","--teal-8":"#099268","--teal-9":"#087f5b","--green-0":"#ebfbee","--green-1":"#d3f9d8","--green-2":"#b2f2bb","--green-3":"#8ce99a","--green-4":"#69db7c","--green-5":"#51cf66","--green-6":"#40c057","--green-7":"#37b24d","--green-8":"#2f9e44","--green-9":"#2b8a3e","--lime-0":"#f4fce3","--lime-1":"#e9fac8","--lime-2":"#d8f5a2","--lime-3":"#c0eb75","--lime-4":"#a9e34b","--lime-5":"#94d82d","--lime-6":"#82c91e","--lime-7":"#74b816","--lime-8":"#66a80f","--lime-9":"#5c940d","--yellow-0":"#fff9db","--yellow-1":"#fff3bf","--yellow-2":"#ffec99","--yellow-3":"#ffe066","--yellow-4":"#ffd43b","--yellow-5":"#fcc419","--yellow-6":"#fab005","--yellow-7":"#f59f00","--yellow-8":"#f08c00","--yellow-9":"#e67700","--orange-0":"#fff4e6","--orange-1":"#ffe8cc","--orange-2":"#ffd8a8","--orange-3":"#ffc078","--orange-4":"#ffa94d","--orange-5":"#ff922b","--orange-6":"#fd7e14","--orange-7":"#f76707","--orange-8":"#e8590c","--orange-9":"#d9480f"},{"--font-sans":"system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif","--font-serif":"ui-serif,serif","--font-mono":"Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace","--font-weight-1":"100","--font-weight-2":"200","--font-weight-3":"300","--font-weight-4":"400","--font-weight-5":"500","--font-weight-6":"600","--font-weight-7":"700","--font-weight-8":"800","--font-weight-9":"900","--font-lineheight-00":".95","--font-lineheight-0":"1.1","--font-lineheight-1":"1.25","--font-lineheight-2":"1.375","--font-lineheight-3":"1.5","--font-lineheight-4":"1.75","--font-lineheight-5":"2","--font-relative-lineheight-1":"calc(1rem + 1.1ch)","--font-relative-lineheight-2":"calc(1rem + 1.25ch)","--font-relative-lineheight-3":"calc(1rem + 1.5ch)","--font-relative-lineheight-4":"calc(1rem + 2ch)","--font-relative-lineheight-5":"calc(1rem + 2.5ch)","--font-relative-lineheight-6":"calc(1rem + 3ch)","--font-letterspacing-0":"-.05em","--font-letterspacing-1":".025em","--font-letterspacing-2":".050em","--font-letterspacing-3":".075em","--font-letterspacing-4":".150em","--font-letterspacing-5":".500em","--font-letterspacing-6":".750em","--font-letterspacing-7":"1em","--font-size-00":".5rem","--font-size-0":".75rem","--font-size-1":"1rem","--font-size-2":"1.1rem","--font-size-3":"1.25rem","--font-size-4":"1.5rem","--font-size-5":"2rem","--font-size-6":"2.5rem","--font-size-7":"3rem","--font-size-8":"3.5rem","--font-size-fluid-0":"clamp(.75rem, 1.5vw, 1rem)","--font-size-fluid-1":"clamp(1rem, 2vw, 1.5rem)","--font-size-fluid-2":"clamp(1.5rem, 3vw, 2.5rem)","--font-size-fluid-3":"clamp(2rem, 4vw, 3.5rem)"},{"--border-size-1":"1px","--border-size-2":"2px","--border-size-3":"5px","--border-size-4":"10px","--border-size-5":"25px","--radii-1":"2px","--radii-2":"5px","--radii-3":"1rem","--radii-4":"2rem","--radii-5":"4rem","--radii-6":"8rem","--radii-round":"1e5px","--radii-blob-1":"30% 70% 70% 30% / 53% 30% 70% 47%","--radii-blob-2":"53% 47% 34% 66% / 63% 46% 54% 37%","--radii-blob-3":"37% 63% 56% 44% / 49% 56% 44% 51%","--radii-blob-4":"63% 37% 37% 63% / 43% 37% 63% 57%","--radii-blob-5":"49% 51% 48% 52% / 57% 44% 56% 43%"},{"--aspect-box":"1","--aspect-landscape":"4/3","--aspect-portrait":"3/4","--aspect-widescreen":"16/9","--aspect-ultrawide":"18/5","--golden-ratio":"1.6180/1"},{"--ease-1":"cubic-bezier(.25, 0, .5, 1)","--ease-2":"cubic-bezier(.25, 0, .4, 1)","--ease-3":"cubic-bezier(.25, 0, .3, 1)","--ease-4":"cubic-bezier(.25, 0, .2, 1)","--ease-5":"cubic-bezier(.25, 0, .1, 1)","--ease-in-1":"cubic-bezier(.25, 0, 1, 1)","--ease-in-2":"cubic-bezier(.50, 0, 1, 1)","--ease-in-3":"cubic-bezier(.70, 0, 1, 1)","--ease-in-4":"cubic-bezier(.90, 0, 1, 1)","--ease-in-5":"cubic-bezier(1, 0, 1, 1)","--ease-out-1":"cubic-bezier(0, 0, .75, 1)","--ease-out-2":"cubic-bezier(0, 0, .50, 1)","--ease-out-3":"cubic-bezier(0, 0, .3, 1)","--ease-out-4":"cubic-bezier(0, 0, .1, 1)","--ease-out-5":"cubic-bezier(0, 0, 0, 1)","--ease-inout-1":"cubic-bezier(.1, 0, .9, 1)","--ease-inout-2":"cubic-bezier(.3, 0, .7, 1)","--ease-inout-3":"cubic-bezier(.5, 0, .5, 1)","--ease-inout-4":"cubic-bezier(.7, 0, .3, 1)","--ease-inout-5":"cubic-bezier(.9, 0, .1, 1)","--ease-elastic-1":"cubic-bezier(.5, .75, .75, 1.25)","--ease-elastic-2":"cubic-bezier(.5, 1, .75, 1.25)","--ease-elastic-3":"cubic-bezier(.5, 1.25, .75, 1.25)","--ease-elastic-4":"cubic-bezier(.5, 1.5, .75, 1.25)","--ease-elastic-5":"cubic-bezier(.5, 1.75, .75, 1.25)","--ease-squish-1":"cubic-bezier(.5, -.1, .1, 1.5)","--ease-squish-2":"cubic-bezier(.5, -.3, .1, 1.5)","--ease-squish-3":"cubic-bezier(.5, -.5, .1, 1.5)","--ease-squish-4":"cubic-bezier(.5, -.7, .1, 1.5)","--ease-squish-5":"cubic-bezier(.5, -.9, .1, 1.5)","--ease-step-1":"steps(2)","--ease-step-2":"steps(3)","--ease-step-3":"steps(4)","--ease-step-4":"steps(7)","--ease-step-5":"steps(10)"},{"--op-gradient-direction":"to bottom right","--gradient-1":"linear-gradient(var(--op-gradient-direction),#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)","--gradient-2":"linear-gradient(var(--op-gradient-direction),#48005c, #8300e2, #a269ff)","--gradient-3":"\n    radial-gradient(\n      circle at top right, \n      hsl(180 100% 50%), hsl(180 100% 50% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(328 100% 54%), hsl(328 100% 54% / 0%)\n    )","--gradient-4":"linear-gradient(var(--op-gradient-direction),#00F5A0,#00D9F5)","--gradient-5":"conic-gradient(from -270deg at 75% 110%, fuchsia, floralwhite)","--gradient-6":"conic-gradient(from -90deg at top left, black, white)","--gradient-7":"linear-gradient(var(--op-gradient-direction),#72C6EF,#004E8F)","--gradient-8":"conic-gradient(from 90deg at 50% 0%, #111, 50%, #222, #111)","--gradient-9":"conic-gradient(from .5turn at bottom center, lightblue, white)","--gradient-10":"conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700)","--gradient-11":"conic-gradient(at bottom left, deeppink, cyan)","--gradient-12":"conic-gradient(from 90deg at 25% -10%, #ff4500, #d3f340, #7bee85, #afeeee, #7bee85)","--gradient-13":"radial-gradient(circle at 50% 200%, #000142, #3b0083, #b300c3, #ff059f, #ff4661, #ffad86, #fff3c7)","--gradient-14":"conic-gradient(at top right, lime, cyan)","--gradient-15":"linear-gradient(var(--op-gradient-direction), #c7d2fe, #fecaca, #fef3c7)","--gradient-16":"radial-gradient(circle at 50% -250%, #374151, #111827, #000)","--gradient-17":"conic-gradient(from -90deg at 50% -25%, blue, blueviolet)","--gradient-18":"conic-gradient(from .5turn at center left, lime, cyan)","--gradient-19":"linear-gradient(var(--op-gradient-direction),#ffe259,#ffa751)","--gradient-20":"conic-gradient(from -135deg at -10% center, #ffa500, #ff7715, #ff522a, #ff3f47, #ff5482, #ff69b4)","--gradient-21":"conic-gradient(from -90deg at 25% 115%, #ff0000, #ff0066, #ff00cc, #cc00ff, #6600ff, #0000ff, #0000ff, #0000ff, #0000ff)","--gradient-22":"linear-gradient(var(--op-gradient-direction),#acb6e5,#86fde8)","--gradient-23":"linear-gradient(var(--op-gradient-direction),#536976,#292E49)","--gradient-24":"conic-gradient(from .5turn at 0% 0%, #00c476, 10%, #82b0ff, 90%, #00c476)","--gradient-25":"conic-gradient(at 125% 50%, #b78cf7, #ff7c94, #ffcf0d, #ff7c94, #b78cf7)","--gradient-26":"linear-gradient(var(--op-gradient-direction),#9796f0,#fbc7d4)","--gradient-27":"conic-gradient(from .5turn at bottom left, deeppink, rebeccapurple)","--gradient-28":"conic-gradient(from -90deg at 50% 105%, white, orchid)","--gradient-29":"\n    radial-gradient(\n      circle at top right, \n      hsl(250 100% 85%), hsl(250 100% 85% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(220 90% 75%), hsl(220 90% 75% / 0%)\n    )","--gradient-30":"radial-gradient(\n      circle at top right, \n      hsl(150 100% 50%), hsl(150 100% 50% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(150 100% 84%), hsl(150 100% 84% / 0%)\n    )"},{"--shadow-color":"220 3% 15%","--shadow-strength":"1%","--shadow-1":"0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))","--shadow-2":"\n    0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%))","--shadow-3":"\n    0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))","--shadow-4":"\n    0 -2px 5px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 1px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 2px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 9px 9px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 16px 16px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%))","--inner-shadow-0":"inset 0 0 0 1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))","--inner-shadow-1":"inset 0 1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))","--inner-shadow-2":"inset 0 1px 4px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))","--inner-shadow-3":"inset 0 2px 8px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))","--inner-shadow-4":"inset 0 2px 14px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))"})});
//# sourceMappingURL=open-props.umd.js.map
