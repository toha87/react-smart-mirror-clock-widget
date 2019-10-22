import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

import postcss from 'rollup-plugin-postcss'

const config = {
    input: 'src/ClockWidget.js',
    external: ['react'],
    plugins: [
        postcss({
            extract:true,
            plugins: []
        }),
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ],
    output: {
        format: 'umd',
        name: 'ClockWidget',
        globals: {
            react: "React"
        }
    }
}
export default config