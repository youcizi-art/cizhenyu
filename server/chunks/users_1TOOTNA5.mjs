globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_k5ZEHXAH.mjs";
import { r as renderTemplate, m as maybeRenderHead } from "./sequence_B081Vtkc.mjs";
import { r as reactExports, g as getDefaultExportFromCjs, a as renderComponent } from "./worker-entry_DwrWQjkq.mjs";
import { env } from "cloudflare:workers";
import { x as User, y as CircleUser, z as Wallet, E as Coins, J as SquarePen, K as Camera, $ as $$DashboardLayout } from "./DashboardLayout_Cf3rFJx6.mjs";
import { PluginService } from "./PluginService_S9ISaEDp.mjs";
import { j as jsxDevRuntimeExports, _ as __extends, A as __assign, u as useToast, B as Button, S as Settings, P as Plus, I as Input, L as Loader2, T as Trash2, a as Dialog, b as DialogContent, d as DialogHeader, e as DialogTitle, D as DialogFooter } from "./useAdminPermissions_BNA5PeGD.mjs";
import { L as ListRefreshButton } from "./ListRefreshButton_ohId2QN0.mjs";
import { L as Label } from "./Label_DDxL_qjz.mjs";
import { S as Select, d as SelectItem } from "./Select_vzcelegT.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./Tabs_CS5r5Bc-.mjs";
import { e as Search, o as ChevronLeft, a as ChevronRight, d as ConfirmDialog, U as Upload } from "./agent-session-utils_Ct7fJQ5O.mjs";
import { F as FormDialog } from "./FormDialog_CVisF3Qg.mjs";
import { f as createDbClient, q as members, u as admins, v as users, e as eq } from "./index_BD72pzcV.mjs";
import { h as hasPermission } from "./rbac_DGEXbU-I.mjs";
const SystemConfigContext = reactExports.createContext(void 0);
const SystemConfigProvider = ({
  config,
  children
}) => {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SystemConfigContext.Provider, { value: config, children }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/contexts/SystemConfigContext.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, void 0);
};
var UserAgent_DEPRECATED_1;
var hasRequiredUserAgent_DEPRECATED;
function requireUserAgent_DEPRECATED() {
  if (hasRequiredUserAgent_DEPRECATED) return UserAgent_DEPRECATED_1;
  hasRequiredUserAgent_DEPRECATED = 1;
  var _populated = false;
  var _ie, _firefox, _opera, _webkit, _chrome;
  var _ie_real_version;
  var _osx, _windows, _linux, _android;
  var _win64;
  var _iphone, _ipad, _native;
  var _mobile;
  function _populate() {
    if (_populated) {
      return;
    }
    _populated = true;
    var uas = navigator.userAgent;
    var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
    var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);
    _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
    _ipad = /\b(iP[ao]d)/.exec(uas);
    _android = /Android/i.exec(uas);
    _native = /FBAN\/\w+;/i.exec(uas);
    _mobile = /Mobile/i.exec(uas);
    _win64 = !!/Win64/.exec(uas);
    if (agent) {
      _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN;
      if (_ie && document && document.documentMode) {
        _ie = document.documentMode;
      }
      var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
      _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;
      _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
      _opera = agent[3] ? parseFloat(agent[3]) : NaN;
      _webkit = agent[4] ? parseFloat(agent[4]) : NaN;
      if (_webkit) {
        agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
        _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
      } else {
        _chrome = NaN;
      }
    } else {
      _ie = _firefox = _opera = _chrome = _webkit = NaN;
    }
    if (os) {
      if (os[1]) {
        var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);
        _osx = ver ? parseFloat(ver[1].replace("_", ".")) : true;
      } else {
        _osx = false;
      }
      _windows = !!os[2];
      _linux = !!os[3];
    } else {
      _osx = _windows = _linux = false;
    }
  }
  var UserAgent_DEPRECATED = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return _populate() || _ie;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return _populate() || _ie_real_version > _ie;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return UserAgent_DEPRECATED.ie() && _win64;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return _populate() || _firefox;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return _populate() || _opera;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return _populate() || _webkit;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return UserAgent_DEPRECATED.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return _populate() || _chrome;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return _populate() || _windows;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return _populate() || _osx;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return _populate() || _linux;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return _populate() || _iphone;
    },
    mobile: function() {
      return _populate() || (_iphone || _ipad || _android || _mobile);
    },
    nativeApp: function() {
      return _populate() || _native;
    },
    android: function() {
      return _populate() || _android;
    },
    ipad: function() {
      return _populate() || _ipad;
    }
  };
  UserAgent_DEPRECATED_1 = UserAgent_DEPRECATED;
  return UserAgent_DEPRECATED_1;
}
var ExecutionEnvironment_1;
var hasRequiredExecutionEnvironment;
function requireExecutionEnvironment() {
  if (hasRequiredExecutionEnvironment) return ExecutionEnvironment_1;
  hasRequiredExecutionEnvironment = 1;
  var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
  var ExecutionEnvironment = {
    canUseDOM,
    canUseWorkers: typeof Worker !== "undefined",
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen,
    isInWorker: !canUseDOM
    // For now, this is true - might change in the future.
  };
  ExecutionEnvironment_1 = ExecutionEnvironment;
  return ExecutionEnvironment_1;
}
var isEventSupported_1;
var hasRequiredIsEventSupported;
function requireIsEventSupported() {
  if (hasRequiredIsEventSupported) return isEventSupported_1;
  hasRequiredIsEventSupported = 1;
  var ExecutionEnvironment = requireExecutionEnvironment();
  var useHasFeature;
  if (ExecutionEnvironment.canUseDOM) {
    useHasFeature = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature("", "") !== true;
  }
  function isEventSupported(eventNameSuffix, capture) {
    if (!ExecutionEnvironment.canUseDOM || capture && !("addEventListener" in document)) {
      return false;
    }
    var eventName = "on" + eventNameSuffix;
    var isSupported = eventName in document;
    if (!isSupported) {
      var element = document.createElement("div");
      element.setAttribute(eventName, "return;");
      isSupported = typeof element[eventName] === "function";
    }
    if (!isSupported && useHasFeature && eventNameSuffix === "wheel") {
      isSupported = document.implementation.hasFeature("Events.wheel", "3.0");
    }
    return isSupported;
  }
  isEventSupported_1 = isEventSupported;
  return isEventSupported_1;
}
var normalizeWheel_1;
var hasRequiredNormalizeWheel$1;
function requireNormalizeWheel$1() {
  if (hasRequiredNormalizeWheel$1) return normalizeWheel_1;
  hasRequiredNormalizeWheel$1 = 1;
  var UserAgent_DEPRECATED = requireUserAgent_DEPRECATED();
  var isEventSupported = requireIsEventSupported();
  var PIXEL_STEP = 10;
  var LINE_HEIGHT = 40;
  var PAGE_HEIGHT = 800;
  function normalizeWheel2(event) {
    var sX = 0, sY = 0, pX = 0, pY = 0;
    if ("detail" in event) {
      sY = event.detail;
    }
    if ("wheelDelta" in event) {
      sY = -event.wheelDelta / 120;
    }
    if ("wheelDeltaY" in event) {
      sY = -event.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in event) {
      sX = -event.wheelDeltaX / 120;
    }
    if ("axis" in event && event.axis === event.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in event) {
      pY = event.deltaY;
    }
    if ("deltaX" in event) {
      pX = event.deltaX;
    }
    if ((pX || pY) && event.deltaMode) {
      if (event.deltaMode == 1) {
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  normalizeWheel2.getEventType = function() {
    return UserAgent_DEPRECATED.firefox() ? "DOMMouseScroll" : isEventSupported("wheel") ? "wheel" : "mousewheel";
  };
  normalizeWheel_1 = normalizeWheel2;
  return normalizeWheel_1;
}
var normalizeWheel$1;
var hasRequiredNormalizeWheel;
function requireNormalizeWheel() {
  if (hasRequiredNormalizeWheel) return normalizeWheel$1;
  hasRequiredNormalizeWheel = 1;
  normalizeWheel$1 = requireNormalizeWheel$1();
  return normalizeWheel$1;
}
var normalizeWheelExports = requireNormalizeWheel();
const normalizeWheel = /* @__PURE__ */ getDefaultExportFromCjs(normalizeWheelExports);
function getCropSize(mediaWidth, mediaHeight, containerWidth, containerHeight, aspect, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }
  var _a = rotateSize(mediaWidth, mediaHeight, rotation), width = _a.width, height = _a.height;
  var fittingWidth = Math.min(width, containerWidth);
  var fittingHeight = Math.min(height, containerHeight);
  if (fittingWidth > fittingHeight * aspect) {
    return {
      width: fittingHeight * aspect,
      height: fittingHeight
    };
  }
  return {
    width: fittingWidth,
    height: fittingWidth / aspect
  };
}
function getMediaZoom(mediaSize) {
  return mediaSize.width > mediaSize.height ? mediaSize.width / mediaSize.naturalWidth : mediaSize.height / mediaSize.naturalHeight;
}
function restrictPosition(position, mediaSize, cropSize, zoom, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }
  var _a = rotateSize(mediaSize.width, mediaSize.height, rotation), width = _a.width, height = _a.height;
  return {
    x: restrictPositionCoord(position.x, width, cropSize.width, zoom),
    y: restrictPositionCoord(position.y, height, cropSize.height, zoom)
  };
}
function restrictPositionCoord(position, mediaSize, cropSize, zoom) {
  var maxPosition = Math.abs(mediaSize * zoom / 2 - cropSize / 2);
  return clamp(position, -maxPosition, maxPosition);
}
function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
function getRotationBetweenPoints(pointA, pointB) {
  return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
}
function computeCroppedArea(crop, mediaSize, cropSize, aspect, zoom, rotation, restrictPosition2) {
  if (rotation === void 0) {
    rotation = 0;
  }
  if (restrictPosition2 === void 0) {
    restrictPosition2 = true;
  }
  var limitAreaFn = restrictPosition2 ? limitArea : noOp;
  var mediaBBoxSize = rotateSize(mediaSize.width, mediaSize.height, rotation);
  var mediaNaturalBBoxSize = rotateSize(mediaSize.naturalWidth, mediaSize.naturalHeight, rotation);
  var croppedAreaPercentages = {
    x: limitAreaFn(100, ((mediaBBoxSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / mediaBBoxSize.width * 100),
    y: limitAreaFn(100, ((mediaBBoxSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / mediaBBoxSize.height * 100),
    width: limitAreaFn(100, cropSize.width / mediaBBoxSize.width * 100 / zoom),
    height: limitAreaFn(100, cropSize.height / mediaBBoxSize.height * 100 / zoom)
  };
  var widthInPixels = Math.round(limitAreaFn(mediaNaturalBBoxSize.width, croppedAreaPercentages.width * mediaNaturalBBoxSize.width / 100));
  var heightInPixels = Math.round(limitAreaFn(mediaNaturalBBoxSize.height, croppedAreaPercentages.height * mediaNaturalBBoxSize.height / 100));
  var isImgWiderThanHigh = mediaNaturalBBoxSize.width >= mediaNaturalBBoxSize.height * aspect;
  var sizePixels = isImgWiderThanHigh ? {
    width: Math.round(heightInPixels * aspect),
    height: heightInPixels
  } : {
    width: widthInPixels,
    height: Math.round(widthInPixels / aspect)
  };
  var croppedAreaPixels = __assign(__assign({}, sizePixels), {
    x: Math.round(limitAreaFn(mediaNaturalBBoxSize.width - sizePixels.width, croppedAreaPercentages.x * mediaNaturalBBoxSize.width / 100)),
    y: Math.round(limitAreaFn(mediaNaturalBBoxSize.height - sizePixels.height, croppedAreaPercentages.y * mediaNaturalBBoxSize.height / 100))
  });
  return {
    croppedAreaPercentages,
    croppedAreaPixels
  };
}
function limitArea(max, value) {
  return Math.min(max, Math.max(0, value));
}
function noOp(_max, value) {
  return value;
}
function getInitialCropFromCroppedAreaPercentages(croppedAreaPercentages, mediaSize, rotation, cropSize, minZoom, maxZoom) {
  var mediaBBoxSize = rotateSize(mediaSize.width, mediaSize.height, rotation);
  var zoom = clamp(cropSize.width / mediaBBoxSize.width * (100 / croppedAreaPercentages.width), minZoom, maxZoom);
  var crop = {
    x: zoom * mediaBBoxSize.width / 2 - cropSize.width / 2 - mediaBBoxSize.width * zoom * (croppedAreaPercentages.x / 100),
    y: zoom * mediaBBoxSize.height / 2 - cropSize.height / 2 - mediaBBoxSize.height * zoom * (croppedAreaPercentages.y / 100)
  };
  return {
    crop,
    zoom
  };
}
function getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = getMediaZoom(mediaSize);
  return cropSize.height > cropSize.width ? cropSize.height / (croppedAreaPixels.height * mediaZoom) : cropSize.width / (croppedAreaPixels.width * mediaZoom);
}
function getInitialCropFromCroppedAreaPixels(croppedAreaPixels, mediaSize, rotation, cropSize, minZoom, maxZoom) {
  if (rotation === void 0) {
    rotation = 0;
  }
  var mediaNaturalBBoxSize = rotateSize(mediaSize.naturalWidth, mediaSize.naturalHeight, rotation);
  var zoom = clamp(getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize), minZoom, maxZoom);
  var cropZoom = cropSize.height > cropSize.width ? cropSize.height / croppedAreaPixels.height : cropSize.width / croppedAreaPixels.width;
  var crop = {
    x: ((mediaNaturalBBoxSize.width - croppedAreaPixels.width) / 2 - croppedAreaPixels.x) * cropZoom,
    y: ((mediaNaturalBBoxSize.height - croppedAreaPixels.height) / 2 - croppedAreaPixels.y) * cropZoom
  };
  return {
    crop,
    zoom
  };
}
function getCenter(a2, b) {
  return {
    x: (b.x + a2.x) / 2,
    y: (b.y + a2.y) / 2
  };
}
function getRadianAngle(degreeValue) {
  return degreeValue * Math.PI / 180;
}
function rotateSize(width, height, rotation) {
  var rotRad = getRadianAngle(rotation);
  return {
    width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height)
  };
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function classNames() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.filter(function(value) {
    if (typeof value === "string" && value.length > 0) {
      return true;
    }
    return false;
  }).join(" ").trim();
}
var css_248z = ".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n";
var MIN_ZOOM = 1;
var MAX_ZOOM = 3;
var KEYBOARD_STEP = 1;
var Cropper = (
  /** @class */
  (function(_super) {
    __extends(Cropper2, _super);
    function Cropper2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.cropperRef = reactExports.createRef();
      _this.imageRef = reactExports.createRef();
      _this.videoRef = reactExports.createRef();
      _this.containerPosition = {
        x: 0,
        y: 0
      };
      _this.containerRef = null;
      _this.styleRef = null;
      _this.containerRect = null;
      _this.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      };
      _this.dragStartPosition = {
        x: 0,
        y: 0
      };
      _this.dragStartCrop = {
        x: 0,
        y: 0
      };
      _this.gestureZoomStart = 0;
      _this.gestureRotationStart = 0;
      _this.isTouching = false;
      _this.lastPinchDistance = 0;
      _this.lastPinchRotation = 0;
      _this.rafDragTimeout = null;
      _this.rafPinchTimeout = null;
      _this.wheelTimer = null;
      _this.currentDoc = typeof document !== "undefined" ? document : null;
      _this.currentWindow = typeof window !== "undefined" ? window : null;
      _this.resizeObserver = null;
      _this.previousCropSize = null;
      _this.isInitialized = false;
      _this.state = {
        cropSize: null,
        hasWheelJustStarted: false,
        mediaObjectFit: void 0
      };
      _this.initResizeObserver = function() {
        if (typeof window.ResizeObserver === "undefined" || !_this.containerRef) {
          return;
        }
        var isFirstResize = true;
        _this.resizeObserver = new window.ResizeObserver(function(entries) {
          if (isFirstResize) {
            isFirstResize = false;
            return;
          }
          _this.computeSizes();
        });
        _this.resizeObserver.observe(_this.containerRef);
      };
      _this.preventZoomSafari = function(e2) {
        return e2.preventDefault();
      };
      _this.cleanEvents = function() {
        if (!_this.currentDoc) return;
        _this.currentDoc.removeEventListener("mousemove", _this.onMouseMove);
        _this.currentDoc.removeEventListener("mouseup", _this.onDragStopped);
        _this.currentDoc.removeEventListener("touchmove", _this.onTouchMove);
        _this.currentDoc.removeEventListener("touchend", _this.onDragStopped);
        _this.currentDoc.removeEventListener("gesturechange", _this.onGestureChange);
        _this.currentDoc.removeEventListener("gestureend", _this.onGestureEnd);
        _this.currentDoc.removeEventListener("scroll", _this.onScroll);
      };
      _this.clearScrollEvent = function() {
        if (_this.containerRef) _this.containerRef.removeEventListener("wheel", _this.onWheel);
        if (_this.wheelTimer) {
          clearTimeout(_this.wheelTimer);
        }
      };
      _this.onMediaLoad = function() {
        var cropSize = _this.computeSizes();
        if (cropSize) {
          _this.previousCropSize = cropSize;
          _this.emitCropData();
          _this.setInitialCrop(cropSize);
          _this.isInitialized = true;
        }
        if (_this.props.onMediaLoaded) {
          _this.props.onMediaLoaded(_this.mediaSize);
        }
      };
      _this.setInitialCrop = function(cropSize) {
        if (_this.props.initialCroppedAreaPercentages) {
          var _a = getInitialCropFromCroppedAreaPercentages(_this.props.initialCroppedAreaPercentages, _this.mediaSize, _this.props.rotation, cropSize, _this.props.minZoom, _this.props.maxZoom), crop = _a.crop, zoom = _a.zoom;
          _this.props.onCropChange(crop);
          _this.props.onZoomChange && _this.props.onZoomChange(zoom);
        } else if (_this.props.initialCroppedAreaPixels) {
          var _b = getInitialCropFromCroppedAreaPixels(_this.props.initialCroppedAreaPixels, _this.mediaSize, _this.props.rotation, cropSize, _this.props.minZoom, _this.props.maxZoom), crop = _b.crop, zoom = _b.zoom;
          _this.props.onCropChange(crop);
          _this.props.onZoomChange && _this.props.onZoomChange(zoom);
        }
      };
      _this.computeSizes = function() {
        var _a, _b, _c, _d, _e, _f;
        var mediaRef = _this.imageRef.current || _this.videoRef.current;
        if (mediaRef && _this.containerRef) {
          _this.containerRect = _this.containerRef.getBoundingClientRect();
          _this.saveContainerPosition();
          var containerAspect = _this.containerRect.width / _this.containerRect.height;
          var naturalWidth = ((_a = _this.imageRef.current) === null || _a === void 0 ? void 0 : _a.naturalWidth) || ((_b = _this.videoRef.current) === null || _b === void 0 ? void 0 : _b.videoWidth) || 0;
          var naturalHeight = ((_c = _this.imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalHeight) || ((_d = _this.videoRef.current) === null || _d === void 0 ? void 0 : _d.videoHeight) || 0;
          var isMediaScaledDown = mediaRef.offsetWidth < naturalWidth || mediaRef.offsetHeight < naturalHeight;
          var mediaAspect = naturalWidth / naturalHeight;
          var renderedMediaSize = void 0;
          if (isMediaScaledDown) {
            switch (_this.state.mediaObjectFit) {
              default:
              case "contain":
                renderedMediaSize = containerAspect > mediaAspect ? {
                  width: _this.containerRect.height * mediaAspect,
                  height: _this.containerRect.height
                } : {
                  width: _this.containerRect.width,
                  height: _this.containerRect.width / mediaAspect
                };
                break;
              case "horizontal-cover":
                renderedMediaSize = {
                  width: _this.containerRect.width,
                  height: _this.containerRect.width / mediaAspect
                };
                break;
              case "vertical-cover":
                renderedMediaSize = {
                  width: _this.containerRect.height * mediaAspect,
                  height: _this.containerRect.height
                };
                break;
            }
          } else {
            renderedMediaSize = {
              width: mediaRef.offsetWidth,
              height: mediaRef.offsetHeight
            };
          }
          _this.mediaSize = __assign(__assign({}, renderedMediaSize), {
            naturalWidth,
            naturalHeight
          });
          if (_this.props.setMediaSize) {
            _this.props.setMediaSize(_this.mediaSize);
          }
          var cropSize = _this.props.cropSize ? _this.props.cropSize : getCropSize(_this.mediaSize.width, _this.mediaSize.height, _this.containerRect.width, _this.containerRect.height, _this.props.aspect, _this.props.rotation);
          if (((_e = _this.state.cropSize) === null || _e === void 0 ? void 0 : _e.height) !== cropSize.height || ((_f = _this.state.cropSize) === null || _f === void 0 ? void 0 : _f.width) !== cropSize.width) {
            _this.props.onCropSizeChange && _this.props.onCropSizeChange(cropSize);
          }
          _this.setState({
            cropSize
          }, _this.recomputeCropPosition);
          if (_this.props.setCropSize) {
            _this.props.setCropSize(cropSize);
          }
          return cropSize;
        }
      };
      _this.saveContainerPosition = function() {
        if (_this.containerRef) {
          var bounds = _this.containerRef.getBoundingClientRect();
          _this.containerPosition = {
            x: bounds.left,
            y: bounds.top
          };
        }
      };
      _this.onMouseDown = function(e2) {
        if (!_this.currentDoc) return;
        e2.preventDefault();
        _this.currentDoc.addEventListener("mousemove", _this.onMouseMove);
        _this.currentDoc.addEventListener("mouseup", _this.onDragStopped);
        _this.saveContainerPosition();
        _this.onDragStart(Cropper2.getMousePoint(e2));
      };
      _this.onMouseMove = function(e2) {
        return _this.onDrag(Cropper2.getMousePoint(e2));
      };
      _this.onScroll = function(e2) {
        if (!_this.currentDoc) return;
        e2.preventDefault();
        _this.saveContainerPosition();
      };
      _this.onTouchStart = function(e2) {
        if (!_this.currentDoc) return;
        _this.isTouching = true;
        if (_this.props.onTouchRequest && !_this.props.onTouchRequest(e2)) {
          return;
        }
        _this.currentDoc.addEventListener("touchmove", _this.onTouchMove, {
          passive: false
        });
        _this.currentDoc.addEventListener("touchend", _this.onDragStopped);
        _this.saveContainerPosition();
        if (e2.touches.length === 2) {
          _this.onPinchStart(e2);
        } else if (e2.touches.length === 1) {
          _this.onDragStart(Cropper2.getTouchPoint(e2.touches[0]));
        }
      };
      _this.onTouchMove = function(e2) {
        e2.preventDefault();
        if (e2.touches.length === 2) {
          _this.onPinchMove(e2);
        } else if (e2.touches.length === 1) {
          _this.onDrag(Cropper2.getTouchPoint(e2.touches[0]));
        }
      };
      _this.onGestureStart = function(e2) {
        if (!_this.currentDoc) return;
        e2.preventDefault();
        _this.currentDoc.addEventListener("gesturechange", _this.onGestureChange);
        _this.currentDoc.addEventListener("gestureend", _this.onGestureEnd);
        _this.gestureZoomStart = _this.props.zoom;
        _this.gestureRotationStart = _this.props.rotation;
      };
      _this.onGestureChange = function(e2) {
        e2.preventDefault();
        if (_this.isTouching) {
          return;
        }
        var point = Cropper2.getMousePoint(e2);
        var newZoom = _this.gestureZoomStart - 1 + e2.scale;
        _this.setNewZoom(newZoom, point, {
          shouldUpdatePosition: true
        });
        if (_this.props.onRotationChange) {
          var newRotation = _this.gestureRotationStart + e2.rotation;
          _this.props.onRotationChange(newRotation);
        }
      };
      _this.onGestureEnd = function(e2) {
        _this.cleanEvents();
      };
      _this.onDragStart = function(_a) {
        var _b, _c;
        var x = _a.x, y = _a.y;
        _this.dragStartPosition = {
          x,
          y
        };
        _this.dragStartCrop = __assign({}, _this.props.crop);
        (_c = (_b = _this.props).onInteractionStart) === null || _c === void 0 ? void 0 : _c.call(_b);
      };
      _this.onDrag = function(_a) {
        var x = _a.x, y = _a.y;
        if (!_this.currentWindow) return;
        if (_this.rafDragTimeout) _this.currentWindow.cancelAnimationFrame(_this.rafDragTimeout);
        _this.rafDragTimeout = _this.currentWindow.requestAnimationFrame(function() {
          if (!_this.state.cropSize) return;
          if (x === void 0 || y === void 0) return;
          var offsetX = x - _this.dragStartPosition.x;
          var offsetY = y - _this.dragStartPosition.y;
          var requestedPosition = {
            x: _this.dragStartCrop.x + offsetX,
            y: _this.dragStartCrop.y + offsetY
          };
          var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : requestedPosition;
          _this.props.onCropChange(newPosition);
        });
      };
      _this.onDragStopped = function() {
        var _a, _b;
        _this.isTouching = false;
        _this.cleanEvents();
        _this.emitCropData();
        (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      _this.onWheel = function(e2) {
        if (!_this.currentWindow) return;
        if (_this.props.onWheelRequest && !_this.props.onWheelRequest(e2)) {
          return;
        }
        e2.preventDefault();
        var point = Cropper2.getMousePoint(e2);
        var pixelY = normalizeWheel(e2).pixelY;
        var newZoom = _this.props.zoom - pixelY * _this.props.zoomSpeed / 200;
        _this.setNewZoom(newZoom, point, {
          shouldUpdatePosition: true
        });
        if (!_this.state.hasWheelJustStarted) {
          _this.setState({
            hasWheelJustStarted: true
          }, function() {
            var _a, _b;
            return (_b = (_a = _this.props).onInteractionStart) === null || _b === void 0 ? void 0 : _b.call(_a);
          });
        }
        if (_this.wheelTimer) {
          clearTimeout(_this.wheelTimer);
        }
        _this.wheelTimer = _this.currentWindow.setTimeout(function() {
          return _this.setState({
            hasWheelJustStarted: false
          }, function() {
            var _a, _b;
            return (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
          });
        }, 250);
      };
      _this.getPointOnContainer = function(_a, containerTopLeft) {
        var x = _a.x, y = _a.y;
        if (!_this.containerRect) {
          throw new Error("The Cropper is not mounted");
        }
        return {
          x: _this.containerRect.width / 2 - (x - containerTopLeft.x),
          y: _this.containerRect.height / 2 - (y - containerTopLeft.y)
        };
      };
      _this.getPointOnMedia = function(_a) {
        var x = _a.x, y = _a.y;
        var _b = _this.props, crop = _b.crop, zoom = _b.zoom;
        return {
          x: (x + crop.x) / zoom,
          y: (y + crop.y) / zoom
        };
      };
      _this.setNewZoom = function(zoom, point, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.shouldUpdatePosition, shouldUpdatePosition = _c === void 0 ? true : _c;
        if (!_this.state.cropSize || !_this.props.onZoomChange) return;
        var newZoom = clamp(zoom, _this.props.minZoom, _this.props.maxZoom);
        if (shouldUpdatePosition) {
          var zoomPoint = _this.getPointOnContainer(point, _this.containerPosition);
          var zoomTarget = _this.getPointOnMedia(zoomPoint);
          var requestedPosition = {
            x: zoomTarget.x * newZoom - zoomPoint.x,
            y: zoomTarget.y * newZoom - zoomPoint.y
          };
          var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, newZoom, _this.props.rotation) : requestedPosition;
          _this.props.onCropChange(newPosition);
        }
        _this.props.onZoomChange(newZoom);
      };
      _this.getCropData = function() {
        if (!_this.state.cropSize) {
          return null;
        }
        var restrictedPosition = _this.props.restrictPosition ? restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;
        return computeCroppedArea(restrictedPosition, _this.mediaSize, _this.state.cropSize, _this.getAspect(), _this.props.zoom, _this.props.rotation, _this.props.restrictPosition);
      };
      _this.emitCropData = function() {
        var cropData = _this.getCropData();
        if (!cropData) return;
        var croppedAreaPercentages = cropData.croppedAreaPercentages, croppedAreaPixels = cropData.croppedAreaPixels;
        if (_this.props.onCropComplete) {
          _this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels);
        }
        if (_this.props.onCropAreaChange) {
          _this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels);
        }
      };
      _this.emitCropAreaChange = function() {
        var cropData = _this.getCropData();
        if (!cropData) return;
        var croppedAreaPercentages = cropData.croppedAreaPercentages, croppedAreaPixels = cropData.croppedAreaPixels;
        if (_this.props.onCropAreaChange) {
          _this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels);
        }
      };
      _this.recomputeCropPosition = function() {
        var _a, _b;
        if (!_this.state.cropSize) return;
        var adjustedCrop = _this.props.crop;
        if (_this.isInitialized && ((_a = _this.previousCropSize) === null || _a === void 0 ? void 0 : _a.width) && ((_b = _this.previousCropSize) === null || _b === void 0 ? void 0 : _b.height)) {
          var sizeChanged = Math.abs(_this.previousCropSize.width - _this.state.cropSize.width) > 1e-6 || Math.abs(_this.previousCropSize.height - _this.state.cropSize.height) > 1e-6;
          if (sizeChanged) {
            var scaleX = _this.state.cropSize.width / _this.previousCropSize.width;
            var scaleY = _this.state.cropSize.height / _this.previousCropSize.height;
            adjustedCrop = {
              x: _this.props.crop.x * scaleX,
              y: _this.props.crop.y * scaleY
            };
          }
        }
        var newPosition = _this.props.restrictPosition ? restrictPosition(adjustedCrop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : adjustedCrop;
        _this.previousCropSize = _this.state.cropSize;
        _this.props.onCropChange(newPosition);
        _this.emitCropData();
      };
      _this.onKeyDown = function(event) {
        var _a, _b;
        var _c = _this.props, crop = _c.crop, onCropChange = _c.onCropChange, keyboardStep = _c.keyboardStep, zoom = _c.zoom, rotation = _c.rotation;
        var step = keyboardStep;
        if (!_this.state.cropSize) return;
        if (event.shiftKey) {
          step *= 0.2;
        }
        var newCrop = __assign({}, crop);
        switch (event.key) {
          case "ArrowUp":
            newCrop.y -= step;
            event.preventDefault();
            break;
          case "ArrowDown":
            newCrop.y += step;
            event.preventDefault();
            break;
          case "ArrowLeft":
            newCrop.x -= step;
            event.preventDefault();
            break;
          case "ArrowRight":
            newCrop.x += step;
            event.preventDefault();
            break;
          default:
            return;
        }
        if (_this.props.restrictPosition) {
          newCrop = restrictPosition(newCrop, _this.mediaSize, _this.state.cropSize, zoom, rotation);
        }
        if (!event.repeat) {
          (_b = (_a = _this.props).onInteractionStart) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        onCropChange(newCrop);
      };
      _this.onKeyUp = function(event) {
        var _a, _b;
        switch (event.key) {
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
            event.preventDefault();
            break;
          default:
            return;
        }
        _this.emitCropData();
        (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      return _this;
    }
    Cropper2.prototype.componentDidMount = function() {
      if (!this.currentDoc || !this.currentWindow) return;
      if (this.containerRef) {
        if (this.containerRef.ownerDocument) {
          this.currentDoc = this.containerRef.ownerDocument;
        }
        if (this.currentDoc.defaultView) {
          this.currentWindow = this.currentDoc.defaultView;
        }
        this.initResizeObserver();
        if (typeof window.ResizeObserver === "undefined") {
          this.currentWindow.addEventListener("resize", this.computeSizes);
        }
        this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
          passive: false
        });
        this.containerRef.addEventListener("gesturestart", this.onGestureStart);
      }
      this.currentDoc.addEventListener("scroll", this.onScroll);
      if (!this.props.disableAutomaticStylesInjection) {
        this.styleRef = this.currentDoc.createElement("style");
        this.styleRef.setAttribute("type", "text/css");
        if (this.props.nonce) {
          this.styleRef.setAttribute("nonce", this.props.nonce);
        }
        this.styleRef.innerHTML = css_248z;
        this.currentDoc.head.appendChild(this.styleRef);
      }
      if (this.imageRef.current && this.imageRef.current.complete) {
        this.onMediaLoad();
      }
      if (this.props.setImageRef) {
        this.props.setImageRef(this.imageRef);
      }
      if (this.props.setVideoRef) {
        this.props.setVideoRef(this.videoRef);
      }
      if (this.props.setCropperRef) {
        this.props.setCropperRef(this.cropperRef);
      }
    };
    Cropper2.prototype.componentWillUnmount = function() {
      var _a, _b;
      if (!this.currentDoc || !this.currentWindow) return;
      if (typeof window.ResizeObserver === "undefined") {
        this.currentWindow.removeEventListener("resize", this.computeSizes);
      }
      (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      if (this.containerRef) {
        this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari);
      }
      if (this.styleRef) {
        (_b = this.styleRef.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.styleRef);
      }
      this.cleanEvents();
      this.props.zoomWithScroll && this.clearScrollEvent();
    };
    Cropper2.prototype.componentDidUpdate = function(prevProps) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j;
      if (prevProps.rotation !== this.props.rotation) {
        this.computeSizes();
        this.recomputeCropPosition();
      } else if (prevProps.aspect !== this.props.aspect) {
        this.computeSizes();
      } else if (prevProps.objectFit !== this.props.objectFit) {
        this.computeSizes();
      } else if (prevProps.zoom !== this.props.zoom) {
        this.recomputeCropPosition();
      } else if (((_a = prevProps.cropSize) === null || _a === void 0 ? void 0 : _a.height) !== ((_b = this.props.cropSize) === null || _b === void 0 ? void 0 : _b.height) || ((_c = prevProps.cropSize) === null || _c === void 0 ? void 0 : _c.width) !== ((_d = this.props.cropSize) === null || _d === void 0 ? void 0 : _d.width)) {
        this.computeSizes();
      } else if (((_e = prevProps.crop) === null || _e === void 0 ? void 0 : _e.x) !== ((_f = this.props.crop) === null || _f === void 0 ? void 0 : _f.x) || ((_g = prevProps.crop) === null || _g === void 0 ? void 0 : _g.y) !== ((_h = this.props.crop) === null || _h === void 0 ? void 0 : _h.y)) {
        this.emitCropAreaChange();
      }
      if (prevProps.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef) {
        this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
          passive: false
        }) : this.clearScrollEvent();
      }
      if (prevProps.video !== this.props.video) {
        (_j = this.videoRef.current) === null || _j === void 0 ? void 0 : _j.load();
      }
      var objectFit = this.getObjectFit();
      if (objectFit !== this.state.mediaObjectFit) {
        this.setState({
          mediaObjectFit: objectFit
        }, this.computeSizes);
      }
    };
    Cropper2.prototype.getAspect = function() {
      var _a = this.props, cropSize = _a.cropSize, aspect = _a.aspect;
      if (cropSize) {
        return cropSize.width / cropSize.height;
      }
      return aspect;
    };
    Cropper2.prototype.getObjectFit = function() {
      var _a, _b, _c, _d;
      if (this.props.objectFit === "cover") {
        var mediaRef = this.imageRef.current || this.videoRef.current;
        if (mediaRef && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var containerAspect = this.containerRect.width / this.containerRect.height;
          var naturalWidth = ((_a = this.imageRef.current) === null || _a === void 0 ? void 0 : _a.naturalWidth) || ((_b = this.videoRef.current) === null || _b === void 0 ? void 0 : _b.videoWidth) || 0;
          var naturalHeight = ((_c = this.imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalHeight) || ((_d = this.videoRef.current) === null || _d === void 0 ? void 0 : _d.videoHeight) || 0;
          var mediaAspect = naturalWidth / naturalHeight;
          return mediaAspect < containerAspect ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    };
    Cropper2.prototype.onPinchStart = function(e2) {
      var pointA = Cropper2.getTouchPoint(e2.touches[0]);
      var pointB = Cropper2.getTouchPoint(e2.touches[1]);
      this.lastPinchDistance = getDistanceBetweenPoints(pointA, pointB);
      this.lastPinchRotation = getRotationBetweenPoints(pointA, pointB);
      this.onDragStart(getCenter(pointA, pointB));
    };
    Cropper2.prototype.onPinchMove = function(e2) {
      var _this = this;
      if (!this.currentDoc || !this.currentWindow) return;
      var pointA = Cropper2.getTouchPoint(e2.touches[0]);
      var pointB = Cropper2.getTouchPoint(e2.touches[1]);
      var center = getCenter(pointA, pointB);
      this.onDrag(center);
      if (this.rafPinchTimeout) this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout);
      this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
        var distance = getDistanceBetweenPoints(pointA, pointB);
        var newZoom = _this.props.zoom * (distance / _this.lastPinchDistance);
        _this.setNewZoom(newZoom, center, {
          shouldUpdatePosition: false
        });
        _this.lastPinchDistance = distance;
        var rotation = getRotationBetweenPoints(pointA, pointB);
        var newRotation = _this.props.rotation + (rotation - _this.lastPinchRotation);
        _this.props.onRotationChange && _this.props.onRotationChange(newRotation);
        _this.lastPinchRotation = rotation;
      });
    };
    Cropper2.prototype.render = function() {
      var _this = this;
      var _a;
      var _b = this.props, image = _b.image, video = _b.video, mediaProps = _b.mediaProps, cropperProps = _b.cropperProps, transform = _b.transform, _c = _b.crop, x = _c.x, y = _c.y, rotation = _b.rotation, zoom = _b.zoom, cropShape = _b.cropShape, showGrid = _b.showGrid, roundCropAreaPixels = _b.roundCropAreaPixels, _d = _b.style, containerStyle = _d.containerStyle, cropAreaStyle = _d.cropAreaStyle, mediaStyle = _d.mediaStyle, _e = _b.classes, containerClassName = _e.containerClassName, cropAreaClassName = _e.cropAreaClassName, mediaClassName = _e.mediaClassName;
      var objectFit = (_a = this.state.mediaObjectFit) !== null && _a !== void 0 ? _a : this.getObjectFit();
      return reactExports.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function ref(el) {
          return _this.containerRef = el;
        },
        "data-testid": "container",
        style: containerStyle,
        className: classNames("reactEasyCrop_Container", containerClassName)
      }, image ? reactExports.createElement("img", __assign({
        alt: "",
        className: classNames("reactEasyCrop_Image", objectFit === "contain" && "reactEasyCrop_Contain", objectFit === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", objectFit === "vertical-cover" && "reactEasyCrop_Cover_Vertical", mediaClassName)
      }, mediaProps, {
        src: image,
        ref: this.imageRef,
        style: __assign(__assign({}, mediaStyle), {
          transform: transform || "translate(".concat(x, "px, ").concat(y, "px) rotate(").concat(rotation, "deg) scale(").concat(zoom, ")")
        }),
        onLoad: this.onMediaLoad
      })) : video && reactExports.createElement("video", __assign({
        autoPlay: true,
        playsInline: true,
        loop: true,
        muted: true,
        className: classNames("reactEasyCrop_Video", objectFit === "contain" && "reactEasyCrop_Contain", objectFit === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", objectFit === "vertical-cover" && "reactEasyCrop_Cover_Vertical", mediaClassName)
      }, mediaProps, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: __assign(__assign({}, mediaStyle), {
          transform: transform || "translate(".concat(x, "px, ").concat(y, "px) rotate(").concat(rotation, "deg) scale(").concat(zoom, ")")
        }),
        controls: false
      }), (Array.isArray(video) ? video : [{
        src: video
      }]).map(function(item) {
        return reactExports.createElement("source", __assign({
          key: item.src
        }, item));
      })), this.state.cropSize && reactExports.createElement("div", __assign({
        ref: this.cropperRef,
        style: __assign(__assign({}, cropAreaStyle), {
          width: roundCropAreaPixels ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: roundCropAreaPixels ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: classNames("reactEasyCrop_CropArea", cropShape === "round" && "reactEasyCrop_CropAreaRound", showGrid && "reactEasyCrop_CropAreaGrid", cropAreaClassName)
      }, cropperProps)));
    };
    Cropper2.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: MAX_ZOOM,
      minZoom: MIN_ZOOM,
      cropShape: "rect",
      objectFit: "contain",
      showGrid: true,
      style: {},
      classes: {},
      mediaProps: {},
      cropperProps: {},
      zoomSpeed: 1,
      restrictPosition: true,
      zoomWithScroll: true,
      keyboardStep: KEYBOARD_STEP
    };
    Cropper2.getMousePoint = function(e2) {
      return {
        x: Number(e2.clientX),
        y: Number(e2.clientY)
      };
    };
    Cropper2.getTouchPoint = function(touch) {
      return {
        x: Number(touch.clientX),
        y: Number(touch.clientY)
      };
    };
    return Cropper2;
  })(reactExports.Component)
);
function _mergeNamespaces$1(e2, t2) {
  return t2.forEach((function(t3) {
    t3 && "string" != typeof t3 && !Array.isArray(t3) && Object.keys(t3).forEach((function(r2) {
      if ("default" !== r2 && !(r2 in e2)) {
        var i2 = Object.getOwnPropertyDescriptor(t3, r2);
        Object.defineProperty(e2, r2, i2.get ? i2 : { enumerable: true, get: function() {
          return t3[r2];
        } });
      }
    }));
  })), Object.freeze(e2);
}
function copyExifWithoutOrientation(e2, t2) {
  return new Promise((function(r2, i2) {
    let o2;
    return getApp1Segment(e2).then((function(e3) {
      try {
        return o2 = e3, r2(new Blob([t2.slice(0, 2), o2, t2.slice(2)], { type: "image/jpeg" }));
      } catch (e4) {
        return i2(e4);
      }
    }), i2);
  }));
}
const getApp1Segment = (e2) => new Promise(((t2, r2) => {
  const i2 = new FileReader();
  i2.addEventListener("load", (({ target: { result: e3 } }) => {
    const i3 = new DataView(e3);
    let o2 = 0;
    if (65496 !== i3.getUint16(o2)) return r2("not a valid JPEG");
    for (o2 += 2; ; ) {
      const a2 = i3.getUint16(o2);
      if (65498 === a2) break;
      const s2 = i3.getUint16(o2 + 2);
      if (65505 === a2 && 1165519206 === i3.getUint32(o2 + 4)) {
        const a3 = o2 + 10;
        let f2;
        switch (i3.getUint16(a3)) {
          case 18761:
            f2 = true;
            break;
          case 19789:
            f2 = false;
            break;
          default:
            return r2("TIFF header contains invalid endian");
        }
        if (42 !== i3.getUint16(a3 + 2, f2)) return r2("TIFF header contains invalid version");
        const l2 = i3.getUint32(a3 + 4, f2), c2 = a3 + l2 + 2 + 12 * i3.getUint16(a3 + l2, f2);
        for (let e4 = a3 + l2 + 2; e4 < c2; e4 += 12) {
          if (274 == i3.getUint16(e4, f2)) {
            if (3 !== i3.getUint16(e4 + 2, f2)) return r2("Orientation data type is invalid");
            if (1 !== i3.getUint32(e4 + 4, f2)) return r2("Orientation data count is invalid");
            i3.setUint16(e4 + 8, 1, f2);
            break;
          }
        }
        return t2(e3.slice(o2, o2 + 2 + s2));
      }
      o2 += 2 + s2;
    }
    return t2(new Blob());
  })), i2.readAsArrayBuffer(e2);
}));
var e = {}, t = { get exports() {
  return e;
}, set exports(t2) {
  e = t2;
} };
!(function(e2) {
  var r2, i2, UZIP2 = {};
  t.exports = UZIP2, UZIP2.parse = function(e3, t2) {
    for (var r3 = UZIP2.bin.readUshort, i3 = UZIP2.bin.readUint, o2 = 0, a2 = {}, s2 = new Uint8Array(e3), f2 = s2.length - 4; 101010256 != i3(s2, f2); ) f2--;
    o2 = f2;
    o2 += 4;
    var l2 = r3(s2, o2 += 4);
    r3(s2, o2 += 2);
    var c2 = i3(s2, o2 += 2), u = i3(s2, o2 += 4);
    o2 += 4, o2 = u;
    for (var h = 0; h < l2; h++) {
      i3(s2, o2), o2 += 4, o2 += 4, o2 += 4, i3(s2, o2 += 4);
      c2 = i3(s2, o2 += 4);
      var d = i3(s2, o2 += 4), A = r3(s2, o2 += 4), g = r3(s2, o2 + 2), p = r3(s2, o2 + 4);
      o2 += 6;
      var m = i3(s2, o2 += 8);
      o2 += 4, o2 += A + g + p, UZIP2._readLocal(s2, m, a2, c2, d, t2);
    }
    return a2;
  }, UZIP2._readLocal = function(e3, t2, r3, i3, o2, a2) {
    var s2 = UZIP2.bin.readUshort, f2 = UZIP2.bin.readUint;
    f2(e3, t2), s2(e3, t2 += 4), s2(e3, t2 += 2);
    var l2 = s2(e3, t2 += 2);
    f2(e3, t2 += 2), f2(e3, t2 += 4), t2 += 4;
    var c2 = s2(e3, t2 += 8), u = s2(e3, t2 += 2);
    t2 += 2;
    var h = UZIP2.bin.readUTF8(e3, t2, c2);
    if (t2 += c2, t2 += u, a2) r3[h] = { size: o2, csize: i3 };
    else {
      var d = new Uint8Array(e3.buffer, t2);
      if (0 == l2) r3[h] = new Uint8Array(d.buffer.slice(t2, t2 + i3));
      else {
        if (8 != l2) throw "unknown compression method: " + l2;
        var A = new Uint8Array(o2);
        UZIP2.inflateRaw(d, A), r3[h] = A;
      }
    }
  }, UZIP2.inflateRaw = function(e3, t2) {
    return UZIP2.F.inflate(e3, t2);
  }, UZIP2.inflate = function(e3, t2) {
    return e3[0], e3[1], UZIP2.inflateRaw(new Uint8Array(e3.buffer, e3.byteOffset + 2, e3.length - 6), t2);
  }, UZIP2.deflate = function(e3, t2) {
    null == t2 && (t2 = { level: 6 });
    var r3 = 0, i3 = new Uint8Array(50 + Math.floor(1.1 * e3.length));
    i3[r3] = 120, i3[r3 + 1] = 156, r3 += 2, r3 = UZIP2.F.deflateRaw(e3, i3, r3, t2.level);
    var o2 = UZIP2.adler(e3, 0, e3.length);
    return i3[r3 + 0] = o2 >>> 24 & 255, i3[r3 + 1] = o2 >>> 16 & 255, i3[r3 + 2] = o2 >>> 8 & 255, i3[r3 + 3] = o2 >>> 0 & 255, new Uint8Array(i3.buffer, 0, r3 + 4);
  }, UZIP2.deflateRaw = function(e3, t2) {
    null == t2 && (t2 = { level: 6 });
    var r3 = new Uint8Array(50 + Math.floor(1.1 * e3.length)), i3 = UZIP2.F.deflateRaw(e3, r3, i3, t2.level);
    return new Uint8Array(r3.buffer, 0, i3);
  }, UZIP2.encode = function(e3, t2) {
    null == t2 && (t2 = false);
    var r3 = 0, i3 = UZIP2.bin.writeUint, o2 = UZIP2.bin.writeUshort, a2 = {};
    for (var s2 in e3) {
      var f2 = !UZIP2._noNeed(s2) && !t2, l2 = e3[s2], c2 = UZIP2.crc.crc(l2, 0, l2.length);
      a2[s2] = { cpr: f2, usize: l2.length, crc: c2, file: f2 ? UZIP2.deflateRaw(l2) : l2 };
    }
    for (var s2 in a2) r3 += a2[s2].file.length + 30 + 46 + 2 * UZIP2.bin.sizeUTF8(s2);
    r3 += 22;
    var u = new Uint8Array(r3), h = 0, d = [];
    for (var s2 in a2) {
      var A = a2[s2];
      d.push(h), h = UZIP2._writeHeader(u, h, s2, A, 0);
    }
    var g = 0, p = h;
    for (var s2 in a2) {
      A = a2[s2];
      d.push(h), h = UZIP2._writeHeader(u, h, s2, A, 1, d[g++]);
    }
    var m = h - p;
    return i3(u, h, 101010256), h += 4, o2(u, h += 4, g), o2(u, h += 2, g), i3(u, h += 2, m), i3(u, h += 4, p), h += 4, h += 2, u.buffer;
  }, UZIP2._noNeed = function(e3) {
    var t2 = e3.split(".").pop().toLowerCase();
    return -1 != "png,jpg,jpeg,zip".indexOf(t2);
  }, UZIP2._writeHeader = function(e3, t2, r3, i3, o2, a2) {
    var s2 = UZIP2.bin.writeUint, f2 = UZIP2.bin.writeUshort, l2 = i3.file;
    return s2(e3, t2, 0 == o2 ? 67324752 : 33639248), t2 += 4, 1 == o2 && (t2 += 2), f2(e3, t2, 20), f2(e3, t2 += 2, 0), f2(e3, t2 += 2, i3.cpr ? 8 : 0), s2(e3, t2 += 2, 0), s2(e3, t2 += 4, i3.crc), s2(e3, t2 += 4, l2.length), s2(e3, t2 += 4, i3.usize), f2(e3, t2 += 4, UZIP2.bin.sizeUTF8(r3)), f2(e3, t2 += 2, 0), t2 += 2, 1 == o2 && (t2 += 2, t2 += 2, s2(e3, t2 += 6, a2), t2 += 4), t2 += UZIP2.bin.writeUTF8(e3, t2, r3), 0 == o2 && (e3.set(l2, t2), t2 += l2.length), t2;
  }, UZIP2.crc = { table: (function() {
    for (var e3 = new Uint32Array(256), t2 = 0; t2 < 256; t2++) {
      for (var r3 = t2, i3 = 0; i3 < 8; i3++) 1 & r3 ? r3 = 3988292384 ^ r3 >>> 1 : r3 >>>= 1;
      e3[t2] = r3;
    }
    return e3;
  })(), update: function(e3, t2, r3, i3) {
    for (var o2 = 0; o2 < i3; o2++) e3 = UZIP2.crc.table[255 & (e3 ^ t2[r3 + o2])] ^ e3 >>> 8;
    return e3;
  }, crc: function(e3, t2, r3) {
    return 4294967295 ^ UZIP2.crc.update(4294967295, e3, t2, r3);
  } }, UZIP2.adler = function(e3, t2, r3) {
    for (var i3 = 1, o2 = 0, a2 = t2, s2 = t2 + r3; a2 < s2; ) {
      for (var f2 = Math.min(a2 + 5552, s2); a2 < f2; ) o2 += i3 += e3[a2++];
      i3 %= 65521, o2 %= 65521;
    }
    return o2 << 16 | i3;
  }, UZIP2.bin = { readUshort: function(e3, t2) {
    return e3[t2] | e3[t2 + 1] << 8;
  }, writeUshort: function(e3, t2, r3) {
    e3[t2] = 255 & r3, e3[t2 + 1] = r3 >> 8 & 255;
  }, readUint: function(e3, t2) {
    return 16777216 * e3[t2 + 3] + (e3[t2 + 2] << 16 | e3[t2 + 1] << 8 | e3[t2]);
  }, writeUint: function(e3, t2, r3) {
    e3[t2] = 255 & r3, e3[t2 + 1] = r3 >> 8 & 255, e3[t2 + 2] = r3 >> 16 & 255, e3[t2 + 3] = r3 >> 24 & 255;
  }, readASCII: function(e3, t2, r3) {
    for (var i3 = "", o2 = 0; o2 < r3; o2++) i3 += String.fromCharCode(e3[t2 + o2]);
    return i3;
  }, writeASCII: function(e3, t2, r3) {
    for (var i3 = 0; i3 < r3.length; i3++) e3[t2 + i3] = r3.charCodeAt(i3);
  }, pad: function(e3) {
    return e3.length < 2 ? "0" + e3 : e3;
  }, readUTF8: function(e3, t2, r3) {
    for (var i3, o2 = "", a2 = 0; a2 < r3; a2++) o2 += "%" + UZIP2.bin.pad(e3[t2 + a2].toString(16));
    try {
      i3 = decodeURIComponent(o2);
    } catch (i4) {
      return UZIP2.bin.readASCII(e3, t2, r3);
    }
    return i3;
  }, writeUTF8: function(e3, t2, r3) {
    for (var i3 = r3.length, o2 = 0, a2 = 0; a2 < i3; a2++) {
      var s2 = r3.charCodeAt(a2);
      if (0 == (4294967168 & s2)) e3[t2 + o2] = s2, o2++;
      else if (0 == (4294965248 & s2)) e3[t2 + o2] = 192 | s2 >> 6, e3[t2 + o2 + 1] = 128 | s2 >> 0 & 63, o2 += 2;
      else if (0 == (4294901760 & s2)) e3[t2 + o2] = 224 | s2 >> 12, e3[t2 + o2 + 1] = 128 | s2 >> 6 & 63, e3[t2 + o2 + 2] = 128 | s2 >> 0 & 63, o2 += 3;
      else {
        if (0 != (4292870144 & s2)) throw "e";
        e3[t2 + o2] = 240 | s2 >> 18, e3[t2 + o2 + 1] = 128 | s2 >> 12 & 63, e3[t2 + o2 + 2] = 128 | s2 >> 6 & 63, e3[t2 + o2 + 3] = 128 | s2 >> 0 & 63, o2 += 4;
      }
    }
    return o2;
  }, sizeUTF8: function(e3) {
    for (var t2 = e3.length, r3 = 0, i3 = 0; i3 < t2; i3++) {
      var o2 = e3.charCodeAt(i3);
      if (0 == (4294967168 & o2)) r3++;
      else if (0 == (4294965248 & o2)) r3 += 2;
      else if (0 == (4294901760 & o2)) r3 += 3;
      else {
        if (0 != (4292870144 & o2)) throw "e";
        r3 += 4;
      }
    }
    return r3;
  } }, UZIP2.F = {}, UZIP2.F.deflateRaw = function(e3, t2, r3, i3) {
    var o2 = [[0, 0, 0, 0, 0], [4, 4, 8, 4, 0], [4, 5, 16, 8, 0], [4, 6, 16, 16, 0], [4, 10, 16, 32, 0], [8, 16, 32, 32, 0], [8, 16, 128, 128, 0], [8, 32, 128, 256, 0], [32, 128, 258, 1024, 1], [32, 258, 258, 4096, 1]][i3], a2 = UZIP2.F.U, s2 = UZIP2.F._goodIndex;
    UZIP2.F._hash;
    var f2 = UZIP2.F._putsE, l2 = 0, c2 = r3 << 3, u = 0, h = e3.length;
    if (0 == i3) {
      for (; l2 < h; ) {
        f2(t2, c2, l2 + (_ = Math.min(65535, h - l2)) == h ? 1 : 0), c2 = UZIP2.F._copyExact(e3, l2, _, t2, c2 + 8), l2 += _;
      }
      return c2 >>> 3;
    }
    var d = a2.lits, A = a2.strt, g = a2.prev, p = 0, m = 0, w = 0, v = 0, b = 0, y = 0;
    for (h > 2 && (A[y = UZIP2.F._hash(e3, 0)] = 0), l2 = 0; l2 < h; l2++) {
      if (b = y, l2 + 1 < h - 2) {
        y = UZIP2.F._hash(e3, l2 + 1);
        var E = l2 + 1 & 32767;
        g[E] = A[y], A[y] = E;
      }
      if (u <= l2) {
        (p > 14e3 || m > 26697) && h - l2 > 100 && (u < l2 && (d[p] = l2 - u, p += 2, u = l2), c2 = UZIP2.F._writeBlock(l2 == h - 1 || u == h ? 1 : 0, d, p, v, e3, w, l2 - w, t2, c2), p = m = v = 0, w = l2);
        var F = 0;
        l2 < h - 2 && (F = UZIP2.F._bestMatch(e3, l2, g, b, Math.min(o2[2], h - l2), o2[3]));
        var _ = F >>> 16, B = 65535 & F;
        if (0 != F) {
          B = 65535 & F;
          var U = s2(_ = F >>> 16, a2.of0);
          a2.lhst[257 + U]++;
          var C = s2(B, a2.df0);
          a2.dhst[C]++, v += a2.exb[U] + a2.dxb[C], d[p] = _ << 23 | l2 - u, d[p + 1] = B << 16 | U << 8 | C, p += 2, u = l2 + _;
        } else a2.lhst[e3[l2]]++;
        m++;
      }
    }
    for (w == l2 && 0 != e3.length || (u < l2 && (d[p] = l2 - u, p += 2, u = l2), c2 = UZIP2.F._writeBlock(1, d, p, v, e3, w, l2 - w, t2, c2), p = 0, m = 0, p = m = v = 0, w = l2); 0 != (7 & c2); ) c2++;
    return c2 >>> 3;
  }, UZIP2.F._bestMatch = function(e3, t2, r3, i3, o2, a2) {
    var s2 = 32767 & t2, f2 = r3[s2], l2 = s2 - f2 + 32768 & 32767;
    if (f2 == s2 || i3 != UZIP2.F._hash(e3, t2 - l2)) return 0;
    for (var c2 = 0, u = 0, h = Math.min(32767, t2); l2 <= h && 0 != --a2 && f2 != s2; ) {
      if (0 == c2 || e3[t2 + c2] == e3[t2 + c2 - l2]) {
        var d = UZIP2.F._howLong(e3, t2, l2);
        if (d > c2) {
          if (u = l2, (c2 = d) >= o2) break;
          l2 + 2 < d && (d = l2 + 2);
          for (var A = 0, g = 0; g < d - 2; g++) {
            var p = t2 - l2 + g + 32768 & 32767, m = p - r3[p] + 32768 & 32767;
            m > A && (A = m, f2 = p);
          }
        }
      }
      l2 += (s2 = f2) - (f2 = r3[s2]) + 32768 & 32767;
    }
    return c2 << 16 | u;
  }, UZIP2.F._howLong = function(e3, t2, r3) {
    if (e3[t2] != e3[t2 - r3] || e3[t2 + 1] != e3[t2 + 1 - r3] || e3[t2 + 2] != e3[t2 + 2 - r3]) return 0;
    var i3 = t2, o2 = Math.min(e3.length, t2 + 258);
    for (t2 += 3; t2 < o2 && e3[t2] == e3[t2 - r3]; ) t2++;
    return t2 - i3;
  }, UZIP2.F._hash = function(e3, t2) {
    return (e3[t2] << 8 | e3[t2 + 1]) + (e3[t2 + 2] << 4) & 65535;
  }, UZIP2.saved = 0, UZIP2.F._writeBlock = function(e3, t2, r3, i3, o2, a2, s2, f2, l2) {
    var c2, u, h, d, A, g, p, m, w, v = UZIP2.F.U, b = UZIP2.F._putsF, y = UZIP2.F._putsE;
    v.lhst[256]++, u = (c2 = UZIP2.F.getTrees())[0], h = c2[1], d = c2[2], A = c2[3], g = c2[4], p = c2[5], m = c2[6], w = c2[7];
    var E = 32 + (0 == (l2 + 3 & 7) ? 0 : 8 - (l2 + 3 & 7)) + (s2 << 3), F = i3 + UZIP2.F.contSize(v.fltree, v.lhst) + UZIP2.F.contSize(v.fdtree, v.dhst), _ = i3 + UZIP2.F.contSize(v.ltree, v.lhst) + UZIP2.F.contSize(v.dtree, v.dhst);
    _ += 14 + 3 * p + UZIP2.F.contSize(v.itree, v.ihst) + (2 * v.ihst[16] + 3 * v.ihst[17] + 7 * v.ihst[18]);
    for (var B = 0; B < 286; B++) v.lhst[B] = 0;
    for (B = 0; B < 30; B++) v.dhst[B] = 0;
    for (B = 0; B < 19; B++) v.ihst[B] = 0;
    var U = E < F && E < _ ? 0 : F < _ ? 1 : 2;
    if (b(f2, l2, e3), b(f2, l2 + 1, U), l2 += 3, 0 == U) {
      for (; 0 != (7 & l2); ) l2++;
      l2 = UZIP2.F._copyExact(o2, a2, s2, f2, l2);
    } else {
      var C, I;
      if (1 == U && (C = v.fltree, I = v.fdtree), 2 == U) {
        UZIP2.F.makeCodes(v.ltree, u), UZIP2.F.revCodes(v.ltree, u), UZIP2.F.makeCodes(v.dtree, h), UZIP2.F.revCodes(v.dtree, h), UZIP2.F.makeCodes(v.itree, d), UZIP2.F.revCodes(v.itree, d), C = v.ltree, I = v.dtree, y(f2, l2, A - 257), y(f2, l2 += 5, g - 1), y(f2, l2 += 5, p - 4), l2 += 4;
        for (var Q = 0; Q < p; Q++) y(f2, l2 + 3 * Q, v.itree[1 + (v.ordr[Q] << 1)]);
        l2 += 3 * p, l2 = UZIP2.F._codeTiny(m, v.itree, f2, l2), l2 = UZIP2.F._codeTiny(w, v.itree, f2, l2);
      }
      for (var M = a2, x = 0; x < r3; x += 2) {
        for (var S = t2[x], R = S >>> 23, T = M + (8388607 & S); M < T; ) l2 = UZIP2.F._writeLit(o2[M++], C, f2, l2);
        if (0 != R) {
          var O = t2[x + 1], P = O >> 16, H = O >> 8 & 255, L = 255 & O;
          y(f2, l2 = UZIP2.F._writeLit(257 + H, C, f2, l2), R - v.of0[H]), l2 += v.exb[H], b(f2, l2 = UZIP2.F._writeLit(L, I, f2, l2), P - v.df0[L]), l2 += v.dxb[L], M += R;
        }
      }
      l2 = UZIP2.F._writeLit(256, C, f2, l2);
    }
    return l2;
  }, UZIP2.F._copyExact = function(e3, t2, r3, i3, o2) {
    var a2 = o2 >>> 3;
    return i3[a2] = r3, i3[a2 + 1] = r3 >>> 8, i3[a2 + 2] = 255 - i3[a2], i3[a2 + 3] = 255 - i3[a2 + 1], a2 += 4, i3.set(new Uint8Array(e3.buffer, t2, r3), a2), o2 + (r3 + 4 << 3);
  }, UZIP2.F.getTrees = function() {
    for (var e3 = UZIP2.F.U, t2 = UZIP2.F._hufTree(e3.lhst, e3.ltree, 15), r3 = UZIP2.F._hufTree(e3.dhst, e3.dtree, 15), i3 = [], o2 = UZIP2.F._lenCodes(e3.ltree, i3), a2 = [], s2 = UZIP2.F._lenCodes(e3.dtree, a2), f2 = 0; f2 < i3.length; f2 += 2) e3.ihst[i3[f2]]++;
    for (f2 = 0; f2 < a2.length; f2 += 2) e3.ihst[a2[f2]]++;
    for (var l2 = UZIP2.F._hufTree(e3.ihst, e3.itree, 7), c2 = 19; c2 > 4 && 0 == e3.itree[1 + (e3.ordr[c2 - 1] << 1)]; ) c2--;
    return [t2, r3, l2, o2, s2, c2, i3, a2];
  }, UZIP2.F.getSecond = function(e3) {
    for (var t2 = [], r3 = 0; r3 < e3.length; r3 += 2) t2.push(e3[r3 + 1]);
    return t2;
  }, UZIP2.F.nonZero = function(e3) {
    for (var t2 = "", r3 = 0; r3 < e3.length; r3 += 2) 0 != e3[r3 + 1] && (t2 += (r3 >> 1) + ",");
    return t2;
  }, UZIP2.F.contSize = function(e3, t2) {
    for (var r3 = 0, i3 = 0; i3 < t2.length; i3++) r3 += t2[i3] * e3[1 + (i3 << 1)];
    return r3;
  }, UZIP2.F._codeTiny = function(e3, t2, r3, i3) {
    for (var o2 = 0; o2 < e3.length; o2 += 2) {
      var a2 = e3[o2], s2 = e3[o2 + 1];
      i3 = UZIP2.F._writeLit(a2, t2, r3, i3);
      var f2 = 16 == a2 ? 2 : 17 == a2 ? 3 : 7;
      a2 > 15 && (UZIP2.F._putsE(r3, i3, s2, f2), i3 += f2);
    }
    return i3;
  }, UZIP2.F._lenCodes = function(e3, t2) {
    for (var r3 = e3.length; 2 != r3 && 0 == e3[r3 - 1]; ) r3 -= 2;
    for (var i3 = 0; i3 < r3; i3 += 2) {
      var o2 = e3[i3 + 1], a2 = i3 + 3 < r3 ? e3[i3 + 3] : -1, s2 = i3 + 5 < r3 ? e3[i3 + 5] : -1, f2 = 0 == i3 ? -1 : e3[i3 - 1];
      if (0 == o2 && a2 == o2 && s2 == o2) {
        for (var l2 = i3 + 5; l2 + 2 < r3 && e3[l2 + 2] == o2; ) l2 += 2;
        (c2 = Math.min(l2 + 1 - i3 >>> 1, 138)) < 11 ? t2.push(17, c2 - 3) : t2.push(18, c2 - 11), i3 += 2 * c2 - 2;
      } else if (o2 == f2 && a2 == o2 && s2 == o2) {
        for (l2 = i3 + 5; l2 + 2 < r3 && e3[l2 + 2] == o2; ) l2 += 2;
        var c2 = Math.min(l2 + 1 - i3 >>> 1, 6);
        t2.push(16, c2 - 3), i3 += 2 * c2 - 2;
      } else t2.push(o2, 0);
    }
    return r3 >>> 1;
  }, UZIP2.F._hufTree = function(e3, t2, r3) {
    var i3 = [], o2 = e3.length, a2 = t2.length, s2 = 0;
    for (s2 = 0; s2 < a2; s2 += 2) t2[s2] = 0, t2[s2 + 1] = 0;
    for (s2 = 0; s2 < o2; s2++) 0 != e3[s2] && i3.push({ lit: s2, f: e3[s2] });
    var f2 = i3.length, l2 = i3.slice(0);
    if (0 == f2) return 0;
    if (1 == f2) {
      var c2 = i3[0].lit;
      l2 = 0 == c2 ? 1 : 0;
      return t2[1 + (c2 << 1)] = 1, t2[1 + (l2 << 1)] = 1, 1;
    }
    i3.sort((function(e4, t3) {
      return e4.f - t3.f;
    }));
    var u = i3[0], h = i3[1], d = 0, A = 1, g = 2;
    for (i3[0] = { lit: -1, f: u.f + h.f, l: u, r: h, d: 0 }; A != f2 - 1; ) u = d != A && (g == f2 || i3[d].f < i3[g].f) ? i3[d++] : i3[g++], h = d != A && (g == f2 || i3[d].f < i3[g].f) ? i3[d++] : i3[g++], i3[A++] = { lit: -1, f: u.f + h.f, l: u, r: h };
    var p = UZIP2.F.setDepth(i3[A - 1], 0);
    for (p > r3 && (UZIP2.F.restrictDepth(l2, r3, p), p = r3), s2 = 0; s2 < f2; s2++) t2[1 + (l2[s2].lit << 1)] = l2[s2].d;
    return p;
  }, UZIP2.F.setDepth = function(e3, t2) {
    return -1 != e3.lit ? (e3.d = t2, t2) : Math.max(UZIP2.F.setDepth(e3.l, t2 + 1), UZIP2.F.setDepth(e3.r, t2 + 1));
  }, UZIP2.F.restrictDepth = function(e3, t2, r3) {
    var i3 = 0, o2 = 1 << r3 - t2, a2 = 0;
    for (e3.sort((function(e4, t3) {
      return t3.d == e4.d ? e4.f - t3.f : t3.d - e4.d;
    })), i3 = 0; i3 < e3.length && e3[i3].d > t2; i3++) {
      var s2 = e3[i3].d;
      e3[i3].d = t2, a2 += o2 - (1 << r3 - s2);
    }
    for (a2 >>>= r3 - t2; a2 > 0; ) {
      (s2 = e3[i3].d) < t2 ? (e3[i3].d++, a2 -= 1 << t2 - s2 - 1) : i3++;
    }
    for (; i3 >= 0; i3--) e3[i3].d == t2 && a2 < 0 && (e3[i3].d--, a2++);
    0 != a2 && console.log("debt left");
  }, UZIP2.F._goodIndex = function(e3, t2) {
    var r3 = 0;
    return t2[16 | r3] <= e3 && (r3 |= 16), t2[8 | r3] <= e3 && (r3 |= 8), t2[4 | r3] <= e3 && (r3 |= 4), t2[2 | r3] <= e3 && (r3 |= 2), t2[1 | r3] <= e3 && (r3 |= 1), r3;
  }, UZIP2.F._writeLit = function(e3, t2, r3, i3) {
    return UZIP2.F._putsF(r3, i3, t2[e3 << 1]), i3 + t2[1 + (e3 << 1)];
  }, UZIP2.F.inflate = function(e3, t2) {
    var r3 = Uint8Array;
    if (3 == e3[0] && 0 == e3[1]) return t2 || new r3(0);
    var i3 = UZIP2.F, o2 = i3._bitsF, a2 = i3._bitsE, s2 = i3._decodeTiny, f2 = i3.makeCodes, l2 = i3.codes2map, c2 = i3._get17, u = i3.U, h = null == t2;
    h && (t2 = new r3(e3.length >>> 2 << 3));
    for (var d, A, g = 0, p = 0, m = 0, w = 0, v = 0, b = 0, y = 0, E = 0, F = 0; 0 == g; ) if (g = o2(e3, F, 1), p = o2(e3, F + 1, 2), F += 3, 0 != p) {
      if (h && (t2 = UZIP2.F._check(t2, E + (1 << 17))), 1 == p && (d = u.flmap, A = u.fdmap, b = 511, y = 31), 2 == p) {
        m = a2(e3, F, 5) + 257, w = a2(e3, F + 5, 5) + 1, v = a2(e3, F + 10, 4) + 4, F += 14;
        for (var _ = 0; _ < 38; _ += 2) u.itree[_] = 0, u.itree[_ + 1] = 0;
        var B = 1;
        for (_ = 0; _ < v; _++) {
          var U = a2(e3, F + 3 * _, 3);
          u.itree[1 + (u.ordr[_] << 1)] = U, U > B && (B = U);
        }
        F += 3 * v, f2(u.itree, B), l2(u.itree, B, u.imap), d = u.lmap, A = u.dmap, F = s2(u.imap, (1 << B) - 1, m + w, e3, F, u.ttree);
        var C = i3._copyOut(u.ttree, 0, m, u.ltree);
        b = (1 << C) - 1;
        var I = i3._copyOut(u.ttree, m, w, u.dtree);
        y = (1 << I) - 1, f2(u.ltree, C), l2(u.ltree, C, d), f2(u.dtree, I), l2(u.dtree, I, A);
      }
      for (; ; ) {
        var Q = d[c2(e3, F) & b];
        F += 15 & Q;
        var M = Q >>> 4;
        if (M >>> 8 == 0) t2[E++] = M;
        else {
          if (256 == M) break;
          var x = E + M - 254;
          if (M > 264) {
            var S = u.ldef[M - 257];
            x = E + (S >>> 3) + a2(e3, F, 7 & S), F += 7 & S;
          }
          var R = A[c2(e3, F) & y];
          F += 15 & R;
          var T = R >>> 4, O = u.ddef[T], P = (O >>> 4) + o2(e3, F, 15 & O);
          for (F += 15 & O, h && (t2 = UZIP2.F._check(t2, E + (1 << 17))); E < x; ) t2[E] = t2[E++ - P], t2[E] = t2[E++ - P], t2[E] = t2[E++ - P], t2[E] = t2[E++ - P];
          E = x;
        }
      }
    } else {
      0 != (7 & F) && (F += 8 - (7 & F));
      var H = 4 + (F >>> 3), L = e3[H - 4] | e3[H - 3] << 8;
      h && (t2 = UZIP2.F._check(t2, E + L)), t2.set(new r3(e3.buffer, e3.byteOffset + H, L), E), F = H + L << 3, E += L;
    }
    return t2.length == E ? t2 : t2.slice(0, E);
  }, UZIP2.F._check = function(e3, t2) {
    var r3 = e3.length;
    if (t2 <= r3) return e3;
    var i3 = new Uint8Array(Math.max(r3 << 1, t2));
    return i3.set(e3, 0), i3;
  }, UZIP2.F._decodeTiny = function(e3, t2, r3, i3, o2, a2) {
    for (var s2 = UZIP2.F._bitsE, f2 = UZIP2.F._get17, l2 = 0; l2 < r3; ) {
      var c2 = e3[f2(i3, o2) & t2];
      o2 += 15 & c2;
      var u = c2 >>> 4;
      if (u <= 15) a2[l2] = u, l2++;
      else {
        var h = 0, d = 0;
        16 == u ? (d = 3 + s2(i3, o2, 2), o2 += 2, h = a2[l2 - 1]) : 17 == u ? (d = 3 + s2(i3, o2, 3), o2 += 3) : 18 == u && (d = 11 + s2(i3, o2, 7), o2 += 7);
        for (var A = l2 + d; l2 < A; ) a2[l2] = h, l2++;
      }
    }
    return o2;
  }, UZIP2.F._copyOut = function(e3, t2, r3, i3) {
    for (var o2 = 0, a2 = 0, s2 = i3.length >>> 1; a2 < r3; ) {
      var f2 = e3[a2 + t2];
      i3[a2 << 1] = 0, i3[1 + (a2 << 1)] = f2, f2 > o2 && (o2 = f2), a2++;
    }
    for (; a2 < s2; ) i3[a2 << 1] = 0, i3[1 + (a2 << 1)] = 0, a2++;
    return o2;
  }, UZIP2.F.makeCodes = function(e3, t2) {
    for (var r3, i3, o2, a2, s2 = UZIP2.F.U, f2 = e3.length, l2 = s2.bl_count, c2 = 0; c2 <= t2; c2++) l2[c2] = 0;
    for (c2 = 1; c2 < f2; c2 += 2) l2[e3[c2]]++;
    var u = s2.next_code;
    for (r3 = 0, l2[0] = 0, i3 = 1; i3 <= t2; i3++) r3 = r3 + l2[i3 - 1] << 1, u[i3] = r3;
    for (o2 = 0; o2 < f2; o2 += 2) 0 != (a2 = e3[o2 + 1]) && (e3[o2] = u[a2], u[a2]++);
  }, UZIP2.F.codes2map = function(e3, t2, r3) {
    for (var i3 = e3.length, o2 = UZIP2.F.U.rev15, a2 = 0; a2 < i3; a2 += 2) if (0 != e3[a2 + 1]) for (var s2 = a2 >> 1, f2 = e3[a2 + 1], l2 = s2 << 4 | f2, c2 = t2 - f2, u = e3[a2] << c2, h = u + (1 << c2); u != h; ) {
      r3[o2[u] >>> 15 - t2] = l2, u++;
    }
  }, UZIP2.F.revCodes = function(e3, t2) {
    for (var r3 = UZIP2.F.U.rev15, i3 = 15 - t2, o2 = 0; o2 < e3.length; o2 += 2) {
      var a2 = e3[o2] << t2 - e3[o2 + 1];
      e3[o2] = r3[a2] >>> i3;
    }
  }, UZIP2.F._putsE = function(e3, t2, r3) {
    r3 <<= 7 & t2;
    var i3 = t2 >>> 3;
    e3[i3] |= r3, e3[i3 + 1] |= r3 >>> 8;
  }, UZIP2.F._putsF = function(e3, t2, r3) {
    r3 <<= 7 & t2;
    var i3 = t2 >>> 3;
    e3[i3] |= r3, e3[i3 + 1] |= r3 >>> 8, e3[i3 + 2] |= r3 >>> 16;
  }, UZIP2.F._bitsE = function(e3, t2, r3) {
    return (e3[t2 >>> 3] | e3[1 + (t2 >>> 3)] << 8) >>> (7 & t2) & (1 << r3) - 1;
  }, UZIP2.F._bitsF = function(e3, t2, r3) {
    return (e3[t2 >>> 3] | e3[1 + (t2 >>> 3)] << 8 | e3[2 + (t2 >>> 3)] << 16) >>> (7 & t2) & (1 << r3) - 1;
  }, UZIP2.F._get17 = function(e3, t2) {
    return (e3[t2 >>> 3] | e3[1 + (t2 >>> 3)] << 8 | e3[2 + (t2 >>> 3)] << 16) >>> (7 & t2);
  }, UZIP2.F._get25 = function(e3, t2) {
    return (e3[t2 >>> 3] | e3[1 + (t2 >>> 3)] << 8 | e3[2 + (t2 >>> 3)] << 16 | e3[3 + (t2 >>> 3)] << 24) >>> (7 & t2);
  }, UZIP2.F.U = (r2 = Uint16Array, i2 = Uint32Array, { next_code: new r2(16), bl_count: new r2(16), ordr: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], of0: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999], exb: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0], ldef: new r2(32), df0: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535], dxb: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0], ddef: new i2(32), flmap: new r2(512), fltree: [], fdmap: new r2(32), fdtree: [], lmap: new r2(32768), ltree: [], ttree: [], dmap: new r2(32768), dtree: [], imap: new r2(512), itree: [], rev15: new r2(32768), lhst: new i2(286), dhst: new i2(30), ihst: new i2(19), lits: new i2(15e3), strt: new r2(65536), prev: new r2(32768) }), (function() {
    for (var e3 = UZIP2.F.U, t2 = 0; t2 < 32768; t2++) {
      var r3 = t2;
      r3 = (4278255360 & (r3 = (4042322160 & (r3 = (3435973836 & (r3 = (2863311530 & r3) >>> 1 | (1431655765 & r3) << 1)) >>> 2 | (858993459 & r3) << 2)) >>> 4 | (252645135 & r3) << 4)) >>> 8 | (16711935 & r3) << 8, e3.rev15[t2] = (r3 >>> 16 | r3 << 16) >>> 17;
    }
    function pushV(e4, t3, r4) {
      for (; 0 != t3--; ) e4.push(0, r4);
    }
    for (t2 = 0; t2 < 32; t2++) e3.ldef[t2] = e3.of0[t2] << 3 | e3.exb[t2], e3.ddef[t2] = e3.df0[t2] << 4 | e3.dxb[t2];
    pushV(e3.fltree, 144, 8), pushV(e3.fltree, 112, 9), pushV(e3.fltree, 24, 7), pushV(e3.fltree, 8, 8), UZIP2.F.makeCodes(e3.fltree, 9), UZIP2.F.codes2map(e3.fltree, 9, e3.flmap), UZIP2.F.revCodes(e3.fltree, 9), pushV(e3.fdtree, 32, 5), UZIP2.F.makeCodes(e3.fdtree, 5), UZIP2.F.codes2map(e3.fdtree, 5, e3.fdmap), UZIP2.F.revCodes(e3.fdtree, 5), pushV(e3.itree, 19, 0), pushV(e3.ltree, 286, 0), pushV(e3.dtree, 30, 0), pushV(e3.ttree, 320, 0);
  })();
})();
var UZIP = _mergeNamespaces$1({ __proto__: null, default: e }, [e]);
const UPNG = (function() {
  var e2 = { nextZero(e3, t3) {
    for (; 0 != e3[t3]; ) t3++;
    return t3;
  }, readUshort: (e3, t3) => e3[t3] << 8 | e3[t3 + 1], writeUshort(e3, t3, r2) {
    e3[t3] = r2 >> 8 & 255, e3[t3 + 1] = 255 & r2;
  }, readUint: (e3, t3) => 16777216 * e3[t3] + (e3[t3 + 1] << 16 | e3[t3 + 2] << 8 | e3[t3 + 3]), writeUint(e3, t3, r2) {
    e3[t3] = r2 >> 24 & 255, e3[t3 + 1] = r2 >> 16 & 255, e3[t3 + 2] = r2 >> 8 & 255, e3[t3 + 3] = 255 & r2;
  }, readASCII(e3, t3, r2) {
    let i2 = "";
    for (let o2 = 0; o2 < r2; o2++) i2 += String.fromCharCode(e3[t3 + o2]);
    return i2;
  }, writeASCII(e3, t3, r2) {
    for (let i2 = 0; i2 < r2.length; i2++) e3[t3 + i2] = r2.charCodeAt(i2);
  }, readBytes(e3, t3, r2) {
    const i2 = [];
    for (let o2 = 0; o2 < r2; o2++) i2.push(e3[t3 + o2]);
    return i2;
  }, pad: (e3) => e3.length < 2 ? `0${e3}` : e3, readUTF8(t3, r2, i2) {
    let o2, a2 = "";
    for (let o3 = 0; o3 < i2; o3++) a2 += `%${e2.pad(t3[r2 + o3].toString(16))}`;
    try {
      o2 = decodeURIComponent(a2);
    } catch (o3) {
      return e2.readASCII(t3, r2, i2);
    }
    return o2;
  } };
  function decodeImage(t3, r2, i2, o2) {
    const a2 = r2 * i2, s2 = _getBPP(o2), f2 = Math.ceil(r2 * s2 / 8), l2 = new Uint8Array(4 * a2), c2 = new Uint32Array(l2.buffer), { ctype: u } = o2, { depth: h } = o2, d = e2.readUshort;
    if (6 == u) {
      const e3 = a2 << 2;
      if (8 == h) for (var A = 0; A < e3; A += 4) l2[A] = t3[A], l2[A + 1] = t3[A + 1], l2[A + 2] = t3[A + 2], l2[A + 3] = t3[A + 3];
      if (16 == h) for (A = 0; A < e3; A++) l2[A] = t3[A << 1];
    } else if (2 == u) {
      const e3 = o2.tabs.tRNS;
      if (null == e3) {
        if (8 == h) for (A = 0; A < a2; A++) {
          var g = 3 * A;
          c2[A] = 255 << 24 | t3[g + 2] << 16 | t3[g + 1] << 8 | t3[g];
        }
        if (16 == h) for (A = 0; A < a2; A++) {
          g = 6 * A;
          c2[A] = 255 << 24 | t3[g + 4] << 16 | t3[g + 2] << 8 | t3[g];
        }
      } else {
        var p = e3[0];
        const r3 = e3[1], i3 = e3[2];
        if (8 == h) for (A = 0; A < a2; A++) {
          var m = A << 2;
          g = 3 * A;
          c2[A] = 255 << 24 | t3[g + 2] << 16 | t3[g + 1] << 8 | t3[g], t3[g] == p && t3[g + 1] == r3 && t3[g + 2] == i3 && (l2[m + 3] = 0);
        }
        if (16 == h) for (A = 0; A < a2; A++) {
          m = A << 2, g = 6 * A;
          c2[A] = 255 << 24 | t3[g + 4] << 16 | t3[g + 2] << 8 | t3[g], d(t3, g) == p && d(t3, g + 2) == r3 && d(t3, g + 4) == i3 && (l2[m + 3] = 0);
        }
      }
    } else if (3 == u) {
      const e3 = o2.tabs.PLTE, s3 = o2.tabs.tRNS, c3 = s3 ? s3.length : 0;
      if (1 == h) for (var w = 0; w < i2; w++) {
        var v = w * f2, b = w * r2;
        for (A = 0; A < r2; A++) {
          m = b + A << 2;
          var y = 3 * (E = t3[v + (A >> 3)] >> 7 - ((7 & A) << 0) & 1);
          l2[m] = e3[y], l2[m + 1] = e3[y + 1], l2[m + 2] = e3[y + 2], l2[m + 3] = E < c3 ? s3[E] : 255;
        }
      }
      if (2 == h) for (w = 0; w < i2; w++) for (v = w * f2, b = w * r2, A = 0; A < r2; A++) {
        m = b + A << 2, y = 3 * (E = t3[v + (A >> 2)] >> 6 - ((3 & A) << 1) & 3);
        l2[m] = e3[y], l2[m + 1] = e3[y + 1], l2[m + 2] = e3[y + 2], l2[m + 3] = E < c3 ? s3[E] : 255;
      }
      if (4 == h) for (w = 0; w < i2; w++) for (v = w * f2, b = w * r2, A = 0; A < r2; A++) {
        m = b + A << 2, y = 3 * (E = t3[v + (A >> 1)] >> 4 - ((1 & A) << 2) & 15);
        l2[m] = e3[y], l2[m + 1] = e3[y + 1], l2[m + 2] = e3[y + 2], l2[m + 3] = E < c3 ? s3[E] : 255;
      }
      if (8 == h) for (A = 0; A < a2; A++) {
        var E;
        m = A << 2, y = 3 * (E = t3[A]);
        l2[m] = e3[y], l2[m + 1] = e3[y + 1], l2[m + 2] = e3[y + 2], l2[m + 3] = E < c3 ? s3[E] : 255;
      }
    } else if (4 == u) {
      if (8 == h) for (A = 0; A < a2; A++) {
        m = A << 2;
        var F = t3[_ = A << 1];
        l2[m] = F, l2[m + 1] = F, l2[m + 2] = F, l2[m + 3] = t3[_ + 1];
      }
      if (16 == h) for (A = 0; A < a2; A++) {
        var _;
        m = A << 2, F = t3[_ = A << 2];
        l2[m] = F, l2[m + 1] = F, l2[m + 2] = F, l2[m + 3] = t3[_ + 2];
      }
    } else if (0 == u) for (p = o2.tabs.tRNS ? o2.tabs.tRNS : -1, w = 0; w < i2; w++) {
      const e3 = w * f2, i3 = w * r2;
      if (1 == h) for (var B = 0; B < r2; B++) {
        var U = (F = 255 * (t3[e3 + (B >>> 3)] >>> 7 - (7 & B) & 1)) == 255 * p ? 0 : 255;
        c2[i3 + B] = U << 24 | F << 16 | F << 8 | F;
      }
      else if (2 == h) for (B = 0; B < r2; B++) {
        U = (F = 85 * (t3[e3 + (B >>> 2)] >>> 6 - ((3 & B) << 1) & 3)) == 85 * p ? 0 : 255;
        c2[i3 + B] = U << 24 | F << 16 | F << 8 | F;
      }
      else if (4 == h) for (B = 0; B < r2; B++) {
        U = (F = 17 * (t3[e3 + (B >>> 1)] >>> 4 - ((1 & B) << 2) & 15)) == 17 * p ? 0 : 255;
        c2[i3 + B] = U << 24 | F << 16 | F << 8 | F;
      }
      else if (8 == h) for (B = 0; B < r2; B++) {
        U = (F = t3[e3 + B]) == p ? 0 : 255;
        c2[i3 + B] = U << 24 | F << 16 | F << 8 | F;
      }
      else if (16 == h) for (B = 0; B < r2; B++) {
        F = t3[e3 + (B << 1)], U = d(t3, e3 + (B << 1)) == p ? 0 : 255;
        c2[i3 + B] = U << 24 | F << 16 | F << 8 | F;
      }
    }
    return l2;
  }
  function _decompress(e3, r2, i2, o2) {
    const a2 = _getBPP(e3), s2 = Math.ceil(i2 * a2 / 8), f2 = new Uint8Array((s2 + 1 + e3.interlace) * o2);
    return r2 = e3.tabs.CgBI ? t2(r2, f2) : _inflate(r2, f2), 0 == e3.interlace ? r2 = _filterZero(r2, e3, 0, i2, o2) : 1 == e3.interlace && (r2 = (function _readInterlace(e4, t3) {
      const r3 = t3.width, i3 = t3.height, o3 = _getBPP(t3), a3 = o3 >> 3, s3 = Math.ceil(r3 * o3 / 8), f3 = new Uint8Array(i3 * s3);
      let l2 = 0;
      const c2 = [0, 0, 4, 0, 2, 0, 1], u = [0, 4, 0, 2, 0, 1, 0], h = [8, 8, 8, 4, 4, 2, 2], d = [8, 8, 4, 4, 2, 2, 1];
      let A = 0;
      for (; A < 7; ) {
        const p = h[A], m = d[A];
        let w = 0, v = 0, b = c2[A];
        for (; b < i3; ) b += p, v++;
        let y = u[A];
        for (; y < r3; ) y += m, w++;
        const E = Math.ceil(w * o3 / 8);
        _filterZero(e4, t3, l2, w, v);
        let F = 0, _ = c2[A];
        for (; _ < i3; ) {
          let t4 = u[A], i4 = l2 + F * E << 3;
          for (; t4 < r3; ) {
            var g;
            if (1 == o3) g = (g = e4[i4 >> 3]) >> 7 - (7 & i4) & 1, f3[_ * s3 + (t4 >> 3)] |= g << 7 - ((7 & t4) << 0);
            if (2 == o3) g = (g = e4[i4 >> 3]) >> 6 - (7 & i4) & 3, f3[_ * s3 + (t4 >> 2)] |= g << 6 - ((3 & t4) << 1);
            if (4 == o3) g = (g = e4[i4 >> 3]) >> 4 - (7 & i4) & 15, f3[_ * s3 + (t4 >> 1)] |= g << 4 - ((1 & t4) << 2);
            if (o3 >= 8) {
              const r4 = _ * s3 + t4 * a3;
              for (let t5 = 0; t5 < a3; t5++) f3[r4 + t5] = e4[(i4 >> 3) + t5];
            }
            i4 += o3, t4 += m;
          }
          F++, _ += p;
        }
        w * v != 0 && (l2 += v * (1 + E)), A += 1;
      }
      return f3;
    })(r2, e3)), r2;
  }
  function _inflate(e3, r2) {
    return t2(new Uint8Array(e3.buffer, 2, e3.length - 6), r2);
  }
  var t2 = (function() {
    const e3 = { H: {} };
    return e3.H.N = function(t3, r2) {
      const i2 = Uint8Array;
      let o2, a2, s2 = 0, f2 = 0, l2 = 0, c2 = 0, u = 0, h = 0, d = 0, A = 0, g = 0;
      if (3 == t3[0] && 0 == t3[1]) return r2 || new i2(0);
      const p = e3.H, m = p.b, w = p.e, v = p.R, b = p.n, y = p.A, E = p.Z, F = p.m, _ = null == r2;
      for (_ && (r2 = new i2(t3.length >>> 2 << 5)); 0 == s2; ) if (s2 = m(t3, g, 1), f2 = m(t3, g + 1, 2), g += 3, 0 != f2) {
        if (_ && (r2 = e3.H.W(r2, A + (1 << 17))), 1 == f2 && (o2 = F.J, a2 = F.h, h = 511, d = 31), 2 == f2) {
          l2 = w(t3, g, 5) + 257, c2 = w(t3, g + 5, 5) + 1, u = w(t3, g + 10, 4) + 4, g += 14;
          let e4 = 1;
          for (var B = 0; B < 38; B += 2) F.Q[B] = 0, F.Q[B + 1] = 0;
          for (B = 0; B < u; B++) {
            const r4 = w(t3, g + 3 * B, 3);
            F.Q[1 + (F.X[B] << 1)] = r4, r4 > e4 && (e4 = r4);
          }
          g += 3 * u, b(F.Q, e4), y(F.Q, e4, F.u), o2 = F.w, a2 = F.d, g = v(F.u, (1 << e4) - 1, l2 + c2, t3, g, F.v);
          const r3 = p.V(F.v, 0, l2, F.C);
          h = (1 << r3) - 1;
          const i3 = p.V(F.v, l2, c2, F.D);
          d = (1 << i3) - 1, b(F.C, r3), y(F.C, r3, o2), b(F.D, i3), y(F.D, i3, a2);
        }
        for (; ; ) {
          const e4 = o2[E(t3, g) & h];
          g += 15 & e4;
          const i3 = e4 >>> 4;
          if (i3 >>> 8 == 0) r2[A++] = i3;
          else {
            if (256 == i3) break;
            {
              let e5 = A + i3 - 254;
              if (i3 > 264) {
                const r3 = F.q[i3 - 257];
                e5 = A + (r3 >>> 3) + w(t3, g, 7 & r3), g += 7 & r3;
              }
              const o3 = a2[E(t3, g) & d];
              g += 15 & o3;
              const s3 = o3 >>> 4, f3 = F.c[s3], l3 = (f3 >>> 4) + m(t3, g, 15 & f3);
              for (g += 15 & f3; A < e5; ) r2[A] = r2[A++ - l3], r2[A] = r2[A++ - l3], r2[A] = r2[A++ - l3], r2[A] = r2[A++ - l3];
              A = e5;
            }
          }
        }
      } else {
        0 != (7 & g) && (g += 8 - (7 & g));
        const o3 = 4 + (g >>> 3), a3 = t3[o3 - 4] | t3[o3 - 3] << 8;
        _ && (r2 = e3.H.W(r2, A + a3)), r2.set(new i2(t3.buffer, t3.byteOffset + o3, a3), A), g = o3 + a3 << 3, A += a3;
      }
      return r2.length == A ? r2 : r2.slice(0, A);
    }, e3.H.W = function(e4, t3) {
      const r2 = e4.length;
      if (t3 <= r2) return e4;
      const i2 = new Uint8Array(r2 << 1);
      return i2.set(e4, 0), i2;
    }, e3.H.R = function(t3, r2, i2, o2, a2, s2) {
      const f2 = e3.H.e, l2 = e3.H.Z;
      let c2 = 0;
      for (; c2 < i2; ) {
        const e4 = t3[l2(o2, a2) & r2];
        a2 += 15 & e4;
        const i3 = e4 >>> 4;
        if (i3 <= 15) s2[c2] = i3, c2++;
        else {
          let e5 = 0, t4 = 0;
          16 == i3 ? (t4 = 3 + f2(o2, a2, 2), a2 += 2, e5 = s2[c2 - 1]) : 17 == i3 ? (t4 = 3 + f2(o2, a2, 3), a2 += 3) : 18 == i3 && (t4 = 11 + f2(o2, a2, 7), a2 += 7);
          const r3 = c2 + t4;
          for (; c2 < r3; ) s2[c2] = e5, c2++;
        }
      }
      return a2;
    }, e3.H.V = function(e4, t3, r2, i2) {
      let o2 = 0, a2 = 0;
      const s2 = i2.length >>> 1;
      for (; a2 < r2; ) {
        const r3 = e4[a2 + t3];
        i2[a2 << 1] = 0, i2[1 + (a2 << 1)] = r3, r3 > o2 && (o2 = r3), a2++;
      }
      for (; a2 < s2; ) i2[a2 << 1] = 0, i2[1 + (a2 << 1)] = 0, a2++;
      return o2;
    }, e3.H.n = function(t3, r2) {
      const i2 = e3.H.m, o2 = t3.length;
      let a2, s2, f2;
      let l2;
      const c2 = i2.j;
      for (var u = 0; u <= r2; u++) c2[u] = 0;
      for (u = 1; u < o2; u += 2) c2[t3[u]]++;
      const h = i2.K;
      for (a2 = 0, c2[0] = 0, s2 = 1; s2 <= r2; s2++) a2 = a2 + c2[s2 - 1] << 1, h[s2] = a2;
      for (f2 = 0; f2 < o2; f2 += 2) l2 = t3[f2 + 1], 0 != l2 && (t3[f2] = h[l2], h[l2]++);
    }, e3.H.A = function(t3, r2, i2) {
      const o2 = t3.length, a2 = e3.H.m.r;
      for (let e4 = 0; e4 < o2; e4 += 2) if (0 != t3[e4 + 1]) {
        const o3 = e4 >> 1, s2 = t3[e4 + 1], f2 = o3 << 4 | s2, l2 = r2 - s2;
        let c2 = t3[e4] << l2;
        const u = c2 + (1 << l2);
        for (; c2 != u; ) {
          i2[a2[c2] >>> 15 - r2] = f2, c2++;
        }
      }
    }, e3.H.l = function(t3, r2) {
      const i2 = e3.H.m.r, o2 = 15 - r2;
      for (let e4 = 0; e4 < t3.length; e4 += 2) {
        const a2 = t3[e4] << r2 - t3[e4 + 1];
        t3[e4] = i2[a2] >>> o2;
      }
    }, e3.H.M = function(e4, t3, r2) {
      r2 <<= 7 & t3;
      const i2 = t3 >>> 3;
      e4[i2] |= r2, e4[i2 + 1] |= r2 >>> 8;
    }, e3.H.I = function(e4, t3, r2) {
      r2 <<= 7 & t3;
      const i2 = t3 >>> 3;
      e4[i2] |= r2, e4[i2 + 1] |= r2 >>> 8, e4[i2 + 2] |= r2 >>> 16;
    }, e3.H.e = function(e4, t3, r2) {
      return (e4[t3 >>> 3] | e4[1 + (t3 >>> 3)] << 8) >>> (7 & t3) & (1 << r2) - 1;
    }, e3.H.b = function(e4, t3, r2) {
      return (e4[t3 >>> 3] | e4[1 + (t3 >>> 3)] << 8 | e4[2 + (t3 >>> 3)] << 16) >>> (7 & t3) & (1 << r2) - 1;
    }, e3.H.Z = function(e4, t3) {
      return (e4[t3 >>> 3] | e4[1 + (t3 >>> 3)] << 8 | e4[2 + (t3 >>> 3)] << 16) >>> (7 & t3);
    }, e3.H.i = function(e4, t3) {
      return (e4[t3 >>> 3] | e4[1 + (t3 >>> 3)] << 8 | e4[2 + (t3 >>> 3)] << 16 | e4[3 + (t3 >>> 3)] << 24) >>> (7 & t3);
    }, e3.H.m = (function() {
      const e4 = Uint16Array, t3 = Uint32Array;
      return { K: new e4(16), j: new e4(16), X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999], T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0], q: new e4(32), p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535], z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0], c: new t3(32), J: new e4(512), _: [], h: new e4(32), $: [], w: new e4(32768), C: [], v: [], d: new e4(32768), D: [], u: new e4(512), Q: [], r: new e4(32768), s: new t3(286), Y: new t3(30), a: new t3(19), t: new t3(15e3), k: new e4(65536), g: new e4(32768) };
    })(), (function() {
      const t3 = e3.H.m;
      for (var r2 = 0; r2 < 32768; r2++) {
        let e4 = r2;
        e4 = (2863311530 & e4) >>> 1 | (1431655765 & e4) << 1, e4 = (3435973836 & e4) >>> 2 | (858993459 & e4) << 2, e4 = (4042322160 & e4) >>> 4 | (252645135 & e4) << 4, e4 = (4278255360 & e4) >>> 8 | (16711935 & e4) << 8, t3.r[r2] = (e4 >>> 16 | e4 << 16) >>> 17;
      }
      function n(e4, t4, r3) {
        for (; 0 != t4--; ) e4.push(0, r3);
      }
      for (r2 = 0; r2 < 32; r2++) t3.q[r2] = t3.S[r2] << 3 | t3.T[r2], t3.c[r2] = t3.p[r2] << 4 | t3.z[r2];
      n(t3._, 144, 8), n(t3._, 112, 9), n(t3._, 24, 7), n(t3._, 8, 8), e3.H.n(t3._, 9), e3.H.A(t3._, 9, t3.J), e3.H.l(t3._, 9), n(t3.$, 32, 5), e3.H.n(t3.$, 5), e3.H.A(t3.$, 5, t3.h), e3.H.l(t3.$, 5), n(t3.Q, 19, 0), n(t3.C, 286, 0), n(t3.D, 30, 0), n(t3.v, 320, 0);
    })(), e3.H.N;
  })();
  function _getBPP(e3) {
    return [1, null, 3, 1, 2, null, 4][e3.ctype] * e3.depth;
  }
  function _filterZero(e3, t3, r2, i2, o2) {
    let a2 = _getBPP(t3);
    const s2 = Math.ceil(i2 * a2 / 8);
    let f2, l2;
    a2 = Math.ceil(a2 / 8);
    let c2 = e3[r2], u = 0;
    if (c2 > 1 && (e3[r2] = [0, 0, 1][c2 - 2]), 3 == c2) for (u = a2; u < s2; u++) e3[u + 1] = e3[u + 1] + (e3[u + 1 - a2] >>> 1) & 255;
    for (let t4 = 0; t4 < o2; t4++) if (f2 = r2 + t4 * s2, l2 = f2 + t4 + 1, c2 = e3[l2 - 1], u = 0, 0 == c2) for (; u < s2; u++) e3[f2 + u] = e3[l2 + u];
    else if (1 == c2) {
      for (; u < a2; u++) e3[f2 + u] = e3[l2 + u];
      for (; u < s2; u++) e3[f2 + u] = e3[l2 + u] + e3[f2 + u - a2];
    } else if (2 == c2) for (; u < s2; u++) e3[f2 + u] = e3[l2 + u] + e3[f2 + u - s2];
    else if (3 == c2) {
      for (; u < a2; u++) e3[f2 + u] = e3[l2 + u] + (e3[f2 + u - s2] >>> 1);
      for (; u < s2; u++) e3[f2 + u] = e3[l2 + u] + (e3[f2 + u - s2] + e3[f2 + u - a2] >>> 1);
    } else {
      for (; u < a2; u++) e3[f2 + u] = e3[l2 + u] + _paeth(0, e3[f2 + u - s2], 0);
      for (; u < s2; u++) e3[f2 + u] = e3[l2 + u] + _paeth(e3[f2 + u - a2], e3[f2 + u - s2], e3[f2 + u - a2 - s2]);
    }
    return e3;
  }
  function _paeth(e3, t3, r2) {
    const i2 = e3 + t3 - r2, o2 = i2 - e3, a2 = i2 - t3, s2 = i2 - r2;
    return o2 * o2 <= a2 * a2 && o2 * o2 <= s2 * s2 ? e3 : a2 * a2 <= s2 * s2 ? t3 : r2;
  }
  function _IHDR(t3, r2, i2) {
    i2.width = e2.readUint(t3, r2), r2 += 4, i2.height = e2.readUint(t3, r2), r2 += 4, i2.depth = t3[r2], r2++, i2.ctype = t3[r2], r2++, i2.compress = t3[r2], r2++, i2.filter = t3[r2], r2++, i2.interlace = t3[r2], r2++;
  }
  function _copyTile(e3, t3, r2, i2, o2, a2, s2, f2, l2) {
    const c2 = Math.min(t3, o2), u = Math.min(r2, a2);
    let h = 0, d = 0;
    for (let r3 = 0; r3 < u; r3++) for (let a3 = 0; a3 < c2; a3++) if (s2 >= 0 && f2 >= 0 ? (h = r3 * t3 + a3 << 2, d = (f2 + r3) * o2 + s2 + a3 << 2) : (h = (-f2 + r3) * t3 - s2 + a3 << 2, d = r3 * o2 + a3 << 2), 0 == l2) i2[d] = e3[h], i2[d + 1] = e3[h + 1], i2[d + 2] = e3[h + 2], i2[d + 3] = e3[h + 3];
    else if (1 == l2) {
      var A = e3[h + 3] * (1 / 255), g = e3[h] * A, p = e3[h + 1] * A, m = e3[h + 2] * A, w = i2[d + 3] * (1 / 255), v = i2[d] * w, b = i2[d + 1] * w, y = i2[d + 2] * w;
      const t4 = 1 - A, r4 = A + w * t4, o3 = 0 == r4 ? 0 : 1 / r4;
      i2[d + 3] = 255 * r4, i2[d + 0] = (g + v * t4) * o3, i2[d + 1] = (p + b * t4) * o3, i2[d + 2] = (m + y * t4) * o3;
    } else if (2 == l2) {
      A = e3[h + 3], g = e3[h], p = e3[h + 1], m = e3[h + 2], w = i2[d + 3], v = i2[d], b = i2[d + 1], y = i2[d + 2];
      A == w && g == v && p == b && m == y ? (i2[d] = 0, i2[d + 1] = 0, i2[d + 2] = 0, i2[d + 3] = 0) : (i2[d] = g, i2[d + 1] = p, i2[d + 2] = m, i2[d + 3] = A);
    } else if (3 == l2) {
      A = e3[h + 3], g = e3[h], p = e3[h + 1], m = e3[h + 2], w = i2[d + 3], v = i2[d], b = i2[d + 1], y = i2[d + 2];
      if (A == w && g == v && p == b && m == y) continue;
      if (A < 220 && w > 20) return false;
    }
    return true;
  }
  return { decode: function decode(r2) {
    const i2 = new Uint8Array(r2);
    let o2 = 8;
    const a2 = e2, s2 = a2.readUshort, f2 = a2.readUint, l2 = { tabs: {}, frames: [] }, c2 = new Uint8Array(i2.length);
    let u, h = 0, d = 0;
    const A = [137, 80, 78, 71, 13, 10, 26, 10];
    for (var g = 0; g < 8; g++) if (i2[g] != A[g]) throw "The input is not a PNG file!";
    for (; o2 < i2.length; ) {
      const e3 = a2.readUint(i2, o2);
      o2 += 4;
      const r3 = a2.readASCII(i2, o2, 4);
      if (o2 += 4, "IHDR" == r3) _IHDR(i2, o2, l2);
      else if ("iCCP" == r3) {
        for (var p = o2; 0 != i2[p]; ) p++;
        a2.readASCII(i2, o2, p - o2), i2[p + 1];
        const s3 = i2.slice(p + 2, o2 + e3);
        let f3 = null;
        try {
          f3 = _inflate(s3);
        } catch (e4) {
          f3 = t2(s3);
        }
        l2.tabs[r3] = f3;
      } else if ("CgBI" == r3) l2.tabs[r3] = i2.slice(o2, o2 + 4);
      else if ("IDAT" == r3) {
        for (g = 0; g < e3; g++) c2[h + g] = i2[o2 + g];
        h += e3;
      } else if ("acTL" == r3) l2.tabs[r3] = { num_frames: f2(i2, o2), num_plays: f2(i2, o2 + 4) }, u = new Uint8Array(i2.length);
      else if ("fcTL" == r3) {
        if (0 != d) (E = l2.frames[l2.frames.length - 1]).data = _decompress(l2, u.slice(0, d), E.rect.width, E.rect.height), d = 0;
        const e4 = { x: f2(i2, o2 + 12), y: f2(i2, o2 + 16), width: f2(i2, o2 + 4), height: f2(i2, o2 + 8) };
        let t3 = s2(i2, o2 + 22);
        t3 = s2(i2, o2 + 20) / (0 == t3 ? 100 : t3);
        const r4 = { rect: e4, delay: Math.round(1e3 * t3), dispose: i2[o2 + 24], blend: i2[o2 + 25] };
        l2.frames.push(r4);
      } else if ("fdAT" == r3) {
        for (g = 0; g < e3 - 4; g++) u[d + g] = i2[o2 + g + 4];
        d += e3 - 4;
      } else if ("pHYs" == r3) l2.tabs[r3] = [a2.readUint(i2, o2), a2.readUint(i2, o2 + 4), i2[o2 + 8]];
      else if ("cHRM" == r3) {
        l2.tabs[r3] = [];
        for (g = 0; g < 8; g++) l2.tabs[r3].push(a2.readUint(i2, o2 + 4 * g));
      } else if ("tEXt" == r3 || "zTXt" == r3) {
        null == l2.tabs[r3] && (l2.tabs[r3] = {});
        var m = a2.nextZero(i2, o2), w = a2.readASCII(i2, o2, m - o2), v = o2 + e3 - m - 1;
        if ("tEXt" == r3) y = a2.readASCII(i2, m + 1, v);
        else {
          var b = _inflate(i2.slice(m + 2, m + 2 + v));
          y = a2.readUTF8(b, 0, b.length);
        }
        l2.tabs[r3][w] = y;
      } else if ("iTXt" == r3) {
        null == l2.tabs[r3] && (l2.tabs[r3] = {});
        m = 0, p = o2;
        m = a2.nextZero(i2, p);
        w = a2.readASCII(i2, p, m - p);
        const t3 = i2[p = m + 1];
        var y;
        i2[p + 1], p += 2, m = a2.nextZero(i2, p), a2.readASCII(i2, p, m - p), p = m + 1, m = a2.nextZero(i2, p), a2.readUTF8(i2, p, m - p);
        v = e3 - ((p = m + 1) - o2);
        if (0 == t3) y = a2.readUTF8(i2, p, v);
        else {
          b = _inflate(i2.slice(p, p + v));
          y = a2.readUTF8(b, 0, b.length);
        }
        l2.tabs[r3][w] = y;
      } else if ("PLTE" == r3) l2.tabs[r3] = a2.readBytes(i2, o2, e3);
      else if ("hIST" == r3) {
        const e4 = l2.tabs.PLTE.length / 3;
        l2.tabs[r3] = [];
        for (g = 0; g < e4; g++) l2.tabs[r3].push(s2(i2, o2 + 2 * g));
      } else if ("tRNS" == r3) 3 == l2.ctype ? l2.tabs[r3] = a2.readBytes(i2, o2, e3) : 0 == l2.ctype ? l2.tabs[r3] = s2(i2, o2) : 2 == l2.ctype && (l2.tabs[r3] = [s2(i2, o2), s2(i2, o2 + 2), s2(i2, o2 + 4)]);
      else if ("gAMA" == r3) l2.tabs[r3] = a2.readUint(i2, o2) / 1e5;
      else if ("sRGB" == r3) l2.tabs[r3] = i2[o2];
      else if ("bKGD" == r3) 0 == l2.ctype || 4 == l2.ctype ? l2.tabs[r3] = [s2(i2, o2)] : 2 == l2.ctype || 6 == l2.ctype ? l2.tabs[r3] = [s2(i2, o2), s2(i2, o2 + 2), s2(i2, o2 + 4)] : 3 == l2.ctype && (l2.tabs[r3] = i2[o2]);
      else if ("IEND" == r3) break;
      o2 += e3, a2.readUint(i2, o2), o2 += 4;
    }
    var E;
    return 0 != d && ((E = l2.frames[l2.frames.length - 1]).data = _decompress(l2, u.slice(0, d), E.rect.width, E.rect.height)), l2.data = _decompress(l2, c2, l2.width, l2.height), delete l2.compress, delete l2.interlace, delete l2.filter, l2;
  }, toRGBA8: function toRGBA8(e3) {
    const t3 = e3.width, r2 = e3.height;
    if (null == e3.tabs.acTL) return [decodeImage(e3.data, t3, r2, e3).buffer];
    const i2 = [];
    null == e3.frames[0].data && (e3.frames[0].data = e3.data);
    const o2 = t3 * r2 * 4, a2 = new Uint8Array(o2), s2 = new Uint8Array(o2), f2 = new Uint8Array(o2);
    for (let c2 = 0; c2 < e3.frames.length; c2++) {
      const u = e3.frames[c2], h = u.rect.x, d = u.rect.y, A = u.rect.width, g = u.rect.height, p = decodeImage(u.data, A, g, e3);
      if (0 != c2) for (var l2 = 0; l2 < o2; l2++) f2[l2] = a2[l2];
      if (0 == u.blend ? _copyTile(p, A, g, a2, t3, r2, h, d, 0) : 1 == u.blend && _copyTile(p, A, g, a2, t3, r2, h, d, 1), i2.push(a2.buffer.slice(0)), 0 == u.dispose) ;
      else if (1 == u.dispose) _copyTile(s2, A, g, a2, t3, r2, h, d, 0);
      else if (2 == u.dispose) for (l2 = 0; l2 < o2; l2++) a2[l2] = f2[l2];
    }
    return i2;
  }, _paeth, _copyTile, _bin: e2 };
})();
!(function() {
  const { _copyTile: e2 } = UPNG, { _bin: t2 } = UPNG, r2 = UPNG._paeth;
  var i2 = { table: (function() {
    const e3 = new Uint32Array(256);
    for (let t3 = 0; t3 < 256; t3++) {
      let r3 = t3;
      for (let e4 = 0; e4 < 8; e4++) 1 & r3 ? r3 = 3988292384 ^ r3 >>> 1 : r3 >>>= 1;
      e3[t3] = r3;
    }
    return e3;
  })(), update(e3, t3, r3, o3) {
    for (let a2 = 0; a2 < o3; a2++) e3 = i2.table[255 & (e3 ^ t3[r3 + a2])] ^ e3 >>> 8;
    return e3;
  }, crc: (e3, t3, r3) => 4294967295 ^ i2.update(4294967295, e3, t3, r3) };
  function addErr(e3, t3, r3, i3) {
    t3[r3] += e3[0] * i3 >> 4, t3[r3 + 1] += e3[1] * i3 >> 4, t3[r3 + 2] += e3[2] * i3 >> 4, t3[r3 + 3] += e3[3] * i3 >> 4;
  }
  function N(e3) {
    return Math.max(0, Math.min(255, e3));
  }
  function D(e3, t3) {
    const r3 = e3[0] - t3[0], i3 = e3[1] - t3[1], o3 = e3[2] - t3[2], a2 = e3[3] - t3[3];
    return r3 * r3 + i3 * i3 + o3 * o3 + a2 * a2;
  }
  function dither(e3, t3, r3, i3, o3, a2, s2) {
    null == s2 && (s2 = 1);
    const f2 = i3.length, l2 = [];
    for (var c2 = 0; c2 < f2; c2++) {
      const e4 = i3[c2];
      l2.push([e4 >>> 0 & 255, e4 >>> 8 & 255, e4 >>> 16 & 255, e4 >>> 24 & 255]);
    }
    for (c2 = 0; c2 < f2; c2++) {
      let e4 = 4294967295;
      for (var u = 0, h = 0; h < f2; h++) {
        var d = D(l2[c2], l2[h]);
        h != c2 && d < e4 && (e4 = d, u = h);
      }
    }
    const A = new Uint32Array(o3.buffer), g = new Int16Array(t3 * r3 * 4), p = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
    for (c2 = 0; c2 < p.length; c2++) p[c2] = 255 * ((p[c2] + 0.5) / 16 - 0.5);
    for (let o4 = 0; o4 < r3; o4++) for (let w = 0; w < t3; w++) {
      var m;
      c2 = 4 * (o4 * t3 + w);
      if (2 != s2) m = [N(e3[c2] + g[c2]), N(e3[c2 + 1] + g[c2 + 1]), N(e3[c2 + 2] + g[c2 + 2]), N(e3[c2 + 3] + g[c2 + 3])];
      else {
        d = p[4 * (3 & o4) + (3 & w)];
        m = [N(e3[c2] + d), N(e3[c2 + 1] + d), N(e3[c2 + 2] + d), N(e3[c2 + 3] + d)];
      }
      u = 0;
      let v = 16777215;
      for (h = 0; h < f2; h++) {
        const e4 = D(m, l2[h]);
        e4 < v && (v = e4, u = h);
      }
      const b = l2[u], y = [m[0] - b[0], m[1] - b[1], m[2] - b[2], m[3] - b[3]];
      1 == s2 && (w != t3 - 1 && addErr(y, g, c2 + 4, 7), o4 != r3 - 1 && (0 != w && addErr(y, g, c2 + 4 * t3 - 4, 3), addErr(y, g, c2 + 4 * t3, 5), w != t3 - 1 && addErr(y, g, c2 + 4 * t3 + 4, 1))), a2[c2 >> 2] = u, A[c2 >> 2] = i3[u];
    }
  }
  function _main(e3, r3, o3, a2, s2) {
    null == s2 && (s2 = {});
    const { crc: f2 } = i2, l2 = t2.writeUint, c2 = t2.writeUshort, u = t2.writeASCII;
    let h = 8;
    const d = e3.frames.length > 1;
    let A, g = false, p = 33 + (d ? 20 : 0);
    if (null != s2.sRGB && (p += 13), null != s2.pHYs && (p += 21), null != s2.iCCP && (A = pako.deflate(s2.iCCP), p += 21 + A.length + 4), 3 == e3.ctype) {
      for (var m = e3.plte.length, w = 0; w < m; w++) e3.plte[w] >>> 24 != 255 && (g = true);
      p += 8 + 3 * m + 4 + (g ? 8 + 1 * m + 4 : 0);
    }
    for (var v = 0; v < e3.frames.length; v++) {
      d && (p += 38), p += (F = e3.frames[v]).cimg.length + 12, 0 != v && (p += 4);
    }
    p += 12;
    const b = new Uint8Array(p), y = [137, 80, 78, 71, 13, 10, 26, 10];
    for (w = 0; w < 8; w++) b[w] = y[w];
    if (l2(b, h, 13), h += 4, u(b, h, "IHDR"), h += 4, l2(b, h, r3), h += 4, l2(b, h, o3), h += 4, b[h] = e3.depth, h++, b[h] = e3.ctype, h++, b[h] = 0, h++, b[h] = 0, h++, b[h] = 0, h++, l2(b, h, f2(b, h - 17, 17)), h += 4, null != s2.sRGB && (l2(b, h, 1), h += 4, u(b, h, "sRGB"), h += 4, b[h] = s2.sRGB, h++, l2(b, h, f2(b, h - 5, 5)), h += 4), null != s2.iCCP) {
      const e4 = 13 + A.length;
      l2(b, h, e4), h += 4, u(b, h, "iCCP"), h += 4, u(b, h, "ICC profile"), h += 11, h += 2, b.set(A, h), h += A.length, l2(b, h, f2(b, h - (e4 + 4), e4 + 4)), h += 4;
    }
    if (null != s2.pHYs && (l2(b, h, 9), h += 4, u(b, h, "pHYs"), h += 4, l2(b, h, s2.pHYs[0]), h += 4, l2(b, h, s2.pHYs[1]), h += 4, b[h] = s2.pHYs[2], h++, l2(b, h, f2(b, h - 13, 13)), h += 4), d && (l2(b, h, 8), h += 4, u(b, h, "acTL"), h += 4, l2(b, h, e3.frames.length), h += 4, l2(b, h, null != s2.loop ? s2.loop : 0), h += 4, l2(b, h, f2(b, h - 12, 12)), h += 4), 3 == e3.ctype) {
      l2(b, h, 3 * (m = e3.plte.length)), h += 4, u(b, h, "PLTE"), h += 4;
      for (w = 0; w < m; w++) {
        const t3 = 3 * w, r4 = e3.plte[w], i3 = 255 & r4, o4 = r4 >>> 8 & 255, a3 = r4 >>> 16 & 255;
        b[h + t3 + 0] = i3, b[h + t3 + 1] = o4, b[h + t3 + 2] = a3;
      }
      if (h += 3 * m, l2(b, h, f2(b, h - 3 * m - 4, 3 * m + 4)), h += 4, g) {
        l2(b, h, m), h += 4, u(b, h, "tRNS"), h += 4;
        for (w = 0; w < m; w++) b[h + w] = e3.plte[w] >>> 24 & 255;
        h += m, l2(b, h, f2(b, h - m - 4, m + 4)), h += 4;
      }
    }
    let E = 0;
    for (v = 0; v < e3.frames.length; v++) {
      var F = e3.frames[v];
      d && (l2(b, h, 26), h += 4, u(b, h, "fcTL"), h += 4, l2(b, h, E++), h += 4, l2(b, h, F.rect.width), h += 4, l2(b, h, F.rect.height), h += 4, l2(b, h, F.rect.x), h += 4, l2(b, h, F.rect.y), h += 4, c2(b, h, a2[v]), h += 2, c2(b, h, 1e3), h += 2, b[h] = F.dispose, h++, b[h] = F.blend, h++, l2(b, h, f2(b, h - 30, 30)), h += 4);
      const t3 = F.cimg;
      l2(b, h, (m = t3.length) + (0 == v ? 0 : 4)), h += 4;
      const r4 = h;
      u(b, h, 0 == v ? "IDAT" : "fdAT"), h += 4, 0 != v && (l2(b, h, E++), h += 4), b.set(t3, h), h += m, l2(b, h, f2(b, r4, h - r4)), h += 4;
    }
    return l2(b, h, 0), h += 4, u(b, h, "IEND"), h += 4, l2(b, h, f2(b, h - 4, 4)), h += 4, b.buffer;
  }
  function compressPNG(e3, t3, r3) {
    for (let i3 = 0; i3 < e3.frames.length; i3++) {
      const o3 = e3.frames[i3];
      o3.rect.width;
      const a2 = o3.rect.height, s2 = new Uint8Array(a2 * o3.bpl + a2);
      o3.cimg = _filterZero(o3.img, a2, o3.bpp, o3.bpl, s2, t3, r3);
    }
  }
  function compress2(t3, r3, i3, o3, a2) {
    const s2 = a2[0], f2 = a2[1], l2 = a2[2], c2 = a2[3], u = a2[4], h = a2[5];
    let d = 6, A = 8, g = 255;
    for (var p = 0; p < t3.length; p++) {
      const e3 = new Uint8Array(t3[p]);
      for (var m = e3.length, w = 0; w < m; w += 4) g &= e3[w + 3];
    }
    const v = 255 != g, b = (function framize(t4, r4, i4, o4, a3, s3) {
      const f3 = [];
      for (var l3 = 0; l3 < t4.length; l3++) {
        const h3 = new Uint8Array(t4[l3]), A3 = new Uint32Array(h3.buffer);
        var c3;
        let g2 = 0, p2 = 0, m2 = r4, w2 = i4, v2 = o4 ? 1 : 0;
        if (0 != l3) {
          const b2 = s3 || o4 || 1 == l3 || 0 != f3[l3 - 2].dispose ? 1 : 2;
          let y2 = 0, E2 = 1e9;
          for (let e3 = 0; e3 < b2; e3++) {
            var u2 = new Uint8Array(t4[l3 - 1 - e3]);
            const o5 = new Uint32Array(t4[l3 - 1 - e3]);
            let s4 = r4, f4 = i4, c4 = -1, h4 = -1;
            for (let e4 = 0; e4 < i4; e4++) for (let t5 = 0; t5 < r4; t5++) {
              A3[d2 = e4 * r4 + t5] != o5[d2] && (t5 < s4 && (s4 = t5), t5 > c4 && (c4 = t5), e4 < f4 && (f4 = e4), e4 > h4 && (h4 = e4));
            }
            -1 == c4 && (s4 = f4 = c4 = h4 = 0), a3 && (1 == (1 & s4) && s4--, 1 == (1 & f4) && f4--);
            const v3 = (c4 - s4 + 1) * (h4 - f4 + 1);
            v3 < E2 && (E2 = v3, y2 = e3, g2 = s4, p2 = f4, m2 = c4 - s4 + 1, w2 = h4 - f4 + 1);
          }
          u2 = new Uint8Array(t4[l3 - 1 - y2]);
          1 == y2 && (f3[l3 - 1].dispose = 2), c3 = new Uint8Array(m2 * w2 * 4), e2(u2, r4, i4, c3, m2, w2, -g2, -p2, 0), v2 = e2(h3, r4, i4, c3, m2, w2, -g2, -p2, 3) ? 1 : 0, 1 == v2 ? _prepareDiff(h3, r4, i4, c3, { x: g2, y: p2, width: m2, height: w2 }) : e2(h3, r4, i4, c3, m2, w2, -g2, -p2, 0);
        } else c3 = h3.slice(0);
        f3.push({ rect: { x: g2, y: p2, width: m2, height: w2 }, img: c3, blend: v2, dispose: 0 });
      }
      if (o4) for (l3 = 0; l3 < f3.length; l3++) {
        if (1 == (A2 = f3[l3]).blend) continue;
        const e3 = A2.rect, o5 = f3[l3 - 1].rect, s4 = Math.min(e3.x, o5.x), c4 = Math.min(e3.y, o5.y), u3 = { x: s4, y: c4, width: Math.max(e3.x + e3.width, o5.x + o5.width) - s4, height: Math.max(e3.y + e3.height, o5.y + o5.height) - c4 };
        f3[l3 - 1].dispose = 1, l3 - 1 != 0 && _updateFrame(t4, r4, i4, f3, l3 - 1, u3, a3), _updateFrame(t4, r4, i4, f3, l3, u3, a3);
      }
      let h2 = 0;
      if (1 != t4.length) for (var d2 = 0; d2 < f3.length; d2++) {
        var A2;
        h2 += (A2 = f3[d2]).rect.width * A2.rect.height;
      }
      return f3;
    })(t3, r3, i3, s2, f2, l2), y = {}, E = [], F = [];
    if (0 != o3) {
      const e3 = [];
      for (w = 0; w < b.length; w++) e3.push(b[w].img.buffer);
      const t4 = (function concatRGBA(e4) {
        let t5 = 0;
        for (var r5 = 0; r5 < e4.length; r5++) t5 += e4[r5].byteLength;
        const i5 = new Uint8Array(t5);
        let o4 = 0;
        for (r5 = 0; r5 < e4.length; r5++) {
          const t6 = new Uint8Array(e4[r5]), a3 = t6.length;
          for (let e5 = 0; e5 < a3; e5 += 4) {
            let r6 = t6[e5], a4 = t6[e5 + 1], s3 = t6[e5 + 2];
            const f3 = t6[e5 + 3];
            0 == f3 && (r6 = a4 = s3 = 0), i5[o4 + e5] = r6, i5[o4 + e5 + 1] = a4, i5[o4 + e5 + 2] = s3, i5[o4 + e5 + 3] = f3;
          }
          o4 += a3;
        }
        return i5.buffer;
      })(e3), r4 = quantize(t4, o3);
      for (w = 0; w < r4.plte.length; w++) E.push(r4.plte[w].est.rgba);
      let i4 = 0;
      for (w = 0; w < b.length; w++) {
        const e4 = (B = b[w]).img.length;
        var _ = new Uint8Array(r4.inds.buffer, i4 >> 2, e4 >> 2);
        F.push(_);
        const t5 = new Uint8Array(r4.abuf, i4, e4);
        h && dither(B.img, B.rect.width, B.rect.height, E, t5, _), B.img.set(t5), i4 += e4;
      }
    } else for (p = 0; p < b.length; p++) {
      var B = b[p];
      const e3 = new Uint32Array(B.img.buffer);
      var U = B.rect.width;
      m = e3.length, _ = new Uint8Array(m);
      F.push(_);
      for (w = 0; w < m; w++) {
        const t4 = e3[w];
        if (0 != w && t4 == e3[w - 1]) _[w] = _[w - 1];
        else if (w > U && t4 == e3[w - U]) _[w] = _[w - U];
        else {
          let e4 = y[t4];
          if (null == e4 && (y[t4] = e4 = E.length, E.push(t4), E.length >= 300)) break;
          _[w] = e4;
        }
      }
    }
    const C = E.length;
    C <= 256 && 0 == u && (A = C <= 2 ? 1 : C <= 4 ? 2 : C <= 16 ? 4 : 8, A = Math.max(A, c2));
    for (p = 0; p < b.length; p++) {
      (B = b[p]).rect.x, B.rect.y;
      U = B.rect.width;
      const e3 = B.rect.height;
      let t4 = B.img;
      new Uint32Array(t4.buffer);
      let r4 = 4 * U, i4 = 4;
      if (C <= 256 && 0 == u) {
        r4 = Math.ceil(A * U / 8);
        var I = new Uint8Array(r4 * e3);
        const o4 = F[p];
        for (let t5 = 0; t5 < e3; t5++) {
          w = t5 * r4;
          const e4 = t5 * U;
          if (8 == A) for (var Q = 0; Q < U; Q++) I[w + Q] = o4[e4 + Q];
          else if (4 == A) for (Q = 0; Q < U; Q++) I[w + (Q >> 1)] |= o4[e4 + Q] << 4 - 4 * (1 & Q);
          else if (2 == A) for (Q = 0; Q < U; Q++) I[w + (Q >> 2)] |= o4[e4 + Q] << 6 - 2 * (3 & Q);
          else if (1 == A) for (Q = 0; Q < U; Q++) I[w + (Q >> 3)] |= o4[e4 + Q] << 7 - 1 * (7 & Q);
        }
        t4 = I, d = 3, i4 = 1;
      } else if (0 == v && 1 == b.length) {
        I = new Uint8Array(U * e3 * 3);
        const o4 = U * e3;
        for (w = 0; w < o4; w++) {
          const e4 = 3 * w, r5 = 4 * w;
          I[e4] = t4[r5], I[e4 + 1] = t4[r5 + 1], I[e4 + 2] = t4[r5 + 2];
        }
        t4 = I, d = 2, i4 = 3, r4 = 3 * U;
      }
      B.img = t4, B.bpl = r4, B.bpp = i4;
    }
    return { ctype: d, depth: A, plte: E, frames: b };
  }
  function _updateFrame(t3, r3, i3, o3, a2, s2, f2) {
    const l2 = Uint8Array, c2 = Uint32Array, u = new l2(t3[a2 - 1]), h = new c2(t3[a2 - 1]), d = a2 + 1 < t3.length ? new l2(t3[a2 + 1]) : null, A = new l2(t3[a2]), g = new c2(A.buffer);
    let p = r3, m = i3, w = -1, v = -1;
    for (let e3 = 0; e3 < s2.height; e3++) for (let t4 = 0; t4 < s2.width; t4++) {
      const i4 = s2.x + t4, f3 = s2.y + e3, l3 = f3 * r3 + i4, c3 = g[l3];
      0 == c3 || 0 == o3[a2 - 1].dispose && h[l3] == c3 && (null == d || 0 != d[4 * l3 + 3]) || (i4 < p && (p = i4), i4 > w && (w = i4), f3 < m && (m = f3), f3 > v && (v = f3));
    }
    -1 == w && (p = m = w = v = 0), f2 && (1 == (1 & p) && p--, 1 == (1 & m) && m--), s2 = { x: p, y: m, width: w - p + 1, height: v - m + 1 };
    const b = o3[a2];
    b.rect = s2, b.blend = 1, b.img = new Uint8Array(s2.width * s2.height * 4), 0 == o3[a2 - 1].dispose ? (e2(u, r3, i3, b.img, s2.width, s2.height, -s2.x, -s2.y, 0), _prepareDiff(A, r3, i3, b.img, s2)) : e2(A, r3, i3, b.img, s2.width, s2.height, -s2.x, -s2.y, 0);
  }
  function _prepareDiff(t3, r3, i3, o3, a2) {
    e2(t3, r3, i3, o3, a2.width, a2.height, -a2.x, -a2.y, 2);
  }
  function _filterZero(e3, t3, r3, i3, o3, a2, s2) {
    const f2 = [];
    let l2, c2 = [0, 1, 2, 3, 4];
    -1 != a2 ? c2 = [a2] : (t3 * i3 > 5e5 || 1 == r3) && (c2 = [0]), s2 && (l2 = { level: 0 });
    const u = UZIP;
    for (var h = 0; h < c2.length; h++) {
      for (let a3 = 0; a3 < t3; a3++) _filterLine(o3, e3, a3, i3, r3, c2[h]);
      f2.push(u.deflate(o3, l2));
    }
    let d, A = 1e9;
    for (h = 0; h < f2.length; h++) f2[h].length < A && (d = h, A = f2[h].length);
    return f2[d];
  }
  function _filterLine(e3, t3, i3, o3, a2, s2) {
    const f2 = i3 * o3;
    let l2 = f2 + i3;
    if (e3[l2] = s2, l2++, 0 == s2) if (o3 < 500) for (var c2 = 0; c2 < o3; c2++) e3[l2 + c2] = t3[f2 + c2];
    else e3.set(new Uint8Array(t3.buffer, f2, o3), l2);
    else if (1 == s2) {
      for (c2 = 0; c2 < a2; c2++) e3[l2 + c2] = t3[f2 + c2];
      for (c2 = a2; c2 < o3; c2++) e3[l2 + c2] = t3[f2 + c2] - t3[f2 + c2 - a2] + 256 & 255;
    } else if (0 == i3) {
      for (c2 = 0; c2 < a2; c2++) e3[l2 + c2] = t3[f2 + c2];
      if (2 == s2) for (c2 = a2; c2 < o3; c2++) e3[l2 + c2] = t3[f2 + c2];
      if (3 == s2) for (c2 = a2; c2 < o3; c2++) e3[l2 + c2] = t3[f2 + c2] - (t3[f2 + c2 - a2] >> 1) + 256 & 255;
      if (4 == s2) for (c2 = a2; c2 < o3; c2++) e3[l2 + c2] = t3[f2 + c2] - r2(t3[f2 + c2 - a2], 0, 0) + 256 & 255;
    } else {
      if (2 == s2) for (c2 = 0; c2 < o3; c2++) e3[l2 + c2] = t3[f2 + c2] + 256 - t3[f2 + c2 - o3] & 255;
      if (3 == s2) {
        for (c2 = 0; c2 < a2; c2++) e3[l2 + c2] = t3[f2 + c2] + 256 - (t3[f2 + c2 - o3] >> 1) & 255;
        for (c2 = a2; c2 < o3; c2++) e3[l2 + c2] = t3[f2 + c2] + 256 - (t3[f2 + c2 - o3] + t3[f2 + c2 - a2] >> 1) & 255;
      }
      if (4 == s2) {
        for (c2 = 0; c2 < a2; c2++) e3[l2 + c2] = t3[f2 + c2] + 256 - r2(0, t3[f2 + c2 - o3], 0) & 255;
        for (c2 = a2; c2 < o3; c2++) e3[l2 + c2] = t3[f2 + c2] + 256 - r2(t3[f2 + c2 - a2], t3[f2 + c2 - o3], t3[f2 + c2 - a2 - o3]) & 255;
      }
    }
  }
  function quantize(e3, t3) {
    const r3 = new Uint8Array(e3), i3 = r3.slice(0), o3 = new Uint32Array(i3.buffer), a2 = getKDtree(i3, t3), s2 = a2[0], f2 = a2[1], l2 = r3.length, c2 = new Uint8Array(l2 >> 2);
    let u;
    if (r3.length < 2e7) for (var h = 0; h < l2; h += 4) {
      u = getNearest(s2, d = r3[h] * (1 / 255), A = r3[h + 1] * (1 / 255), g = r3[h + 2] * (1 / 255), p = r3[h + 3] * (1 / 255)), c2[h >> 2] = u.ind, o3[h >> 2] = u.est.rgba;
    }
    else for (h = 0; h < l2; h += 4) {
      var d = r3[h] * (1 / 255), A = r3[h + 1] * (1 / 255), g = r3[h + 2] * (1 / 255), p = r3[h + 3] * (1 / 255);
      for (u = s2; u.left; ) u = planeDst(u.est, d, A, g, p) <= 0 ? u.left : u.right;
      c2[h >> 2] = u.ind, o3[h >> 2] = u.est.rgba;
    }
    return { abuf: i3.buffer, inds: c2, plte: f2 };
  }
  function getKDtree(e3, t3, r3) {
    null == r3 && (r3 = 1e-4);
    const i3 = new Uint32Array(e3.buffer), o3 = { i0: 0, i1: e3.length, bst: null, est: null, tdst: 0, left: null, right: null };
    o3.bst = stats(e3, o3.i0, o3.i1), o3.est = estats(o3.bst);
    const a2 = [o3];
    for (; a2.length < t3; ) {
      let t4 = 0, o4 = 0;
      for (var s2 = 0; s2 < a2.length; s2++) a2[s2].est.L > t4 && (t4 = a2[s2].est.L, o4 = s2);
      if (t4 < r3) break;
      const f2 = a2[o4], l2 = splitPixels(e3, i3, f2.i0, f2.i1, f2.est.e, f2.est.eMq255);
      if (f2.i0 >= l2 || f2.i1 <= l2) {
        f2.est.L = 0;
        continue;
      }
      const c2 = { i0: f2.i0, i1: l2, bst: null, est: null, tdst: 0, left: null, right: null };
      c2.bst = stats(e3, c2.i0, c2.i1), c2.est = estats(c2.bst);
      const u = { i0: l2, i1: f2.i1, bst: null, est: null, tdst: 0, left: null, right: null };
      u.bst = { R: [], m: [], N: f2.bst.N - c2.bst.N };
      for (s2 = 0; s2 < 16; s2++) u.bst.R[s2] = f2.bst.R[s2] - c2.bst.R[s2];
      for (s2 = 0; s2 < 4; s2++) u.bst.m[s2] = f2.bst.m[s2] - c2.bst.m[s2];
      u.est = estats(u.bst), f2.left = c2, f2.right = u, a2[o4] = c2, a2.push(u);
    }
    a2.sort(((e4, t4) => t4.bst.N - e4.bst.N));
    for (s2 = 0; s2 < a2.length; s2++) a2[s2].ind = s2;
    return [o3, a2];
  }
  function getNearest(e3, t3, r3, i3, o3) {
    if (null == e3.left) return e3.tdst = (function dist(e4, t4, r4, i4, o4) {
      const a3 = t4 - e4[0], s3 = r4 - e4[1], f3 = i4 - e4[2], l3 = o4 - e4[3];
      return a3 * a3 + s3 * s3 + f3 * f3 + l3 * l3;
    })(e3.est.q, t3, r3, i3, o3), e3;
    const a2 = planeDst(e3.est, t3, r3, i3, o3);
    let s2 = e3.left, f2 = e3.right;
    a2 > 0 && (s2 = e3.right, f2 = e3.left);
    const l2 = getNearest(s2, t3, r3, i3, o3);
    if (l2.tdst <= a2 * a2) return l2;
    const c2 = getNearest(f2, t3, r3, i3, o3);
    return c2.tdst < l2.tdst ? c2 : l2;
  }
  function planeDst(e3, t3, r3, i3, o3) {
    const { e: a2 } = e3;
    return a2[0] * t3 + a2[1] * r3 + a2[2] * i3 + a2[3] * o3 - e3.eMq;
  }
  function splitPixels(e3, t3, r3, i3, o3, a2) {
    for (i3 -= 4; r3 < i3; ) {
      for (; vecDot(e3, r3, o3) <= a2; ) r3 += 4;
      for (; vecDot(e3, i3, o3) > a2; ) i3 -= 4;
      if (r3 >= i3) break;
      const s2 = t3[r3 >> 2];
      t3[r3 >> 2] = t3[i3 >> 2], t3[i3 >> 2] = s2, r3 += 4, i3 -= 4;
    }
    for (; vecDot(e3, r3, o3) > a2; ) r3 -= 4;
    return r3 + 4;
  }
  function vecDot(e3, t3, r3) {
    return e3[t3] * r3[0] + e3[t3 + 1] * r3[1] + e3[t3 + 2] * r3[2] + e3[t3 + 3] * r3[3];
  }
  function stats(e3, t3, r3) {
    const i3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], o3 = [0, 0, 0, 0], a2 = r3 - t3 >> 2;
    for (let a3 = t3; a3 < r3; a3 += 4) {
      const t4 = e3[a3] * (1 / 255), r4 = e3[a3 + 1] * (1 / 255), s2 = e3[a3 + 2] * (1 / 255), f2 = e3[a3 + 3] * (1 / 255);
      o3[0] += t4, o3[1] += r4, o3[2] += s2, o3[3] += f2, i3[0] += t4 * t4, i3[1] += t4 * r4, i3[2] += t4 * s2, i3[3] += t4 * f2, i3[5] += r4 * r4, i3[6] += r4 * s2, i3[7] += r4 * f2, i3[10] += s2 * s2, i3[11] += s2 * f2, i3[15] += f2 * f2;
    }
    return i3[4] = i3[1], i3[8] = i3[2], i3[9] = i3[6], i3[12] = i3[3], i3[13] = i3[7], i3[14] = i3[11], { R: i3, m: o3, N: a2 };
  }
  function estats(e3) {
    const { R: t3 } = e3, { m: r3 } = e3, { N: i3 } = e3, a2 = r3[0], s2 = r3[1], f2 = r3[2], l2 = r3[3], c2 = 0 == i3 ? 0 : 1 / i3, u = [t3[0] - a2 * a2 * c2, t3[1] - a2 * s2 * c2, t3[2] - a2 * f2 * c2, t3[3] - a2 * l2 * c2, t3[4] - s2 * a2 * c2, t3[5] - s2 * s2 * c2, t3[6] - s2 * f2 * c2, t3[7] - s2 * l2 * c2, t3[8] - f2 * a2 * c2, t3[9] - f2 * s2 * c2, t3[10] - f2 * f2 * c2, t3[11] - f2 * l2 * c2, t3[12] - l2 * a2 * c2, t3[13] - l2 * s2 * c2, t3[14] - l2 * f2 * c2, t3[15] - l2 * l2 * c2], h = u, d = o2;
    let A = [Math.random(), Math.random(), Math.random(), Math.random()], g = 0, p = 0;
    if (0 != i3) for (let e4 = 0; e4 < 16 && (A = d.multVec(h, A), p = Math.sqrt(d.dot(A, A)), A = d.sml(1 / p, A), !(0 != e4 && Math.abs(p - g) < 1e-9)); e4++) g = p;
    const m = [a2 * c2, s2 * c2, f2 * c2, l2 * c2];
    return { Cov: u, q: m, e: A, L: g, eMq255: d.dot(d.sml(255, m), A), eMq: d.dot(A, m), rgba: (Math.round(255 * m[3]) << 24 | Math.round(255 * m[2]) << 16 | Math.round(255 * m[1]) << 8 | Math.round(255 * m[0]) << 0) >>> 0 };
  }
  var o2 = { multVec: (e3, t3) => [e3[0] * t3[0] + e3[1] * t3[1] + e3[2] * t3[2] + e3[3] * t3[3], e3[4] * t3[0] + e3[5] * t3[1] + e3[6] * t3[2] + e3[7] * t3[3], e3[8] * t3[0] + e3[9] * t3[1] + e3[10] * t3[2] + e3[11] * t3[3], e3[12] * t3[0] + e3[13] * t3[1] + e3[14] * t3[2] + e3[15] * t3[3]], dot: (e3, t3) => e3[0] * t3[0] + e3[1] * t3[1] + e3[2] * t3[2] + e3[3] * t3[3], sml: (e3, t3) => [e3 * t3[0], e3 * t3[1], e3 * t3[2], e3 * t3[3]] };
  UPNG.encode = function encode(e3, t3, r3, i3, o3, a2, s2) {
    null == i3 && (i3 = 0), null == s2 && (s2 = false);
    const f2 = compress2(e3, t3, r3, i3, [false, false, false, 0, s2, false]);
    return compressPNG(f2, -1), _main(f2, t3, r3, o3, a2);
  }, UPNG.encodeLL = function encodeLL(e3, t3, r3, i3, o3, a2, s2, f2) {
    const l2 = { ctype: 0 + (1 == i3 ? 0 : 2) + (0 == o3 ? 0 : 4), depth: a2, frames: [] }, c2 = (i3 + o3) * a2, u = c2 * t3;
    for (let i4 = 0; i4 < e3.length; i4++) l2.frames.push({ rect: { x: 0, y: 0, width: t3, height: r3 }, img: new Uint8Array(e3[i4]), blend: 0, dispose: 1, bpp: Math.ceil(c2 / 8), bpl: Math.ceil(u / 8) });
    return compressPNG(l2, 0, true), _main(l2, t3, r3, s2, f2);
  }, UPNG.encode.compress = compress2, UPNG.encode.dither = dither, UPNG.quantize = quantize, UPNG.quantize.getKDtree = getKDtree, UPNG.quantize.getNearest = getNearest;
})();
const r = { toArrayBuffer(e2, t2) {
  const i2 = e2.width, o2 = e2.height, a2 = i2 << 2, s2 = e2.getContext("2d").getImageData(0, 0, i2, o2), f2 = new Uint32Array(s2.data.buffer), l2 = (32 * i2 + 31) / 32 << 2, c2 = l2 * o2, u = 122 + c2, h = new ArrayBuffer(u), d = new DataView(h), A = 1 << 20;
  let g, p, m, w, v = A, b = 0, y = 0, E = 0;
  function set16(e3) {
    d.setUint16(y, e3, true), y += 2;
  }
  function set32(e3) {
    d.setUint32(y, e3, true), y += 4;
  }
  function seek(e3) {
    y += e3;
  }
  set16(19778), set32(u), seek(4), set32(122), set32(108), set32(i2), set32(-o2 >>> 0), set16(1), set16(32), set32(3), set32(c2), set32(2835), set32(2835), seek(8), set32(16711680), set32(65280), set32(255), set32(4278190080), set32(1466527264), (function convert() {
    for (; b < o2 && v > 0; ) {
      for (w = 122 + b * l2, g = 0; g < a2; ) v--, p = f2[E++], m = p >>> 24, d.setUint32(w + g, p << 8 | m), g += 4;
      b++;
    }
    E < f2.length ? (v = A, setTimeout(convert, r._dly)) : t2(h);
  })();
}, toBlob(e2, t2) {
  this.toArrayBuffer(e2, ((e3) => {
    t2(new Blob([e3], { type: "image/bmp" }));
  }));
}, _dly: 9 };
var i = { CHROME: "CHROME", FIREFOX: "FIREFOX", DESKTOP_SAFARI: "DESKTOP_SAFARI", IE: "IE", IOS: "IOS", ETC: "ETC" }, o = { [i.CHROME]: 16384, [i.FIREFOX]: 11180, [i.DESKTOP_SAFARI]: 16384, [i.IE]: 8192, [i.IOS]: 4096, [i.ETC]: 8192 };
const a = "undefined" != typeof window, s = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope, f = a && window.cordova && window.cordova.require && window.cordova.require("cordova/modulemapper"), CustomFile = (a || s) && (f && f.getOriginalSymbol(window, "File") || "undefined" != typeof File && File), CustomFileReader = (a || s) && (f && f.getOriginalSymbol(window, "FileReader") || "undefined" != typeof FileReader && FileReader);
function getFilefromDataUrl(e2, t2, r2 = Date.now()) {
  return new Promise(((i2) => {
    const o2 = e2.split(","), a2 = o2[0].match(/:(.*?);/)[1], s2 = globalThis.atob(o2[1]);
    let f2 = s2.length;
    const l2 = new Uint8Array(f2);
    for (; f2--; ) l2[f2] = s2.charCodeAt(f2);
    const c2 = new Blob([l2], { type: a2 });
    c2.name = t2, c2.lastModified = r2, i2(c2);
  }));
}
function getDataUrlFromFile(e2) {
  return new Promise(((t2, r2) => {
    const i2 = new CustomFileReader();
    i2.onload = () => t2(i2.result), i2.onerror = (e3) => r2(e3), i2.readAsDataURL(e2);
  }));
}
function loadImage(e2) {
  return new Promise(((t2, r2) => {
    const i2 = new Image();
    i2.onload = () => t2(i2), i2.onerror = (e3) => r2(e3), i2.src = e2;
  }));
}
function getBrowserName() {
  if (void 0 !== getBrowserName.cachedResult) return getBrowserName.cachedResult;
  let e2 = i.ETC;
  const { userAgent: t2 } = navigator;
  return /Chrom(e|ium)/i.test(t2) ? e2 = i.CHROME : /iP(ad|od|hone)/i.test(t2) && /WebKit/i.test(t2) ? e2 = i.IOS : /Safari/i.test(t2) ? e2 = i.DESKTOP_SAFARI : /Firefox/i.test(t2) ? e2 = i.FIREFOX : (/MSIE/i.test(t2) || true == !!document.documentMode) && (e2 = i.IE), getBrowserName.cachedResult = e2, getBrowserName.cachedResult;
}
function approximateBelowMaximumCanvasSizeOfBrowser(e2, t2) {
  const r2 = getBrowserName(), i2 = o[r2];
  let a2 = e2, s2 = t2, f2 = a2 * s2;
  const l2 = a2 > s2 ? s2 / a2 : a2 / s2;
  for (; f2 > i2 * i2; ) {
    const e3 = (i2 + a2) / 2, t3 = (i2 + s2) / 2;
    e3 < t3 ? (s2 = t3, a2 = t3 * l2) : (s2 = e3 * l2, a2 = e3), f2 = a2 * s2;
  }
  return { width: a2, height: s2 };
}
function getNewCanvasAndCtx(e2, t2) {
  let r2, i2;
  try {
    if (r2 = new OffscreenCanvas(e2, t2), i2 = r2.getContext("2d"), null === i2) throw new Error("getContext of OffscreenCanvas returns null");
  } catch (e3) {
    r2 = document.createElement("canvas"), i2 = r2.getContext("2d");
  }
  return r2.width = e2, r2.height = t2, [r2, i2];
}
function drawImageInCanvas(e2, t2) {
  const { width: r2, height: i2 } = approximateBelowMaximumCanvasSizeOfBrowser(e2.width, e2.height), [o2, a2] = getNewCanvasAndCtx(r2, i2);
  return t2 && /jpe?g/.test(t2) && (a2.fillStyle = "white", a2.fillRect(0, 0, o2.width, o2.height)), a2.drawImage(e2, 0, 0, o2.width, o2.height), o2;
}
function isIOS() {
  return void 0 !== isIOS.cachedResult || (isIOS.cachedResult = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "undefined" != typeof document && "ontouchend" in document), isIOS.cachedResult;
}
function drawFileInCanvas(e2, t2 = {}) {
  return new Promise((function(r2, o2) {
    let a2, s2;
    var $Try_2_Post = function() {
      try {
        return s2 = drawImageInCanvas(a2, t2.fileType || e2.type), r2([a2, s2]);
      } catch (e3) {
        return o2(e3);
      }
    }, $Try_2_Catch = function(t3) {
      try {
        0;
        var $Try_3_Catch = function(e3) {
          try {
            throw e3;
          } catch (e4) {
            return o2(e4);
          }
        };
        try {
          let t4;
          return getDataUrlFromFile(e2).then((function(e3) {
            try {
              return t4 = e3, loadImage(t4).then((function(e4) {
                try {
                  return a2 = e4, (function() {
                    try {
                      return $Try_2_Post();
                    } catch (e5) {
                      return o2(e5);
                    }
                  })();
                } catch (e5) {
                  return $Try_3_Catch(e5);
                }
              }), $Try_3_Catch);
            } catch (e4) {
              return $Try_3_Catch(e4);
            }
          }), $Try_3_Catch);
        } catch (e3) {
          $Try_3_Catch(e3);
        }
      } catch (e3) {
        return o2(e3);
      }
    };
    try {
      if (isIOS() || [i.DESKTOP_SAFARI, i.MOBILE_SAFARI].includes(getBrowserName())) throw new Error("Skip createImageBitmap on IOS and Safari");
      return createImageBitmap(e2).then((function(e3) {
        try {
          return a2 = e3, $Try_2_Post();
        } catch (e4) {
          return $Try_2_Catch();
        }
      }), $Try_2_Catch);
    } catch (e3) {
      $Try_2_Catch();
    }
  }));
}
function canvasToFile(e2, t2, i2, o2, a2 = 1) {
  return new Promise((function(s2, f2) {
    let l2;
    if ("image/png" === t2) {
      let c2, u, h;
      return c2 = e2.getContext("2d"), { data: u } = c2.getImageData(0, 0, e2.width, e2.height), h = UPNG.encode([u.buffer], e2.width, e2.height, 4096 * a2), l2 = new Blob([h], { type: t2 }), l2.name = i2, l2.lastModified = o2, $If_4.call(this);
    }
    {
      let $If_5 = function() {
        return $If_4.call(this);
      };
      if ("image/bmp" === t2) return new Promise(((t3) => r.toBlob(e2, t3))).then(function(e3) {
        try {
          return l2 = e3, l2.name = i2, l2.lastModified = o2, $If_5.call(this);
        } catch (e4) {
          return f2(e4);
        }
      }.bind(this), f2);
      {
        let $If_6 = function() {
          return $If_5.call(this);
        };
        if ("function" == typeof OffscreenCanvas && e2 instanceof OffscreenCanvas) return e2.convertToBlob({ type: t2, quality: a2 }).then(function(e3) {
          try {
            return l2 = e3, l2.name = i2, l2.lastModified = o2, $If_6.call(this);
          } catch (e4) {
            return f2(e4);
          }
        }.bind(this), f2);
        {
          let d;
          return d = e2.toDataURL(t2, a2), getFilefromDataUrl(d, i2, o2).then(function(e3) {
            try {
              return l2 = e3, $If_6.call(this);
            } catch (e4) {
              return f2(e4);
            }
          }.bind(this), f2);
        }
      }
    }
    function $If_4() {
      return s2(l2);
    }
  }));
}
function cleanupCanvasMemory(e2) {
  e2.width = 0, e2.height = 0;
}
function isAutoOrientationInBrowser() {
  return new Promise((function(e2, t2) {
    let i2, o2, a2, s2;
    return void 0 !== isAutoOrientationInBrowser.cachedResult ? e2(isAutoOrientationInBrowser.cachedResult) : getFilefromDataUrl("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==", "test.jpg", Date.now()).then((function(r2) {
      try {
        return i2 = r2, drawFileInCanvas(i2).then((function(r3) {
          try {
            return o2 = r3[1], canvasToFile(o2, i2.type, i2.name, i2.lastModified).then((function(r4) {
              try {
                return a2 = r4, cleanupCanvasMemory(o2), drawFileInCanvas(a2).then((function(r5) {
                  try {
                    return s2 = r5[0], isAutoOrientationInBrowser.cachedResult = 1 === s2.width && 2 === s2.height, e2(isAutoOrientationInBrowser.cachedResult);
                  } catch (e3) {
                    return t2(e3);
                  }
                }), t2);
              } catch (e3) {
                return t2(e3);
              }
            }), t2);
          } catch (e3) {
            return t2(e3);
          }
        }), t2);
      } catch (e3) {
        return t2(e3);
      }
    }), t2);
  }));
}
function getExifOrientation(e2) {
  return new Promise(((t2, r2) => {
    const i2 = new CustomFileReader();
    i2.onload = (e3) => {
      const r3 = new DataView(e3.target.result);
      if (65496 != r3.getUint16(0, false)) return t2(-2);
      const i3 = r3.byteLength;
      let o2 = 2;
      for (; o2 < i3; ) {
        if (r3.getUint16(o2 + 2, false) <= 8) return t2(-1);
        const e4 = r3.getUint16(o2, false);
        if (o2 += 2, 65505 == e4) {
          if (1165519206 != r3.getUint32(o2 += 2, false)) return t2(-1);
          const e5 = 18761 == r3.getUint16(o2 += 6, false);
          o2 += r3.getUint32(o2 + 4, e5);
          const i4 = r3.getUint16(o2, e5);
          o2 += 2;
          for (let a2 = 0; a2 < i4; a2++) if (274 == r3.getUint16(o2 + 12 * a2, e5)) return t2(r3.getUint16(o2 + 12 * a2 + 8, e5));
        } else {
          if (65280 != (65280 & e4)) break;
          o2 += r3.getUint16(o2, false);
        }
      }
      return t2(-1);
    }, i2.onerror = (e3) => r2(e3), i2.readAsArrayBuffer(e2);
  }));
}
function handleMaxWidthOrHeight(e2, t2) {
  const { width: r2 } = e2, { height: i2 } = e2, { maxWidthOrHeight: o2 } = t2;
  let a2, s2 = e2;
  return isFinite(o2) && (r2 > o2 || i2 > o2) && ([s2, a2] = getNewCanvasAndCtx(r2, i2), r2 > i2 ? (s2.width = o2, s2.height = i2 / r2 * o2) : (s2.width = r2 / i2 * o2, s2.height = o2), a2.drawImage(e2, 0, 0, s2.width, s2.height), cleanupCanvasMemory(e2)), s2;
}
function followExifOrientation(e2, t2) {
  const { width: r2 } = e2, { height: i2 } = e2, [o2, a2] = getNewCanvasAndCtx(r2, i2);
  switch (t2 > 4 && t2 < 9 ? (o2.width = i2, o2.height = r2) : (o2.width = r2, o2.height = i2), t2) {
    case 2:
      a2.transform(-1, 0, 0, 1, r2, 0);
      break;
    case 3:
      a2.transform(-1, 0, 0, -1, r2, i2);
      break;
    case 4:
      a2.transform(1, 0, 0, -1, 0, i2);
      break;
    case 5:
      a2.transform(0, 1, 1, 0, 0, 0);
      break;
    case 6:
      a2.transform(0, 1, -1, 0, i2, 0);
      break;
    case 7:
      a2.transform(0, -1, -1, 0, i2, r2);
      break;
    case 8:
      a2.transform(0, -1, 1, 0, 0, r2);
  }
  return a2.drawImage(e2, 0, 0, r2, i2), cleanupCanvasMemory(e2), o2;
}
function compress(e2, t2, r2 = 0) {
  return new Promise((function(i2, o2) {
    let a2, s2, f2, l2, c2, u, h, d, A, g, p, m, w, v, b, y, E, F, _, B;
    function incProgress(e3 = 5) {
      if (t2.signal && t2.signal.aborted) throw t2.signal.reason;
      a2 += e3, t2.onProgress(Math.min(a2, 100));
    }
    function setProgress(e3) {
      if (t2.signal && t2.signal.aborted) throw t2.signal.reason;
      a2 = Math.min(Math.max(e3, a2), 100), t2.onProgress(a2);
    }
    return a2 = r2, s2 = t2.maxIteration || 10, f2 = 1024 * t2.maxSizeMB * 1024, incProgress(), drawFileInCanvas(e2, t2).then(function(r3) {
      try {
        return [, l2] = r3, incProgress(), c2 = handleMaxWidthOrHeight(l2, t2), incProgress(), new Promise((function(r4, i3) {
          var o3;
          if (!(o3 = t2.exifOrientation)) return getExifOrientation(e2).then(function(e3) {
            try {
              return o3 = e3, $If_2.call(this);
            } catch (e4) {
              return i3(e4);
            }
          }.bind(this), i3);
          function $If_2() {
            return r4(o3);
          }
          return $If_2.call(this);
        })).then(function(r4) {
          try {
            return u = r4, incProgress(), isAutoOrientationInBrowser().then(function(r5) {
              try {
                return h = r5 ? c2 : followExifOrientation(c2, u), incProgress(), d = t2.initialQuality || 1, A = t2.fileType || e2.type, canvasToFile(h, A, e2.name, e2.lastModified, d).then(function(r6) {
                  try {
                    {
                      let $Loop_3 = function() {
                        if (s2-- && (b > f2 || b > w)) {
                          let t3, r7;
                          return t3 = B ? 0.95 * _.width : _.width, r7 = B ? 0.95 * _.height : _.height, [E, F] = getNewCanvasAndCtx(t3, r7), F.drawImage(_, 0, 0, t3, r7), d *= "image/png" === A ? 0.85 : 0.95, canvasToFile(E, A, e2.name, e2.lastModified, d).then((function(e3) {
                            try {
                              return y = e3, cleanupCanvasMemory(_), _ = E, b = y.size, setProgress(Math.min(99, Math.floor((v - b) / (v - f2) * 100))), $Loop_3;
                            } catch (e4) {
                              return o2(e4);
                            }
                          }), o2);
                        }
                        return [1];
                      }, $Loop_3_exit = function() {
                        return cleanupCanvasMemory(_), cleanupCanvasMemory(E), cleanupCanvasMemory(c2), cleanupCanvasMemory(h), cleanupCanvasMemory(l2), setProgress(100), i2(y);
                      };
                      if (g = r6, incProgress(), p = g.size > f2, m = g.size > e2.size, !p && !m) return setProgress(100), i2(g);
                      var a3;
                      return w = e2.size, v = g.size, b = v, _ = h, B = !t2.alwaysKeepResolution && p, (a3 = function(e3) {
                        for (; e3; ) {
                          if (e3.then) return void e3.then(a3, o2);
                          try {
                            if (e3.pop) {
                              if (e3.length) return e3.pop() ? $Loop_3_exit.call(this) : e3;
                              e3 = $Loop_3;
                            } else e3 = e3.call(this);
                          } catch (e4) {
                            return o2(e4);
                          }
                        }
                      }.bind(this))($Loop_3);
                    }
                  } catch (u2) {
                    return o2(u2);
                  }
                }.bind(this), o2);
              } catch (e3) {
                return o2(e3);
              }
            }.bind(this), o2);
          } catch (e3) {
            return o2(e3);
          }
        }.bind(this), o2);
      } catch (e3) {
        return o2(e3);
      }
    }.bind(this), o2);
  }));
}
const l = "\nlet scriptImported = false\nself.addEventListener('message', async (e) => {\n  const { file, id, imageCompressionLibUrl, options } = e.data\n  options.onProgress = (progress) => self.postMessage({ progress, id })\n  try {\n    if (!scriptImported) {\n      // console.log('[worker] importScripts', imageCompressionLibUrl)\n      self.importScripts(imageCompressionLibUrl)\n      scriptImported = true\n    }\n    // console.log('[worker] self', self)\n    const compressedFile = await imageCompression(file, options)\n    self.postMessage({ file: compressedFile, id })\n  } catch (e) {\n    // console.error('[worker] error', e)\n    self.postMessage({ error: e.message + '\\n' + e.stack, id })\n  }\n})\n";
let c;
function compressOnWebWorker(e2, t2) {
  return new Promise(((r2, i2) => {
    c || (c = (function createWorkerScriptURL(e3) {
      const t3 = [];
      return t3.push(e3), URL.createObjectURL(new Blob(t3));
    })(l));
    const o2 = new Worker(c);
    o2.addEventListener("message", (function handler(e3) {
      if (t2.signal && t2.signal.aborted) o2.terminate();
      else if (void 0 === e3.data.progress) {
        if (e3.data.error) return i2(new Error(e3.data.error)), void o2.terminate();
        r2(e3.data.file), o2.terminate();
      } else t2.onProgress(e3.data.progress);
    })), o2.addEventListener("error", i2), t2.signal && t2.signal.addEventListener("abort", (() => {
      i2(t2.signal.reason), o2.terminate();
    })), o2.postMessage({ file: e2, imageCompressionLibUrl: t2.libURL, options: { ...t2, onProgress: void 0, signal: void 0 } });
  }));
}
function imageCompression(e2, t2) {
  return new Promise((function(r2, i2) {
    let o2, a2, s2, f2, l2, c2;
    if (o2 = { ...t2 }, s2 = 0, { onProgress: f2 } = o2, o2.maxSizeMB = o2.maxSizeMB || Number.POSITIVE_INFINITY, l2 = "boolean" != typeof o2.useWebWorker || o2.useWebWorker, delete o2.useWebWorker, o2.onProgress = (e3) => {
      s2 = e3, "function" == typeof f2 && f2(s2);
    }, !(e2 instanceof Blob || e2 instanceof CustomFile)) return i2(new Error("The file given is not an instance of Blob or File"));
    if (!/^image/.test(e2.type)) return i2(new Error("The file given is not an image"));
    if (c2 = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope, !l2 || "function" != typeof Worker || c2) return compress(e2, o2).then(function(e3) {
      try {
        return a2 = e3, $If_4.call(this);
      } catch (e4) {
        return i2(e4);
      }
    }.bind(this), i2);
    var u = function() {
      try {
        return $If_4.call(this);
      } catch (e3) {
        return i2(e3);
      }
    }.bind(this), $Try_1_Catch = function(t3) {
      try {
        return compress(e2, o2).then((function(e3) {
          try {
            return a2 = e3, u();
          } catch (e4) {
            return i2(e4);
          }
        }), i2);
      } catch (e3) {
        return i2(e3);
      }
    };
    try {
      return o2.libURL = o2.libURL || "https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js", compressOnWebWorker(e2, o2).then((function(e3) {
        try {
          return a2 = e3, u();
        } catch (e4) {
          return $Try_1_Catch();
        }
      }), $Try_1_Catch);
    } catch (e3) {
      $Try_1_Catch();
    }
    function $If_4() {
      try {
        a2.name = e2.name, a2.lastModified = e2.lastModified;
      } catch (e3) {
      }
      try {
        o2.preserveExif && "image/jpeg" === e2.type && (!o2.fileType || o2.fileType && o2.fileType === e2.type) && (a2 = copyExifWithoutOrientation(e2, a2));
      } catch (e3) {
      }
      return r2(a2);
    }
  }));
}
imageCompression.getDataUrlFromFile = getDataUrlFromFile, imageCompression.getFilefromDataUrl = getFilefromDataUrl, imageCompression.loadImage = loadImage, imageCompression.drawImageInCanvas = drawImageInCanvas, imageCompression.drawFileInCanvas = drawFileInCanvas, imageCompression.canvasToFile = canvasToFile, imageCompression.getExifOrientation = getExifOrientation, imageCompression.handleMaxWidthOrHeight = handleMaxWidthOrHeight, imageCompression.followExifOrientation = followExifOrientation, imageCompression.cleanupCanvasMemory = cleanupCanvasMemory, imageCompression.isAutoOrientationInBrowser = isAutoOrientationInBrowser, imageCompression.approximateBelowMaximumCanvasSizeOfBrowser = approximateBelowMaximumCanvasSizeOfBrowser, imageCompression.copyExifWithoutOrientation = copyExifWithoutOrientation, imageCompression.getBrowserName = getBrowserName, imageCompression.version = "2.0.2";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = reactExports.useState(value);
  reactExports.useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}
const AvatarUpload = ({ value, onChange }) => {
  const [image, setImage] = reactExports.useState(null);
  const [crop, setCrop] = reactExports.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = reactExports.useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = reactExports.useState(null);
  const [isCropping, setIsCropping] = reactExports.useState(false);
  const [isUploading, setIsUploading] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const onCropComplete = reactExports.useCallback((_croppedArea, pixels) => {
    setCroppedAreaPixels(pixels);
  }, []);
  const handleFileChange = async (e2) => {
    if (e2.target.files && e2.target.files.length > 0) {
      const file = e2.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage(reader.result);
        setIsCropping(true);
      });
      reader.readAsDataURL(file);
    }
  };
  const createCroppedImage = async () => {
    if (!image || !croppedAreaPixels) return;
    setIsUploading(true);
    try {
      const canvas = document.createElement("canvas");
      const img = new Image();
      img.src = image;
      await new Promise((resolve) => img.onload = resolve);
      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, croppedAreaPixels.x, croppedAreaPixels.y, croppedAreaPixels.width, croppedAreaPixels.height, 0, 0, croppedAreaPixels.width, croppedAreaPixels.height);
      const blob = await new Promise((resolve) => canvas.toBlob((b) => resolve(b), "image/jpeg", 0.9));
      const compressedFile = await imageCompression(new File([blob], "avatar.jpg", { type: "image/jpeg" }), { maxSizeMB: 0.1, maxWidthOrHeight: 400, useWebWorker: true });
      const finalReader = new FileReader();
      finalReader.readAsDataURL(compressedFile);
      finalReader.onloadend = () => {
        onChange(finalReader.result);
        setIsCropping(false);
        setImage(null);
      };
    } catch (e2) {
      console.error(e2);
    } finally {
      setIsUploading(false);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center gap-4", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative group cursor-pointer", onClick: () => fileInputRef.current?.click(), children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-24 h-24 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden bg-slate-50 group-hover:border-blue-400 transition-colors", children: value ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: value, className: "w-full h-full object-cover", alt: "Avatar" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 94,
        columnNumber: 20
      }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Camera, { className: "w-8 h-8 text-slate-300" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 94,
        columnNumber: 94
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Upload, { className: "w-6 h-6 text-white" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { type: "file", ref: fileInputRef, className: "hidden", accept: "image/*", onChange: handleFileChange }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isCropping, onOpenChange: setIsCropping, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-xl", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: "裁剪并压缩头像" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 103,
        columnNumber: 25
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative h-80 w-full bg-slate-900 rounded-lg overflow-hidden mt-4", children: image && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Cropper, { image, crop, zoom, aspect: 1, onCropChange: setCrop, onCropComplete, onZoomChange: setZoom }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 105,
        columnNumber: 23
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", onClick: () => setIsCropping(false), children: "取消" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: createCroppedImage, loading: isUploading, className: "bg-blue-600 text-white", children: "确认并应用" }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
    lineNumber: 91,
    columnNumber: 5
  }, void 0);
};
const DEFAULT_MEMBER_LEVELS = [
  { level: 1, name: "普通会员" },
  { level: 2, name: "铜牌会员" },
  { level: 3, name: "银牌会员" },
  { level: 4, name: "金牌会员" },
  { level: 5, name: "钻石会员" }
];
const sortLevelConfigs = (levels) => [...levels].sort((a2, b) => a2.level - b.level);
const getNextAvailableLevel = (levels) => {
  const usedLevels = new Set(
    levels.map((item) => item.level).filter((level) => Number.isInteger(level) && level > 0)
  );
  let nextLevel = 1;
  while (usedLevels.has(nextLevel)) {
    nextLevel += 1;
  }
  return nextLevel;
};
const AdminUserManagement = ({ activePlugins = [] }) => {
  const { toast } = useToast();
  const [users2, setUsers] = reactExports.useState([]);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [pagination, setPagination] = reactExports.useState({ page: 1, pageSize: 20, total: 0, totalPages: 0 });
  const [activeTab, setActiveTab] = reactExports.useState("list");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [editingUser, setEditingUser] = reactExports.useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = reactExports.useState(false);
  const [userToDelete, setUserToDelete] = reactExports.useState(null);
  const [isLevelConfigOpen, setIsLevelConfigOpen] = reactExports.useState(false);
  const [levelConfigs, setLevelConfigs] = reactExports.useState([]);
  const [tempLevels, setTempLevels] = reactExports.useState([]);
  const [balanceLogs, setBalanceLogs] = reactExports.useState([]);
  const [pointsLogs, setPointsLogs] = reactExports.useState([]);
  const [balancePagination, setBalancePagination] = reactExports.useState({ page: 1, pageSize: 20, total: 0, totalPages: 0 });
  const [pointsPagination, setPointsPagination] = reactExports.useState({ page: 1, pageSize: 20, total: 0, totalPages: 0 });
  const [balanceSearch, setBalanceSearch] = reactExports.useState("");
  const [pointsSearch, setPointsSearch] = reactExports.useState("");
  const debouncedBalanceSearch = useDebounce(balanceSearch, 500);
  const debouncedPointsSearch = useDebounce(pointsSearch, 500);
  const [isAdjustOpen, setIsAdjustOpen] = reactExports.useState(false);
  const [adjustType, setAdjustType] = reactExports.useState("balance");
  const [adjustData, setAdjustData] = reactExports.useState({ userId: "", type: "add", amount: 0, remark: "" });
  const [formData, setFormData] = reactExports.useState({
    email: "",
    password: "",
    level: 1,
    status: "active",
    nickname: "",
    avatar: "",
    phone: "",
    gender: "unknown",
    birthday: "",
    bio: ""
  });
  const fetchData = async (page2 = pagination.page, search = debouncedSearch) => {
    setIsLoading(true);
    try {
      const uRes = await fetch(`/api/v1/users?page=${page2}&pageSize=${pagination.pageSize}&search=${encodeURIComponent(search)}`);
      const uData = await uRes.json();
      if (uData.success) {
        setUsers(uData.data);
        setPagination((prev) => ({ ...prev, ...uData.meta }));
      }
      const lRes = await fetch("/api/v1/settings/member_levels");
      const lData = await lRes.json();
      if (lData.success) {
        const normalizedLevels = Array.isArray(lData.data) && lData.data.length > 0 ? sortLevelConfigs(
          lData.data.map((item) => ({
            level: Number(item?.level),
            name: String(item?.name || "").trim(),
            usageCount: Number(item?.usageCount || 0)
          })).filter((item) => Number.isInteger(item.level) && item.level > 0 && item.name)
        ) : DEFAULT_MEMBER_LEVELS;
        setLevelConfigs(normalizedLevels);
        setTempLevels(normalizedLevels);
      } else {
        setLevelConfigs(DEFAULT_MEMBER_LEVELS);
        setTempLevels(DEFAULT_MEMBER_LEVELS);
      }
    } catch (e2) {
      console.error(e2);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchLogsAndTokens = async () => {
    setIsLoading(true);
    try {
      if (activeTab === "balance") {
        const res = await fetch(`/api/v1/users/balance/logs?page=${balancePagination.page}&pageSize=${balancePagination.pageSize}&search=${encodeURIComponent(debouncedBalanceSearch)}`);
        const data = await res.json();
        if (data.success) {
          setBalanceLogs(data.data);
          setBalancePagination((prev) => ({ ...prev, ...data.meta }));
        }
      } else if (activeTab === "points") {
        const res = await fetch(`/api/v1/users/points/logs?page=${pointsPagination.page}&pageSize=${pointsPagination.pageSize}&search=${encodeURIComponent(debouncedPointsSearch)}`);
        const data = await res.json();
        if (data.success) {
          setPointsLogs(data.data);
          setPointsPagination((prev) => ({ ...prev, ...data.meta }));
        }
      }
    } catch (e2) {
      console.error(e2);
    } finally {
      setIsLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchData(1, debouncedSearch);
  }, [debouncedSearch]);
  reactExports.useEffect(() => {
    if (activeTab === "list") fetchData(pagination.page);
  }, [pagination.page]);
  reactExports.useEffect(() => {
    if (activeTab === "balance") fetchLogsAndTokens();
  }, [activeTab, balancePagination.page, debouncedBalanceSearch]);
  reactExports.useEffect(() => {
    if (activeTab === "points") fetchLogsAndTokens();
  }, [activeTab, pointsPagination.page, debouncedPointsSearch]);
  const sortedLevelConfigs = [...levelConfigs].sort((a2, b) => a2.level - b.level);
  const sortedTempLevels = [...tempLevels].sort((a2, b) => a2.level - b.level);
  const getLevelConfigDisabledReason = () => {
    if (tempLevels.length === 0) {
      return "请至少保留一个会员等级名称。";
    }
    if (tempLevels.some((item) => !Number.isInteger(item.level) || item.level < 1)) {
      return "等级编号必须是从 1 开始的正整数。";
    }
    if (tempLevels.some((item) => !item.name.trim())) {
      return "请填写每个等级的展示名称。";
    }
    if (new Set(tempLevels.map((item) => item.level)).size !== tempLevels.length) {
      return "等级编号不能重复，请调整后再保存。";
    }
    return "";
  };
  const saveLevelConfigs = async () => {
    const disabledReason = getLevelConfigDisabledReason();
    if (disabledReason) {
      return;
    }
    const normalizedLevels = sortLevelConfigs(
      tempLevels.map((item) => ({ level: item.level, name: item.name.trim(), usageCount: item.usageCount }))
    );
    setIsLoading(true);
    try {
      const res = await fetch("/api/v1/settings/member_levels", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(normalizedLevels) });
      if (res.ok) {
        setLevelConfigs(normalizedLevels);
        setTempLevels(normalizedLevels);
        setIsLevelConfigOpen(false);
        toast({ title: "配置已保存" });
      } else {
        const err = await res.json().catch(() => ({}));
        toast({ variant: "destructive", title: "操作失败", description: err.error || "保存失败" });
      }
    } catch (e2) {
      toast({ variant: "destructive", title: "操作失败", description: "保存失败" });
    } finally {
      setIsLoading(false);
    }
  };
  const addMemberLevel = () => {
    const nextLevel = getNextAvailableLevel(tempLevels);
    setTempLevels((prev) => [...prev, { level: nextLevel, name: `LV.${nextLevel}` }]);
  };
  const removeMemberLevel = (targetLevel) => {
    if (tempLevels.length <= 1) {
      return;
    }
    setTempLevels((prev) => prev.filter((item) => item !== targetLevel));
  };
  const handleAdjustSubmit = async (e2) => {
    e2.preventDefault();
    setIsLoading(true);
    try {
      const finalAmount = adjustType === "balance" ? Math.round(adjustData.amount * 100) : Math.round(adjustData.amount);
      const res = await fetch(`/api/v1/users/${adjustType}/adjust`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...adjustData, amount: finalAmount })
      });
      const result = await res.json();
      if (result.success) {
        setIsAdjustOpen(false);
        fetchLogsAndTokens();
        fetchData();
        toast({ title: "调整成功" });
      } else {
        toast({ variant: "destructive", title: "操作失败", description: result.error || "调整失败" });
      }
    } catch (e22) {
      toast({ variant: "destructive", title: "操作失败", description: "调整失败" });
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = async (e2) => {
    e2.preventDefault();
    setIsLoading(true);
    try {
      const url = editingUser ? `/api/v1/users/${editingUser.id}` : "/api/v1/users";
      const method = editingUser ? "PUT" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (res.ok) {
        setIsOpen(false);
        fetchData();
        toast({ title: "保存成功" });
      } else {
        const err = await res.json();
        setError(err.error || "操作失败");
      }
    } catch (e22) {
      setError("系统错误");
      toast({ variant: "destructive", title: "操作失败", description: "系统错误" });
    } finally {
      setIsLoading(false);
    }
  };
  const handleDelete = async () => {
    if (!userToDelete) return;
    setIsLoading(true);
    try {
      const res = await fetch(`/api/v1/users/${userToDelete}`, { method: "DELETE" });
      if (res.ok) {
        fetchData();
        setIsDeleteOpen(false);
        toast({ title: "已删除" });
      } else {
        const err = await res.json().catch(() => ({}));
        toast({ variant: "destructive", title: "删除失败", description: err.error || "操作失败" });
      }
    } catch (e2) {
      toast({ variant: "destructive", title: "操作失败", description: "系统错误" });
    } finally {
      setIsLoading(false);
      setIsDeleteOpen(false);
    }
  };
  const getLevelName = (level) => {
    const matchedLevel = levelConfigs.find((item) => item.level === level);
    return matchedLevel ? matchedLevel.name : `LV.${level}（待补齐等级 key）`;
  };
  const currentEditingLevelExists = sortedLevelConfigs.some((item) => item.level === formData.level);
  const deletingUser = users2.find((user) => user.id === userToDelete) || null;
  const deleteBlockedByAssets = !!deletingUser && ((deletingUser.balance || 0) !== 0 || (deletingUser.points || 0) !== 0);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SystemConfigProvider, { config: { activePlugins }, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-6 w-full", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap justify-between items-center gap-4 mb-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsList, { className: "bg-slate-100/50 p-1 rounded-xl shrink-0 max-w-full", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsTrigger, { value: "list", className: "rounded-lg px-4 sm:px-6 py-2 transition-all", children: "用户列表" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 378,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsTrigger, { value: "balance", className: "rounded-lg px-4 sm:px-6 py-2 transition-all", children: "余额流水" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 379,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsTrigger, { value: "points", className: "rounded-lg px-4 sm:px-6 py-2 transition-all", children: "积分流水" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 380,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 377,
          columnNumber: 13
        }, void 0),
        activeTab === "list" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2 transition-all", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", onClick: () => {
            setTempLevels(levelConfigs.length > 0 ? levelConfigs : DEFAULT_MEMBER_LEVELS);
            setIsLevelConfigOpen(true);
          }, children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings, { className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 384,
              columnNumber: 170
            }, void 0),
            " 等级名称"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 384,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => {
            setEditingUser(null);
            setFormData({ email: "", password: "", level: 1, status: "active", nickname: "", avatar: "", phone: "", gender: "unknown", birthday: "", bio: "" });
            setIsOpen(true);
          }, className: "bg-blue-600 text-white shadow-lg", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 385,
              columnNumber: 278
            }, void 0),
            " 新增会员"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 385,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 383,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 376,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsContent, { value: "list", className: "mt-0 space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex w-full sm:w-[400px] items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              ListRefreshButton,
              {
                loading: isLoading,
                onClick: () => fetchData(pagination.page, debouncedSearch),
                title: "刷新会员列表"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 394,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 400,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: searchQuery, onChange: (e2) => {
                setSearchQuery(e2.target.value);
                setPagination((p) => ({ ...p, page: 1 }));
              }, className: "pl-10 h-11 bg-slate-50 border-none rounded-xl", placeholder: "搜邮箱或昵称 (支持全库检索)..." }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 401,
                columnNumber: 19
              }, void 0),
              isLoading && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Loader2, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 animate-spin" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 402,
                columnNumber: 33
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 399,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 393,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4 text-xs", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg font-bold", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(User, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 407,
              columnNumber: 19
            }, void 0),
            " 总计 ",
            pagination.total,
            " 位会员"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 406,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 405,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 392,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-white rounded-2xl shadow-sm border border-slate-200 overflow-x-auto relative min-h-[400px]", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "w-full min-w-[1000px] border-collapse text-left text-sm table-fixed", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { className: "bg-slate-50/50 border-b border-slate-200", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[24%] px-6 py-4 font-semibold text-slate-900", children: "会员基础资料" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 416,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[12%] px-6 py-4 font-semibold text-slate-900 text-center", children: "等级/性别" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 417,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[17%] px-6 py-4 font-semibold text-slate-900 text-center", children: "账户余额" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 418,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[17%] px-6 py-4 font-semibold text-slate-900 text-center", children: "账户积分" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 419,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[12%] px-6 py-4 font-semibold text-slate-900 text-center", children: "状态" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 420,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[18%] px-6 py-4 font-semibold text-slate-900 text-right", children: "基础管理" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 421,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 415,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 414,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { className: `divide-y divide-slate-100 ${isLoading ? "opacity-40" : "opacity-100"} transition-opacity`, children: [
            users2.map((user) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "hover:bg-slate-50/80 transition-colors group", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-10 h-10 rounded-full ring-2 ring-slate-100 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0", children: user.avatar ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: user.avatar, className: "w-full h-full object-cover" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 427,
                  columnNumber: 237
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleUser, { className: "w-7 h-7 text-slate-300" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 427,
                  columnNumber: 304
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 427,
                  columnNumber: 90
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col min-w-0", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-slate-900 truncate", children: user.nickname || "未设置昵称" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                    lineNumber: 427,
                    columnNumber: 399
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400 font-mono truncate", children: user.email }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                    lineNumber: 427,
                    columnNumber: 484
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 427,
                  columnNumber: 360
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 427,
                columnNumber: 49
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 427,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center gap-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md text-[12px] font-bold", children: getLevelName(user.level) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 428,
                  columnNumber: 111
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400", children: user.gender === "male" ? "男" : user.gender === "female" ? "女" : "保密" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 428,
                  columnNumber: 232
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 428,
                columnNumber: 61
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 428,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center gap-1.5", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-blue-600 font-bold font-mono", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Wallet, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                    lineNumber: 429,
                    columnNumber: 176
                  }, void 0),
                  " ",
                  (user.balance / 100).toFixed(2)
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 429,
                  columnNumber: 101
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => {
                  setAdjustType("balance");
                  setAdjustData({ userId: user.id, type: "add", amount: 0, remark: "" });
                  setIsAdjustOpen(true);
                }, className: "h-6 px-2 text-[9px] text-blue-600 border-blue-100 hover:bg-blue-50", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "w-2.5 h-2.5 mr-1" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                    lineNumber: 429,
                    columnNumber: 506
                  }, void 0),
                  " 余额调整"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 429,
                  columnNumber: 250
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 429,
                columnNumber: 49
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 429,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center gap-1.5", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-orange-600 font-bold font-mono", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Coins, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                    lineNumber: 430,
                    columnNumber: 178
                  }, void 0),
                  " ",
                  user.points || 0
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 430,
                  columnNumber: 101
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => {
                  setAdjustType("points");
                  setAdjustData({ userId: user.id, type: "add", amount: 0, remark: "" });
                  setIsAdjustOpen(true);
                }, className: "h-6 px-2 text-[9px] text-orange-600 border-orange-100 hover:bg-orange-50", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "w-2.5 h-2.5 mr-1" }, void 0, false, {
                    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                    lineNumber: 430,
                    columnNumber: 497
                  }, void 0),
                  " 积分调整"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 430,
                  columnNumber: 236
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 430,
                columnNumber: 49
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 430,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `inline-flex px-2 py-0.5 rounded-full text-[12px] font-bold ${user.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`, children: user.status === "active" ? "正常运行" : "锁定禁用" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 431,
                columnNumber: 61
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 431,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4 text-right", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-end gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => {
                  setEditingUser(user);
                  setFormData({ email: user.email, password: "", level: user.level || 1, status: user.status, nickname: user.nickname || "", avatar: user.avatar || "", phone: user.phone || "", gender: user.gender || "unknown", birthday: user.birthday || "", bio: user.bio || "" });
                  setIsOpen(true);
                }, className: "h-9 w-9 p-0 hover:bg-blue-50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SquarePen, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 432,
                  columnNumber: 500
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 432,
                  columnNumber: 100
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", onClick: () => {
                  setUserToDelete(user.id);
                  setIsDeleteOpen(true);
                }, className: "h-9 w-9 p-0 text-rose-500 hover:bg-rose-50", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 432,
                  columnNumber: 697
                }, void 0) }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 432,
                  columnNumber: 537
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 432,
                columnNumber: 60
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 432,
                columnNumber: 23
              }, void 0)
            ] }, user.id, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 426,
              columnNumber: 21
            }, void 0)),
            users2.length === 0 && !isLoading && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { colSpan: 6, className: "py-20 text-center text-slate-400", children: "未找到符合条件的会员" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 436,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 436,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 424,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 413,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 412,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500 font-medium", children: [
            "第 ",
            pagination.page,
            " / ",
            pagination.totalPages,
            " 页"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 444,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", disabled: pagination.page <= 1 || isLoading, onClick: () => setPagination((p) => ({ ...p, page: p.page - 1 })), className: "h-9 px-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronLeft, { className: "w-4 h-4 mr-1" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 446,
                columnNumber: 184
              }, void 0),
              " 上一页"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 446,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-1", children: [...Array(Math.min(5, pagination.totalPages))].map((_, i2) => {
              const pageNum = pagination.page <= 3 ? i2 + 1 : pagination.page >= pagination.totalPages - 2 ? pagination.totalPages - 4 + i2 : pagination.page - 2 + i2;
              if (pageNum <= 0 || pageNum > pagination.totalPages) return null;
              return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: pagination.page === pageNum ? "default" : "outline", size: "sm", onClick: () => setPagination((p) => ({ ...p, page: pageNum })), className: `h-9 w-9 p-0 ${pagination.page === pageNum ? "bg-blue-600 text-white" : ""}`, children: pageNum }, pageNum, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 452,
                columnNumber: 23
              }, void 0);
            }) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 447,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", disabled: pagination.page >= pagination.totalPages || isLoading, onClick: () => setPagination((p) => ({ ...p, page: p.page + 1 })), className: "h-9 px-3", children: [
              "下一页 ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { className: "w-4 h-4 ml-1" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 456,
                columnNumber: 208
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 456,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 445,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 443,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 390,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsContent, { value: "balance", className: "mt-0 space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex w-full sm:w-[400px] items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              ListRefreshButton,
              {
                loading: isLoading,
                onClick: fetchLogsAndTokens,
                title: "刷新余额流水"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 465,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 471,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: balanceSearch, onChange: (e2) => {
                setBalanceSearch(e2.target.value);
                setBalancePagination((p) => ({ ...p, page: 1 }));
              }, className: "pl-10 h-11 bg-slate-50 border-none rounded-xl", placeholder: "搜索邮箱、昵称或备注..." }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 472,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 470,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 464,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg", children: [
            "共 ",
            balancePagination.total,
            " 条记录"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 475,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 463,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "w-full border-collapse text-left text-sm table-fixed", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { className: "bg-slate-50/50 border-b", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[30%] px-6 py-4 font-semibold", children: "会员账号" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 480,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[15%] px-6 py-4 font-semibold text-center", children: "类型" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 480,
              columnNumber: 80
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[15%] px-6 py-4 font-semibold text-center", children: "变动数值" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 480,
              columnNumber: 147
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[40%] px-6 py-4 font-semibold", children: "操作备注 / 时间" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 480,
              columnNumber: 216
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 480,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 479,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { className: "divide-y", children: [
            balanceLogs.map((log) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "hover:bg-slate-50/50", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-medium text-slate-900", children: log.nickname || "系统会员" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 483,
                  columnNumber: 151
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-400", children: log.email }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 483,
                  columnNumber: 227
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 483,
                columnNumber: 120
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 483,
                columnNumber: 94
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `px-2 py-0.5 rounded text-[12px] font-bold ${log.type === "add" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`, children: log.type === "add" ? "调增" : log.type === "sub" ? "调减" : "重置" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 483,
                columnNumber: 335
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 483,
                columnNumber: 297
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4 text-center font-bold font-mono text-blue-600", children: [
                log.type === "sub" ? "-" : "+",
                (log.amount / 100).toFixed(2)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 483,
                columnNumber: 557
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-slate-600", children: log.remark || "无备注" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 483,
                  columnNumber: 754
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400", children: [
                  new Date(log.createdAt).toLocaleString(),
                  " (",
                  (log.before / 100).toFixed(2),
                  " → ",
                  (log.after / 100).toFixed(2),
                  ")"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 483,
                  columnNumber: 815
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 483,
                columnNumber: 723
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 483,
                columnNumber: 697
              }, void 0)
            ] }, log.id, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 483,
              columnNumber: 44
            }, void 0)),
            balanceLogs.length === 0 && !isLoading && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { colSpan: 4, className: "py-20 text-center text-slate-400", children: "暂无相关流水记录" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 484,
              columnNumber: 66
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 484,
              columnNumber: 62
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 482,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 478,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 477,
          columnNumber: 13
        }, void 0),
        balancePagination.totalPages > 1 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500", children: [
            "第 ",
            balancePagination.page,
            " / ",
            balancePagination.totalPages,
            " 页"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 491,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", disabled: balancePagination.page <= 1 || isLoading, onClick: () => setBalancePagination((p) => ({ ...p, page: p.page - 1 })), className: "h-9 px-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronLeft, { className: "w-4 h-4 mr-1" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 493,
                columnNumber: 200
              }, void 0),
              " 上一页"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 493,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", disabled: balancePagination.page >= balancePagination.totalPages || isLoading, onClick: () => setBalancePagination((p) => ({ ...p, page: p.page + 1 })), className: "h-9 px-3", children: [
              "下一页 ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { className: "w-4 h-4 ml-1" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 494,
                columnNumber: 231
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 494,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 492,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 490,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 462,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TabsContent, { value: "points", className: "mt-0 space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex w-full sm:w-[400px] items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              ListRefreshButton,
              {
                loading: isLoading,
                onClick: fetchLogsAndTokens,
                title: "刷新积分流水"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 502,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 508,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: pointsSearch, onChange: (e2) => {
                setPointsSearch(e2.target.value);
                setPointsPagination((p) => ({ ...p, page: 1 }));
              }, className: "pl-10 h-11 bg-slate-50 border-none rounded-xl", placeholder: "搜索邮箱、昵称或备注..." }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 509,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 507,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 501,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg", children: [
            "共 ",
            pointsPagination.total,
            " 条记录"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 512,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 500,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "w-full border-collapse text-left text-sm table-fixed", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { className: "bg-slate-50/50 border-b", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[30%] px-6 py-4 font-semibold", children: "会员账号" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 517,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[15%] px-6 py-4 font-semibold text-center", children: "类型" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 517,
              columnNumber: 80
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[15%] px-6 py-4 font-semibold text-center", children: "变动数值" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 517,
              columnNumber: 147
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "w-[40%] px-6 py-4 font-semibold", children: "操作备注 / 时间" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 517,
              columnNumber: 216
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 517,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 516,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { className: "divide-y", children: [
            pointsLogs.map((log) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "hover:bg-slate-50/50", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-medium text-slate-900", children: log.nickname || "系统会员" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 520,
                  columnNumber: 150
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-slate-400", children: log.email }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 520,
                  columnNumber: 226
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 520,
                columnNumber: 119
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 520,
                columnNumber: 93
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "px-2 py-0.5 bg-orange-50 text-orange-600 rounded text-[12px] font-bold", children: log.type }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 520,
                columnNumber: 334
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 520,
                columnNumber: 296
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4 text-center font-bold font-mono text-orange-600", children: log.amount }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 520,
                columnNumber: 445
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-slate-600", children: log.remark }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 520,
                  columnNumber: 593
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[12px] text-slate-400", children: [
                  new Date(log.createdAt).toLocaleString(),
                  " (",
                  log.before,
                  " → ",
                  log.after,
                  ")"
                ] }, void 0, true, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 520,
                  columnNumber: 645
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 520,
                columnNumber: 562
              }, void 0) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 520,
                columnNumber: 536
              }, void 0)
            ] }, log.id, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 520,
              columnNumber: 43
            }, void 0)),
            pointsLogs.length === 0 && !isLoading && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { colSpan: 4, className: "py-20 text-center text-slate-400", children: "暂无相关积分记录" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 521,
              columnNumber: 65
            }, void 0) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 521,
              columnNumber: 61
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 519,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 515,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 514,
          columnNumber: 13
        }, void 0),
        pointsPagination.totalPages > 1 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-slate-500", children: [
            "第 ",
            pointsPagination.page,
            " / ",
            pointsPagination.totalPages,
            " 页"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 528,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", disabled: pointsPagination.page <= 1 || isLoading, onClick: () => setPointsPagination((p) => ({ ...p, page: p.page - 1 })), className: "h-9 px-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronLeft, { className: "w-4 h-4 mr-1" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 530,
                columnNumber: 198
              }, void 0),
              " 上一页"
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 530,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "outline", size: "sm", disabled: pointsPagination.page >= pointsPagination.totalPages || isLoading, onClick: () => setPointsPagination((p) => ({ ...p, page: p.page + 1 })), className: "h-9 px-3", children: [
              "下一页 ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { className: "w-4 h-4 ml-1" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 531,
                columnNumber: 228
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 531,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 529,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 527,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 499,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
      lineNumber: 375,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      FormDialog,
      {
        open: isLevelConfigOpen,
        onOpenChange: (open) => {
          setIsLevelConfigOpen(open);
          if (!open) {
            setTempLevels(levelConfigs.length > 0 ? levelConfigs : DEFAULT_MEMBER_LEVELS);
          }
        },
        title: "会员等级名称配置",
        confirmText: "保存配置",
        onConfirm: saveLevelConfigs,
        confirmLoading: isLoading,
        confirmDisabled: isLoading || !!getLevelConfigDisabledReason(),
        confirmHint: getLevelConfigDisabledReason(),
        cancelText: "关闭",
        onCancel: () => setTempLevels(levelConfigs.length > 0 ? levelConfigs : DEFAULT_MEMBER_LEVELS),
        confirmClassName: "w-full",
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 py-4", children: [
          sortedTempLevels.map((item, index) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Input,
              {
                type: "number",
                min: "1",
                step: "1",
                value: item.level,
                disabled: (item.usageCount || 0) > 0,
                onChange: (e2) => {
                  const nextLevel = Math.max(1, Math.floor(Number(e2.target.value) || 1));
                  setTempLevels((prev) => prev.map((levelItem) => levelItem === item ? { ...levelItem, level: nextLevel } : levelItem));
                },
                className: "w-20 shrink-0 text-center font-bold"
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 560,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 space-y-1", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Input,
                {
                  value: item.name,
                  onChange: (e2) => {
                    setTempLevels((prev) => prev.map((levelItem) => levelItem === item ? { ...levelItem, name: e2.target.value } : levelItem));
                  },
                  placeholder: `输入 LV.${item.level} 的展示名称`
                },
                void 0,
                false,
                {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 577,
                  columnNumber: 19
                },
                void 0
              ),
              (item.usageCount || 0) > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-[11px] text-slate-500", children: [
                "当前有 ",
                item.usageCount,
                " 位会员使用该等级 key，暂不允许删除或改号。"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 589,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 576,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => removeMemberLevel(item),
                disabled: tempLevels.length <= 1 || (item.usageCount || 0) > 0,
                className: "shrink-0",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 601,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 594,
                columnNumber: 17
              },
              void 0
            )
          ] }, `${item.level}-${index}`, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 559,
            columnNumber: 15
          }, void 0)),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", onClick: addMemberLevel, className: "w-full", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 606,
              columnNumber: 15
            }, void 0),
            "增加等级"
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 605,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 557,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 539,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isOpen, onOpenChange: setIsOpen, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: editingUser ? "编辑会员资料" : "创建新会员" }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 611,
        columnNumber: 136
      }, void 0) }, void 0, false, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 611,
        columnNumber: 122
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-8 py-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AvatarUpload, { value: formData.avatar, onChange: (url) => setFormData({ ...formData, avatar: url }) }, void 0, false, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 611,
          columnNumber: 269
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "电子邮箱" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 451
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: formData.email, onChange: (e2) => setFormData({ ...formData, email: e2.target.value }), required: true }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 470
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 611,
            columnNumber: 424
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "会员昵称" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 612
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: formData.nickname, onChange: (e2) => setFormData({ ...formData, nickname: e2.target.value }) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 631
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 611,
            columnNumber: 585
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "手机号码" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 770
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: formData.phone, onChange: (e2) => setFormData({ ...formData, phone: e2.target.value }) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 789
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 611,
            columnNumber: 743
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "会员等级" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 922
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Select, { value: formData.level.toString(), onValueChange: (v) => setFormData({ ...formData, level: parseInt(v) }), children: [
              !currentEditingLevelExists && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: formData.level.toString(), children: `LV.${formData.level}（待补齐等级 key）` }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 611,
                columnNumber: 1084
              }, void 0),
              sortedLevelConfigs.map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: item.level.toString(), children: item.name }, item.level, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 611,
                columnNumber: 1211
              }, void 0))
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 941
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 611,
            columnNumber: 895
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "性别" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 1338
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Select, { value: formData.gender, onValueChange: (v) => setFormData({ ...formData, gender: v }), children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "unknown", children: "保密" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 611,
                columnNumber: 1448
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "male", children: "男性" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 611,
                columnNumber: 1491
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "female", children: "女性" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 611,
                columnNumber: 1531
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 1355
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 611,
            columnNumber: 1311
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "生日日期" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 1615
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { type: "date", value: formData.birthday, onChange: (e2) => setFormData({ ...formData, birthday: e2.target.value }) }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 1634
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 611,
            columnNumber: 1588
          }, void 0),
          !editingUser && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2 col-span-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "初始密码" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 1813
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { type: "password", value: formData.password, onChange: (e2) => setFormData({ ...formData, password: e2.target.value }), required: true }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 611,
              columnNumber: 1832
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 611,
            columnNumber: 1775
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 611,
          columnNumber: 369
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "个性签名" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 611,
            columnNumber: 2003
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("textarea", { className: "w-full min-h-[80px] p-3 rounded-lg border border-slate-200 text-sm outline-none", value: formData.bio, onChange: (e2) => setFormData({ ...formData, bio: e2.target.value }) }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 611,
            columnNumber: 2022
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 611,
          columnNumber: 1976
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: "sticky bottom-0 bg-white pt-4 border-t", children: [
          error && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-rose-500 flex-1", children: error }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 611,
            columnNumber: 2294
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", loading: isLoading, className: "w-full sm:w-auto bg-blue-600 text-white px-8", children: "保存会员数据" }, void 0, false, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 611,
            columnNumber: 2350
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 611,
          columnNumber: 2219
        }, void 0)
      ] }, void 0, true, {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 611,
        columnNumber: 212
      }, void 0)
    ] }, void 0, true, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
      lineNumber: 611,
      columnNumber: 56
    }, void 0) }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
      lineNumber: 611,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      FormDialog,
      {
        open: isAdjustOpen,
        onOpenChange: setIsAdjustOpen,
        title: `调整用户资产 (${adjustType === "balance" ? "余额" : "积分"})`,
        confirmText: "确认并应用变动",
        confirmType: "submit",
        confirmForm: "adjust-asset-form",
        confirmLoading: isLoading,
        hideCancel: true,
        confirmClassName: "w-full bg-slate-900",
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { id: "adjust-asset-form", onSubmit: handleAdjustSubmit, className: "space-y-6 pt-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "变动类型" }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 626,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Select, { value: adjustData.type, onValueChange: (v) => setAdjustData({ ...adjustData, type: v }), children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "add", children: "增加 (+)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 628,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "sub", children: "减少 (-)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 629,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "set", children: "重置 (=)" }, void 0, false, {
                  fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                  lineNumber: 630,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 627,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 625,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: [
                "数值 (",
                adjustType === "balance" ? "元" : "分",
                ")"
              ] }, void 0, true, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 634,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { type: "number", step: adjustType === "balance" ? "0.01" : "1", value: adjustData.amount, onChange: (e2) => setAdjustData({ ...adjustData, amount: parseFloat(e2.target.value) || 0 }) }, void 0, false, {
                fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
                lineNumber: 635,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 633,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 624,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "操作备注" }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 639,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: adjustData.remark, onChange: (e2) => setAdjustData({ ...adjustData, remark: e2.target.value }), required: true }, void 0, false, {
              fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
              lineNumber: 640,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
            lineNumber: 638,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
          lineNumber: 623,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
        lineNumber: 612,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ConfirmDialog, { open: isDeleteOpen, onOpenChange: setIsDeleteOpen, onConfirm: handleDelete, title: "确认删除该会员吗？", description: deleteBlockedByAssets ? `当前会员仍有余额或积分未清零。
余额和积分必须同时为 0 才允许删除，请先到资产调整中清零后再操作。` : "此操作将永久抹除该会员的所有资产与关联记录，不可撤销。" }, void 0, false, {
      fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
      lineNumber: 644,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
    lineNumber: 374,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement.tsx",
    lineNumber: 373,
    columnNumber: 5
  }, void 0);
};
const $$Users = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Users;
  const permissions = Astro2.locals.adminPermissions || [];
  if (!hasPermission(permissions, ["user.view", "role.manage"])) {
    return Astro2.redirect("/admin");
  }
  const db = await createDbClient(env.DB);
  const enabledPlugins = await PluginService.getEnabledPlugins(db);
  const activeSlugs = enabledPlugins.map((p) => p.slug);
  const userData = await db.select({
    id: users.id,
    email: users.email,
    userType: users.userType,
    status: users.status,
    createdAt: users.createdAt,
    username: admins.username,
    level: members.level
  }).from(users).leftJoin(admins, eq(users.id, admins.id)).leftJoin(members, eq(users.id, members.id)).all();
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "用户管理" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-page-container mx-auto"> <!-- 列表与管理组件 (内置了 Header 和 Stats) --> <main> ${renderComponent($$result2, "AdminUserManagement", AdminUserManagement, { "users": userData, "activePlugins": activeSlugs, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/ycz_me/cizhenyu/src/components/admin/AdminUserManagement", "client:component-export": "AdminUserManagement" })} </main> <!-- 底部说明 --> <footer class="mt-12 text-center text-xs text-slate-400"> <p>© 2026 Core Identity Layer · 核心认证系统</p> </footer> </div> ` })}`;
}, "D:/ycz_me/cizhenyu/src/pages/admin/users.astro", void 0);
const $$file = "D:/ycz_me/cizhenyu/src/pages/admin/users.astro";
const $$url = "/admin/users";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Users,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
