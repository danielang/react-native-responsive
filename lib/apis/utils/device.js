import {
	Dimensions,
	PixelRatio
} from "react-native";

const pixelRatio = PixelRatio.get();

Dimensions.addEventListener('change', e => {
    Device.dpWidth = e.window.width;
    Device.dpHeight = e.window.height;
    Device.pxWidth = e.window.width * pixelRatio;
    Device.pxHeight = e.window.height * pixelRatio;
});

class Device {
	static pixelRatio = pixelRatio;
	static dpWidth = Dimensions.get("window").width;
	static dpHeight = Dimensions.get("window").height;
	static pxWidth = Dimensions.get("window").width * pixelRatio;
	static pxHeight = Dimensions.get("window").height * pixelRatio;

	static get physicalWidth() {
		return Device.pxWidth;
	}

	static get physicalHeight() {
		return Device.pxHeight;
	}

	static get cssWidth() {
		return Device.dpWidth;
	}

	static get cssHeight() {
		return Device.dpHeight;
	}

	static get width() {
		return Device.cssWidth;
	}
	
	static get height() {
		return Device.cssHeight;
	}
}

export default Device;
