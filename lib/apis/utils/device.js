import {
	Dimensions,
	PixelRatio
} from "react-native";

const pixelRatio = PixelRatio.get();

Dimensions.addEventListener('change', e => {
    Device.dpWidth = Math.min(Dimensions.get("window").width, Dimensions.get("window").height);
    Device.dpHeight = Math.max(Dimensions.get("window").width, Dimensions.get("window").height);
    Device.pxWidth = Math.min(Dimensions.get("window").width, Dimensions.get("window").height) * pixelRatio;
    Device.pxHeight = Math.max(Dimensions.get("window").width, Dimensions.get("window").height) * pixelRatio;
});

class Device {
	static pixelRatio = pixelRatio;
	static dpWidth = Math.min(Dimensions.get("window").width, Dimensions.get("window").height);
	static dpHeight = Math.max(Dimensions.get("window").width, Dimensions.get("window").height);
	static pxWidth = Math.min(Dimensions.get("window").width, Dimensions.get("window").height) * pixelRatio;
	static pxHeight = Math.max(Dimensions.get("window").width, Dimensions.get("window").height) * pixelRatio;

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
