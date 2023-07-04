const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Beomtil', // 번들된 라이브러리의 전역 변수 이름
        libraryTarget: 'umd', // 번들된 라이브러리의 모듈 시스템 타겟 설정
        globalObject: 'this', // 브라우저 환경에서 전역 객체 설정
    },
    module: {
        rules: [
            {
                test: /\.js$/, // JavaScript 파일에 대한 로더 설정
                exclude: /node_modules/,
                use: 'babel-loader', // Babel을 사용하여 ES6+ 코드 변환
            },
        ],
    },
};
