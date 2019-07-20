/**
 * Color set from Frozen movie borrowed from https://twitter.com/CINEMAPALETTES
 */

import { ITheme, is } from "./ITheme";
import { color } from "../core/utils/Color";
import { ColorSet } from "../core/utils/ColorSet";
import { BaseObject } from "../core/Base";

const theme: ITheme = (object: BaseObject) => {

	if (is<ColorSet>(object, "ColorSet")) {
		object.list = [
			color("#bec4f8"),
			color("#a5abee"),
			color("#6a6dde"),
			color("#4d42cf"),
			color("#713e8d"),
			color("#a160a0"),
			color("#eb6eb0"),
			color("#f597bb"),
			color("#fbb8c9"),
			color("#f8d4d8")
		];
		object.minLightness = 0.2;
		object.maxLightness = 0.7;
		object.reuse = true;
	}
};

export default theme;
