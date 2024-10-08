import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json' assert { type: 'json' };
import copy from 'rollup-plugin-copy';
import { terser } from '@rollup/plugin-terser';

const extensions = ['.js'];

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: 'src/index.js', // 변환시킬 파일
    output: [
        // 변환된 결과물
        {
            file: pkg.main, // 반환 경로 작성
            format: 'cjs', // 확장자
            sourcemap: true, // sourcemap 설정, 웹 브라우저 로드 시 개발자 도구에서 원본 소스 코드를 보여주며 디버깅이 가능하게 함
        },
        {
            file: pkg.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [resolve({ extensions }), commonjs(), terser(), copy({
        targets: [
          { src: 'index.d.ts', dest: 'dist' } // src 폴더의 타입 정의 파일을 dist로 복사
        ]
      }),],
};

export default config;
