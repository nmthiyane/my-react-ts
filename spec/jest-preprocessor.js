var tsc = require('typescript');

module.exports = {
	process: function (src, path) {
		if (path.endsWith('.ts') || path.endsWith('.tsx') || path.endsWith(".js")) {
			return tsc.transpile(
				src,
				{
					module: tsc.ModuleKind.CommonJS,
					jsx: tsc.JsxEmit.React,
					target: tsc.ScriptTarget.ES6
				},
				path,
				[]
			);
		}

		return src;
	}
};