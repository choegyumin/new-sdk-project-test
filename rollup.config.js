import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const config = {
  name: 'adbrix',
  input: 'src/index.ts',
  output: {
    file: 'adbrix-web-sdk.js',
    format: 'umd',
  },
  plugins: [
    builtins(),
    typescript({
      exclude: ['*.d.ts', '**/*.d.ts', 'node_modules/**'],
      tsconfig: './tsconfig.json',
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
  ],
};

export default config;
