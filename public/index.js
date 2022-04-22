(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qinpel_cps_1 = require("qinpel-cps");
class AdMister extends qinpel_cps_1.QinPanel {
    constructor() {
        super();
        const qinDesk = this.qinpel.manager.newDesk(this.qinpel, {
            addsApps: (manifest) => manifest.group == "admister",
            showCfgs: false,
        });
        this.getMain().appendChild(qinDesk.getMain());
    }
}
new AdMister().style.putAsBody();

},{"qinpel-cps":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTools = exports.QinTabs = exports.QinTable = exports.QinString = exports.QinStack = exports.QinSplitter = exports.QinPanel = exports.QinMutantsArm = exports.QinMutants = exports.QinMenuItem = exports.QinMenu = exports.QinLine = exports.QinLabel = exports.QinInteger = exports.QinIcon = exports.QinIconPick = exports.QinIconOption = exports.QinFilePath = exports.QinFileExplorer = exports.QinFileChooser = exports.QinField = exports.QinEdit = exports.QinCombo = exports.QinColumn = exports.QinButton = exports.QinBoolean = exports.QinBase = exports.QinBaseStyle = exports.qinUrlAsset = exports.qinAssetUrl = exports.QinAsset = void 0;
var qin_assets_1 = require("./qin-assets");
Object.defineProperty(exports, "QinAsset", { enumerable: true, get: function () { return qin_assets_1.QinAsset; } });
var qin_assets_2 = require("./qin-assets");
Object.defineProperty(exports, "qinAssetUrl", { enumerable: true, get: function () { return qin_assets_2.qinAssetUrl; } });
var qin_assets_3 = require("./qin-assets");
Object.defineProperty(exports, "qinUrlAsset", { enumerable: true, get: function () { return qin_assets_3.qinUrlAsset; } });
var qin_base_style_1 = require("./qin-base-style");
Object.defineProperty(exports, "QinBaseStyle", { enumerable: true, get: function () { return qin_base_style_1.QinBaseStyle; } });
var qin_base_1 = require("./qin-base");
Object.defineProperty(exports, "QinBase", { enumerable: true, get: function () { return qin_base_1.QinBase; } });
var qin_boolean_1 = require("./qin-boolean");
Object.defineProperty(exports, "QinBoolean", { enumerable: true, get: function () { return qin_boolean_1.QinBoolean; } });
var qin_button_1 = require("./qin-button");
Object.defineProperty(exports, "QinButton", { enumerable: true, get: function () { return qin_button_1.QinButton; } });
var qin_column_1 = require("./qin-column");
Object.defineProperty(exports, "QinColumn", { enumerable: true, get: function () { return qin_column_1.QinColumn; } });
var qin_combo_1 = require("./qin-combo");
Object.defineProperty(exports, "QinCombo", { enumerable: true, get: function () { return qin_combo_1.QinCombo; } });
var qin_edit_1 = require("./qin-edit");
Object.defineProperty(exports, "QinEdit", { enumerable: true, get: function () { return qin_edit_1.QinEdit; } });
var qin_field_1 = require("./qin-field");
Object.defineProperty(exports, "QinField", { enumerable: true, get: function () { return qin_field_1.QinField; } });
var qin_file_chooser_1 = require("./qin-file-chooser");
Object.defineProperty(exports, "QinFileChooser", { enumerable: true, get: function () { return qin_file_chooser_1.QinFileChooser; } });
var qin_file_explorer_1 = require("./qin-file-explorer");
Object.defineProperty(exports, "QinFileExplorer", { enumerable: true, get: function () { return qin_file_explorer_1.QinFileExplorer; } });
var qin_file_path_1 = require("./qin-file-path");
Object.defineProperty(exports, "QinFilePath", { enumerable: true, get: function () { return qin_file_path_1.QinFilePath; } });
var qin_icon_option_1 = require("./qin-icon-option");
Object.defineProperty(exports, "QinIconOption", { enumerable: true, get: function () { return qin_icon_option_1.QinIconOption; } });
var qin_icon_pick_1 = require("./qin-icon-pick");
Object.defineProperty(exports, "QinIconPick", { enumerable: true, get: function () { return qin_icon_pick_1.QinIconPick; } });
var qin_icon_1 = require("./qin-icon");
Object.defineProperty(exports, "QinIcon", { enumerable: true, get: function () { return qin_icon_1.QinIcon; } });
var qin_integer_1 = require("./qin-integer");
Object.defineProperty(exports, "QinInteger", { enumerable: true, get: function () { return qin_integer_1.QinInteger; } });
var qin_label_1 = require("./qin-label");
Object.defineProperty(exports, "QinLabel", { enumerable: true, get: function () { return qin_label_1.QinLabel; } });
var qin_line_1 = require("./qin-line");
Object.defineProperty(exports, "QinLine", { enumerable: true, get: function () { return qin_line_1.QinLine; } });
var qin_menu_1 = require("./qin-menu");
Object.defineProperty(exports, "QinMenu", { enumerable: true, get: function () { return qin_menu_1.QinMenu; } });
var qin_menu_2 = require("./qin-menu");
Object.defineProperty(exports, "QinMenuItem", { enumerable: true, get: function () { return qin_menu_2.QinMenuItem; } });
var qin_mutants_1 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutants", { enumerable: true, get: function () { return qin_mutants_1.QinMutants; } });
var qin_mutants_2 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutantsArm", { enumerable: true, get: function () { return qin_mutants_2.QinMutantsArm; } });
var qin_panel_1 = require("./qin-panel");
Object.defineProperty(exports, "QinPanel", { enumerable: true, get: function () { return qin_panel_1.QinPanel; } });
var qin_splitter_1 = require("./qin-splitter");
Object.defineProperty(exports, "QinSplitter", { enumerable: true, get: function () { return qin_splitter_1.QinSplitter; } });
var qin_stack_1 = require("./qin-stack");
Object.defineProperty(exports, "QinStack", { enumerable: true, get: function () { return qin_stack_1.QinStack; } });
var qin_string_1 = require("./qin-string");
Object.defineProperty(exports, "QinString", { enumerable: true, get: function () { return qin_string_1.QinString; } });
var qin_table_1 = require("./qin-table");
Object.defineProperty(exports, "QinTable", { enumerable: true, get: function () { return qin_table_1.QinTable; } });
var qin_tabs_1 = require("./qin-tabs");
Object.defineProperty(exports, "QinTabs", { enumerable: true, get: function () { return qin_tabs_1.QinTabs; } });
var qin_tools_1 = require("./qin-tools");
Object.defineProperty(exports, "QinTools", { enumerable: true, get: function () { return qin_tools_1.QinTools; } });

},{"./qin-assets":3,"./qin-base":5,"./qin-base-style":4,"./qin-boolean":6,"./qin-button":7,"./qin-column":8,"./qin-combo":9,"./qin-edit":10,"./qin-field":11,"./qin-file-chooser":12,"./qin-file-explorer":13,"./qin-file-path":14,"./qin-icon":17,"./qin-icon-option":15,"./qin-icon-pick":16,"./qin-integer":18,"./qin-label":19,"./qin-line":20,"./qin-menu":21,"./qin-mutants":22,"./qin-panel":23,"./qin-splitter":24,"./qin-stack":25,"./qin-string":26,"./qin-table":27,"./qin-tabs":28,"./qin-tools":29}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qinUrlAsset = exports.qinAssetUrl = exports.QinAsset = void 0;
var QinAsset;
(function (QinAsset) {
    QinAsset["BackTiny01"] = "back-tiny-01.png";
    QinAsset["BackgroundDark0"] = "background-dark-0.png";
    QinAsset["BackgroundDark1"] = "background-dark-1.png";
    QinAsset["BackgroundDark10"] = "background-dark-10.png";
    QinAsset["BackgroundDark11"] = "background-dark-11.png";
    QinAsset["BackgroundDark12"] = "background-dark-12.png";
    QinAsset["BackgroundDark13"] = "background-dark-13.png";
    QinAsset["BackgroundDark14"] = "background-dark-14.png";
    QinAsset["BackgroundDark15"] = "background-dark-15.png";
    QinAsset["BackgroundDark16"] = "background-dark-16.png";
    QinAsset["BackgroundDark17"] = "background-dark-17.png";
    QinAsset["BackgroundDark18"] = "background-dark-18.png";
    QinAsset["BackgroundDark19"] = "background-dark-19.png";
    QinAsset["BackgroundDark2"] = "background-dark-2.png";
    QinAsset["BackgroundDark20"] = "background-dark-20.png";
    QinAsset["BackgroundDark21"] = "background-dark-21.png";
    QinAsset["BackgroundDark22"] = "background-dark-22.png";
    QinAsset["BackgroundDark23"] = "background-dark-23.png";
    QinAsset["BackgroundDark24"] = "background-dark-24.png";
    QinAsset["BackgroundDark25"] = "background-dark-25.png";
    QinAsset["BackgroundDark26"] = "background-dark-26.png";
    QinAsset["BackgroundDark27"] = "background-dark-27.png";
    QinAsset["BackgroundDark28"] = "background-dark-28.png";
    QinAsset["BackgroundDark29"] = "background-dark-29.png";
    QinAsset["BackgroundDark3"] = "background-dark-3.png";
    QinAsset["BackgroundDark4"] = "background-dark-4.png";
    QinAsset["BackgroundDark5"] = "background-dark-5.png";
    QinAsset["BackgroundDark6"] = "background-dark-6.png";
    QinAsset["BackgroundDark7"] = "background-dark-7.png";
    QinAsset["BackgroundDark8"] = "background-dark-8.png";
    QinAsset["BackgroundDark9"] = "background-dark-9.png";
    QinAsset["BackgroundDark"] = "background-dark.png";
    QinAsset["BackgroundLight0"] = "background-light-0.png";
    QinAsset["BackgroundLight1"] = "background-light-1.png";
    QinAsset["BackgroundLight10"] = "background-light-10.png";
    QinAsset["BackgroundLight11"] = "background-light-11.png";
    QinAsset["BackgroundLight12"] = "background-light-12.png";
    QinAsset["BackgroundLight13"] = "background-light-13.png";
    QinAsset["BackgroundLight14"] = "background-light-14.png";
    QinAsset["BackgroundLight15"] = "background-light-15.png";
    QinAsset["BackgroundLight16"] = "background-light-16.png";
    QinAsset["BackgroundLight17"] = "background-light-17.png";
    QinAsset["BackgroundLight18"] = "background-light-18.png";
    QinAsset["BackgroundLight19"] = "background-light-19.png";
    QinAsset["BackgroundLight2"] = "background-light-2.png";
    QinAsset["BackgroundLight20"] = "background-light-20.png";
    QinAsset["BackgroundLight21"] = "background-light-21.png";
    QinAsset["BackgroundLight22"] = "background-light-22.png";
    QinAsset["BackgroundLight23"] = "background-light-23.png";
    QinAsset["BackgroundLight24"] = "background-light-24.png";
    QinAsset["BackgroundLight25"] = "background-light-25.png";
    QinAsset["BackgroundLight26"] = "background-light-26.png";
    QinAsset["BackgroundLight27"] = "background-light-27.png";
    QinAsset["BackgroundLight28"] = "background-light-28.png";
    QinAsset["BackgroundLight29"] = "background-light-29.png";
    QinAsset["BackgroundLight3"] = "background-light-3.png";
    QinAsset["BackgroundLight4"] = "background-light-4.png";
    QinAsset["BackgroundLight5"] = "background-light-5.png";
    QinAsset["BackgroundLight6"] = "background-light-6.png";
    QinAsset["BackgroundLight7"] = "background-light-7.png";
    QinAsset["BackgroundLight8"] = "background-light-8.png";
    QinAsset["BackgroundLight9"] = "background-light-9.png";
    QinAsset["BackgroundLight"] = "background-light.png";
    QinAsset["BackgroundNormal0"] = "background-normal-0.png";
    QinAsset["BackgroundNormal1"] = "background-normal-1.png";
    QinAsset["BackgroundNormal10"] = "background-normal-10.png";
    QinAsset["BackgroundNormal11"] = "background-normal-11.png";
    QinAsset["BackgroundNormal12"] = "background-normal-12.png";
    QinAsset["BackgroundNormal13"] = "background-normal-13.png";
    QinAsset["BackgroundNormal14"] = "background-normal-14.png";
    QinAsset["BackgroundNormal15"] = "background-normal-15.png";
    QinAsset["BackgroundNormal16"] = "background-normal-16.png";
    QinAsset["BackgroundNormal17"] = "background-normal-17.png";
    QinAsset["BackgroundNormal18"] = "background-normal-18.png";
    QinAsset["BackgroundNormal19"] = "background-normal-19.png";
    QinAsset["BackgroundNormal2"] = "background-normal-2.png";
    QinAsset["BackgroundNormal20"] = "background-normal-20.png";
    QinAsset["BackgroundNormal21"] = "background-normal-21.png";
    QinAsset["BackgroundNormal22"] = "background-normal-22.png";
    QinAsset["BackgroundNormal23"] = "background-normal-23.png";
    QinAsset["BackgroundNormal24"] = "background-normal-24.png";
    QinAsset["BackgroundNormal25"] = "background-normal-25.png";
    QinAsset["BackgroundNormal26"] = "background-normal-26.png";
    QinAsset["BackgroundNormal27"] = "background-normal-27.png";
    QinAsset["BackgroundNormal28"] = "background-normal-28.png";
    QinAsset["BackgroundNormal29"] = "background-normal-29.png";
    QinAsset["BackgroundNormal3"] = "background-normal-3.png";
    QinAsset["BackgroundNormal4"] = "background-normal-4.png";
    QinAsset["BackgroundNormal5"] = "background-normal-5.png";
    QinAsset["BackgroundNormal6"] = "background-normal-6.png";
    QinAsset["BackgroundNormal7"] = "background-normal-7.png";
    QinAsset["BackgroundNormal8"] = "background-normal-8.png";
    QinAsset["BackgroundNormal9"] = "background-normal-9.png";
    QinAsset["BackgroundNormal"] = "background-normal.png";
    QinAsset["ExplorerApps"] = "explorer-apps.png";
    QinAsset["ExplorerCmds"] = "explorer-cmds.png";
    QinAsset["ExplorerDir"] = "explorer-dir.png";
    QinAsset["ExplorerExec"] = "explorer-exec.png";
    QinAsset["ExplorerFile"] = "explorer-file.png";
    QinAsset["ExplorerImage"] = "explorer-image.png";
    QinAsset["ExplorerMovie"] = "explorer-movie.png";
    QinAsset["ExplorerMusic"] = "explorer-music.png";
    QinAsset["ExplorerZipped"] = "explorer-zipped.png";
    QinAsset["FaceAdd"] = "face-add.png";
    QinAsset["FaceArrowDown"] = "face-arrow-down.png";
    QinAsset["FaceArrowLeft"] = "face-arrow-left.png";
    QinAsset["FaceArrowRight"] = "face-arrow-right.png";
    QinAsset["FaceArrowUp"] = "face-arrow-up.png";
    QinAsset["FaceAttach"] = "face-attach.png";
    QinAsset["FaceBag"] = "face-bag.png";
    QinAsset["FaceBellDisable"] = "face-bell-disable.png";
    QinAsset["FaceBell"] = "face-bell.png";
    QinAsset["FaceCalendar"] = "face-calendar.png";
    QinAsset["FaceCameraDisable"] = "face-camera-disable.png";
    QinAsset["FaceCamera"] = "face-camera.png";
    QinAsset["FaceCancel"] = "face-cancel.png";
    QinAsset["FaceCart"] = "face-cart.png";
    QinAsset["FaceCheck"] = "face-check.png";
    QinAsset["FaceCircle"] = "face-circle.png";
    QinAsset["FaceClock"] = "face-clock.png";
    QinAsset["FaceClose"] = "face-close.png";
    QinAsset["FaceCog"] = "face-cog.png";
    QinAsset["FaceCompass"] = "face-compass.png";
    QinAsset["FaceConfirm"] = "face-confirm.png";
    QinAsset["FaceContact"] = "face-contact.png";
    QinAsset["FaceControl"] = "face-control.png";
    QinAsset["FaceCopy"] = "face-copy.png";
    QinAsset["FaceDel"] = "face-del.png";
    QinAsset["FaceDownload"] = "face-download.png";
    QinAsset["FaceEnlarge"] = "face-enlarge.png";
    QinAsset["FaceEnter"] = "face-enter.png";
    QinAsset["FaceErase"] = "face-erase.png";
    QinAsset["FaceExit"] = "face-exit.png";
    QinAsset["FaceEyeDisable"] = "face-eye-disable.png";
    QinAsset["FaceEye"] = "face-eye.png";
    QinAsset["FaceFile"] = "face-file.png";
    QinAsset["FaceFilter"] = "face-filter.png";
    QinAsset["FaceFolder"] = "face-folder.png";
    QinAsset["FaceGear"] = "face-gear.png";
    QinAsset["FaceHeart"] = "face-heart.png";
    QinAsset["FaceHome"] = "face-home.png";
    QinAsset["FaceImage"] = "face-image.png";
    QinAsset["FaceLabel"] = "face-label.png";
    QinAsset["FaceLink"] = "face-link.png";
    QinAsset["FaceLock"] = "face-lock.png";
    QinAsset["FaceMail"] = "face-mail.png";
    QinAsset["FaceMapDisable"] = "face-map-disable.png";
    QinAsset["FaceMap"] = "face-map.png";
    QinAsset["FaceMessage"] = "face-message.png";
    QinAsset["FaceMicDisable"] = "face-mic-disable.png";
    QinAsset["FaceMic"] = "face-mic.png";
    QinAsset["FaceMinus"] = "face-minus.png";
    QinAsset["FaceMovie"] = "face-movie.png";
    QinAsset["FaceNews"] = "face-news.png";
    QinAsset["FacePaste"] = "face-paste.png";
    QinAsset["FacePencil"] = "face-pencil.png";
    QinAsset["FacePerson"] = "face-person.png";
    QinAsset["FacePhoneDisable"] = "face-phone-disable.png";
    QinAsset["FacePhone"] = "face-phone.png";
    QinAsset["FacePin"] = "face-pin.png";
    QinAsset["FacePlus"] = "face-plus.png";
    QinAsset["FaceRedo"] = "face-redo.png";
    QinAsset["FaceSave"] = "face-save.png";
    QinAsset["FaceSearch"] = "face-search.png";
    QinAsset["FaceSend"] = "face-send.png";
    QinAsset["FaceSettings"] = "face-settings.png";
    QinAsset["FaceShare"] = "face-share.png";
    QinAsset["FaceShield"] = "face-shield.png";
    QinAsset["FaceShrink"] = "face-shrink.png";
    QinAsset["FaceSpeakerDisable"] = "face-speaker-disable.png";
    QinAsset["FaceSpeaker"] = "face-speaker.png";
    QinAsset["FaceStar"] = "face-star.png";
    QinAsset["FaceTrash"] = "face-trash.png";
    QinAsset["FaceUndo"] = "face-undo.png";
    QinAsset["FaceUnlink"] = "face-unlink.png";
    QinAsset["FaceUnlock"] = "face-unlock.png";
    QinAsset["FaceUpload"] = "face-upload.png";
    QinAsset["FaceWifiDisable"] = "face-wifi-disable.png";
    QinAsset["FaceWifi"] = "face-wifi.png";
    QinAsset["FrameClose"] = "frame-close.png";
    QinAsset["FrameMaximize"] = "frame-maximize.png";
    QinAsset["FrameMenu"] = "frame-menu.png";
    QinAsset["FrameMinimize"] = "frame-minimize.png";
    QinAsset["FrameResize"] = "frame-resize.png";
    QinAsset["FrameStatusError"] = "frame-status-error.png";
    QinAsset["FrameStatusInfo"] = "frame-status-info.png";
    QinAsset["LoginKey"] = "login-key.png";
    QinAsset["MenuDevtools"] = "menu-devtools.ico";
    QinAsset["Qinpel48"] = "qinpel-48.png";
    QinAsset["Qinpel"] = "qinpel.png";
    QinAsset["SourceSansPro"] = "source-sans-pro.ttf";
    QinAsset["SourceSerifPro"] = "source-serif-pro.ttf";
})(QinAsset = exports.QinAsset || (exports.QinAsset = {}));
function qinAssetUrl(asset) {
    return "/app/qinpel-app/assets/" + asset;
}
exports.qinAssetUrl = qinAssetUrl;
function qinUrlAsset(url) {
    const asset = url.substring(url.lastIndexOf("/") + 1);
    return asset;
}
exports.qinUrlAsset = qinUrlAsset;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBaseStyle = void 0;
const qinpel_res_1 = require("qinpel-res");
class QinBaseStyle {
    constructor(element) {
        this.element = element;
    }
    putAsBody() {
        document.body.appendChild(this.element);
        qinpel_res_1.QinSkin.styleAsBody(this.element);
    }
    delAsBody() {
        document.body.removeChild(this.element);
    }
    putAsWhole() {
        this.putAsPositionAbsolute();
        this.putAsBounds(0, 0, 0, 0);
    }
    putAsEdit() {
        qinpel_res_1.QinSkin.styleAsEdit(this.element);
        this.element.tabIndex = 0;
    }
    putAsScroll() {
        this.element.style.overflow = "auto";
    }
    putAsMargin(margin) {
        this.element.style.margin = this.getPixelsOrInitial(margin);
    }
    putAsMarginTop(margin) {
        this.element.style.marginTop = this.getPixelsOrInitial(margin);
    }
    putAsMarginBottom(margin) {
        this.element.style.marginBottom = this.getPixelsOrInitial(margin);
    }
    putAsMarginLeft(margin) {
        this.element.style.marginLeft = this.getPixelsOrInitial(margin);
    }
    putAsMarginRight(margin) {
        this.element.style.marginRight = this.getPixelsOrInitial(margin);
    }
    putAsPadding(padding) {
        this.element.style.padding = this.getPixelsOrInitial(padding);
    }
    putAsPaddingTop(padding) {
        this.element.style.paddingTop = this.getPixelsOrInitial(padding);
    }
    putAsPaddingBottom(padding) {
        this.element.style.paddingBottom = this.getPixelsOrInitial(padding);
    }
    putAsPaddingLeft(padding) {
        this.element.style.paddingLeft = this.getPixelsOrInitial(padding);
    }
    putAsPaddingRight(padding) {
        this.element.style.paddingRight = this.getPixelsOrInitial(padding);
    }
    putAsBounds(top, right, bottom, left) {
        this.element.style.top = this.getPixelsOrInitial(top);
        this.element.style.right = this.getPixelsOrInitial(right);
        this.element.style.bottom = this.getPixelsOrInitial(bottom);
        this.element.style.left = this.getPixelsOrInitial(left);
    }
    putAsAllCentered() {
        this.element.style.textAlign = "center";
        this.element.style.alignItems = "center";
        this.element.style.alignContent = "center";
        this.element.style.verticalAlign = "middle";
    }
    putAsDisplayFlex() {
        this.element.style.display = "flex";
    }
    putAsDisplayInline() {
        this.element.style.display = "inline";
    }
    putAsDisplayInlineBlock() {
        this.element.style.display = "inline-block";
    }
    putAsPositionStatic() {
        this.element.style.position = "static";
    }
    putAsPositionAbsolute() {
        this.element.style.position = "absolute";
    }
    putAsPositionFixed() {
        this.element.style.position = "fixed";
    }
    putAsPositionRelative() {
        this.element.style.position = "relative";
    }
    putAsPositionSticky() {
        this.element.style.position = "sticky";
    }
    putAsPositionInitial() {
        this.element.style.position = "initial";
    }
    putAsFlexDirectionRow() {
        this.element.style.flexDirection = "row";
    }
    putAsFlexDirectionRowReverse() {
        this.element.style.flexDirection = "row-reverse";
    }
    putAsFlexDirectionColumn() {
        this.element.style.flexDirection = "column";
    }
    putAsFlexDirectionColumnReverse() {
        this.element.style.flexDirection = "column-reverse";
    }
    putAsFlexWrap() {
        this.element.style.flexWrap = "wrap";
    }
    putAsFlexWrapNot() {
        this.element.style.flexWrap = "nowrap";
    }
    putAsFlexWrapReverse() {
        this.element.style.flexWrap = "wrap-reverse";
    }
    putAsFlexMin() {
        this.element.style.flex = "none";
    }
    putAsFlexMax() {
        this.element.style.flex = "auto";
    }
    putAsWidth(width) {
        this.element.style.width = this.getPixelsOrInitial(width);
    }
    putAsHeight(height) {
        this.element.style.height = this.getPixelsOrInitial(height);
    }
    putAsSize(width, height) {
        this.element.style.width = this.getPixelsOrInitial(width);
        this.element.style.height = this.getPixelsOrInitial(height);
    }
    putAsMinWidth(width) {
        this.element.style.minWidth = this.getPixelsOrInitial(width);
    }
    putAsMinHeight(height) {
        this.element.style.minHeight = this.getPixelsOrInitial(height);
    }
    putAsMinSize(width, height) {
        this.element.style.minWidth = this.getPixelsOrInitial(width);
        this.element.style.minHeight = this.getPixelsOrInitial(height);
    }
    putAsMaxWidth(width) {
        this.element.style.maxWidth = this.getPixelsOrInitial(width);
    }
    putAsMaxHeight(height) {
        this.element.style.maxHeight = this.getPixelsOrInitial(height);
    }
    putAsMaxSize(width, height) {
        this.element.style.maxWidth = this.getPixelsOrInitial(width);
        this.element.style.maxHeight = this.getPixelsOrInitial(height);
    }
    putAsForeground(foreground) {
        this.element.style.color = foreground;
    }
    putAsBackground(background) {
        this.element.style.background = background;
    }
    putAsBackAsset(asset) {
        this.element.style.backgroundImage = "url('/app/qinpel-app/assets/" + asset + "')";
    }
    putAsBackInitial() {
        this.element.style.backgroundImage = "initial";
    }
    putAsZIndex(index) {
        if (index == null || index == undefined) {
            this.element.style.zIndex = "initial";
        }
        else {
            this.element.style.zIndex = index.toString();
        }
    }
    putAsDisabledSelection() {
        qinpel_res_1.QinSkin.disableSelection(this.element);
    }
    getPixelsOrInitial(value) {
        if (value == null || value == undefined) {
            return "initial";
        }
        return value + "px";
    }
}
exports.QinBaseStyle = QinBaseStyle;

},{"qinpel-res":30}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBase = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_style_1 = require("./qin-base-style");
const qin_tools_1 = require("./qin-tools");
class QinBase {
    constructor() {
        this._baseParent = null;
        this._baseChildren = [];
        this._baseDisplay = "initial";
        this._baseVisibility = "initial";
        this._style = null;
    }
    get qinpel() {
        return qin_tools_1.QinTools.qinpel();
    }
    get style() {
        if (this._style == null) {
            this._style = new qin_base_style_1.QinBaseStyle(this.getMain());
        }
        return this._style;
    }
    install(onBase) {
        this._baseParent = onBase;
        this._baseParent.appendChild(this);
    }
    unInstall() {
        this._baseParent.removeChild(this);
    }
    reInstall() {
        this._baseParent.appendChild(this);
    }
    unDisplay() {
        if (this.getMain().style.display !== "none") {
            this._baseDisplay = this.getMain().style.display;
            this.getMain().style.display = "none";
        }
    }
    reDisplay() {
        this.getMain().style.display = this._baseDisplay;
    }
    unVisible() {
        if (this.getMain().style.display !== "hidden") {
            this._baseVisibility = this.getMain().style.visibility;
            this.getMain().style.visibility = "hidden";
        }
    }
    reVisible() {
        this.getMain().style.visibility = this._baseVisibility;
    }
    appendChild(child) {
        this._baseChildren.push(child);
        this.getMain().appendChild(child.getMain());
    }
    removeChild(child) {
        let index = this._baseChildren.indexOf(child);
        if (index > -1) {
            this._baseChildren.splice(index, 1);
        }
        this.getMain().removeChild(child.getMain());
    }
    children() {
        return this._baseChildren;
    }
    clearChildren() {
        for (const child of this._baseChildren) {
            this.getMain().removeChild(child.getMain());
        }
        this._baseChildren = [];
    }
    addAction(action) {
        qinpel_res_1.QinArm.addAction(this.getMain(), action);
    }
    putTabIndex(index) {
        this.getMain().tabIndex = index;
    }
}
exports.QinBase = QinBase;

},{"./qin-base-style":4,"./qin-tools":29,"qinpel-res":30}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBoolean = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
class QinBoolean extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinSpan = new qin_label_1.QinLabel();
        this._qinIcon = new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCircle);
        this._value = false;
        this._qinSpan.install(this._qinMain);
        this._qinIcon.install(this._qinSpan);
        this._qinSpan.style.putAsEdit();
        this._qinSpan.style.putAsDisplayFlex();
        this._qinSpan.style.putAsAllCentered();
        this._qinSpan.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.toggle();
            }
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._value;
    }
    setData(data) {
        this._value = data;
        this.updateIcon();
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinSpan() {
        return this._qinSpan;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.updateIcon();
    }
    updateIcon() {
        if (this._value) {
            this._qinIcon.asset = qin_assets_1.QinAsset.FaceConfirm;
        }
        else {
            this._qinIcon.asset = qin_assets_1.QinAsset.FaceCircle;
        }
    }
    toggle() {
        this._value = !this._value;
        this.updateIcon();
    }
}
exports.QinBoolean = QinBoolean;

},{"./qin-assets":3,"./qin-edit":10,"./qin-icon":17,"./qin-label":19,"./qin-line":20}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinButton = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_1 = require("./qin-base");
class QinButton extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("button");
        this._qinIcon = null;
        this._qinLabel = null;
        styles.applyOnButton(this._elMain);
        if (options === null || options === void 0 ? void 0 : options.icon) {
            this._qinIcon = options.icon;
            this._qinIcon.install(this);
        }
        if (options === null || options === void 0 ? void 0 : options.label) {
            this._qinLabel = options.label;
            this._qinLabel.install(this);
        }
    }
    getMain() {
        return this._elMain;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get qinLabel() {
        return this._qinLabel;
    }
}
exports.QinButton = QinButton;
const styles = {
    applyOnButton: (el) => {
        qinpel_res_1.QinSkin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
    },
};

},{"./qin-base":5,"qinpel-res":30}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinColumn = void 0;
const qin_base_1 = require("./qin-base");
class QinColumn extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this.initPanel();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const viewer of options.initial) {
                viewer.install(this);
            }
        }
    }
    initPanel() {
        styles.applyOnPanel(this._elMain);
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinColumn = QinColumn;
const styles = {
    applyOnPanel: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.flexWrap = "nowrap";
    },
};

},{"./qin-base":5}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinCombo = void 0;
const qin_edit_1 = require("./qin-edit");
class QinCombo extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("select");
        this.style.putAsEdit();
        if (options === null || options === void 0 ? void 0 : options.items) {
            for (let item of options.items) {
                this.addItem(item);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.selected) {
            this.setData(options.selected);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        return this._elMain.value;
    }
    setData(data) {
        this._elMain.value = data;
    }
    addItem(item) {
        const option = document.createElement("option");
        option.text = item.title;
        option.value = item.value;
        if (item.selected != undefined && item.selected != null) {
            option.selected = item.selected;
        }
        this._elMain.appendChild(option);
        return this;
    }
}
exports.QinCombo = QinCombo;

},{"./qin-edit":10}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinEdit = void 0;
const qin_base_1 = require("./qin-base");
class QinEdit extends qin_base_1.QinBase {
}
exports.QinEdit = QinEdit;

},{"./qin-base":5}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinField = void 0;
const qin_column_1 = require("./qin-column");
const qin_edit_1 = require("./qin-edit");
const qin_label_1 = require("./qin-label");
class QinField extends qin_edit_1.QinEdit {
    constructor(title, edit) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
        this._qinLabel = new qin_label_1.QinLabel();
        this._qinEdit = null;
        this._qinLabel.setTitle(title);
        this._qinLabel.install(this._qinMain);
        this._qinEdit = edit;
        this._qinEdit.install(this._qinMain);
        this._qinMain.getMain().style.marginRight = "5px";
        this._qinMain.getMain().style.marginBottom = "5px";
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinEdit.getData();
    }
    setData(data) {
        this._qinEdit.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinLabel() {
        return this._qinLabel;
    }
    get qinEdit() {
        return this._qinEdit;
    }
}
exports.QinField = QinField;

},{"./qin-column":8,"./qin-edit":10,"./qin-label":19}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFileChooser = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_combo_1 = require("./qin-combo");
const qin_edit_1 = require("./qin-edit");
const qin_file_explorer_1 = require("./qin-file-explorer");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
const qin_string_1 = require("./qin-string");
class QinFileChooser extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
        this._qinUpper = new qin_line_1.QinLine();
        this._qinConfirm = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceConfirm),
        });
        this._qinFolder = new qin_string_1.QinString();
        this._qinExtensions = new qin_combo_1.QinCombo();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceSearch),
        });
        this._qinUnder = new qin_panel_1.QinPanel();
        this._qinExplorer = new qin_file_explorer_1.QinFileExplorer();
        this._listeners = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._operation = (options === null || options === void 0 ? void 0 : options.operation) ? options.operation : qinpel_res_1.QinFilesOperation.OPEN;
        this._descriptors = (options === null || options === void 0 ? void 0 : options.descriptors) ? options.descriptors : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options === null || options === void 0 ? void 0 : options.singleSelection : false;
        this.initMain();
        this.initUpper();
        this.initUnder();
    }
    initMain() {
        this._qinUpper.install(this._qinMain);
        this._qinUnder.install(this._qinMain);
    }
    initUpper() {
        this._qinUpper.style.putAsFlexMin();
        this._qinConfirm.install(this._qinUpper);
        this._qinConfirm.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                let data = this.getData();
                for (const chosen of this._listeners) {
                    chosen(data);
                }
                qinEvent.consumed();
            }
        });
        this._qinFolder.install(this._qinUpper);
        this._qinFolder.style.putAsMinWidth(100);
        this._qinFolder.style.putAsFlexMax();
        this._qinFolder.addAction((qinEvent) => {
            if (qinEvent.isEnter) {
                this.loadFolder();
                qinEvent.consumed();
            }
        });
        this._qinExtensions.install(this._qinUpper);
        this._qinExtensions.style.putAsMinWidth(100);
        this.initExtensions();
        this._qinSearch.install(this._qinUpper);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.loadFolder();
                qinEvent.consumed();
            }
        });
    }
    initUnder() {
        this._qinUnder.style.putAsScroll();
        this._qinUnder.style.putAsFlexMax();
        this._qinExplorer.install(this._qinUnder);
        this._qinExplorer.nature = this._nature;
        this._qinExplorer.singleSelection = this._singleSelection;
    }
    initExtensions() {
        if (this._descriptors.length == 0) {
            this._qinExtensions.addItem({
                title: "All Files (*.*)",
                value: "*",
                selected: true,
            });
            this._qinExplorer.extensions = [];
        }
        else {
            for (let index = 0; index < this._descriptors.length; index++) {
                const descriptor = this._descriptors[index];
                this._qinExtensions.addItem({
                    title: descriptor.description,
                    value: descriptor.extensions.join(";"),
                    selected: index == 0,
                });
            }
            this._qinExplorer.extensions = this._descriptors[0].extensions;
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinExplorer.getData();
    }
    setData(data) {
        this._qinExplorer.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinUpper() {
        return this._qinUpper;
    }
    get qinConfirm() {
        return this._qinConfirm;
    }
    get qinFolder() {
        return this._qinFolder;
    }
    get qinExtensions() {
        return this._qinExtensions;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinUnder() {
        return this._qinUnder;
    }
    get qinExplorer() {
        return this._qinExplorer;
    }
    get nature() {
        return this._nature;
    }
    set nature(value) {
        this._nature = value;
        this._qinExplorer.nature = value;
    }
    get operation() {
        return this._operation;
    }
    set operation(value) {
        this._operation = value;
    }
    get descriptors() {
        return this._descriptors;
    }
    set descriptors(value) {
        this._descriptors = value;
    }
    get singleSelection() {
        return this._singleSelection;
    }
    set singleSelection(value) {
        this._singleSelection = value;
        this._qinExplorer.singleSelection = value;
    }
    loadFolder() {
        this._qinExplorer.load(this._qinFolder.getData(), (loaded) => {
            this._qinFolder.setData(loaded);
        });
    }
    addChosen(chosen) {
        this._listeners.push(chosen);
        return this;
    }
}
exports.QinFileChooser = QinFileChooser;

},{"./qin-assets":3,"./qin-button":7,"./qin-column":8,"./qin-combo":9,"./qin-edit":10,"./qin-file-explorer":13,"./qin-icon":17,"./qin-line":20,"./qin-panel":23,"./qin-string":26,"qinpel-res":30}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFileExplorer = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinFileExplorer extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_panel_1.QinPanel();
        this._folderActual = "";
        this._folderServer = "";
        this._items = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._extensions = (options === null || options === void 0 ? void 0 : options.extensions) ? options.extensions : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options.singleSelection : false;
        this.initMain();
    }
    initMain() {
        styles.applyOnMain(this._qinMain.getMain());
        this._qinMain.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.cleanSelection();
            }
        });
        this._qinMain.style.putAsDisabledSelection();
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        let result = [];
        this._items.forEach((item) => {
            if (item.isSelected()) {
                result.push(qinpel_res_1.QinSoul.foot.getPathJoin(this._folderServer, item.getName()));
            }
        });
        return result;
    }
    setData(data) {
        this.clean();
        if (data && data.length > 0) {
            let folderRoot = qinpel_res_1.QinSoul.foot.getParent(data[0]);
            this.load(folderRoot, (_) => {
                for (const itemPath of data) {
                    let itemRoot = qinpel_res_1.QinSoul.foot.getParent(itemPath);
                    let itemName = qinpel_res_1.QinSoul.foot.getStem(itemPath);
                    if (itemRoot !== folderRoot) {
                        this.qinpel.frame.statusError(`The item '${itemPath}' is not on the root '${folderRoot}'.`, "{qinpel-cps}(ErrCode-000001)");
                    }
                    else {
                        if (!this.select(itemName)) {
                            this.qinpel.frame.statusError(`Does not have the item '${itemName}' on the folder '${folderRoot}'`, "{qinpel-cps}(ErrCode-000002)");
                        }
                    }
                }
            });
        }
    }
    get qinMain() {
        return this._qinMain;
    }
    get nature() {
        return this._nature;
    }
    set nature(value) {
        this._nature = value;
    }
    get extensions() {
        return this._extensions;
    }
    set extensions(value) {
        this._extensions = value;
    }
    get singleSelection() {
        return this._singleSelection;
    }
    set singleSelection(value) {
        this._singleSelection = value;
        this.updateSingleSelection();
    }
    get folderActual() {
        return this._folderActual;
    }
    get folderServer() {
        return this._folderServer;
    }
    updateSingleSelection() {
        if (this._singleSelection) {
            let alreadyHas = false;
            for (const item of this._items) {
                if (item.isSelected()) {
                    if (alreadyHas) {
                        item.unselect();
                    }
                    else {
                        alreadyHas = true;
                    }
                }
            }
        }
    }
    load(folder, onLoad) {
        this.clean();
        this.qinpel
            .post("/dir/list", { path: folder })
            .then((res) => {
            this._folderActual = folder;
            for (let line of qinpel_res_1.QinSoul.body.getTextLines(res.data)) {
                let lineValue = line.substring(3);
                if (!lineValue) {
                    continue;
                }
                if (line.startsWith("P: ")) {
                    this._folderServer = lineValue;
                    if (onLoad) {
                        onLoad(lineValue);
                    }
                }
                else if (line.startsWith("D: ")) {
                    if (this._nature == qinpel_res_1.QinFilesNature.BOTH ||
                        this._nature == qinpel_res_1.QinFilesNature.DIRECTORIES) {
                        this.newDir(lineValue);
                    }
                }
                else if (line.startsWith("F: ")) {
                    if (this._nature == qinpel_res_1.QinFilesNature.BOTH ||
                        this._nature == qinpel_res_1.QinFilesNature.FILES) {
                        let extension = qinpel_res_1.QinSoul.foot.getFileExtension(lineValue);
                        let passedExtension = true;
                        if (this._extensions && this._extensions.length > 0) {
                            passedExtension = this._extensions.indexOf(extension) > -1;
                        }
                        if (passedExtension) {
                            this.newFile(lineValue, extension);
                        }
                    }
                }
            }
        })
            .catch((err) => {
            this.qinpel.frame.statusError(err, "{qinpel-cps}(ErrCode-000003)");
        });
    }
    reload(onLoad) {
        this.load(this._folderServer, onLoad);
    }
    goFolderUp(onLoad) {
        let parent = qinpel_res_1.QinFoot.getParent(this._folderServer);
        if (parent) {
            this.load(parent, onLoad);
        }
    }
    clean() {
        this._qinMain.getMain().innerHTML = "";
        this._items = [];
        this._folderActual = "";
        this._folderServer = "";
    }
    cleanSelection() {
        for (const item of this._items) {
            item.unselect();
        }
    }
    select(itemName) {
        let item = this._items.find((inside) => inside.getName() == itemName);
        if (item) {
            item.select();
            return true;
        }
        else {
            return false;
        }
    }
    unselect(itemName) {
        let item = this._items.find((inside) => inside.getName() == itemName);
        if (item) {
            item.unselect();
            return true;
        }
        else {
            return false;
        }
    }
    newDir(name) {
        this.newItem(name, "explorer-dir.png");
    }
    newFile(name, extension) {
        this.newItem(name, getIconName(extension));
    }
    newItem(name, icon) {
        const item = new Item(this, name, icon);
        item.install(this._qinMain.getMain());
        this._items.push(item);
    }
}
exports.QinFileExplorer = QinFileExplorer;
class Item {
    constructor(explorer, fileName, iconName) {
        this.divItem = document.createElement("div");
        this.divItemBody = document.createElement("div");
        this.spanIcon = document.createElement("span");
        this.imgIcon = document.createElement("img");
        this.spanText = document.createElement("span");
        this.selected = false;
        this.explorer = explorer;
        this.fileName = fileName;
        this.iconName = iconName;
        this.initItem();
    }
    initItem() {
        styles.applyOnDivItem(this.divItem);
        this.divItem.tabIndex = 0;
        styles.applyOnDivItemBody(this.divItemBody);
        this.divItem.appendChild(this.divItemBody);
        styles.applyOnSpanIcon(this.spanIcon);
        this.divItemBody.appendChild(this.spanIcon);
        this.imgIcon.src = "/app/qinpel-app/assets/" + this.iconName;
        this.spanIcon.appendChild(this.imgIcon);
        this.spanText.innerText = this.fileName;
        styles.applyOnSpanText(this.spanText);
        this.divItemBody.appendChild(this.spanText);
        qinpel_res_1.QinSoul.arm.addAction(this.divItem, (qinEvent) => {
            if (qinEvent.isPrimary) {
                this.divItem.focus();
                this.toggle();
                qinEvent.consumed();
            }
        });
    }
    install(on) {
        on.appendChild(this.divItem);
    }
    select() {
        styles.applyOnDivSelect(this.divItem);
        this.selected = true;
    }
    unselect() {
        styles.applyOnDivUnSelect(this.divItem);
        this.selected = false;
    }
    toggle() {
        if (this.selected) {
            this.unselect();
        }
        else {
            if (this.explorer.singleSelection) {
                this.explorer.cleanSelection();
            }
            this.select();
        }
    }
    getName() {
        return this.fileName;
    }
    isSelected() {
        return this.selected;
    }
}
function getIconName(fromExtension) {
    let result = "explorer-file.png";
    if (qinpel_res_1.QinSoul.foot.isFileApp(fromExtension)) {
        result = "explorer-apps.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileCmd(fromExtension)) {
        result = "explorer-cmds.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileExec(fromExtension)) {
        result = "explorer-exec.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileImage(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileVector(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMusic(fromExtension)) {
        result = "explorer-music.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMovie(fromExtension)) {
        result = "explorer-movie.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileZipped(fromExtension)) {
        result = "explorer-zipped.png";
    }
    return result;
}
const styles = {
    applyOnMain: (el) => {
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
        el.style.overflow = "auto";
        el.style.minWidth = "160px";
        el.style.minHeight = "160px";
        el.tabIndex = 0;
    },
    applyOnDivItem: (el) => {
        el.style.margin = "2px";
        el.style.padding = "9px";
        el.style.display = "inline-block";
        el.style.outline = "none";
        el.style.backgroundColor = "#ffffff";
        el.style.border = "1px solid #360045";
        el.style.borderRadius = "3px";
        el.style.color = "#270036";
        el.addEventListener("focus", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #ae0000";
        });
        el.addEventListener("focusout", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #360045";
        });
    },
    applyOnDivItemBody: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.width = "96px";
    },
    applyOnSpanIcon: (el) => {
        el.style.textAlign = "center";
    },
    applyOnSpanText: (el) => {
        el.style.textAlign = "center";
        el.style.wordWrap = "break-word";
    },
    applyOnDivSelect: (el) => {
        el.style.backgroundColor = "#faefff";
    },
    applyOnDivUnSelect: (el) => {
        el.style.backgroundColor = "#ffffff";
    },
};

},{"./qin-edit":10,"./qin-panel":23,"qinpel-res":30}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFilePath = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_file_chooser_1 = require("./qin-file-chooser");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_string_1 = require("./qin-string");
class QinFilePath extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinPath = new qin_string_1.QinString();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceFolder),
        });
        this._qinChooser = new qin_file_chooser_1.QinFileChooser({
            nature: options === null || options === void 0 ? void 0 : options.nature,
            operation: options === null || options === void 0 ? void 0 : options.operation,
            descriptors: options === null || options === void 0 ? void 0 : options.descriptors,
            singleSelection: true,
        });
        this._qinPopup = this.qinpel.frame.newPopup(this._qinChooser.getMain());
        this._qinPath.install(this._qinMain);
        this._qinSearch.install(this._qinMain);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this._qinPopup.show();
                const upperHeight = this._qinChooser.qinUpper.getMain().clientHeight;
                const explorerMaxHeight = this._qinPopup.maxHeight - (upperHeight + 12);
                this._qinChooser.qinExplorer.style.putAsMaxHeight(explorerMaxHeight);
            }
        });
        this._qinChooser.addChosen((chosen) => {
            if (chosen && chosen.length > 0) {
                this._qinPath.setData(chosen[0]);
            }
            this._qinPopup.close();
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinPath.getData();
    }
    setData(data) {
        this._qinPath.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinPath() {
        return this._qinPath;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinChooser() {
        return this._qinChooser;
    }
    get qinPopup() {
        return this._qinPopup;
    }
}
exports.QinFilePath = QinFilePath;

},{"./qin-assets":3,"./qin-button":7,"./qin-edit":10,"./qin-file-chooser":12,"./qin-icon":17,"./qin-line":20,"./qin-string":26}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconOption = void 0;
const qin_edit_1 = require("./qin-edit");
const qinpel_res_1 = require("qinpel-res");
class QinIconOption extends qin_edit_1.QinEdit {
    constructor(icon) {
        super();
        this._elMain = document.createElement("div");
        this._selected = false;
        let border = Math.round(icon.size.width / 10);
        let padding = border * 2;
        this._elMain.style.borderRadius = border + "px";
        this._elMain.style.padding = padding + "px";
        this._elMain.style.display = "flex";
        this._icon = icon;
        this._icon.install(this);
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        return this._selected;
    }
    setData(data) {
        this._selected = data;
        if (this._selected) {
            this._elMain.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorSelected;
        }
        else {
            this._elMain.style.backgroundColor = "initial";
        }
    }
    get icon() {
        return this._icon;
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this.setData(selected);
    }
}
exports.QinIconOption = QinIconOption;

},{"./qin-edit":10,"qinpel-res":30}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconPick = void 0;
const qin_edit_1 = require("./qin-edit");
const qin_line_1 = require("./qin-line");
const qin_icon_option_1 = require("./qin-icon-option");
class QinIconPick extends qin_edit_1.QinEdit {
    constructor() {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinMain.style.putAsEdit();
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        for (let child of this.children()) {
            if (child instanceof qin_icon_option_1.QinIconOption) {
                if (child.selected) {
                    return child.icon.asset;
                }
            }
        }
        ;
        return null;
    }
    setData(asset) {
        for (let child of this._qinMain.children()) {
            if (child instanceof qin_icon_option_1.QinIconOption) {
                if (child.icon.asset == asset) {
                    child.selected = true;
                }
                else {
                    child.selected = false;
                }
            }
        }
        ;
    }
    addIcon(icon) {
        let option = new qin_icon_option_1.QinIconOption(icon);
        option.install(this._qinMain);
    }
    addOption(option) {
        option.install(this._qinMain);
    }
}
exports.QinIconPick = QinIconPick;

},{"./qin-edit":10,"./qin-icon-option":15,"./qin-line":20}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIcon = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_base_1 = require("./qin-base");
class QinIcon extends qin_base_1.QinBase {
    constructor(asset, size = qinpel_res_1.QinGrandeur.SMALL) {
        super();
        this._elMain = document.createElement("img");
        this._elMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
        qinpel_res_1.QinSkin.styleSize(this._elMain, size);
    }
    getMain() {
        return this._elMain;
    }
    get asset() {
        return (0, qin_assets_1.qinUrlAsset)(this._elMain.src);
    }
    set asset(asset) {
        this._elMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
    }
    get size() {
        return qinpel_res_1.QinSkin.getDimension(this._elMain);
    }
}
exports.QinIcon = QinIcon;

},{"./qin-assets":3,"./qin-base":5,"qinpel-res":30}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinInteger extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("input");
        this._elMain.type = "number";
        qinpel_res_1.QinSoul.skin.styleAsEdit(this._elMain);
        this._elMain.style.width = "120px";
        this._elMain.addEventListener("focusout", () => {
            this.setData(this.getData());
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        const value = this._elMain.value;
        if (value == null || value == undefined || value.length == 0) {
            return null;
        }
        else {
            return parseInt(this._elMain.value, 10);
        }
    }
    setData(data) {
        if (data == null || data == undefined) {
            this._elMain.value = "";
        }
        else {
            this._elMain.value = (data | 0).toString();
        }
    }
}
exports.QinInteger = QinInteger;

},{"./qin-edit":10,"qinpel-res":30}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLabel = void 0;
const qin_base_1 = require("./qin-base");
class QinLabel extends qin_base_1.QinBase {
    constructor(title) {
        super();
        this._elMain = document.createElement("span");
        if (title) {
            this._elMain.textContent = title;
        }
    }
    getMain() {
        return this._elMain;
    }
    setTitle(title) {
        this._elMain.textContent = title;
    }
    getTitle() {
        return this._elMain.textContent;
    }
}
exports.QinLabel = QinLabel;

},{"./qin-base":5}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLine = void 0;
const qin_base_1 = require("./qin-base");
class QinLine extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this.initPanel();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (let viewer of options.initial) {
                viewer.install(this);
            }
        }
    }
    initPanel() {
        styles.applyOnPanel(this._elMain);
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinLine = QinLine;
const styles = {
    applyOnPanel: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "wrap";
    },
};

},{"./qin-base":5}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinMenuItem = exports.QinMenu = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_column_1 = require("./qin-column");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinMenu extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_panel_1.QinPanel();
        this._qinMain.style.putAsEdit();
        this._qinMain.style.putAsScroll();
        if (options === null || options === void 0 ? void 0 : options.items) {
            this.setData(options.items);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        let result = [];
        for (let child of this.children()) {
            if (child instanceof QinMenuItem) {
                result.push(child);
            }
        }
        return result;
    }
    setData(data) {
        this.clearChildren();
        for (let item of data) {
            item.install(this);
        }
    }
    putItem(item) {
        item.install(this);
    }
}
exports.QinMenu = QinMenu;
class QinMenuItem extends qin_panel_1.QinPanel {
    constructor(icon, label) {
        super();
        this._face = new qin_panel_1.QinPanel();
        this._body = new qin_column_1.QinColumn();
        this._selected = false;
        this._face.install(this);
        this._body.install(this._face);
        this._icon = icon;
        if (this._icon) {
            this._icon.install(this._body);
        }
        this._label = label;
        if (this._label) {
            this._label.install(this._body);
        }
        this.putTabIndex(0);
        this.style.putAsEdit();
        this.style.putAsMargin(3);
        this.style.putAsPadding(6);
        this.style.putAsDisplayInlineBlock();
        this.style.putAsMaxWidth(96);
        this._body.style.putAsAllCentered();
    }
    select() {
        this._face.style.putAsBackAsset(qin_assets_1.QinAsset.BackTiny01);
        this._selected = true;
    }
    unSelect() {
        this._face.style.putAsBackInitial();
        this._selected = false;
    }
    swapSelect() {
        if (this._selected) {
            this.unSelect();
        }
        else {
            this.select();
        }
    }
}
exports.QinMenuItem = QinMenuItem;

},{"./qin-assets":3,"./qin-column":8,"./qin-edit":10,"./qin-panel":23}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinMutantsArm = exports.QinMutants = void 0;
const qin_boolean_1 = require("./qin-boolean");
const qin_file_chooser_1 = require("./qin-file-chooser");
const qin_combo_1 = require("./qin-combo");
const qin_file_explorer_1 = require("./qin-file-explorer");
const qin_integer_1 = require("./qin-integer");
const qin_file_path_1 = require("./qin-file-path");
const qin_string_1 = require("./qin-string");
var QinMutants;
(function (QinMutants) {
    QinMutants["BOOLEAN"] = "boolean";
    QinMutants["CHOOSER"] = "chooser";
    QinMutants["COMBO"] = "combo";
    QinMutants["EXPLORER"] = "explorer";
    QinMutants["INTEGER"] = "integer";
    QinMutants["PATH"] = "path";
    QinMutants["STRING"] = "string";
})(QinMutants = exports.QinMutants || (exports.QinMutants = {}));
function newEdit(kind, options) {
    switch (kind) {
        case QinMutants.BOOLEAN:
            return new qin_boolean_1.QinBoolean(options);
        case QinMutants.CHOOSER:
            return new qin_file_chooser_1.QinFileChooser(options);
        case QinMutants.COMBO:
            return new qin_combo_1.QinCombo(options);
        case QinMutants.EXPLORER:
            return new qin_file_explorer_1.QinFileExplorer(options);
        case QinMutants.INTEGER:
            return new qin_integer_1.QinInteger(options);
        case QinMutants.PATH:
            return new qin_file_path_1.QinFilePath(options);
        case QinMutants.STRING:
            return new qin_string_1.QinString(options);
        default:
            throw new Error("Unknown kind of mutant to create.");
    }
}
exports.QinMutantsArm = {
    newEdit,
};

},{"./qin-boolean":6,"./qin-combo":9,"./qin-file-chooser":12,"./qin-file-explorer":13,"./qin-file-path":14,"./qin-integer":18,"./qin-string":26}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPanel = void 0;
const qin_base_1 = require("./qin-base");
class QinPanel extends qin_base_1.QinBase {
    constructor() {
        super();
        this._elMain = document.createElement("div");
        this._elMain.style.display = "flex";
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinPanel = QinPanel;

},{"./qin-base":5}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSplitter = void 0;
const qin_base_1 = require("./qin-base");
class QinSplitter extends qin_base_1.QinBase {
    constructor() {
        super();
        this._elMain = document.createElement("div");
        this._elSideA = document.createElement("div");
        this._elMover = document.createElement("div");
        this._elSideB = document.createElement("div");
        this._elMain.appendChild(this._elSideA);
        this._elMain.appendChild(this._elMover);
        this._elMain.appendChild(this._elSideB);
        this._elMain.style.display = "flex";
        this._elSideA.style.display = "flex";
        this._elSideA.style.position = "relative";
        this._elSideA.style.overflow = "auto";
        this._elSideB.style.display = "flex";
        this._elSideB.style.position = "relative";
        this._elSideB.style.overflow = "auto";
    }
    getMain() {
        return this._elMain;
    }
    setVertical() {
        this._elMain.style.flexDirection = "column";
    }
    setHorizontal() {
        this._elMain.style.flexDirection = "row";
    }
}
exports.QinSplitter = QinSplitter;

},{"./qin-base":5}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinStack = void 0;
const qin_panel_1 = require("./qin-panel");
class QinStack extends qin_panel_1.QinPanel {
    stack(qinComp) {
        this.children().forEach((child) => {
            child.unDisplay();
        });
        qinComp.install(this);
    }
    show(qinComp) {
        this.children().forEach((child) => {
            if (child === qinComp) {
                child.reDisplay();
            }
            else {
                child.unDisplay();
            }
        });
    }
}
exports.QinStack = QinStack;

},{"./qin-panel":23}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinString = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinString extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("input");
        this._elMain.type = "text";
        if (options === null || options === void 0 ? void 0 : options.maxLength) {
            this._elMain.maxLength = options.maxLength;
            let position = Math.min(Math.max(options.maxLength - 10, 0), 90);
            let width = Math.floor(90 + (position * 7) / 3);
            this._elMain.style.width = width + "px";
        }
        qinpel_res_1.QinSkin.styleAsEdit(this._elMain);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        return this._elMain.value;
    }
    setData(data) {
        this._elMain.value = data;
    }
    insertAtCursor(data) {
        if (!data)
            return;
        let startPos = this._elMain.selectionStart;
        let endPos = this._elMain.selectionEnd;
        let oldVal = this._elMain.value;
        let newVal = (startPos > 0 ? oldVal.substring(0, startPos) : "") +
            data +
            (endPos < oldVal.length ? oldVal.substring(endPos) : "");
        this._elMain.value = newVal;
        this._elMain.selectionStart = startPos;
        this._elMain.selectionEnd = startPos + data.length;
    }
}
exports.QinString = QinString;

},{"./qin-edit":10,"qinpel-res":30}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTable = void 0;
const qin_edit_1 = require("./qin-edit");
class QinTable extends qin_edit_1.QinEdit {
    constructor() {
        super();
        this._elMain = document.createElement("div");
        this._elTable = document.createElement("table");
        this._elTHead = document.createElement("thead");
        this._elTBody = document.createElement("tbody");
        this._elMain.appendChild(this._elTable);
        this._elTable.appendChild(this._elTHead);
        this._elTable.appendChild(this._elTBody);
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        let result = [];
        this._elTBody.querySelectorAll("tr").forEach((tr) => {
            let line = [];
            tr.querySelectorAll("td").forEach((td) => {
                line.push(td.innerText);
            });
            result.push(line);
        });
        return result;
    }
    setData(data) {
        this.delLines();
        for (const line of data) {
            this.addLine(line);
        }
    }
    setHead(head) {
        this._elTHead.innerHTML = "";
        for (const cell of head) {
            let th = document.createElement("th");
            th.innerText = cell;
            this._elTHead.appendChild(th);
        }
    }
    getHead() {
        let result = [];
        this._elTHead.querySelectorAll("th").forEach((th) => {
            result.push(th.innerText);
        });
        return result;
    }
    addHead(head) {
        let th = document.createElement("th");
        th.innerText = head;
        this._elTHead.appendChild(th);
    }
    addLine(line) {
        let tr = document.createElement("tr");
        for (const cell of line) {
            let td = document.createElement("td");
            td.innerText = cell.toString();
            tr.appendChild(td);
        }
        this._elTBody.appendChild(tr);
    }
    delLines() {
        this._elTBody.innerHTML = "";
    }
}
exports.QinTable = QinTable;

},{"./qin-edit":10}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTabs = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
class QinTabs extends qin_column_1.QinColumn {
    constructor(options) {
        super();
        this._qinTabs = new qin_line_1.QinLine();
        this._qinPanel = new qin_panel_1.QinPanel();
        this._tabs = [];
        this._qinTabs.install(this);
        this._qinPanel.install(this);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const tab of options === null || options === void 0 ? void 0 : options.initial) {
                this.addTab(tab);
            }
        }
    }
    get qinTabs() {
        return this._qinTabs;
    }
    get qinPanel() {
        return this._qinPanel;
    }
    addTab(tab) {
        const button = new qin_button_1.QinButton({ label: new qin_label_1.QinLabel(tab.title) });
        button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
        button.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.showViewer(tab.viewer);
            }
        });
        button.install(this._qinTabs);
        let first = this._tabs.length == 0;
        let tabRef = {
            title: tab.title,
            viewer: tab.viewer,
            button,
        };
        this._tabs.push(tabRef);
        if (first) {
            this.showViewer(tab.viewer);
        }
    }
    showTab(title) {
        for (const tab of this._tabs) {
            if (tab.title == title) {
                this.showViewer(tab.viewer);
                break;
            }
        }
    }
    showViewer(viewer) {
        this._qinPanel.clearChildren();
        viewer.install(this._qinPanel);
        for (const tab of this._tabs) {
            if (tab.viewer == viewer) {
                tab.button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorActive);
            }
            else {
                tab.button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
            }
        }
    }
}
exports.QinTabs = QinTabs;

},{"./qin-button":7,"./qin-column":8,"./qin-label":19,"./qin-line":20,"./qin-panel":23,"qinpel-res":30}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTools = void 0;
const refQinpel = window.frameElement.qinpel;
function qinpel() {
    return refQinpel;
}
exports.QinTools = {
    qinpel,
};

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = exports.QinSkin = exports.QinStyles = exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = exports.QinBody = exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
var qin_arm_1 = require("./qin-arm");
Object.defineProperty(exports, "QinEvent", { enumerable: true, get: function () { return qin_arm_1.QinEvent; } });
var qin_arm_2 = require("./qin-arm");
Object.defineProperty(exports, "QinWaiters", { enumerable: true, get: function () { return qin_arm_2.QinWaiters; } });
var qin_arm_3 = require("./qin-arm");
Object.defineProperty(exports, "QinPointerCalls", { enumerable: true, get: function () { return qin_arm_3.QinPointerCalls; } });
var qin_arm_4 = require("./qin-arm");
Object.defineProperty(exports, "QinArm", { enumerable: true, get: function () { return qin_arm_4.QinArm; } });
var qin_body_1 = require("./qin-body");
Object.defineProperty(exports, "QinBody", { enumerable: true, get: function () { return qin_body_1.QinBody; } });
var qin_foot_1 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesNature", { enumerable: true, get: function () { return qin_foot_1.QinFilesNature; } });
var qin_foot_2 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesOperation", { enumerable: true, get: function () { return qin_foot_2.QinFilesOperation; } });
var qin_foot_3 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesDescriptor", { enumerable: true, get: function () { return qin_foot_3.QinFilesDescriptor; } });
var qin_foot_4 = require("./qin-foot");
Object.defineProperty(exports, "QinFoot", { enumerable: true, get: function () { return qin_foot_4.QinFoot; } });
var qin_head_1 = require("./qin-head");
Object.defineProperty(exports, "QinPoint", { enumerable: true, get: function () { return qin_head_1.QinPoint; } });
var qin_head_2 = require("./qin-head");
Object.defineProperty(exports, "QinDimension", { enumerable: true, get: function () { return qin_head_2.QinDimension; } });
var qin_head_3 = require("./qin-head");
Object.defineProperty(exports, "QinBounds", { enumerable: true, get: function () { return qin_head_3.QinBounds; } });
var qin_head_4 = require("./qin-head");
Object.defineProperty(exports, "QinGrandeur", { enumerable: true, get: function () { return qin_head_4.QinGrandeur; } });
var qin_head_5 = require("./qin-head");
Object.defineProperty(exports, "QinHead", { enumerable: true, get: function () { return qin_head_5.QinHead; } });
var qin_skin_1 = require("./qin-skin");
Object.defineProperty(exports, "QinStyles", { enumerable: true, get: function () { return qin_skin_1.QinStyles; } });
var qin_skin_2 = require("./qin-skin");
Object.defineProperty(exports, "QinSkin", { enumerable: true, get: function () { return qin_skin_2.QinSkin; } });
var qin_soul_1 = require("./qin-soul");
Object.defineProperty(exports, "QinSoul", { enumerable: true, get: function () { return qin_soul_1.QinSoul; } });

},{"./qin-arm":31,"./qin-body":32,"./qin-foot":33,"./qin-head":34,"./qin-skin":35,"./qin-soul":36}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
const qin_skin_1 = require("./qin-skin");
class QinEvent {
    constructor(isStart, event) {
        this._event = null;
        this._point = null;
        this._stop = false;
        this._start = isStart;
        this._event = event;
        if (event instanceof MouseEvent || event instanceof TouchEvent) {
            this._point = makeEventPointer(isStart, event);
        }
    }
    get isStart() {
        return this._start;
    }
    get fromOrigin() {
        if (this._event) {
            return this._event.target;
        }
        return null;
    }
    get fromTyping() {
        return this._event instanceof KeyboardEvent;
    }
    get fromPointing() {
        return (this._event instanceof MouseEvent || this._event instanceof TouchEvent);
    }
    get hasAlt() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.altKey;
    }
    get hasCtrl() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.ctrlKey;
    }
    get hasShift() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.shiftKey;
    }
    get hasMeta() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.metaKey;
    }
    get keyTyped() {
        if (this._event instanceof KeyboardEvent) {
            return this._event.key;
        }
        return null;
    }
    get isEnter() {
        if (this._event instanceof KeyboardEvent) {
            return isKeyEnter(this._event);
        }
        return false;
    }
    get isEscape() {
        if (this._event instanceof KeyboardEvent) {
            return isKeyEscape(this._event);
        }
        return false;
    }
    get isSpace() {
        if (this._event instanceof KeyboardEvent) {
            return isKeySpace(this._event);
        }
        return false;
    }
    get isDouble() {
        if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isEventPointerDouble(this._start, this._event);
        }
        return false;
    }
    get isLong() {
        if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isEventPointerLong(this._start, this._event);
        }
        return false;
    }
    get point() {
        return this._point;
    }
    get pointX() {
        if (this._event instanceof MouseEvent) {
            return this._event.clientX;
        }
        else if (this._event instanceof TouchEvent) {
            if (this._event.touches.length > 0) {
                let index = (this._event.touches.length / 2) | 0;
                return this._event.touches[index].clientX;
            }
        }
        return null;
    }
    get pointY() {
        if (this._event instanceof MouseEvent) {
            return this._event.clientY;
        }
        else if (this._event instanceof TouchEvent) {
            if (this._event.touches.length > 0) {
                let index = (this._event.touches.length / 2) | 0;
                return this._event.touches[index].clientY;
            }
        }
        return null;
    }
    get isFirstButton() {
        if (this._event instanceof MouseEvent) {
            return isFirstButton(this._event);
        }
        return false;
    }
    get isMiddleButton() {
        if (this._event instanceof MouseEvent) {
            return isMiddleButton(this._event);
        }
        return false;
    }
    get isSecondButton() {
        if (this._event instanceof MouseEvent) {
            return isSecondButton(this._event);
        }
        return false;
    }
    get isOneFinger() {
        if (this._event instanceof TouchEvent) {
            return isOneFinger(this._event);
        }
        return false;
    }
    get isTwoFingers() {
        if (this._event instanceof TouchEvent) {
            return isTwoFingers(this._event);
        }
        return false;
    }
    get isThreeFingers() {
        if (this._event instanceof TouchEvent) {
            return isThreeFingers(this._event);
        }
        return false;
    }
    get isFourFingers() {
        if (this._event instanceof TouchEvent) {
            return isFourFingers(this._event);
        }
        return false;
    }
    get isPrimary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isPrimaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isPrimaryPoint(this._event);
        }
        return false;
    }
    get isAuxiliary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isAuxiliaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isAuxiliaryPoint(this._event);
        }
        return false;
    }
    get isSecondary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isSecondaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isSecondaryPoint(this._event);
        }
        return false;
    }
    get stop() {
        return this._stop;
    }
    consumed() {
        this._stop = true;
    }
}
exports.QinEvent = QinEvent;
class QinWaiters {
    constructor(initial) {
        this.waiters = initial ? initial : [];
    }
    addWaiter(waiter) {
        this.waiters.push(waiter);
        return this;
    }
    hasWaiter() {
        return this.waiters.length > 0;
    }
    sendWaiters(result) {
        for (const waiter of this.waiters) {
            waiter(result);
        }
    }
}
exports.QinWaiters = QinWaiters;
class QinPointerCalls {
}
exports.QinPointerCalls = QinPointerCalls;
function stopEvent(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    event.cancelBubble = true;
    return false;
}
var lastEventPointer = null;
function makeEventPointer(isStart, ev) {
    const result = {
        posX: 0,
        posY: 0,
    };
    if (ev instanceof MouseEvent) {
        if (ev.clientX || ev.clientY) {
            result.posX = ev.clientX;
            result.posY = ev.clientY;
        }
    }
    else if (ev instanceof TouchEvent) {
        if (ev.touches && this._event.touches.length > 1) {
            let index = Math.floor(this._event.touches.length / 2);
            result.posX = ev.touches[index].clientX;
            result.posY = ev.touches[index].clientY;
        }
    }
    if (isStart) {
        lastEventPointer = ev;
    }
    return result;
}
function isEventPointerDouble(isStart, ev) {
    if (!isStart || lastEventPointer == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventPointer.timeStamp;
    return timeDif < 450;
}
function isEventPointerLong(isStart, ev) {
    if (!isStart || lastEventPointer == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventPointer.timeStamp;
    return timeDif > 840;
}
function isKeyInList(ev, list) {
    let keyLower = ev.key.toLowerCase();
    return list.indexOf(keyLower) > -1;
}
function isKeyEnter(ev) {
    return isKeyInList(ev, ["enter", "return"]) || ev.keyCode === 13;
}
function isKeyEscape(ev) {
    return isKeyInList(ev, ["esc", "escape"]) || ev.keyCode === 27;
}
function isKeySpace(ev) {
    return isKeyInList(ev, [" ", "space", "spacebar"]) || ev.keyCode === 32;
}
function isFirstButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 0;
}
function isMiddleButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 1;
}
function isSecondButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 2;
}
function isOneFinger(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 1;
}
function isTwoFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 2;
}
function isThreeFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 3;
}
function isFourFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 4;
}
function isPrimaryKey(ev) {
    return isKeyEnter(ev);
}
function isAuxiliaryKey(ev) {
    return ev.ctrlKey && ev.altKey && isKeySpace(ev);
}
function isSecondaryKey(ev) {
    return ev.ctrlKey && !ev.altKey && isKeySpace(ev);
}
function isPrimaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isFirstButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isOneFinger(ev);
    }
    return false;
}
function isAuxiliaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isMiddleButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isThreeFingers(ev);
    }
    return false;
}
function isSecondaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isSecondButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isTwoFingers(ev);
    }
    return false;
}
function addAction(element, action) {
    element.addEventListener("keydown", actKeyDown);
    element.addEventListener("keyup", actKeyUp);
    element.addEventListener("mousedown", actMouseDown);
    element.addEventListener("mouseup", actMouseUp);
    element.addEventListener("touchstart", actTouchStart);
    element.addEventListener("touchend", actTouchEnd);
    function actKeyDown(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseDown(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchStart(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
}
function addActionMain(element, action) {
    element.onkeyup = actKeyUp;
    element.onmouseup = actMouseUp;
    element.ontouchend = actTouchEnd;
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
}
function addActions(elements, action) {
    for (const element of elements) {
        addAction(element, action);
    }
}
function putActionProxy(destiny, origins) {
    for (const origin of origins) {
        origin.addEventListener("keydown", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("keyup", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("mousedown", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("mouseup", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("touchstart", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("touchend", (e) => {
            destiny.dispatchEvent(e);
        });
    }
}
function addMover(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitPosX = 0;
    var dragInitPosY = 0;
    for (let source of sources) {
        source.onmousedown = onMoverInit;
        source.ontouchstart = onMoverInit;
        source.ondragstart = stopEvent;
    }
    function onMoverInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitPosX = parseInt(target.style.left, 10);
        dragInitPosY = parseInt(target.style.top, 10);
        document.ontouchmove = onMoverMove;
        document.onmousemove = onMoverMove;
        document.ontouchend = onMoverClose;
        document.onmouseup = onMoverClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onMoverMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var dragDifX = pointer.posX - dragInitEventX;
        var dragDifY = pointer.posY - dragInitEventY;
        var dragFinalX = dragInitPosX + dragDifX;
        var dragFinalY = dragInitPosY + dragDifY;
        target.style.left = (dragFinalX > 0 ? dragFinalX : 0) + "px";
        target.style.top = (dragFinalY > 0 ? dragFinalY : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onMoverClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addResizer(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitWidth = 0;
    var dragInitHeight = 0;
    for (let source of sources) {
        source.onmousedown = onResizerInit;
        source.ontouchstart = onResizerInit;
        source.ondragstart = stopEvent;
    }
    function onResizerInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitWidth = parseInt(target.style.width, 10);
        dragInitHeight = parseInt(target.style.height, 10);
        document.ontouchmove = onResizerMove;
        document.onmousemove = onResizerMove;
        document.ontouchend = onResizerClose;
        document.onmouseup = onResizerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onResizerMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var frameDragDifX = pointer.posX - dragInitEventX;
        var frameDragDifY = pointer.posY - dragInitEventY;
        var frameDragFinalWidth = dragInitWidth + frameDragDifX;
        var frameDragFinalHeight = dragInitHeight + frameDragDifY;
        target.style.width =
            (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
        target.style.height =
            (frameDragFinalHeight > 0 ? frameDragFinalHeight : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onResizerClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addScroller(target, dragCalls) {
    var dragInitX = 0;
    var dragInitY = 0;
    var dragScrollX = 0;
    var dragScrollY = 0;
    target.ondragstart = stopEvent;
    target.ontouchstart = onScrollerInit;
    target.onmousedown = onScrollerInit;
    function onScrollerInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitX = pointer.posX;
        dragInitY = pointer.posY;
        dragScrollX = target.scrollLeft;
        dragScrollY = target.scrollTop;
        document.ontouchmove = onScrollerMove;
        document.onmousemove = onScrollerMove;
        document.ontouchend = onScrollerClose;
        document.onmouseup = onScrollerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onScrollerMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var dragDifX = pointer.posX - dragInitX;
        var dragDifY = pointer.posY - dragInitY;
        var dragNewX = dragScrollX - dragDifX;
        var dragNewY = dragScrollY - dragDifY;
        target.scrollTo(dragNewX, dragNewY);
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onScrollerClose(ev) {
        document.ontouchmove = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
exports.QinArm = {
    stopEvent,
    makeEventPointer,
    isEventPointerDouble,
    isEventPointerLong,
    isKeyInList,
    isKeyEnter,
    isKeySpace,
    isFirstButton,
    isMiddleButton,
    isSecondButton,
    isOneFinger,
    isTwoFingers,
    isThreeFingers,
    isFourFingers,
    isPrimaryPoint,
    isAuxiliaryPoint,
    isSecondaryPoint,
    addAction,
    addActionMain,
    addActions,
    putActionProxy,
    addMover,
    addResizer,
    addScroller,
};

},{"./qin-skin":35}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBody = void 0;
function getCookie(name, orDefault) {
    let cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        let cookiePair = cookies[i].split("=");
        if (name == decodeURIComponent(cookiePair[0]).trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return orDefault;
}
function setCookie(name, value, options = {}) {
    options = Object.assign({ path: "/" }, options);
    if (!options.expires) {
        let date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        options.expires = date;
    }
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function delCookie(name, options = {}) {
    let updatedCookie = encodeURIComponent(name) + "=;  expires=Thu, 01 Jan 1970 00:00:00 GMT";
    if (options.expires) {
        delete options.expires;
    }
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function getTextLines(fromText) {
    return fromText.match(/[^\r\n]+/g);
}
function getCSVRows(fromText, names) {
    var lines = getTextLines(fromText);
    var result = [];
    for (let line of lines) {
        let row = !names ? [] : {};
        let inside_quotes = false;
        let column_value = "";
        let column_index = 0;
        for (let char_index = 0; char_index < line.length; char_index++) {
            let actual = line.charAt(char_index);
            if (inside_quotes) {
                if (actual == '"') {
                    let next = char_index < line.length - 1 ? line.charAt(char_index + 1) : "";
                    if (next == '"') {
                        column_value += actual;
                        char_index++;
                    }
                    else {
                        inside_quotes = false;
                    }
                }
                else {
                    column_value += actual;
                }
            }
            else {
                if (actual == '"') {
                    inside_quotes = true;
                }
                else if (actual == ",") {
                    column_value = unmaskSpecialChars(column_value);
                    if (!names) {
                        row.push(column_value);
                    }
                    else {
                        let column_name = "col_" + column_index;
                        if (column_index < names.length) {
                            column_name = names[column_index];
                        }
                        row[column_name] = column_value;
                    }
                    column_value = "";
                    column_index++;
                }
                else {
                    column_value += actual;
                }
            }
        }
        column_value = unmaskSpecialChars(column_value);
        if (!names) {
            row.push(column_value);
            result.push(row);
        }
        else {
            let column_name = "col_" + column_index;
            if (column_index < names.length) {
                column_name = names[column_index];
            }
            row[column_name] = column_value;
            result.push(row);
        }
    }
    return result;
}
function maskSpecialChars(fromText) {
    return fromText
        .replace("\\", "\\\\")
        .replace("\r", "\\r")
        .replace("\n", "\\n")
        .replace("\t", "\\t");
}
function unmaskSpecialChars(fromText) {
    return fromText
        .replace("\\\\", "\\")
        .replace("\\r", "\r")
        .replace("\\n", "\n")
        .replace("\\t", "\t");
}
function parseParameters(source) {
    let result = [];
    let open = false;
    let actual = "";
    for (const letter of Array.from(source)) {
        if (open) {
            if (letter == '"') {
                open = false;
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else {
                actual += letter;
            }
        }
        else {
            if (letter == '"') {
                open = true;
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else if (letter == " ") {
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else {
                actual += letter;
            }
        }
    }
    return result;
}
exports.QinBody = {
    getCookie,
    setCookie,
    delCookie,
    getTextLines,
    getCSVRows,
    maskSpecialChars,
    unmaskSpecialChars,
    parseParameters,
};

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = void 0;
var QinFilesNature;
(function (QinFilesNature) {
    QinFilesNature["BOTH"] = "both";
    QinFilesNature["DIRECTORIES"] = "directories";
    QinFilesNature["FILES"] = "files";
})(QinFilesNature = exports.QinFilesNature || (exports.QinFilesNature = {}));
var QinFilesOperation;
(function (QinFilesOperation) {
    QinFilesOperation["OPEN"] = "open";
    QinFilesOperation["SAVE"] = "save";
})(QinFilesOperation = exports.QinFilesOperation || (exports.QinFilesOperation = {}));
class QinFilesDescriptor {
}
exports.QinFilesDescriptor = QinFilesDescriptor;
function getLocation() {
    return window.location.href;
}
function isLocalHost() {
    var location = getLocation();
    var start = location.indexOf("://");
    if (start == -1) {
        start = 0;
    }
    else {
        start += 3;
    }
    location = location.substring(start);
    return location.indexOf("localhost") === 0 || location.indexOf("127.0.0.1") === 0;
}
function getSeparator(ofPath) {
    let result = "/";
    if (ofPath && ofPath.indexOf("\\") > -1) {
        result = "\\";
    }
    return result;
}
function getPathJoin(pathA, pathB) {
    if (pathA == null || pathA == undefined) {
        pathA = "";
    }
    if (pathB == null || pathB == undefined) {
        pathB = "";
    }
    if (pathA.length == 0) {
        return pathB;
    }
    else if (pathB.length == 0) {
        return pathA;
    }
    else {
        let union = "/";
        if (pathA.indexOf("\\") > -1 || pathB.indexOf("\\") > -1) {
            union = "\\";
        }
        let pathAEnd = pathA.substring(pathA.length - 1, pathA.length);
        let pathBStart = pathB.substring(0, 1);
        if (pathAEnd == union || pathBStart == union) {
            union = "";
        }
        return pathA + union + pathB;
    }
}
function getParent(path) {
    if (path) {
        let separator = getSeparator(path);
        let last = path.lastIndexOf(separator);
        if (last > -1) {
            return path.substring(0, last);
        }
    }
    return "";
}
function getStem(path) {
    if (path) {
        let separator = getSeparator(path);
        let last = path.lastIndexOf(separator);
        if (last > -1) {
            return path.substring(last + 1);
        }
    }
    return "";
}
function getFileExtension(name) {
    let position = name.lastIndexOf(".");
    if (position > -1) {
        return name.substring(position + 1);
    }
    else {
        return "";
    }
}
const appsExtensions = [
    "htm", "html", "css", "js", "jsx", "ts", "tsx", "phtml"
];
function isFileApp(extension) {
    return appsExtensions.indexOf(extension) > -1;
}
const cmdsExtensions = [
    "h", "c", "hpp", "cpp", "rs", "jl",
    "cs", "csproj", "fs", "ml", "fsi", "mli", "fsx", "fsscript",
    "java", "gy", "gvy", "groovy", "sc", "scala", "clj",
    "py", "ruby", "php", "phtml",
];
function isFileCmd(extension) {
    return cmdsExtensions.indexOf(extension) > -1;
}
const execExtensions = [
    "exe", "jar", "com", "bat", "sh"
];
function isFileExec(extension) {
    return execExtensions.indexOf(extension) > -1;
}
const imageExtensions = [
    "jpg", "jpeg", "png", "gif", "bmp"
];
function isFileImage(extension) {
    return imageExtensions.indexOf(extension) > -1;
}
const vectorExtensions = [
    "svg"
];
function isFileVector(extension) {
    return vectorExtensions.indexOf(extension) > -1;
}
const movieExtensions = [
    "avi", "mp4"
];
function isFileMovie(extension) {
    return movieExtensions.indexOf(extension) > -1;
}
const musicExtensions = [
    "wav", "mp3"
];
function isFileMusic(extension) {
    return musicExtensions.indexOf(extension) > -1;
}
const zippedExtensions = [
    "zip", "rar", "7z", "tar", "gz"
];
function isFileZipped(extension) {
    return zippedExtensions.indexOf(extension) > -1;
}
exports.QinFoot = {
    getLocation,
    isLocalHost,
    getSeparator,
    getPathJoin,
    getParent,
    getStem,
    getFileExtension,
    isFileApp,
    isFileCmd,
    isFileExec,
    isFileImage,
    isFileVector,
    isFileMovie,
    isFileMusic,
    isFileZipped,
};

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = void 0;
class QinPoint {
}
exports.QinPoint = QinPoint;
;
class QinDimension {
}
exports.QinDimension = QinDimension;
;
class QinBounds {
}
exports.QinBounds = QinBounds;
;
var QinGrandeur;
(function (QinGrandeur) {
    QinGrandeur["SMALL"] = "small";
    QinGrandeur["MEDIUM"] = "medium";
    QinGrandeur["LARGE"] = "large";
})(QinGrandeur = exports.QinGrandeur || (exports.QinGrandeur = {}));
function getDeskAPI() {
    var win = window;
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.parent;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.top;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    return undefined;
}
const logged = [];
function getLogged() {
    return logged;
}
function log(message) {
    logged.push(message);
    try {
        console.log(message);
    }
    catch (_) { }
    try {
        getDeskAPI().send("logOnMain", message);
    }
    catch (_) { }
}
function logError(error, origin) {
    log(getErrorMessage(error, origin));
}
function getErrorMessage(error, origin) {
    return getTreatMessage("Problem with:", error, origin);
}
function logWarning(error, origin) {
    log(getWarningMessage(error, origin));
}
function getWarningMessage(error, origin) {
    return getTreatMessage("Checkout this:", error, origin);
}
function logSupport(error, origin) {
    log(getSupportMessage(error, origin));
}
function getSupportMessage(error, origin) {
    return getTreatMessage("Need Support on:", error, origin);
}
function getTreatMessage(prefix, error, origin) {
    var result = prefix + (error ? " " + error.toString() : "");
    if (error.response && error.response.data) {
        var errorData = error.response.data;
        if (!(typeof errorData == "string" || errorData instanceof String)) {
            errorData = JSON.stringify(errorData);
        }
        result += " - Data: " + errorData;
    }
    else {
        if (!(typeof error == "string" || error instanceof String)) {
            result += " - Data: " + JSON.stringify(error);
        }
    }
    if (origin) {
        result += " - Origin: " + origin;
    }
    const stack = (new Error("")).stack;
    if (stack) {
        result += " - Stack: " + stack;
    }
    return result;
}
function toggleDevTools() {
    try {
        getDeskAPI().send("toggleDevTools");
    }
    catch (e) {
        logError(e, "{qinpel-res}(ErrCode-000001)");
    }
}
exports.QinHead = {
    getDeskAPI,
    getLogged,
    log,
    logError,
    getErrorMessage,
    logWarning,
    getWarningMessage,
    logSupport,
    getSupportMessage,
    getTreatMessage,
    toggleDevTools,
};

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSkin = exports.QinStyles = void 0;
const qin_arm_1 = require("./qin-arm");
const qin_head_1 = require("./qin-head");
exports.QinStyles = {
    ColorForeground: "#180027",
    ColorBackground: "#fffaef",
    ColorInactive: "#faefff",
    ColorActive: "#fadede",
    ColorAccent: "#ae0000",
    ColorSelected: "#5d72de8f",
    FontName: "SourceSansPro",
    FontSize: "16px",
};
function styleAsBody(el) {
    el.style.position = "absolute";
    el.style.top = "0px";
    el.style.right = "0px";
    el.style.bottom = "0px";
    el.style.left = "0px";
    el.style.padding = "9px";
    el.style.overflow = "auto";
}
function styleAsEdit(el) {
    el.style.margin = "1px";
    el.style.padding = "3px";
    el.style.outline = "none";
    el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    el.style.borderRadius = "3px";
    el.style.color = exports.QinStyles.ColorForeground;
    el.style.backgroundColor = exports.QinStyles.ColorInactive;
    el.style.fontFamily = "SourceSansPro";
    el.style.fontSize = "16px";
    el.addEventListener("focus", () => {
        el.style.outline = "none";
        el.style.backgroundColor = exports.QinStyles.ColorActive;
        el.style.border = "1px solid " + exports.QinStyles.ColorAccent;
    });
    el.addEventListener("focusout", () => {
        el.style.outline = "none";
        el.style.backgroundColor = exports.QinStyles.ColorInactive;
        el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    });
}
function styleMaxSizeForNotOverFlow(el, parent) {
    console.log("D1");
    if (!parent) {
        parent = el.parentElement;
        console.log("D2: " + parent);
    }
    if (parent) {
        let maxWidth = 0;
        let maxHeight = 0;
        let imediate = el;
        do {
            maxWidth = maxWidth + imediate.clientLeft;
            maxHeight = maxHeight + imediate.clientTop;
            console.log("D3: " + maxWidth);
            console.log("D4: " + maxHeight);
            imediate = imediate.parentElement;
        } while (imediate != null && imediate != parent);
        maxWidth = parent.clientWidth - maxWidth;
        maxHeight = parent.clientHeight - maxHeight;
        console.log("D5: " + maxWidth);
        console.log("D6: " + maxHeight);
        el.style.maxWidth = maxWidth + "px";
        el.style.maxHeight = maxHeight + "px";
    }
}
function styleSize(el, size) {
    if (size) {
        if (size instanceof qin_head_1.QinDimension) {
            el.style.width = size.width + "px";
            el.style.height = size.height + "px";
        }
        else {
            let dim = getDimensionSize(size);
            el.style.width = dim.width + "px";
            el.style.height = dim.height + "px";
        }
    }
}
function styleFlexMax(el) {
    el.style.flex = "1";
}
function styleFlexMin(el) {
    el.style.flex = "0";
}
function getWindowSize() {
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
    };
}
function getWindowSizeStyle() {
    const width = getWindowSize().width;
    if (width < 600) {
        return qin_head_1.QinGrandeur.SMALL;
    }
    else if (width < 1000) {
        return qin_head_1.QinGrandeur.MEDIUM;
    }
    else {
        return qin_head_1.QinGrandeur.LARGE;
    }
}
function hideAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < doc_iframes.length; i++) {
        let doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "hidden";
    }
}
function showAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < doc_iframes.length; i++) {
        let doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "visible";
    }
}
function disableSelection(element) {
    element.style.userSelect = "none";
    element.style.webkitUserSelect = "none";
    element.onselectstart = qin_arm_1.QinArm.stopEvent;
}
function clearSelection() {
    setTimeout(() => {
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    }, 360);
}
function isElementVisibleInScroll(element) {
    if (element.parentElement) {
        if (element.offsetTop < element.parentElement.scrollTop) {
            return false;
        }
        if (element.offsetLeft < element.parentElement.scrollLeft) {
            return false;
        }
        if (element.clientWidth >
            element.parentElement.clientWidth -
                (element.offsetLeft - element.parentElement.scrollLeft)) {
            return false;
        }
        if (element.clientHeight >
            element.parentElement.clientHeight -
                (element.offsetTop - element.parentElement.scrollTop)) {
            return false;
        }
    }
    return true;
}
function getDimension(el) {
    return {
        width: parseInt(el.style.width),
        height: parseInt(el.style.height),
    };
}
function getDimensionSize(size) {
    if (size == qin_head_1.QinGrandeur.LARGE) {
        return getDimensionLarge();
    }
    else if (size == qin_head_1.QinGrandeur.MEDIUM) {
        return getDimensionMedium();
    }
    else {
        return getDimensionSmall();
    }
}
const dimensionSmall = {
    width: 16,
    height: 16,
};
function getDimensionSmall() {
    return dimensionSmall;
}
const dimensionMedium = {
    width: 32,
    height: 32,
};
function getDimensionMedium() {
    return dimensionMedium;
}
const dimensionLarge = {
    width: 64,
    height: 64,
};
function getDimensionLarge() {
    return dimensionLarge;
}
exports.QinSkin = {
    styles: exports.QinStyles,
    styleAsBody,
    styleAsEdit,
    styleMaxSizeForNotOverFlow,
    styleSize,
    styleFlexMax,
    styleFlexMin,
    getWindowSize,
    getWindowSizeStyle,
    hideAllIFrames,
    showAllIFrames,
    disableSelection,
    clearSelection,
    isElementVisibleInScroll,
    getDimension,
    getDimensionSize,
    getDimensionSmall,
    getDimensionMedium,
    getDimensionLarge,
};

},{"./qin-arm":31,"./qin-head":34}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = void 0;
const qin_arm_1 = require("./qin-arm");
const qin_body_1 = require("./qin-body");
const qin_foot_1 = require("./qin-foot");
const qin_head_1 = require("./qin-head");
const qin_skin_1 = require("./qin-skin");
exports.QinSoul = {
    arm: qin_arm_1.QinArm,
    body: qin_body_1.QinBody,
    foot: qin_foot_1.QinFoot,
    head: qin_head_1.QinHead,
    skin: qin_skin_1.QinSkin,
};

},{"./qin-arm":31,"./qin-body":32,"./qin-foot":33,"./qin-head":34,"./qin-skin":35}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJ1aWxkL2luZGV4LmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9hbGwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1hc3NldHMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1iYXNlLXN0eWxlLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYmFzZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWJvb2xlYW4uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1idXR0b24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1jb2x1bW4uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1jb21iby5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWVkaXQuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1maWVsZC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWZpbGUtY2hvb3Nlci5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWZpbGUtZXhwbG9yZXIuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1maWxlLXBhdGguanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1pY29uLW9wdGlvbi5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWljb24tcGljay5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWljb24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1pbnRlZ2VyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbGFiZWwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1saW5lLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbWVudS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLW11dGFudHMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1wYW5lbC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXNwbGl0dGVyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tc3RhY2suanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1zdHJpbmcuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10YWJsZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXRhYnMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10b29scy5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tYXJtLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tYm9keS5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWZvb3QuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1oZWFkLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tc2tpbi5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLXNvdWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbHFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY2xhc3MgQWRNaXN0ZXIgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zdCBxaW5EZXNrID0gdGhpcy5xaW5wZWwubWFuYWdlci5uZXdEZXNrKHRoaXMucWlucGVsLCB7XHJcbiAgICAgICAgICAgIGFkZHNBcHBzOiAobWFuaWZlc3QpID0+IG1hbmlmZXN0Lmdyb3VwID09IFwiYWRtaXN0ZXJcIixcclxuICAgICAgICAgICAgc2hvd0NmZ3M6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLmFwcGVuZENoaWxkKHFpbkRlc2suZ2V0TWFpbigpKTtcclxuICAgIH1cclxufVxyXG5uZXcgQWRNaXN0ZXIoKS5zdHlsZS5wdXRBc0JvZHkoKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Ub29scyA9IGV4cG9ydHMuUWluVGFicyA9IGV4cG9ydHMuUWluVGFibGUgPSBleHBvcnRzLlFpblN0cmluZyA9IGV4cG9ydHMuUWluU3RhY2sgPSBleHBvcnRzLlFpblNwbGl0dGVyID0gZXhwb3J0cy5RaW5QYW5lbCA9IGV4cG9ydHMuUWluTXV0YW50c0FybSA9IGV4cG9ydHMuUWluTXV0YW50cyA9IGV4cG9ydHMuUWluTWVudUl0ZW0gPSBleHBvcnRzLlFpbk1lbnUgPSBleHBvcnRzLlFpbkxpbmUgPSBleHBvcnRzLlFpbkxhYmVsID0gZXhwb3J0cy5RaW5JbnRlZ2VyID0gZXhwb3J0cy5RaW5JY29uID0gZXhwb3J0cy5RaW5JY29uUGljayA9IGV4cG9ydHMuUWluSWNvbk9wdGlvbiA9IGV4cG9ydHMuUWluRmlsZVBhdGggPSBleHBvcnRzLlFpbkZpbGVFeHBsb3JlciA9IGV4cG9ydHMuUWluRmlsZUNob29zZXIgPSBleHBvcnRzLlFpbkZpZWxkID0gZXhwb3J0cy5RaW5FZGl0ID0gZXhwb3J0cy5RaW5Db21ibyA9IGV4cG9ydHMuUWluQ29sdW1uID0gZXhwb3J0cy5RaW5CdXR0b24gPSBleHBvcnRzLlFpbkJvb2xlYW4gPSBleHBvcnRzLlFpbkJhc2UgPSBleHBvcnRzLlFpbkJhc2VTdHlsZSA9IGV4cG9ydHMucWluVXJsQXNzZXQgPSBleHBvcnRzLnFpbkFzc2V0VXJsID0gZXhwb3J0cy5RaW5Bc3NldCA9IHZvaWQgMDtcclxudmFyIHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkFzc2V0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXNzZXRzXzEuUWluQXNzZXQ7IH0gfSk7XHJcbnZhciBxaW5fYXNzZXRzXzIgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJxaW5Bc3NldFVybFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18yLnFpbkFzc2V0VXJsOyB9IH0pO1xyXG52YXIgcWluX2Fzc2V0c18zID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicWluVXJsQXNzZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hc3NldHNfMy5xaW5VcmxBc3NldDsgfSB9KTtcclxudmFyIHFpbl9iYXNlX3N0eWxlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZS1zdHlsZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQmFzZVN0eWxlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYmFzZV9zdHlsZV8xLlFpbkJhc2VTdHlsZTsgfSB9KTtcclxudmFyIHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQmFzZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Jhc2VfMS5RaW5CYXNlOyB9IH0pO1xyXG52YXIgcWluX2Jvb2xlYW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib29sZWFuXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Cb29sZWFuXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYm9vbGVhbl8xLlFpbkJvb2xlYW47IH0gfSk7XHJcbnZhciBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5CdXR0b25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9idXR0b25fMS5RaW5CdXR0b247IH0gfSk7XHJcbnZhciBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Db2x1bW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9jb2x1bW5fMS5RaW5Db2x1bW47IH0gfSk7XHJcbnZhciBxaW5fY29tYm9fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb21ib1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQ29tYm9cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9jb21ib18xLlFpbkNvbWJvOyB9IH0pO1xyXG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5FZGl0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZWRpdF8xLlFpbkVkaXQ7IH0gfSk7XHJcbnZhciBxaW5fZmllbGRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWVsZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmllbGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9maWVsZF8xLlFpbkZpZWxkOyB9IH0pO1xyXG52YXIgcWluX2ZpbGVfY2hvb3Nlcl8xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtY2hvb3NlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZUNob29zZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9maWxlX2Nob29zZXJfMS5RaW5GaWxlQ2hvb3NlcjsgfSB9KTtcclxudmFyIHFpbl9maWxlX2V4cGxvcmVyXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1leHBsb3JlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZUV4cGxvcmVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmlsZV9leHBsb3Jlcl8xLlFpbkZpbGVFeHBsb3JlcjsgfSB9KTtcclxudmFyIHFpbl9maWxlX3BhdGhfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXBhdGhcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVQYXRoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmlsZV9wYXRoXzEuUWluRmlsZVBhdGg7IH0gfSk7XHJcbnZhciBxaW5faWNvbl9vcHRpb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uLW9wdGlvblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSWNvbk9wdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ljb25fb3B0aW9uXzEuUWluSWNvbk9wdGlvbjsgfSB9KTtcclxudmFyIHFpbl9pY29uX3BpY2tfMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uLXBpY2tcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkljb25QaWNrXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faWNvbl9waWNrXzEuUWluSWNvblBpY2s7IH0gfSk7XHJcbnZhciBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkljb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9pY29uXzEuUWluSWNvbjsgfSB9KTtcclxudmFyIHFpbl9pbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9xaW4taW50ZWdlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSW50ZWdlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ludGVnZXJfMS5RaW5JbnRlZ2VyOyB9IH0pO1xyXG52YXIgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkxhYmVsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbGFiZWxfMS5RaW5MYWJlbDsgfSB9KTtcclxudmFyIHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTGluZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2xpbmVfMS5RaW5MaW5lOyB9IH0pO1xyXG52YXIgcWluX21lbnVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1tZW51XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NZW51XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbWVudV8xLlFpbk1lbnU7IH0gfSk7XHJcbnZhciBxaW5fbWVudV8yID0gcmVxdWlyZShcIi4vcWluLW1lbnVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbk1lbnVJdGVtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbWVudV8yLlFpbk1lbnVJdGVtOyB9IH0pO1xyXG52YXIgcWluX211dGFudHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1tdXRhbnRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NdXRhbnRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbXV0YW50c18xLlFpbk11dGFudHM7IH0gfSk7XHJcbnZhciBxaW5fbXV0YW50c18yID0gcmVxdWlyZShcIi4vcWluLW11dGFudHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbk11dGFudHNBcm1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9tdXRhbnRzXzIuUWluTXV0YW50c0FybTsgfSB9KTtcclxudmFyIHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5QYW5lbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3BhbmVsXzEuUWluUGFuZWw7IH0gfSk7XHJcbnZhciBxaW5fc3BsaXR0ZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zcGxpdHRlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU3BsaXR0ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zcGxpdHRlcl8xLlFpblNwbGl0dGVyOyB9IH0pO1xyXG52YXIgcWluX3N0YWNrXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RhY2tcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0YWNrXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc3RhY2tfMS5RaW5TdGFjazsgfSB9KTtcclxudmFyIHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0cmluZ1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3N0cmluZ18xLlFpblN0cmluZzsgfSB9KTtcclxudmFyIHFpbl90YWJsZV8xID0gcmVxdWlyZShcIi4vcWluLXRhYmxlXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5UYWJsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3RhYmxlXzEuUWluVGFibGU7IH0gfSk7XHJcbnZhciBxaW5fdGFic18xID0gcmVxdWlyZShcIi4vcWluLXRhYnNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblRhYnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl90YWJzXzEuUWluVGFiczsgfSB9KTtcclxudmFyIHFpbl90b29sc18xID0gcmVxdWlyZShcIi4vcWluLXRvb2xzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Ub29sc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3Rvb2xzXzEuUWluVG9vbHM7IH0gfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnFpblVybEFzc2V0ID0gZXhwb3J0cy5xaW5Bc3NldFVybCA9IGV4cG9ydHMuUWluQXNzZXQgPSB2b2lkIDA7XHJcbnZhciBRaW5Bc3NldDtcclxuKGZ1bmN0aW9uIChRaW5Bc3NldCkge1xyXG4gICAgUWluQXNzZXRbXCJCYWNrVGlueTAxXCJdID0gXCJiYWNrLXRpbnktMDEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTBcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTNcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTZcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTlcIl0gPSBcImJhY2tncm91bmQtZGFyay0xOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIxXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjJcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyM1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjVcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjhcIl0gPSBcImJhY2tncm91bmQtZGFyay0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazNcIl0gPSBcImJhY2tncm91bmQtZGFyay0zLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazRcIl0gPSBcImJhY2tncm91bmQtZGFyay00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazVcIl0gPSBcImJhY2tncm91bmQtZGFyay01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazZcIl0gPSBcImJhY2tncm91bmQtZGFyay02LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazdcIl0gPSBcImJhY2tncm91bmQtZGFyay03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazhcIl0gPSBcImJhY2tncm91bmQtZGFyay04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazlcIl0gPSBcImJhY2tncm91bmQtZGFyay05LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFya1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDFcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDExXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIxXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0N1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ4XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxN1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjVcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjhcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyQXBwc1wiXSA9IFwiZXhwbG9yZXItYXBwcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJDbWRzXCJdID0gXCJleHBsb3Jlci1jbWRzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckRpclwiXSA9IFwiZXhwbG9yZXItZGlyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckV4ZWNcIl0gPSBcImV4cGxvcmVyLWV4ZWMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyRmlsZVwiXSA9IFwiZXhwbG9yZXItZmlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJJbWFnZVwiXSA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyTW92aWVcIl0gPSBcImV4cGxvcmVyLW1vdmllLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3Jlck11c2ljXCJdID0gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJaaXBwZWRcIl0gPSBcImV4cGxvcmVyLXppcHBlZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFkZFwiXSA9IFwiZmFjZS1hZGQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd0Rvd25cIl0gPSBcImZhY2UtYXJyb3ctZG93bi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93TGVmdFwiXSA9IFwiZmFjZS1hcnJvdy1sZWZ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dSaWdodFwiXSA9IFwiZmFjZS1hcnJvdy1yaWdodC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93VXBcIl0gPSBcImZhY2UtYXJyb3ctdXAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBdHRhY2hcIl0gPSBcImZhY2UtYXR0YWNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQmFnXCJdID0gXCJmYWNlLWJhZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJlbGxEaXNhYmxlXCJdID0gXCJmYWNlLWJlbGwtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJlbGxcIl0gPSBcImZhY2UtYmVsbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhbGVuZGFyXCJdID0gXCJmYWNlLWNhbGVuZGFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FtZXJhRGlzYWJsZVwiXSA9IFwiZmFjZS1jYW1lcmEtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhbWVyYVwiXSA9IFwiZmFjZS1jYW1lcmEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYW5jZWxcIl0gPSBcImZhY2UtY2FuY2VsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FydFwiXSA9IFwiZmFjZS1jYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2hlY2tcIl0gPSBcImZhY2UtY2hlY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaXJjbGVcIl0gPSBcImZhY2UtY2lyY2xlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2xvY2tcIl0gPSBcImZhY2UtY2xvY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDbG9zZVwiXSA9IFwiZmFjZS1jbG9zZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvZ1wiXSA9IFwiZmFjZS1jb2cucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb21wYXNzXCJdID0gXCJmYWNlLWNvbXBhc3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb25maXJtXCJdID0gXCJmYWNlLWNvbmZpcm0ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb250YWN0XCJdID0gXCJmYWNlLWNvbnRhY3QucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb250cm9sXCJdID0gXCJmYWNlLWNvbnRyb2wucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb3B5XCJdID0gXCJmYWNlLWNvcHkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEZWxcIl0gPSBcImZhY2UtZGVsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRG93bmxvYWRcIl0gPSBcImZhY2UtZG93bmxvYWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFbmxhcmdlXCJdID0gXCJmYWNlLWVubGFyZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFbnRlclwiXSA9IFwiZmFjZS1lbnRlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUVyYXNlXCJdID0gXCJmYWNlLWVyYXNlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRXhpdFwiXSA9IFwiZmFjZS1leGl0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRXllRGlzYWJsZVwiXSA9IFwiZmFjZS1leWUtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUV5ZVwiXSA9IFwiZmFjZS1leWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VGaWxlXCJdID0gXCJmYWNlLWZpbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VGaWx0ZXJcIl0gPSBcImZhY2UtZmlsdGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRm9sZGVyXCJdID0gXCJmYWNlLWZvbGRlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUdlYXJcIl0gPSBcImZhY2UtZ2Vhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUhlYXJ0XCJdID0gXCJmYWNlLWhlYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSG9tZVwiXSA9IFwiZmFjZS1ob21lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSW1hZ2VcIl0gPSBcImZhY2UtaW1hZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMYWJlbFwiXSA9IFwiZmFjZS1sYWJlbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxpbmtcIl0gPSBcImZhY2UtbGluay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxvY2tcIl0gPSBcImZhY2UtbG9jay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1haWxcIl0gPSBcImZhY2UtbWFpbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1hcERpc2FibGVcIl0gPSBcImZhY2UtbWFwLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNYXBcIl0gPSBcImZhY2UtbWFwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWVzc2FnZVwiXSA9IFwiZmFjZS1tZXNzYWdlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWljRGlzYWJsZVwiXSA9IFwiZmFjZS1taWMtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1pY1wiXSA9IFwiZmFjZS1taWMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNaW51c1wiXSA9IFwiZmFjZS1taW51cy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1vdmllXCJdID0gXCJmYWNlLW1vdmllLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTmV3c1wiXSA9IFwiZmFjZS1uZXdzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGFzdGVcIl0gPSBcImZhY2UtcGFzdGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQZW5jaWxcIl0gPSBcImZhY2UtcGVuY2lsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGVyc29uXCJdID0gXCJmYWNlLXBlcnNvbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBob25lRGlzYWJsZVwiXSA9IFwiZmFjZS1waG9uZS1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGhvbmVcIl0gPSBcImZhY2UtcGhvbmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQaW5cIl0gPSBcImZhY2UtcGluLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGx1c1wiXSA9IFwiZmFjZS1wbHVzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVkb1wiXSA9IFwiZmFjZS1yZWRvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2F2ZVwiXSA9IFwiZmFjZS1zYXZlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2VhcmNoXCJdID0gXCJmYWNlLXNlYXJjaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNlbmRcIl0gPSBcImZhY2Utc2VuZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNldHRpbmdzXCJdID0gXCJmYWNlLXNldHRpbmdzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hhcmVcIl0gPSBcImZhY2Utc2hhcmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaGllbGRcIl0gPSBcImZhY2Utc2hpZWxkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hyaW5rXCJdID0gXCJmYWNlLXNocmluay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwZWFrZXJEaXNhYmxlXCJdID0gXCJmYWNlLXNwZWFrZXItZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwZWFrZXJcIl0gPSBcImZhY2Utc3BlYWtlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN0YXJcIl0gPSBcImZhY2Utc3Rhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyYXNoXCJdID0gXCJmYWNlLXRyYXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5kb1wiXSA9IFwiZmFjZS11bmRvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5saW5rXCJdID0gXCJmYWNlLXVubGluay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVubG9ja1wiXSA9IFwiZmFjZS11bmxvY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVcGxvYWRcIl0gPSBcImZhY2UtdXBsb2FkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlV2lmaURpc2FibGVcIl0gPSBcImZhY2Utd2lmaS1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlV2lmaVwiXSA9IFwiZmFjZS13aWZpLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZUNsb3NlXCJdID0gXCJmcmFtZS1jbG9zZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVNYXhpbWl6ZVwiXSA9IFwiZnJhbWUtbWF4aW1pemUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZyYW1lTWVudVwiXSA9IFwiZnJhbWUtbWVudS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVNaW5pbWl6ZVwiXSA9IFwiZnJhbWUtbWluaW1pemUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZyYW1lUmVzaXplXCJdID0gXCJmcmFtZS1yZXNpemUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZyYW1lU3RhdHVzRXJyb3JcIl0gPSBcImZyYW1lLXN0YXR1cy1lcnJvci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVTdGF0dXNJbmZvXCJdID0gXCJmcmFtZS1zdGF0dXMtaW5mby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiTG9naW5LZXlcIl0gPSBcImxvZ2luLWtleS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiTWVudURldnRvb2xzXCJdID0gXCJtZW51LWRldnRvb2xzLmljb1wiO1xyXG4gICAgUWluQXNzZXRbXCJRaW5wZWw0OFwiXSA9IFwicWlucGVsLTQ4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJRaW5wZWxcIl0gPSBcInFpbnBlbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiU291cmNlU2Fuc1Byb1wiXSA9IFwic291cmNlLXNhbnMtcHJvLnR0ZlwiO1xyXG4gICAgUWluQXNzZXRbXCJTb3VyY2VTZXJpZlByb1wiXSA9IFwic291cmNlLXNlcmlmLXByby50dGZcIjtcclxufSkoUWluQXNzZXQgPSBleHBvcnRzLlFpbkFzc2V0IHx8IChleHBvcnRzLlFpbkFzc2V0ID0ge30pKTtcclxuZnVuY3Rpb24gcWluQXNzZXRVcmwoYXNzZXQpIHtcclxuICAgIHJldHVybiBcIi9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyBhc3NldDtcclxufVxyXG5leHBvcnRzLnFpbkFzc2V0VXJsID0gcWluQXNzZXRVcmw7XHJcbmZ1bmN0aW9uIHFpblVybEFzc2V0KHVybCkge1xyXG4gICAgY29uc3QgYXNzZXQgPSB1cmwuc3Vic3RyaW5nKHVybC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcclxuICAgIHJldHVybiBhc3NldDtcclxufVxyXG5leHBvcnRzLnFpblVybEFzc2V0ID0gcWluVXJsQXNzZXQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1hc3NldHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5CYXNlU3R5bGUgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jbGFzcyBRaW5CYXNlU3R5bGUge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdXRBc0JvZHkoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNCb2R5KHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBkZWxBc0JvZHkoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNXaG9sZSgpIHtcclxuICAgICAgICB0aGlzLnB1dEFzUG9zaXRpb25BYnNvbHV0ZSgpO1xyXG4gICAgICAgIHRoaXMucHV0QXNCb3VuZHMoMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc0VkaXQoKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0VkaXQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGFiSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gICAgcHV0QXNTY3JvbGwoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc01hcmdpbihtYXJnaW4pIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWFyZ2luVG9wKG1hcmdpbikge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW5Cb3R0b20obWFyZ2luKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKG1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBwdXRBc01hcmdpbkxlZnQobWFyZ2luKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW5SaWdodChtYXJnaW4pIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQYWRkaW5nKHBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQYWRkaW5nVG9wKHBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZ1RvcCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQYWRkaW5nQm90dG9tKHBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQYWRkaW5nTGVmdChwYWRkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwocGFkZGluZyk7XHJcbiAgICB9XHJcbiAgICBwdXRBc1BhZGRpbmdSaWdodChwYWRkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCb3VuZHModG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHRvcCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnJpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwocmlnaHQpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3R0b20gPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChib3R0b20pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobGVmdCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc0FsbENlbnRlcmVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYWxpZ25Db250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0Rpc3BsYXlGbGV4KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0Rpc3BsYXlJbmxpbmUoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNEaXNwbGF5SW5saW5lQmxvY2soKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvblN0YXRpYygpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvbkFic29sdXRlKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25GaXhlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc1Bvc2l0aW9uUmVsYXRpdmUoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvblN0aWNreSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcInN0aWNreVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvbkluaXRpYWwoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJpbml0aWFsXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Sb3coKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4RGlyZWN0aW9uUm93UmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93LXJldmVyc2VcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleERpcmVjdGlvbkNvbHVtbigpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW5SZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW4tcmV2ZXJzZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4V3JhcCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleFdyYXAgPSBcIndyYXBcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleFdyYXBOb3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleFdyYXBSZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcC1yZXZlcnNlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhNaW4oKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXggPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleE1heCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleCA9IFwiYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNXaWR0aCh3aWR0aCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgIH1cclxuICAgIHB1dEFzSGVpZ2h0KGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01pbldpZHRoKHdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1pbldpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNaW5IZWlnaHQoaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1pbkhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01pblNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5taW5XaWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzTWF4V2lkdGgod2lkdGgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01heEhlaWdodChoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzTWF4U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heFdpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGb3JlZ3JvdW5kKGZvcmVncm91bmQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSBmb3JlZ3JvdW5kO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCYWNrZ3JvdW5kKGJhY2tncm91bmQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XHJcbiAgICB9XHJcbiAgICBwdXRBc0JhY2tBc3NldChhc3NldCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIGFzc2V0ICsgXCInKVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCYWNrSW5pdGlhbCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJpbml0aWFsXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc1pJbmRleChpbmRleCkge1xyXG4gICAgICAgIGlmIChpbmRleCA9PSBudWxsIHx8IGluZGV4ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gaW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdXRBc0Rpc2FibGVkU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLmRpc2FibGVTZWxlY3Rpb24odGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuICAgIGdldFBpeGVsc09ySW5pdGlhbCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZSArIFwicHhcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkJhc2VTdHlsZSA9IFFpbkJhc2VTdHlsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJhc2Utc3R5bGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5CYXNlID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2Jhc2Vfc3R5bGVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlLXN0eWxlXCIpO1xyXG5jb25zdCBxaW5fdG9vbHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10b29sc1wiKTtcclxuY2xhc3MgUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9iYXNlUGFyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9iYXNlQ2hpbGRyZW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9iYXNlRGlzcGxheSA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VWaXNpYmlsaXR5ID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgdGhpcy5fc3R5bGUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbnBlbCgpIHtcclxuICAgICAgICByZXR1cm4gcWluX3Rvb2xzXzEuUWluVG9vbHMucWlucGVsKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgc3R5bGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0eWxlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3R5bGUgPSBuZXcgcWluX2Jhc2Vfc3R5bGVfMS5RaW5CYXNlU3R5bGUodGhpcy5nZXRNYWluKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGU7XHJcbiAgICB9XHJcbiAgICBpbnN0YWxsKG9uQmFzZSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQgPSBvbkJhc2U7XHJcbiAgICAgICAgdGhpcy5fYmFzZVBhcmVudC5hcHBlbmRDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHVuSW5zdGFsbCgpIHtcclxuICAgICAgICB0aGlzLl9iYXNlUGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcmVJbnN0YWxsKCkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcbiAgICB1bkRpc3BsYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VEaXNwbGF5ID0gdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlRGlzcGxheSgpIHtcclxuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fYmFzZURpc3BsYXk7XHJcbiAgICB9XHJcbiAgICB1blZpc2libGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgIT09IFwiaGlkZGVuXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZVZpc2liaWxpdHkgPSB0aGlzLmdldE1haW4oKS5zdHlsZS52aXNpYmlsaXR5O1xyXG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZVZpc2libGUoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eSA9IHRoaXMuX2Jhc2VWaXNpYmlsaXR5O1xyXG4gICAgfVxyXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB0aGlzLl9iYXNlQ2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuYXBwZW5kQ2hpbGQoY2hpbGQuZ2V0TWFpbigpKTtcclxuICAgIH1cclxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fYmFzZUNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldE1haW4oKS5yZW1vdmVDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xyXG4gICAgfVxyXG4gICAgY2hpbGRyZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jhc2VDaGlsZHJlbjtcclxuICAgIH1cclxuICAgIGNsZWFyQ2hpbGRyZW4oKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLl9iYXNlQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkucmVtb3ZlQ2hpbGQoY2hpbGQuZ2V0TWFpbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb24odGhpcy5nZXRNYWluKCksIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBwdXRUYWJJbmRleChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnRhYkluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5CYXNlID0gUWluQmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJhc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Cb29sZWFuID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNvbnN0IHFpbl9pY29uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvblwiKTtcclxuY29uc3QgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XHJcbmNvbnN0IHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcclxuY2xhc3MgUWluQm9vbGVhbiBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4gPSBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwoKTtcclxuICAgICAgICB0aGlzLl9xaW5JY29uID0gbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNpcmNsZSk7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuLmluc3RhbGwodGhpcy5fcWluTWFpbik7XHJcbiAgICAgICAgdGhpcy5fcWluSWNvbi5pbnN0YWxsKHRoaXMuX3FpblNwYW4pO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4uc3R5bGUucHV0QXNFZGl0KCk7XHJcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5zdHlsZS5wdXRBc0Rpc3BsYXlGbGV4KCk7XHJcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5zdHlsZS5wdXRBc0FsbENlbnRlcmVkKCk7XHJcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZGF0YTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgIH1cclxuICAgIGdldCBxaW5NYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblNwYW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblNwYW47XHJcbiAgICB9XHJcbiAgICBnZXQgcWluSWNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluSWNvbjtcclxuICAgIH1cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlSWNvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5hc3NldCA9IHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ29uZmlybTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Fpbkljb24uYXNzZXQgPSBxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNpcmNsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAhdGhpcy5fdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5Cb29sZWFuID0gUWluQm9vbGVhbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJvb2xlYW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5CdXR0b24gPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkJ1dHRvbiBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuX3Fpbkljb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3FpbkxhYmVsID0gbnVsbDtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkJ1dHRvbih0aGlzLl9lbE1haW4pO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaWNvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uID0gb3B0aW9ucy5pY29uO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluTGFiZWwgPSBvcHRpb25zLmxhYmVsO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5MYWJlbC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGdldCBxaW5JY29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5JY29uO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkxhYmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5MYWJlbDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkJ1dHRvbiA9IFFpbkJ1dHRvbjtcclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYXBwbHlPbkJ1dHRvbjogKGVsKSA9PiB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0VkaXQoZWwpO1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcclxuICAgICAgICBlbC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgIH0sXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1idXR0b24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Db2x1bW4gPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluQ29sdW1uIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5pbml0UGFuZWwoKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB2aWV3ZXIgb2Ygb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICB2aWV3ZXIuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXRQYW5lbCgpIHtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblBhbmVsKHRoaXMuX2VsTWFpbik7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5Db2x1bW4gPSBRaW5Db2x1bW47XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25QYW5lbDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgIH0sXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jb2x1bW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Db21ibyA9IHZvaWQgMDtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jbGFzcyBRaW5Db21ibyBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNFZGl0KCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pdGVtcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIG9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLnNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW4udmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9lbE1haW4udmFsdWUgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgYWRkSXRlbShpdGVtKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24udGV4dCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCAhPSB1bmRlZmluZWQgJiYgaXRlbS5zZWxlY3RlZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGl0ZW0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQ29tYm8gPSBRaW5Db21ibztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWNvbWJvLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRWRpdCA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5FZGl0IGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxufVxyXG5leHBvcnRzLlFpbkVkaXQgPSBRaW5FZGl0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZWRpdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkZpZWxkID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5jbGFzcyBRaW5GaWVsZCBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZWRpdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTGFiZWwgPSBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwoKTtcclxuICAgICAgICB0aGlzLl9xaW5FZGl0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9xaW5MYWJlbC5zZXRUaXRsZSh0aXRsZSk7XHJcbiAgICAgICAgdGhpcy5fcWluTGFiZWwuaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcclxuICAgICAgICB0aGlzLl9xaW5FZGl0ID0gZWRpdDtcclxuICAgICAgICB0aGlzLl9xaW5FZGl0Lmluc3RhbGwodGhpcy5fcWluTWFpbik7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5nZXRNYWluKCkuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjVweFwiO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNXB4XCI7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQuZ2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fcWluRWRpdC5zZXREYXRhKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbk1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgcWluTGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkxhYmVsO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkVkaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWVsZCA9IFFpbkZpZWxkO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmllbGQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5GaWxlQ2hvb3NlciA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbmNvbnN0IHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XHJcbmNvbnN0IHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNvbnN0IHFpbl9maWxlX2V4cGxvcmVyXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1leHBsb3JlclwiKTtcclxuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5jb25zdCBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xyXG5jbGFzcyBRaW5GaWxlQ2hvb3NlciBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4oKTtcclxuICAgICAgICB0aGlzLl9xaW5VcHBlciA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcclxuICAgICAgICB0aGlzLl9xaW5Db25maXJtID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xyXG4gICAgICAgICAgICBpY29uOiBuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ29uZmlybSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyID0gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zID0gbmV3IHFpbl9jb21ib18xLlFpbkNvbWJvKCk7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xyXG4gICAgICAgICAgICBpY29uOiBuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlU2VhcmNoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5VbmRlciA9IG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyID0gbmV3IHFpbl9maWxlX2V4cGxvcmVyXzEuUWluRmlsZUV4cGxvcmVyKCk7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUpID8gb3B0aW9ucy5uYXR1cmUgOiBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuQk9USDtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wZXJhdGlvbikgPyBvcHRpb25zLm9wZXJhdGlvbiA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc09wZXJhdGlvbi5PUEVOO1xyXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0b3JzID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZXNjcmlwdG9ycykgPyBvcHRpb25zLmRlc2NyaXB0b3JzIDogW107XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24pID8gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpbmdsZVNlbGVjdGlvbiA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcclxuICAgICAgICB0aGlzLmluaXRVcHBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdFVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBpbml0TWFpbigpIHtcclxuICAgICAgICB0aGlzLl9xaW5VcHBlci5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgICAgIHRoaXMuX3FpblVuZGVyLmluc3RhbGwodGhpcy5fcWluTWFpbik7XHJcbiAgICB9XHJcbiAgICBpbml0VXBwZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluVXBwZXIuc3R5bGUucHV0QXNGbGV4TWluKCk7XHJcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybS5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcclxuICAgICAgICB0aGlzLl9xaW5Db25maXJtLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hvc2VuIG9mIHRoaXMuX2xpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNob3NlbihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XHJcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLnN0eWxlLnB1dEFzTWluV2lkdGgoMTAwKTtcclxuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuc3R5bGUucHV0QXNGbGV4TWF4KCk7XHJcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzRW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEZvbGRlcigpO1xyXG4gICAgICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XHJcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5zdHlsZS5wdXRBc01pbldpZHRoKDEwMCk7XHJcbiAgICAgICAgdGhpcy5pbml0RXh0ZW5zaW9ucygpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2guYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIoKTtcclxuICAgICAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXRVbmRlcigpIHtcclxuICAgICAgICB0aGlzLl9xaW5VbmRlci5zdHlsZS5wdXRBc1Njcm9sbCgpO1xyXG4gICAgICAgIHRoaXMuX3FpblVuZGVyLnN0eWxlLnB1dEFzRmxleE1heCgpO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmluc3RhbGwodGhpcy5fcWluVW5kZXIpO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLm5hdHVyZSA9IHRoaXMuX25hdHVyZTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5zaW5nbGVTZWxlY3Rpb24gPSB0aGlzLl9zaW5nbGVTZWxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBpbml0RXh0ZW5zaW9ucygpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVzY3JpcHRvcnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5hZGRJdGVtKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFsbCBGaWxlcyAoKi4qKVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5leHRlbnNpb25zID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZGVzY3JpcHRvcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5fZGVzY3JpcHRvcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5hZGRJdGVtKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGVzY3JpcHRvci5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGVzY3JpcHRvci5leHRlbnNpb25zLmpvaW4oXCI7XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleCA9PSAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuZXh0ZW5zaW9ucyA9IHRoaXMuX2Rlc2NyaXB0b3JzWzBdLmV4dGVuc2lvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FeHBsb3Jlci5nZXREYXRhKCk7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5zZXREYXRhKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbk1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgcWluVXBwZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblVwcGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkNvbmZpcm0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkNvbmZpcm07XHJcbiAgICB9XHJcbiAgICBnZXQgcWluRm9sZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5Gb2xkZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluRXh0ZW5zaW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluRXh0ZW5zaW9ucztcclxuICAgIH1cclxuICAgIGdldCBxaW5TZWFyY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblNlYXJjaDtcclxuICAgIH1cclxuICAgIGdldCBxaW5VbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluVW5kZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluRXhwbG9yZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkV4cGxvcmVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmF0dXJlO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hdHVyZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX25hdHVyZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLm5hdHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IG9wZXJhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IG9wZXJhdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRlc2NyaXB0b3JzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdG9ycztcclxuICAgIH1cclxuICAgIHNldCBkZXNjcmlwdG9ycyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0b3JzID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgc2luZ2xlU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVTZWxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBzZXQgc2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBsb2FkRm9sZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmxvYWQodGhpcy5fcWluRm9sZGVyLmdldERhdGEoKSwgKGxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuc2V0RGF0YShsb2FkZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkQ2hvc2VuKGNob3Nlbikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGNob3Nlbik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlQ2hvb3NlciA9IFFpbkZpbGVDaG9vc2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmlsZS1jaG9vc2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRmlsZUV4cGxvcmVyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluRmlsZUV4cGxvcmVyIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX3BhbmVsXzEuUWluUGFuZWwoKTtcclxuICAgICAgICB0aGlzLl9mb2xkZXJBY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9uYXR1cmUgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSkgPyBvcHRpb25zLm5hdHVyZSA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmV4dGVuc2lvbnMpID8gb3B0aW9ucy5leHRlbnNpb25zIDogW107XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24pID8gb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24gOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBpbml0TWFpbigpIHtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbk1haW4odGhpcy5fcWluTWFpbi5nZXRNYWluKCkpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnN0eWxlLnB1dEFzRGlzYWJsZWRTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0UGF0aEpvaW4odGhpcy5fZm9sZGVyU2VydmVyLCBpdGVtLmdldE5hbWUoKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGZvbGRlclJvb3QgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhcmVudChkYXRhWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKGZvbGRlclJvb3QsIChfKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW1QYXRoIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJvb3QgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhcmVudChpdGVtUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRTdGVtKGl0ZW1QYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVJvb3QgIT09IGZvbGRlclJvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuZnJhbWUuc3RhdHVzRXJyb3IoYFRoZSBpdGVtICcke2l0ZW1QYXRofScgaXMgbm90IG9uIHRoZSByb290ICcke2ZvbGRlclJvb3R9Jy5gLCBcIntxaW5wZWwtY3BzfShFcnJDb2RlLTAwMDAwMSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0KGl0ZW1OYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuZnJhbWUuc3RhdHVzRXJyb3IoYERvZXMgbm90IGhhdmUgdGhlIGl0ZW0gJyR7aXRlbU5hbWV9JyBvbiB0aGUgZm9sZGVyICcke2ZvbGRlclJvb3R9J2AsIFwie3FpbnBlbC1jcHN9KEVyckNvZGUtMDAwMDAyKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHFpbk1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgbmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYXR1cmU7XHJcbiAgICB9XHJcbiAgICBzZXQgbmF0dXJlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgZXh0ZW5zaW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXh0ZW5zaW9ucztcclxuICAgIH1cclxuICAgIHNldCBleHRlbnNpb25zKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNpbmdsZVNlbGVjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2luZ2xlU2VsZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IHNpbmdsZVNlbGVjdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NpbmdsZVNlbGVjdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2luZ2xlU2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgZm9sZGVyQWN0dWFsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mb2xkZXJBY3R1YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgZm9sZGVyU2VydmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mb2xkZXJTZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTaW5nbGVTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NpbmdsZVNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgYWxyZWFkeUhhcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5faXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbHJlYWR5SGFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udW5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlIYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvYWQoZm9sZGVyLCBvbkxvYWQpIHtcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgdGhpcy5xaW5wZWxcclxuICAgICAgICAgICAgLnBvc3QoXCIvZGlyL2xpc3RcIiwgeyBwYXRoOiBmb2xkZXIgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9mb2xkZXJBY3R1YWwgPSBmb2xkZXI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGxpbmUgb2YgcWlucGVsX3Jlc18xLlFpblNvdWwuYm9keS5nZXRUZXh0TGluZXMocmVzLmRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZVZhbHVlID0gbGluZS5zdWJzdHJpbmcoMyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aChcIlA6IFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IGxpbmVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob25Mb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZChsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aChcIkQ6IFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uYXR1cmUgPT0gcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEggfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5ESVJFQ1RPUklFUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0RpcihsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aChcIkY6IFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uYXR1cmUgPT0gcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEggfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5GSUxFUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXh0ZW5zaW9uID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRGaWxlRXh0ZW5zaW9uKGxpbmVWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXNzZWRFeHRlbnNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZXh0ZW5zaW9ucyAmJiB0aGlzLl9leHRlbnNpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NlZEV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZEV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdGaWxlKGxpbmVWYWx1ZSwgZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucWlucGVsLmZyYW1lLnN0YXR1c0Vycm9yKGVyciwgXCJ7cWlucGVsLWNwc30oRXJyQ29kZS0wMDAwMDMpXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVsb2FkKG9uTG9hZCkge1xyXG4gICAgICAgIHRoaXMubG9hZCh0aGlzLl9mb2xkZXJTZXJ2ZXIsIG9uTG9hZCk7XHJcbiAgICB9XHJcbiAgICBnb0ZvbGRlclVwKG9uTG9hZCkge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBxaW5wZWxfcmVzXzEuUWluRm9vdC5nZXRQYXJlbnQodGhpcy5fZm9sZGVyU2VydmVyKTtcclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChwYXJlbnQsIG9uTG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5nZXRNYWluKCkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9pdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2ZvbGRlckFjdHVhbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fZm9sZGVyU2VydmVyID0gXCJcIjtcclxuICAgIH1cclxuICAgIGNsZWFuU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9pdGVtcykge1xyXG4gICAgICAgICAgICBpdGVtLnVuc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0KGl0ZW1OYW1lKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtcy5maW5kKChpbnNpZGUpID0+IGluc2lkZS5nZXROYW1lKCkgPT0gaXRlbU5hbWUpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVuc2VsZWN0KGl0ZW1OYW1lKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtcy5maW5kKChpbnNpZGUpID0+IGluc2lkZS5nZXROYW1lKCkgPT0gaXRlbU5hbWUpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udW5zZWxlY3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmV3RGlyKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5ld0l0ZW0obmFtZSwgXCJleHBsb3Jlci1kaXIucG5nXCIpO1xyXG4gICAgfVxyXG4gICAgbmV3RmlsZShuYW1lLCBleHRlbnNpb24pIHtcclxuICAgICAgICB0aGlzLm5ld0l0ZW0obmFtZSwgZ2V0SWNvbk5hbWUoZXh0ZW5zaW9uKSk7XHJcbiAgICB9XHJcbiAgICBuZXdJdGVtKG5hbWUsIGljb24pIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0odGhpcywgbmFtZSwgaWNvbik7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpKTtcclxuICAgICAgICB0aGlzLl9pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluRmlsZUV4cGxvcmVyID0gUWluRmlsZUV4cGxvcmVyO1xyXG5jbGFzcyBJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGV4cGxvcmVyLCBmaWxlTmFtZSwgaWNvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLmRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuc3Bhbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLmltZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHRoaXMuc3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5leHBsb3JlciA9IGV4cGxvcmVyO1xyXG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB0aGlzLmljb25OYW1lID0gaWNvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5pbml0SXRlbSgpO1xyXG4gICAgfVxyXG4gICAgaW5pdEl0ZW0oKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZJdGVtKHRoaXMuZGl2SXRlbSk7XHJcbiAgICAgICAgdGhpcy5kaXZJdGVtLnRhYkluZGV4ID0gMDtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdkl0ZW1Cb2R5KHRoaXMuZGl2SXRlbUJvZHkpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbS5hcHBlbmRDaGlsZCh0aGlzLmRpdkl0ZW1Cb2R5KTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5JY29uKHRoaXMuc3Bhbkljb24pO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuSWNvbik7XHJcbiAgICAgICAgdGhpcy5pbWdJY29uLnNyYyA9IFwiL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIHRoaXMuaWNvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5zcGFuSWNvbi5hcHBlbmRDaGlsZCh0aGlzLmltZ0ljb24pO1xyXG4gICAgICAgIHRoaXMuc3BhblRleHQuaW5uZXJUZXh0ID0gdGhpcy5maWxlTmFtZTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5UZXh0KHRoaXMuc3BhblRleHQpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuVGV4dCk7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuYXJtLmFkZEFjdGlvbih0aGlzLmRpdkl0ZW0sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpdkl0ZW0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbnN0YWxsKG9uKSB7XHJcbiAgICAgICAgb24uYXBwZW5kQ2hpbGQodGhpcy5kaXZJdGVtKTtcclxuICAgIH1cclxuICAgIHNlbGVjdCgpIHtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdlNlbGVjdCh0aGlzLmRpdkl0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5zZWxlY3QoKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZVblNlbGVjdCh0aGlzLmRpdkl0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBsb3Jlci5zaW5nbGVTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9yZXIuY2xlYW5TZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZU5hbWU7XHJcbiAgICB9XHJcbiAgICBpc1NlbGVjdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldEljb25OYW1lKGZyb21FeHRlbnNpb24pIHtcclxuICAgIGxldCByZXN1bHQgPSBcImV4cGxvcmVyLWZpbGUucG5nXCI7XHJcbiAgICBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVBcHAoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWFwcHMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUNtZChmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItY21kcy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlRXhlYyhmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItZXhlYy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlSW1hZ2UoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVWZWN0b3IoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVNdXNpYyhmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItbXVzaWMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZU1vdmllKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlWmlwcGVkKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25NYWluOiAoZWwpID0+IHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KGVsKTtcclxuICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbldpZHRoID0gXCIxNjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbkhlaWdodCA9IFwiMTYwcHhcIjtcclxuICAgICAgICBlbC50YWJJbmRleCA9IDA7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkl0ZW06IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMnB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiOXB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMzNjAwNDVcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmNvbG9yID0gXCIjMjcwMDM2XCI7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjYWUwMDAwXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMzYwMDQ1XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkl0ZW1Cb2R5OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICAgICAgZWwuc3R5bGUud2lkdGggPSBcIjk2cHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uU3Bhbkljb246IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPblNwYW5UZXh0OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGVsLnN0eWxlLndvcmRXcmFwID0gXCJicmVhay13b3JkXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdlNlbGVjdDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlZmZmXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdlVuU2VsZWN0OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcclxuICAgIH0sXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1maWxlLWV4cGxvcmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRmlsZVBhdGggPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbmNvbnN0IHFpbl9maWxlX2Nob29zZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLWNob29zZXJcIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNvbnN0IHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XHJcbmNsYXNzIFFpbkZpbGVQYXRoIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fcWluUGF0aCA9IG5ldyBxaW5fc3RyaW5nXzEuUWluU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xyXG4gICAgICAgICAgICBpY29uOiBuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlRm9sZGVyKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5DaG9vc2VyID0gbmV3IHFpbl9maWxlX2Nob29zZXJfMS5RaW5GaWxlQ2hvb3Nlcih7XHJcbiAgICAgICAgICAgIG5hdHVyZTogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSxcclxuICAgICAgICAgICAgb3BlcmF0aW9uOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub3BlcmF0aW9uLFxyXG4gICAgICAgICAgICBkZXNjcmlwdG9yczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRlc2NyaXB0b3JzLFxyXG4gICAgICAgICAgICBzaW5nbGVTZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluUG9wdXAgPSB0aGlzLnFpbnBlbC5mcmFtZS5uZXdQb3B1cCh0aGlzLl9xaW5DaG9vc2VyLmdldE1haW4oKSk7XHJcbiAgICAgICAgdGhpcy5fcWluUGF0aC5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwcGVySGVpZ2h0ID0gdGhpcy5fcWluQ2hvb3Nlci5xaW5VcHBlci5nZXRNYWluKCkuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwbG9yZXJNYXhIZWlnaHQgPSB0aGlzLl9xaW5Qb3B1cC5tYXhIZWlnaHQgLSAodXBwZXJIZWlnaHQgKyAxMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5DaG9vc2VyLnFpbkV4cGxvcmVyLnN0eWxlLnB1dEFzTWF4SGVpZ2h0KGV4cGxvcmVyTWF4SGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkNob29zZXIuYWRkQ2hvc2VuKChjaG9zZW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNob3NlbiAmJiBjaG9zZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluUGF0aC5zZXREYXRhKGNob3NlblswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5QYXRoLmdldERhdGEoKTtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FpblBhdGguc2V0RGF0YShkYXRhKTtcclxuICAgIH1cclxuICAgIGdldCBxaW5NYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBhdGg7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluU2VhcmNoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5TZWFyY2g7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluQ2hvb3NlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluQ2hvb3NlcjtcclxuICAgIH1cclxuICAgIGdldCBxaW5Qb3B1cCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluUG9wdXA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlUGF0aCA9IFFpbkZpbGVQYXRoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmlsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluSWNvbk9wdGlvbiA9IHZvaWQgMDtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY2xhc3MgUWluSWNvbk9wdGlvbiBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihpY29uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGJvcmRlciA9IE1hdGgucm91bmQoaWNvbi5zaXplLndpZHRoIC8gMTApO1xyXG4gICAgICAgIGxldCBwYWRkaW5nID0gYm9yZGVyICogMjtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuYm9yZGVyUmFkaXVzID0gYm9yZGVyICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5wYWRkaW5nID0gcGFkZGluZyArIFwicHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoaXMuX2ljb24gPSBpY29uO1xyXG4gICAgICAgIHRoaXMuX2ljb24uaW5zdGFsbCh0aGlzKTtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBkYXRhO1xyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yU2VsZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGljb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb247XHJcbiAgICB9XHJcbiAgICBnZXQgc2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHNlbGVjdGVkKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkljb25PcHRpb24gPSBRaW5JY29uT3B0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taWNvbi1vcHRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5JY29uUGljayA9IHZvaWQgMDtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNvbnN0IHFpbl9pY29uX29wdGlvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb24tb3B0aW9uXCIpO1xyXG5jbGFzcyBRaW5JY29uUGljayBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zdHlsZS5wdXRBc0VkaXQoKTtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgcWluX2ljb25fb3B0aW9uXzEuUWluSWNvbk9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmljb24uYXNzZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShhc3NldCkge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX3Fpbk1haW4uY2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBxaW5faWNvbl9vcHRpb25fMS5RaW5JY29uT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaWNvbi5hc3NldCA9PSBhc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgYWRkSWNvbihpY29uKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBxaW5faWNvbl9vcHRpb25fMS5RaW5JY29uT3B0aW9uKGljb24pO1xyXG4gICAgICAgIG9wdGlvbi5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgfVxyXG4gICAgYWRkT3B0aW9uKG9wdGlvbikge1xyXG4gICAgICAgIG9wdGlvbi5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluSWNvblBpY2sgPSBRaW5JY29uUGljaztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWljb24tcGljay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkljb24gPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkljb24gZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoYXNzZXQsIHNpemUgPSBxaW5wZWxfcmVzXzEuUWluR3JhbmRldXIuU01BTEwpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnNyYyA9ICgwLCBxaW5fYXNzZXRzXzEucWluQXNzZXRVcmwpKGFzc2V0KTtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZVNpemUodGhpcy5fZWxNYWluLCBzaXplKTtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGdldCBhc3NldCgpIHtcclxuICAgICAgICByZXR1cm4gKDAsIHFpbl9hc3NldHNfMS5xaW5VcmxBc3NldCkodGhpcy5fZWxNYWluLnNyYyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXNzZXQoYXNzZXQpIHtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3JjID0gKDAsIHFpbl9hc3NldHNfMS5xaW5Bc3NldFVybCkoYXNzZXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbnBlbF9yZXNfMS5RaW5Ta2luLmdldERpbWVuc2lvbih0aGlzLl9lbE1haW4pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluSWNvbiA9IFFpbkljb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1pY29uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluSW50ZWdlciA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY2xhc3MgUWluSW50ZWdlciBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0VkaXQodGhpcy5fZWxNYWluKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUud2lkdGggPSBcIjEyMHB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLmdldERhdGEoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9lbE1haW4udmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkIHx8IHZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX2VsTWFpbi52YWx1ZSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhID09IG51bGwgfHwgZGF0YSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsTWFpbi52YWx1ZSA9IChkYXRhIHwgMCkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5JbnRlZ2VyID0gUWluSW50ZWdlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWludGVnZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5MYWJlbCA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5MYWJlbCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsTWFpbi50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICB9XHJcbiAgICBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluLnRleHRDb250ZW50O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluTGFiZWwgPSBRaW5MYWJlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWxhYmVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluTGluZSA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5MaW5lIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5pbml0UGFuZWwoKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdmlld2VyIG9mIG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICAgICAgdmlld2VyLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbml0UGFuZWwoKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25QYW5lbCh0aGlzLl9lbE1haW4pO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluTGluZSA9IFFpbkxpbmU7XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25QYW5lbDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XHJcbiAgICB9LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tbGluZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbk1lbnVJdGVtID0gZXhwb3J0cy5RaW5NZW51ID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5jbGFzcyBRaW5NZW51IGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX3BhbmVsXzEuUWluUGFuZWwoKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnN0eWxlLnB1dEFzRWRpdCgpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4uc3R5bGUucHV0QXNTY3JvbGwoKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLml0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBRaW5NZW51SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQ2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1dEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbk1lbnUgPSBRaW5NZW51O1xyXG5jbGFzcyBRaW5NZW51SXRlbSBleHRlbmRzIHFpbl9wYW5lbF8xLlFpblBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKGljb24sIGxhYmVsKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9mYWNlID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5fYm9keSA9IG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCk7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9mYWNlLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fYm9keS5pbnN0YWxsKHRoaXMuX2ZhY2UpO1xyXG4gICAgICAgIHRoaXMuX2ljb24gPSBpY29uO1xyXG4gICAgICAgIGlmICh0aGlzLl9pY29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ljb24uaW5zdGFsbCh0aGlzLl9ib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcclxuICAgICAgICBpZiAodGhpcy5fbGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbGFiZWwuaW5zdGFsbCh0aGlzLl9ib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wdXRUYWJJbmRleCgwKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRWRpdCgpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNNYXJnaW4oMyk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc1BhZGRpbmcoNik7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0Rpc3BsYXlJbmxpbmVCbG9jaygpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNNYXhXaWR0aCg5Nik7XHJcbiAgICAgICAgdGhpcy5fYm9keS5zdHlsZS5wdXRBc0FsbENlbnRlcmVkKCk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5fZmFjZS5zdHlsZS5wdXRBc0JhY2tBc3NldChxaW5fYXNzZXRzXzEuUWluQXNzZXQuQmFja1RpbnkwMSk7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5TZWxlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5fZmFjZS5zdHlsZS5wdXRBc0JhY2tJbml0aWFsKCk7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHN3YXBTZWxlY3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5TZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluTWVudUl0ZW0gPSBRaW5NZW51SXRlbTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLW1lbnUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5NdXRhbnRzQXJtID0gZXhwb3J0cy5RaW5NdXRhbnRzID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYm9vbGVhbl8xID0gcmVxdWlyZShcIi4vcWluLWJvb2xlYW5cIik7XHJcbmNvbnN0IHFpbl9maWxlX2Nob29zZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLWNob29zZXJcIik7XHJcbmNvbnN0IHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xyXG5jb25zdCBxaW5fZmlsZV9leHBsb3Jlcl8xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtZXhwbG9yZXJcIik7XHJcbmNvbnN0IHFpbl9pbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9xaW4taW50ZWdlclwiKTtcclxuY29uc3QgcWluX2ZpbGVfcGF0aF8xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtcGF0aFwiKTtcclxuY29uc3QgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcclxudmFyIFFpbk11dGFudHM7XHJcbihmdW5jdGlvbiAoUWluTXV0YW50cykge1xyXG4gICAgUWluTXV0YW50c1tcIkJPT0xFQU5cIl0gPSBcImJvb2xlYW5cIjtcclxuICAgIFFpbk11dGFudHNbXCJDSE9PU0VSXCJdID0gXCJjaG9vc2VyXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiQ09NQk9cIl0gPSBcImNvbWJvXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiRVhQTE9SRVJcIl0gPSBcImV4cGxvcmVyXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiSU5URUdFUlwiXSA9IFwiaW50ZWdlclwiO1xyXG4gICAgUWluTXV0YW50c1tcIlBBVEhcIl0gPSBcInBhdGhcIjtcclxuICAgIFFpbk11dGFudHNbXCJTVFJJTkdcIl0gPSBcInN0cmluZ1wiO1xyXG59KShRaW5NdXRhbnRzID0gZXhwb3J0cy5RaW5NdXRhbnRzIHx8IChleHBvcnRzLlFpbk11dGFudHMgPSB7fSkpO1xyXG5mdW5jdGlvbiBuZXdFZGl0KGtpbmQsIG9wdGlvbnMpIHtcclxuICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5CT09MRUFOOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9ib29sZWFuXzEuUWluQm9vbGVhbihvcHRpb25zKTtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuQ0hPT1NFUjpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fZmlsZV9jaG9vc2VyXzEuUWluRmlsZUNob29zZXIob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkNPTUJPOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9jb21ib18xLlFpbkNvbWJvKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5FWFBMT1JFUjpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fZmlsZV9leHBsb3Jlcl8xLlFpbkZpbGVFeHBsb3JlcihvcHRpb25zKTtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuSU5URUdFUjpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5faW50ZWdlcl8xLlFpbkludGVnZXIob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLlBBVEg6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ZpbGVfcGF0aF8xLlFpbkZpbGVQYXRoKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5TVFJJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX3N0cmluZ18xLlFpblN0cmluZyhvcHRpb25zKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGtpbmQgb2YgbXV0YW50IHRvIGNyZWF0ZS5cIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5NdXRhbnRzQXJtID0ge1xyXG4gICAgbmV3RWRpdCxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLW11dGFudHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5QYW5lbCA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5QYW5lbCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblBhbmVsID0gUWluUGFuZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1wYW5lbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblNwbGl0dGVyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpblNwbGl0dGVyIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4uYXBwZW5kQ2hpbGQodGhpcy5fZWxTaWRlQSk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLmFwcGVuZENoaWxkKHRoaXMuX2VsTW92ZXIpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5hcHBlbmRDaGlsZCh0aGlzLl9lbFNpZGVCKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUEuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQi5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG4gICAgc2V0VmVydGljYWwoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgfVxyXG4gICAgc2V0SG9yaXpvbnRhbCgpIHtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5TcGxpdHRlciA9IFFpblNwbGl0dGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3BsaXR0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5TdGFjayA9IHZvaWQgMDtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpblN0YWNrIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgc3RhY2socWluQ29tcCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC51bkRpc3BsYXkoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBxaW5Db21wLmluc3RhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICBzaG93KHFpbkNvbXApIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkID09PSBxaW5Db21wKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5TdGFjayA9IFFpblN0YWNrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3RhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5TdHJpbmcgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNsYXNzIFFpblN0cmluZyBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm1heExlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4ubWF4TGVuZ3RoID0gb3B0aW9ucy5tYXhMZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IE1hdGgubWluKE1hdGgubWF4KG9wdGlvbnMubWF4TGVuZ3RoIC0gMTAsIDApLCA5MCk7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IE1hdGguZmxvb3IoOTAgKyAocG9zaXRpb24gKiA3KSAvIDMpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0VkaXQodGhpcy5fZWxNYWluKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gZGF0YTtcclxuICAgIH1cclxuICAgIGluc2VydEF0Q3Vyc29yKGRhdGEpIHtcclxuICAgICAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLl9lbE1haW4uc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IHRoaXMuX2VsTWFpbi5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgbGV0IG9sZFZhbCA9IHRoaXMuX2VsTWFpbi52YWx1ZTtcclxuICAgICAgICBsZXQgbmV3VmFsID0gKHN0YXJ0UG9zID4gMCA/IG9sZFZhbC5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpIDogXCJcIikgK1xyXG4gICAgICAgICAgICBkYXRhICtcclxuICAgICAgICAgICAgKGVuZFBvcyA8IG9sZFZhbC5sZW5ndGggPyBvbGRWYWwuc3Vic3RyaW5nKGVuZFBvcykgOiBcIlwiKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4udmFsdWUgPSBuZXdWYWw7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRQb3M7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnNlbGVjdGlvbkVuZCA9IHN0YXJ0UG9zICsgZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5TdHJpbmcgPSBRaW5TdHJpbmc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1zdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5UYWJsZSA9IHZvaWQgMDtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jbGFzcyBRaW5UYWJsZSBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fZWxUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgICAgIHRoaXMuX2VsVEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLmFwcGVuZENoaWxkKHRoaXMuX2VsVGFibGUpO1xyXG4gICAgICAgIHRoaXMuX2VsVGFibGUuYXBwZW5kQ2hpbGQodGhpcy5fZWxUSGVhZCk7XHJcbiAgICAgICAgdGhpcy5fZWxUYWJsZS5hcHBlbmRDaGlsZCh0aGlzLl9lbFRCb2R5KTtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2VsVEJvZHkucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmZvckVhY2goKHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gW107XHJcbiAgICAgICAgICAgIHRyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKS5mb3JFYWNoKCh0ZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGluZS5wdXNoKHRkLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChsaW5lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kZWxMaW5lcygpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZShsaW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIZWFkKGhlYWQpIHtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGhlYWQpIHtcclxuICAgICAgICAgICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICB0aC5pbm5lclRleHQgPSBjZWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9lbFRIZWFkLmFwcGVuZENoaWxkKHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRIZWFkKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aFwiKS5mb3JFYWNoKCh0aCkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aC5pbm5lclRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBhZGRIZWFkKGhlYWQpIHtcclxuICAgICAgICBsZXQgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgdGguaW5uZXJUZXh0ID0gaGVhZDtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkLmFwcGVuZENoaWxkKHRoKTtcclxuICAgIH1cclxuICAgIGFkZExpbmUobGluZSkge1xyXG4gICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgbGluZSkge1xyXG4gICAgICAgICAgICBsZXQgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkLmlubmVyVGV4dCA9IGNlbGwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbFRCb2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgIH1cclxuICAgIGRlbExpbmVzKCkge1xyXG4gICAgICAgIHRoaXMuX2VsVEJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblRhYmxlID0gUWluVGFibGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi10YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblRhYnMgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xyXG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG5jb25zdCBxaW5fbGFiZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1sYWJlbFwiKTtcclxuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluVGFicyBleHRlbmRzIHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4ge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcWluVGFicyA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcclxuICAgICAgICB0aGlzLl9xaW5QYW5lbCA9IG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpO1xyXG4gICAgICAgIHRoaXMuX3RhYnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9xaW5UYWJzLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluUGFuZWwuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB0YWIgb2Ygb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGFiKHRhYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgcWluVGFicygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluVGFicztcclxuICAgIH1cclxuICAgIGdldCBxaW5QYW5lbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGFuZWw7XHJcbiAgICB9XHJcbiAgICBhZGRUYWIodGFiKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oeyBsYWJlbDogbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKHRhYi50aXRsZSkgfSk7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JJbmFjdGl2ZSk7XHJcbiAgICAgICAgYnV0dG9uLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Vmlld2VyKHRhYi52aWV3ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnV0dG9uLmluc3RhbGwodGhpcy5fcWluVGFicyk7XHJcbiAgICAgICAgbGV0IGZpcnN0ID0gdGhpcy5fdGFicy5sZW5ndGggPT0gMDtcclxuICAgICAgICBsZXQgdGFiUmVmID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogdGFiLnRpdGxlLFxyXG4gICAgICAgICAgICB2aWV3ZXI6IHRhYi52aWV3ZXIsXHJcbiAgICAgICAgICAgIGJ1dHRvbixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3RhYnMucHVzaCh0YWJSZWYpO1xyXG4gICAgICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dWaWV3ZXIodGFiLnZpZXdlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd1RhYih0aXRsZSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGFiIG9mIHRoaXMuX3RhYnMpIHtcclxuICAgICAgICAgICAgaWYgKHRhYi50aXRsZSA9PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Vmlld2VyKHRhYi52aWV3ZXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93Vmlld2VyKHZpZXdlcikge1xyXG4gICAgICAgIHRoaXMuX3FpblBhbmVsLmNsZWFyQ2hpbGRyZW4oKTtcclxuICAgICAgICB2aWV3ZXIuaW5zdGFsbCh0aGlzLl9xaW5QYW5lbCk7XHJcbiAgICAgICAgZm9yIChjb25zdCB0YWIgb2YgdGhpcy5fdGFicykge1xyXG4gICAgICAgICAgICBpZiAodGFiLnZpZXdlciA9PSB2aWV3ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRhYi5idXR0b24uc3R5bGUucHV0QXNCYWNrZ3JvdW5kKHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckFjdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YWIuYnV0dG9uLnN0eWxlLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JJbmFjdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5UYWJzID0gUWluVGFicztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRhYnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Ub29scyA9IHZvaWQgMDtcclxuY29uc3QgcmVmUWlucGVsID0gd2luZG93LmZyYW1lRWxlbWVudC5xaW5wZWw7XHJcbmZ1bmN0aW9uIHFpbnBlbCgpIHtcclxuICAgIHJldHVybiByZWZRaW5wZWw7XHJcbn1cclxuZXhwb3J0cy5RaW5Ub29scyA9IHtcclxuICAgIHFpbnBlbCxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRvb2xzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU291bCA9IGV4cG9ydHMuUWluU2tpbiA9IGV4cG9ydHMuUWluU3R5bGVzID0gZXhwb3J0cy5RaW5IZWFkID0gZXhwb3J0cy5RaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluQm91bmRzID0gZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBleHBvcnRzLlFpblBvaW50ID0gZXhwb3J0cy5RaW5Gb290ID0gZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc05hdHVyZSA9IGV4cG9ydHMuUWluQm9keSA9IGV4cG9ydHMuUWluQXJtID0gZXhwb3J0cy5RaW5Qb2ludGVyQ2FsbHMgPSBleHBvcnRzLlFpbldhaXRlcnMgPSBleHBvcnRzLlFpbkV2ZW50ID0gdm9pZCAwO1xyXG52YXIgcWluX2FybV8xID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRXZlbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fMS5RaW5FdmVudDsgfSB9KTtcclxudmFyIHFpbl9hcm1fMiA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbldhaXRlcnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fMi5RaW5XYWl0ZXJzOyB9IH0pO1xyXG52YXIgcWluX2FybV8zID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUG9pbnRlckNhbGxzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzMuUWluUG9pbnRlckNhbGxzOyB9IH0pO1xyXG52YXIgcWluX2FybV80ID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQXJtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzQuUWluQXJtOyB9IH0pO1xyXG52YXIgcWluX2JvZHlfMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib2R5XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Cb2R5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYm9keV8xLlFpbkJvZHk7IH0gfSk7XHJcbnZhciBxaW5fZm9vdF8xID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzTmF0dXJlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8xLlFpbkZpbGVzTmF0dXJlOyB9IH0pO1xyXG52YXIgcWluX2Zvb3RfMiA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlc09wZXJhdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMi5RaW5GaWxlc09wZXJhdGlvbjsgfSB9KTtcclxudmFyIHFpbl9mb290XzMgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZXNEZXNjcmlwdG9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8zLlFpbkZpbGVzRGVzY3JpcHRvcjsgfSB9KTtcclxudmFyIHFpbl9mb290XzQgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRm9vdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfNC5RaW5Gb290OyB9IH0pO1xyXG52YXIgcWluX2hlYWRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Qb2ludFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfMS5RaW5Qb2ludDsgfSB9KTtcclxudmFyIHFpbl9oZWFkXzIgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRGltZW5zaW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF8yLlFpbkRpbWVuc2lvbjsgfSB9KTtcclxudmFyIHFpbl9oZWFkXzMgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm91bmRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF8zLlFpbkJvdW5kczsgfSB9KTtcclxudmFyIHFpbl9oZWFkXzQgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluR3JhbmRldXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzQuUWluR3JhbmRldXI7IH0gfSk7XHJcbnZhciBxaW5faGVhZF81ID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkhlYWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzUuUWluSGVhZDsgfSB9KTtcclxudmFyIHFpbl9za2luXzEgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU3R5bGVzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2tpbl8xLlFpblN0eWxlczsgfSB9KTtcclxudmFyIHFpbl9za2luXzIgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU2tpblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fMi5RaW5Ta2luOyB9IH0pO1xyXG52YXIgcWluX3NvdWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zb3VsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Tb3VsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc291bF8xLlFpblNvdWw7IH0gfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkFybSA9IGV4cG9ydHMuUWluUG9pbnRlckNhbGxzID0gZXhwb3J0cy5RaW5XYWl0ZXJzID0gZXhwb3J0cy5RaW5FdmVudCA9IHZvaWQgMDtcclxuY29uc3QgcWluX3NraW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xyXG5jbGFzcyBRaW5FdmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpc1N0YXJ0LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9wb2ludCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gaXNTdGFydDtcclxuICAgICAgICB0aGlzLl9ldmVudCA9IGV2ZW50O1xyXG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgfHwgZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50ID0gbWFrZUV2ZW50UG9pbnRlcihpc1N0YXJ0LCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGlzU3RhcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xyXG4gICAgfVxyXG4gICAgZ2V0IGZyb21PcmlnaW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IGZyb21UeXBpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudDtcclxuICAgIH1cclxuICAgIGdldCBmcm9tUG9pbnRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgfHwgdGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KTtcclxuICAgIH1cclxuICAgIGdldCBoYXNBbHQoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl9ldmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFsdEtleTtcclxuICAgIH1cclxuICAgIGdldCBoYXNDdHJsKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fZXZlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jdHJsS2V5O1xyXG4gICAgfVxyXG4gICAgZ2V0IGhhc1NoaWZ0KCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fZXZlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zaGlmdEtleTtcclxuICAgIH1cclxuICAgIGdldCBoYXNNZXRhKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fZXZlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXRhS2V5O1xyXG4gICAgfVxyXG4gICAgZ2V0IGtleVR5cGVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50LmtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNFbnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0tleUVudGVyKHRoaXMuX2V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRXNjYXBlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzS2V5RXNjYXBlKHRoaXMuX2V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzU3BhY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNLZXlTcGFjZSh0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc0RvdWJsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNFdmVudFBvaW50ZXJEb3VibGUodGhpcy5fc3RhcnQsIHRoaXMuX2V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTG9uZygpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNFdmVudFBvaW50ZXJMb25nKHRoaXMuX3N0YXJ0LCB0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBwb2ludCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9pbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9pbnRYKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAodGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggLyAyKSB8IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnQudG91Y2hlc1tpbmRleF0uY2xpZW50WDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCBwb2ludFkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnQuY2xpZW50WTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ldmVudC50b3VjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9ICh0aGlzLl9ldmVudC50b3VjaGVzLmxlbmd0aCAvIDIpIHwgMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudC50b3VjaGVzW2luZGV4XS5jbGllbnRZO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRmlyc3RCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNGaXJzdEJ1dHRvbih0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc01pZGRsZUJ1dHRvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01pZGRsZUJ1dHRvbih0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc1NlY29uZEJ1dHRvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc1NlY29uZEJ1dHRvbih0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc09uZUZpbmdlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc09uZUZpbmdlcih0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc1R3b0ZpbmdlcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNUd29GaW5nZXJzKHRoaXMuX2V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzVGhyZWVGaW5nZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzVGhyZWVGaW5nZXJzKHRoaXMuX2V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRm91ckZpbmdlcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNGb3VyRmluZ2Vycyh0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc1ByaW1hcnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNQcmltYXJ5S2V5KHRoaXMuX2V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNQcmltYXJ5UG9pbnQodGhpcy5fZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNBdXhpbGlhcnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNBdXhpbGlhcnlLZXkodGhpcy5fZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgfHxcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0F1eGlsaWFyeVBvaW50KHRoaXMuX2V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzU2Vjb25kYXJ5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzU2Vjb25kYXJ5S2V5KHRoaXMuX2V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNTZWNvbmRhcnlQb2ludCh0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBzdG9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9wO1xyXG4gICAgfVxyXG4gICAgY29uc3VtZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RvcCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5FdmVudCA9IFFpbkV2ZW50O1xyXG5jbGFzcyBRaW5XYWl0ZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXRpYWwpIHtcclxuICAgICAgICB0aGlzLndhaXRlcnMgPSBpbml0aWFsID8gaW5pdGlhbCA6IFtdO1xyXG4gICAgfVxyXG4gICAgYWRkV2FpdGVyKHdhaXRlcikge1xyXG4gICAgICAgIHRoaXMud2FpdGVycy5wdXNoKHdhaXRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBoYXNXYWl0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdGVycy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG4gICAgc2VuZFdhaXRlcnMocmVzdWx0KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB3YWl0ZXIgb2YgdGhpcy53YWl0ZXJzKSB7XHJcbiAgICAgICAgICAgIHdhaXRlcihyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbldhaXRlcnMgPSBRaW5XYWl0ZXJzO1xyXG5jbGFzcyBRaW5Qb2ludGVyQ2FsbHMge1xyXG59XHJcbmV4cG9ydHMuUWluUG9pbnRlckNhbGxzID0gUWluUG9pbnRlckNhbGxzO1xyXG5mdW5jdGlvbiBzdG9wRXZlbnQoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbnZhciBsYXN0RXZlbnRQb2ludGVyID0gbnVsbDtcclxuZnVuY3Rpb24gbWFrZUV2ZW50UG9pbnRlcihpc1N0YXJ0LCBldikge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICAgIHBvc1g6IDAsXHJcbiAgICAgICAgcG9zWTogMCxcclxuICAgIH07XHJcbiAgICBpZiAoZXYgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2LmNsaWVudFggfHwgZXYuY2xpZW50WSkge1xyXG4gICAgICAgICAgICByZXN1bHQucG9zWCA9IGV2LmNsaWVudFg7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wb3NZID0gZXYuY2xpZW50WTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChldiBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXYudG91Y2hlcyAmJiB0aGlzLl9ldmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcih0aGlzLl9ldmVudC50b3VjaGVzLmxlbmd0aCAvIDIpO1xyXG4gICAgICAgICAgICByZXN1bHQucG9zWCA9IGV2LnRvdWNoZXNbaW5kZXhdLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wb3NZID0gZXYudG91Y2hlc1tpbmRleF0uY2xpZW50WTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTdGFydCkge1xyXG4gICAgICAgIGxhc3RFdmVudFBvaW50ZXIgPSBldjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gaXNFdmVudFBvaW50ZXJEb3VibGUoaXNTdGFydCwgZXYpIHtcclxuICAgIGlmICghaXNTdGFydCB8fCBsYXN0RXZlbnRQb2ludGVyID09IG51bGwgfHwgZXYgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbWVEaWYgPSBldi50aW1lU3RhbXAgLSBsYXN0RXZlbnRQb2ludGVyLnRpbWVTdGFtcDtcclxuICAgIHJldHVybiB0aW1lRGlmIDwgNDUwO1xyXG59XHJcbmZ1bmN0aW9uIGlzRXZlbnRQb2ludGVyTG9uZyhpc1N0YXJ0LCBldikge1xyXG4gICAgaWYgKCFpc1N0YXJ0IHx8IGxhc3RFdmVudFBvaW50ZXIgPT0gbnVsbCB8fCBldiA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGltZURpZiA9IGV2LnRpbWVTdGFtcCAtIGxhc3RFdmVudFBvaW50ZXIudGltZVN0YW1wO1xyXG4gICAgcmV0dXJuIHRpbWVEaWYgPiA4NDA7XHJcbn1cclxuZnVuY3Rpb24gaXNLZXlJbkxpc3QoZXYsIGxpc3QpIHtcclxuICAgIGxldCBrZXlMb3dlciA9IGV2LmtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGxpc3QuaW5kZXhPZihrZXlMb3dlcikgPiAtMTtcclxufVxyXG5mdW5jdGlvbiBpc0tleUVudGVyKGV2KSB7XHJcbiAgICByZXR1cm4gaXNLZXlJbkxpc3QoZXYsIFtcImVudGVyXCIsIFwicmV0dXJuXCJdKSB8fCBldi5rZXlDb2RlID09PSAxMztcclxufVxyXG5mdW5jdGlvbiBpc0tleUVzY2FwZShldikge1xyXG4gICAgcmV0dXJuIGlzS2V5SW5MaXN0KGV2LCBbXCJlc2NcIiwgXCJlc2NhcGVcIl0pIHx8IGV2LmtleUNvZGUgPT09IDI3O1xyXG59XHJcbmZ1bmN0aW9uIGlzS2V5U3BhY2UoZXYpIHtcclxuICAgIHJldHVybiBpc0tleUluTGlzdChldiwgW1wiIFwiLCBcInNwYWNlXCIsIFwic3BhY2ViYXJcIl0pIHx8IGV2LmtleUNvZGUgPT09IDMyO1xyXG59XHJcbmZ1bmN0aW9uIGlzRmlyc3RCdXR0b24oZXYpIHtcclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LmJ1dHRvbikgPT0gMDtcclxufVxyXG5mdW5jdGlvbiBpc01pZGRsZUJ1dHRvbihldikge1xyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYuYnV0dG9uKSA9PSAxO1xyXG59XHJcbmZ1bmN0aW9uIGlzU2Vjb25kQnV0dG9uKGV2KSB7XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi5idXR0b24pID09IDI7XHJcbn1cclxuZnVuY3Rpb24gaXNPbmVGaW5nZXIoZXYpIHtcclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSAxO1xyXG59XHJcbmZ1bmN0aW9uIGlzVHdvRmluZ2Vycyhldikge1xyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYudG91Y2hlcy5sZW5ndGgpID09IDI7XHJcbn1cclxuZnVuY3Rpb24gaXNUaHJlZUZpbmdlcnMoZXYpIHtcclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSAzO1xyXG59XHJcbmZ1bmN0aW9uIGlzRm91ckZpbmdlcnMoZXYpIHtcclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSA0O1xyXG59XHJcbmZ1bmN0aW9uIGlzUHJpbWFyeUtleShldikge1xyXG4gICAgcmV0dXJuIGlzS2V5RW50ZXIoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzQXV4aWxpYXJ5S2V5KGV2KSB7XHJcbiAgICByZXR1cm4gZXYuY3RybEtleSAmJiBldi5hbHRLZXkgJiYgaXNLZXlTcGFjZShldik7XHJcbn1cclxuZnVuY3Rpb24gaXNTZWNvbmRhcnlLZXkoZXYpIHtcclxuICAgIHJldHVybiBldi5jdHJsS2V5ICYmICFldi5hbHRLZXkgJiYgaXNLZXlTcGFjZShldik7XHJcbn1cclxuZnVuY3Rpb24gaXNQcmltYXJ5UG9pbnQoZXYpIHtcclxuICAgIGlmIChldiBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gaXNGaXJzdEJ1dHRvbihldik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChldiBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gaXNPbmVGaW5nZXIoZXYpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGlzQXV4aWxpYXJ5UG9pbnQoZXYpIHtcclxuICAgIGlmIChldiBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gaXNNaWRkbGVCdXR0b24oZXYpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZXYgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzVGhyZWVGaW5nZXJzKGV2KTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBpc1NlY29uZGFyeVBvaW50KGV2KSB7XHJcbiAgICBpZiAoZXYgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzU2Vjb25kQnV0dG9uKGV2KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGV2IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgIHJldHVybiBpc1R3b0ZpbmdlcnMoZXYpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbihlbGVtZW50LCBhY3Rpb24pIHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYWN0S2V5RG93bik7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBhY3RLZXlVcCk7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgYWN0TW91c2VEb3duKTtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgYWN0TW91c2VVcCk7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGFjdFRvdWNoU3RhcnQpO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgYWN0VG91Y2hFbmQpO1xyXG4gICAgZnVuY3Rpb24gYWN0S2V5RG93bihldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudCh0cnVlLCBldik7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdEtleVVwKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KGZhbHNlLCBldik7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdE1vdXNlRG93bihldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudCh0cnVlLCBldik7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdE1vdXNlVXAoZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQoZmFsc2UsIGV2KTtcclxuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0VG91Y2hTdGFydChldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudCh0cnVlLCBldik7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdFRvdWNoRW5kKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KGZhbHNlLCBldik7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NYWluKGVsZW1lbnQsIGFjdGlvbikge1xyXG4gICAgZWxlbWVudC5vbmtleXVwID0gYWN0S2V5VXA7XHJcbiAgICBlbGVtZW50Lm9ubW91c2V1cCA9IGFjdE1vdXNlVXA7XHJcbiAgICBlbGVtZW50Lm9udG91Y2hlbmQgPSBhY3RUb3VjaEVuZDtcclxuICAgIGZ1bmN0aW9uIGFjdEtleVVwKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KGZhbHNlLCBldik7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RNb3VzZVVwKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KGZhbHNlLCBldik7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RUb3VjaEVuZChldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChmYWxzZSwgZXYpO1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbnMoZWxlbWVudHMsIGFjdGlvbikge1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uKGVsZW1lbnQsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcHV0QWN0aW9uUHJveHkoZGVzdGlueSwgb3JpZ2lucykge1xyXG4gICAgZm9yIChjb25zdCBvcmlnaW4gb2Ygb3JpZ2lucykge1xyXG4gICAgICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkZXN0aW55LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkZXN0aW55LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZGVzdGlueS5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkZXN0aW55LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRlc3RpbnkuZGlzcGF0Y2hFdmVudChlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRlc3RpbnkuZGlzcGF0Y2hFdmVudChlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRNb3Zlcihzb3VyY2VzLCB0YXJnZXQsIGRyYWdDYWxscykge1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdEV2ZW50WSA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRQb3NYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFBvc1kgPSAwO1xyXG4gICAgZm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcclxuICAgICAgICBzb3VyY2Uub25tb3VzZWRvd24gPSBvbk1vdmVySW5pdDtcclxuICAgICAgICBzb3VyY2Uub250b3VjaHN0YXJ0ID0gb25Nb3ZlckluaXQ7XHJcbiAgICAgICAgc291cmNlLm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlckluaXQoZXYpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50UG9pbnRlckRvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRQb2ludGVyTG9uZyh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKHRydWUsIGV2KTtcclxuICAgICAgICBkcmFnSW5pdEV2ZW50WCA9IHBvaW50ZXIucG9zWDtcclxuICAgICAgICBkcmFnSW5pdEV2ZW50WSA9IHBvaW50ZXIucG9zWTtcclxuICAgICAgICBkcmFnSW5pdFBvc1ggPSBwYXJzZUludCh0YXJnZXQuc3R5bGUubGVmdCwgMTApO1xyXG4gICAgICAgIGRyYWdJbml0UG9zWSA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS50b3AsIDEwKTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uTW92ZXJNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25Nb3Zlck1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uTW92ZXJDbG9zZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvbk1vdmVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJNb3ZlKGV2KSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFBvaW50ZXIoZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdEV2ZW50WDtcclxuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcclxuICAgICAgICB2YXIgZHJhZ0ZpbmFsWCA9IGRyYWdJbml0UG9zWCArIGRyYWdEaWZYO1xyXG4gICAgICAgIHZhciBkcmFnRmluYWxZID0gZHJhZ0luaXRQb3NZICsgZHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSAoZHJhZ0ZpbmFsWCA+IDAgPyBkcmFnRmluYWxYIDogMCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IChkcmFnRmluYWxZID4gMCA/IGRyYWdGaW5hbFkgOiAwKSArIFwicHhcIjtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJDbG9zZShldikge1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uc2hvd0FsbElGcmFtZXMoKTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkVuZCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25FbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkUmVzaXplcihzb3VyY2VzLCB0YXJnZXQsIGRyYWdDYWxscykge1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdEV2ZW50WSA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRXaWR0aCA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRIZWlnaHQgPSAwO1xyXG4gICAgZm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcclxuICAgICAgICBzb3VyY2Uub25tb3VzZWRvd24gPSBvblJlc2l6ZXJJbml0O1xyXG4gICAgICAgIHNvdXJjZS5vbnRvdWNoc3RhcnQgPSBvblJlc2l6ZXJJbml0O1xyXG4gICAgICAgIHNvdXJjZS5vbmRyYWdzdGFydCA9IHN0b3BFdmVudDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplckluaXQoZXYpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50UG9pbnRlckRvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRQb2ludGVyTG9uZyh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKHRydWUsIGV2KTtcclxuICAgICAgICBkcmFnSW5pdEV2ZW50WCA9IHBvaW50ZXIucG9zWDtcclxuICAgICAgICBkcmFnSW5pdEV2ZW50WSA9IHBvaW50ZXIucG9zWTtcclxuICAgICAgICBkcmFnSW5pdFdpZHRoID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLndpZHRoLCAxMCk7XHJcbiAgICAgICAgZHJhZ0luaXRIZWlnaHQgPSBwYXJzZUludCh0YXJnZXQuc3R5bGUuaGVpZ2h0LCAxMCk7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvblJlc2l6ZXJNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25SZXNpemVyTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25SZXNpemVyQ2xvc2U7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25SZXNpemVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplck1vdmUoZXYpIHtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcihmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZYID0gcG9pbnRlci5wb3NYIC0gZHJhZ0luaXRFdmVudFg7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRmluYWxXaWR0aCA9IGRyYWdJbml0V2lkdGggKyBmcmFtZURyYWdEaWZYO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdGaW5hbEhlaWdodCA9IGRyYWdJbml0SGVpZ2h0ICsgZnJhbWVEcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUud2lkdGggPVxyXG4gICAgICAgICAgICAoZnJhbWVEcmFnRmluYWxXaWR0aCA+IDAgPyBmcmFtZURyYWdGaW5hbFdpZHRoIDogMCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9XHJcbiAgICAgICAgICAgIChmcmFtZURyYWdGaW5hbEhlaWdodCA+IDAgPyBmcmFtZURyYWdGaW5hbEhlaWdodCA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25SZXNpemVyQ2xvc2UoZXYpIHtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLnNob3dBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25FbmQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZFNjcm9sbGVyKHRhcmdldCwgZHJhZ0NhbGxzKSB7XHJcbiAgICB2YXIgZHJhZ0luaXRYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFkgPSAwO1xyXG4gICAgdmFyIGRyYWdTY3JvbGxYID0gMDtcclxuICAgIHZhciBkcmFnU2Nyb2xsWSA9IDA7XHJcbiAgICB0YXJnZXQub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XHJcbiAgICB0YXJnZXQub250b3VjaHN0YXJ0ID0gb25TY3JvbGxlckluaXQ7XHJcbiAgICB0YXJnZXQub25tb3VzZWRvd24gPSBvblNjcm9sbGVySW5pdDtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJJbml0KGV2KSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudFBvaW50ZXJEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50UG9pbnRlckxvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcih0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRYID0gcG9pbnRlci5wb3NYO1xyXG4gICAgICAgIGRyYWdJbml0WSA9IHBvaW50ZXIucG9zWTtcclxuICAgICAgICBkcmFnU2Nyb2xsWCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIGRyYWdTY3JvbGxZID0gdGFyZ2V0LnNjcm9sbFRvcDtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uU2Nyb2xsZXJNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25TY3JvbGxlck1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uU2Nyb2xsZXJDbG9zZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvblNjcm9sbGVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJNb3ZlKGV2KSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFBvaW50ZXIoZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdFg7XHJcbiAgICAgICAgdmFyIGRyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRZO1xyXG4gICAgICAgIHZhciBkcmFnTmV3WCA9IGRyYWdTY3JvbGxYIC0gZHJhZ0RpZlg7XHJcbiAgICAgICAgdmFyIGRyYWdOZXdZID0gZHJhZ1Njcm9sbFkgLSBkcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc2Nyb2xsVG8oZHJhZ05ld1gsIGRyYWdOZXdZKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJDbG9zZShldikge1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uc2hvd0FsbElGcmFtZXMoKTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkVuZCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25FbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5Bcm0gPSB7XHJcbiAgICBzdG9wRXZlbnQsXHJcbiAgICBtYWtlRXZlbnRQb2ludGVyLFxyXG4gICAgaXNFdmVudFBvaW50ZXJEb3VibGUsXHJcbiAgICBpc0V2ZW50UG9pbnRlckxvbmcsXHJcbiAgICBpc0tleUluTGlzdCxcclxuICAgIGlzS2V5RW50ZXIsXHJcbiAgICBpc0tleVNwYWNlLFxyXG4gICAgaXNGaXJzdEJ1dHRvbixcclxuICAgIGlzTWlkZGxlQnV0dG9uLFxyXG4gICAgaXNTZWNvbmRCdXR0b24sXHJcbiAgICBpc09uZUZpbmdlcixcclxuICAgIGlzVHdvRmluZ2VycyxcclxuICAgIGlzVGhyZWVGaW5nZXJzLFxyXG4gICAgaXNGb3VyRmluZ2VycyxcclxuICAgIGlzUHJpbWFyeVBvaW50LFxyXG4gICAgaXNBdXhpbGlhcnlQb2ludCxcclxuICAgIGlzU2Vjb25kYXJ5UG9pbnQsXHJcbiAgICBhZGRBY3Rpb24sXHJcbiAgICBhZGRBY3Rpb25NYWluLFxyXG4gICAgYWRkQWN0aW9ucyxcclxuICAgIHB1dEFjdGlvblByb3h5LFxyXG4gICAgYWRkTW92ZXIsXHJcbiAgICBhZGRSZXNpemVyLFxyXG4gICAgYWRkU2Nyb2xsZXIsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1hcm0uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Cb2R5ID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBnZXRDb29raWUobmFtZSwgb3JEZWZhdWx0KSB7XHJcbiAgICBsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY29va2llUGFpciA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgIGlmIChuYW1lID09IGRlY29kZVVSSUNvbXBvbmVudChjb29raWVQYWlyWzBdKS50cmltKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWVQYWlyWzFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3JEZWZhdWx0O1xyXG59XHJcbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFwiL1wiIH0sIG9wdGlvbnMpO1xyXG4gICAgaWYgKCFvcHRpb25zLmV4cGlyZXMpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgMSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IGRhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICBmb3IgKGxldCBvcHRpb25LZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI7IFwiICsgb3B0aW9uS2V5O1xyXG4gICAgICAgIGxldCBvcHRpb25WYWx1ZSA9IG9wdGlvbnNbb3B0aW9uS2V5XTtcclxuICAgICAgICBpZiAob3B0aW9uVmFsdWUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIj1cIiArIG9wdGlvblZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XHJcbn1cclxuZnVuY3Rpb24gZGVsQ29va2llKG5hbWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj07ICBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCI7XHJcbiAgICBpZiAob3B0aW9ucy5leHBpcmVzKSB7XHJcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZXhwaXJlcztcclxuICAgIH1cclxuICAgIGZvciAobGV0IG9wdGlvbktleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBvcHRpb25LZXk7XHJcbiAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tvcHRpb25LZXldO1xyXG4gICAgICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgb3B0aW9uVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcclxufVxyXG5mdW5jdGlvbiBnZXRUZXh0TGluZXMoZnJvbVRleHQpIHtcclxuICAgIHJldHVybiBmcm9tVGV4dC5tYXRjaCgvW15cXHJcXG5dKy9nKTtcclxufVxyXG5mdW5jdGlvbiBnZXRDU1ZSb3dzKGZyb21UZXh0LCBuYW1lcykge1xyXG4gICAgdmFyIGxpbmVzID0gZ2V0VGV4dExpbmVzKGZyb21UZXh0KTtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIGZvciAobGV0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICBsZXQgcm93ID0gIW5hbWVzID8gW10gOiB7fTtcclxuICAgICAgICBsZXQgaW5zaWRlX3F1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjb2x1bW5fdmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGxldCBjb2x1bW5faW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGNoYXJfaW5kZXggPSAwOyBjaGFyX2luZGV4IDwgbGluZS5sZW5ndGg7IGNoYXJfaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgYWN0dWFsID0gbGluZS5jaGFyQXQoY2hhcl9pbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChpbnNpZGVfcXVvdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IGNoYXJfaW5kZXggPCBsaW5lLmxlbmd0aCAtIDEgPyBsaW5lLmNoYXJBdChjaGFyX2luZGV4ICsgMSkgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlX3F1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSArPSBhY3R1YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNpZGVfcXVvdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFjdHVhbCA9PSBcIixcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSA9IHVubWFza1NwZWNpYWxDaGFycyhjb2x1bW5fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmFtZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goY29sdW1uX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5fbmFtZSA9IFwiY29sX1wiICsgY29sdW1uX2luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uX2luZGV4IDwgbmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5fbmFtZSA9IG5hbWVzW2NvbHVtbl9pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93W2NvbHVtbl9uYW1lXSA9IGNvbHVtbl92YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5faW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSArPSBhY3R1YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29sdW1uX3ZhbHVlID0gdW5tYXNrU3BlY2lhbENoYXJzKGNvbHVtbl92YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFuYW1lcykge1xyXG4gICAgICAgICAgICByb3cucHVzaChjb2x1bW5fdmFsdWUpO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbl9uYW1lID0gXCJjb2xfXCIgKyBjb2x1bW5faW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5faW5kZXggPCBuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbl9uYW1lID0gbmFtZXNbY29sdW1uX2luZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3dbY29sdW1uX25hbWVdID0gY29sdW1uX3ZhbHVlO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gbWFza1NwZWNpYWxDaGFycyhmcm9tVGV4dCkge1xyXG4gICAgcmV0dXJuIGZyb21UZXh0XHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcXCIsIFwiXFxcXFxcXFxcIilcclxuICAgICAgICAucmVwbGFjZShcIlxcclwiLCBcIlxcXFxyXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXG5cIiwgXCJcXFxcblwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsIFwiXFxcXHRcIik7XHJcbn1cclxuZnVuY3Rpb24gdW5tYXNrU3BlY2lhbENoYXJzKGZyb21UZXh0KSB7XHJcbiAgICByZXR1cm4gZnJvbVRleHRcclxuICAgICAgICAucmVwbGFjZShcIlxcXFxcXFxcXCIsIFwiXFxcXFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXHJcIiwgXCJcXHJcIilcclxuICAgICAgICAucmVwbGFjZShcIlxcXFxuXCIsIFwiXFxuXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcdFwiLCBcIlxcdFwiKTtcclxufVxyXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnMoc291cmNlKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICBsZXQgb3BlbiA9IGZhbHNlO1xyXG4gICAgbGV0IGFjdHVhbCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IGxldHRlciBvZiBBcnJheS5mcm9tKHNvdXJjZSkpIHtcclxuICAgICAgICBpZiAob3Blbikge1xyXG4gICAgICAgICAgICBpZiAobGV0dGVyID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhY3R1YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWwgKz0gbGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobGV0dGVyID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgIG9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFjdHVhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChsZXR0ZXIgPT0gXCIgXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhY3R1YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWwgKz0gbGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnRzLlFpbkJvZHkgPSB7XHJcbiAgICBnZXRDb29raWUsXHJcbiAgICBzZXRDb29raWUsXHJcbiAgICBkZWxDb29raWUsXHJcbiAgICBnZXRUZXh0TGluZXMsXHJcbiAgICBnZXRDU1ZSb3dzLFxyXG4gICAgbWFza1NwZWNpYWxDaGFycyxcclxuICAgIHVubWFza1NwZWNpYWxDaGFycyxcclxuICAgIHBhcnNlUGFyYW1ldGVycyxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJvZHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Gb290ID0gZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc05hdHVyZSA9IHZvaWQgMDtcclxudmFyIFFpbkZpbGVzTmF0dXJlO1xyXG4oZnVuY3Rpb24gKFFpbkZpbGVzTmF0dXJlKSB7XHJcbiAgICBRaW5GaWxlc05hdHVyZVtcIkJPVEhcIl0gPSBcImJvdGhcIjtcclxuICAgIFFpbkZpbGVzTmF0dXJlW1wiRElSRUNUT1JJRVNcIl0gPSBcImRpcmVjdG9yaWVzXCI7XHJcbiAgICBRaW5GaWxlc05hdHVyZVtcIkZJTEVTXCJdID0gXCJmaWxlc1wiO1xyXG59KShRaW5GaWxlc05hdHVyZSA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgfHwgKGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSB7fSkpO1xyXG52YXIgUWluRmlsZXNPcGVyYXRpb247XHJcbihmdW5jdGlvbiAoUWluRmlsZXNPcGVyYXRpb24pIHtcclxuICAgIFFpbkZpbGVzT3BlcmF0aW9uW1wiT1BFTlwiXSA9IFwib3BlblwiO1xyXG4gICAgUWluRmlsZXNPcGVyYXRpb25bXCJTQVZFXCJdID0gXCJzYXZlXCI7XHJcbn0pKFFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiB8fCAoZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IHt9KSk7XHJcbmNsYXNzIFFpbkZpbGVzRGVzY3JpcHRvciB7XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBRaW5GaWxlc0Rlc2NyaXB0b3I7XHJcbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG59XHJcbmZ1bmN0aW9uIGlzTG9jYWxIb3N0KCkge1xyXG4gICAgdmFyIGxvY2F0aW9uID0gZ2V0TG9jYXRpb24oKTtcclxuICAgIHZhciBzdGFydCA9IGxvY2F0aW9uLmluZGV4T2YoXCI6Ly9cIik7XHJcbiAgICBpZiAoc3RhcnQgPT0gLTEpIHtcclxuICAgICAgICBzdGFydCA9IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGFydCArPSAzO1xyXG4gICAgfVxyXG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbi5zdWJzdHJpbmcoc3RhcnQpO1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uLmluZGV4T2YoXCJsb2NhbGhvc3RcIikgPT09IDAgfHwgbG9jYXRpb24uaW5kZXhPZihcIjEyNy4wLjAuMVwiKSA9PT0gMDtcclxufVxyXG5mdW5jdGlvbiBnZXRTZXBhcmF0b3Iob2ZQYXRoKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCIvXCI7XHJcbiAgICBpZiAob2ZQYXRoICYmIG9mUGF0aC5pbmRleE9mKFwiXFxcXFwiKSA+IC0xKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJcXFxcXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGdldFBhdGhKb2luKHBhdGhBLCBwYXRoQikge1xyXG4gICAgaWYgKHBhdGhBID09IG51bGwgfHwgcGF0aEEgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGF0aEEgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhCID09IG51bGwgfHwgcGF0aEIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGF0aEIgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhBLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGhCO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGF0aEIubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gcGF0aEE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgdW5pb24gPSBcIi9cIjtcclxuICAgICAgICBpZiAocGF0aEEuaW5kZXhPZihcIlxcXFxcIikgPiAtMSB8fCBwYXRoQi5pbmRleE9mKFwiXFxcXFwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHVuaW9uID0gXCJcXFxcXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXRoQUVuZCA9IHBhdGhBLnN1YnN0cmluZyhwYXRoQS5sZW5ndGggLSAxLCBwYXRoQS5sZW5ndGgpO1xyXG4gICAgICAgIGxldCBwYXRoQlN0YXJ0ID0gcGF0aEIuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgICAgIGlmIChwYXRoQUVuZCA9PSB1bmlvbiB8fCBwYXRoQlN0YXJ0ID09IHVuaW9uKSB7XHJcbiAgICAgICAgICAgIHVuaW9uID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGhBICsgdW5pb24gKyBwYXRoQjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRQYXJlbnQocGF0aCkge1xyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgICBsZXQgc2VwYXJhdG9yID0gZ2V0U2VwYXJhdG9yKHBhdGgpO1xyXG4gICAgICAgIGxldCBsYXN0ID0gcGF0aC5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xyXG4gICAgICAgIGlmIChsYXN0ID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyaW5nKDAsIGxhc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcbmZ1bmN0aW9uIGdldFN0ZW0ocGF0aCkge1xyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgICBsZXQgc2VwYXJhdG9yID0gZ2V0U2VwYXJhdG9yKHBhdGgpO1xyXG4gICAgICAgIGxldCBsYXN0ID0gcGF0aC5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xyXG4gICAgICAgIGlmIChsYXN0ID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyaW5nKGxhc3QgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxufVxyXG5mdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKG5hbWUpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IG5hbWUubGFzdEluZGV4T2YoXCIuXCIpO1xyXG4gICAgaWYgKHBvc2l0aW9uID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gbmFtZS5zdWJzdHJpbmcocG9zaXRpb24gKyAxKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGFwcHNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJodG1cIiwgXCJodG1sXCIsIFwiY3NzXCIsIFwianNcIiwgXCJqc3hcIiwgXCJ0c1wiLCBcInRzeFwiLCBcInBodG1sXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlQXBwKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIGFwcHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IGNtZHNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJoXCIsIFwiY1wiLCBcImhwcFwiLCBcImNwcFwiLCBcInJzXCIsIFwiamxcIixcclxuICAgIFwiY3NcIiwgXCJjc3Byb2pcIiwgXCJmc1wiLCBcIm1sXCIsIFwiZnNpXCIsIFwibWxpXCIsIFwiZnN4XCIsIFwiZnNzY3JpcHRcIixcclxuICAgIFwiamF2YVwiLCBcImd5XCIsIFwiZ3Z5XCIsIFwiZ3Jvb3Z5XCIsIFwic2NcIiwgXCJzY2FsYVwiLCBcImNsalwiLFxyXG4gICAgXCJweVwiLCBcInJ1YnlcIiwgXCJwaHBcIiwgXCJwaHRtbFwiLFxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVDbWQoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gY21kc0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgZXhlY0V4dGVuc2lvbnMgPSBbXHJcbiAgICBcImV4ZVwiLCBcImphclwiLCBcImNvbVwiLCBcImJhdFwiLCBcInNoXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlRXhlYyhleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBleGVjRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5jb25zdCBpbWFnZUV4dGVuc2lvbnMgPSBbXHJcbiAgICBcImpwZ1wiLCBcImpwZWdcIiwgXCJwbmdcIiwgXCJnaWZcIiwgXCJibXBcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVJbWFnZShleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBpbWFnZUV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgdmVjdG9yRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwic3ZnXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlVmVjdG9yKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIHZlY3RvckV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgbW92aWVFeHRlbnNpb25zID0gW1xyXG4gICAgXCJhdmlcIiwgXCJtcDRcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVNb3ZpZShleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBtb3ZpZUV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgbXVzaWNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJ3YXZcIiwgXCJtcDNcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVNdXNpYyhleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBtdXNpY0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgemlwcGVkRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiemlwXCIsIFwicmFyXCIsIFwiN3pcIiwgXCJ0YXJcIiwgXCJnelwiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZVppcHBlZChleHRlbnNpb24pIHtcclxuICAgIHJldHVybiB6aXBwZWRFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmV4cG9ydHMuUWluRm9vdCA9IHtcclxuICAgIGdldExvY2F0aW9uLFxyXG4gICAgaXNMb2NhbEhvc3QsXHJcbiAgICBnZXRTZXBhcmF0b3IsXHJcbiAgICBnZXRQYXRoSm9pbixcclxuICAgIGdldFBhcmVudCxcclxuICAgIGdldFN0ZW0sXHJcbiAgICBnZXRGaWxlRXh0ZW5zaW9uLFxyXG4gICAgaXNGaWxlQXBwLFxyXG4gICAgaXNGaWxlQ21kLFxyXG4gICAgaXNGaWxlRXhlYyxcclxuICAgIGlzRmlsZUltYWdlLFxyXG4gICAgaXNGaWxlVmVjdG9yLFxyXG4gICAgaXNGaWxlTW92aWUsXHJcbiAgICBpc0ZpbGVNdXNpYyxcclxuICAgIGlzRmlsZVppcHBlZCxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZvb3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5IZWFkID0gZXhwb3J0cy5RaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluQm91bmRzID0gZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBleHBvcnRzLlFpblBvaW50ID0gdm9pZCAwO1xyXG5jbGFzcyBRaW5Qb2ludCB7XHJcbn1cclxuZXhwb3J0cy5RaW5Qb2ludCA9IFFpblBvaW50O1xyXG47XHJcbmNsYXNzIFFpbkRpbWVuc2lvbiB7XHJcbn1cclxuZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBRaW5EaW1lbnNpb247XHJcbjtcclxuY2xhc3MgUWluQm91bmRzIHtcclxufVxyXG5leHBvcnRzLlFpbkJvdW5kcyA9IFFpbkJvdW5kcztcclxuO1xyXG52YXIgUWluR3JhbmRldXI7XHJcbihmdW5jdGlvbiAoUWluR3JhbmRldXIpIHtcclxuICAgIFFpbkdyYW5kZXVyW1wiU01BTExcIl0gPSBcInNtYWxsXCI7XHJcbiAgICBRaW5HcmFuZGV1cltcIk1FRElVTVwiXSA9IFwibWVkaXVtXCI7XHJcbiAgICBRaW5HcmFuZGV1cltcIkxBUkdFXCJdID0gXCJsYXJnZVwiO1xyXG59KShRaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluR3JhbmRldXIgfHwgKGV4cG9ydHMuUWluR3JhbmRldXIgPSB7fSkpO1xyXG5mdW5jdGlvbiBnZXREZXNrQVBJKCkge1xyXG4gICAgdmFyIHdpbiA9IHdpbmRvdztcclxuICAgIGlmICh3aW4uZGVza0FQSSkge1xyXG4gICAgICAgIHJldHVybiB3aW4uZGVza0FQSTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHdpbiA9IHdpbmRvdy5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAod2luLmRlc2tBUEkpIHtcclxuICAgICAgICByZXR1cm4gd2luLmRlc2tBUEk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB3aW4gPSB3aW5kb3cudG9wO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbi5kZXNrQVBJKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbi5kZXNrQVBJO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5jb25zdCBsb2dnZWQgPSBbXTtcclxuZnVuY3Rpb24gZ2V0TG9nZ2VkKCkge1xyXG4gICAgcmV0dXJuIGxvZ2dlZDtcclxufVxyXG5mdW5jdGlvbiBsb2cobWVzc2FnZSkge1xyXG4gICAgbG9nZ2VkLnB1c2gobWVzc2FnZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKF8pIHsgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBnZXREZXNrQVBJKCkuc2VuZChcImxvZ09uTWFpblwiLCBtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChfKSB7IH1cclxufVxyXG5mdW5jdGlvbiBsb2dFcnJvcihlcnJvciwgb3JpZ2luKSB7XHJcbiAgICBsb2coZ2V0RXJyb3JNZXNzYWdlKGVycm9yLCBvcmlnaW4pKTtcclxufVxyXG5mdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIlByb2JsZW0gd2l0aDpcIiwgZXJyb3IsIG9yaWdpbik7XHJcbn1cclxuZnVuY3Rpb24gbG9nV2FybmluZyhlcnJvciwgb3JpZ2luKSB7XHJcbiAgICBsb2coZ2V0V2FybmluZ01lc3NhZ2UoZXJyb3IsIG9yaWdpbikpO1xyXG59XHJcbmZ1bmN0aW9uIGdldFdhcm5pbmdNZXNzYWdlKGVycm9yLCBvcmlnaW4pIHtcclxuICAgIHJldHVybiBnZXRUcmVhdE1lc3NhZ2UoXCJDaGVja291dCB0aGlzOlwiLCBlcnJvciwgb3JpZ2luKTtcclxufVxyXG5mdW5jdGlvbiBsb2dTdXBwb3J0KGVycm9yLCBvcmlnaW4pIHtcclxuICAgIGxvZyhnZXRTdXBwb3J0TWVzc2FnZShlcnJvciwgb3JpZ2luKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U3VwcG9ydE1lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIk5lZWQgU3VwcG9ydCBvbjpcIiwgZXJyb3IsIG9yaWdpbik7XHJcbn1cclxuZnVuY3Rpb24gZ2V0VHJlYXRNZXNzYWdlKHByZWZpeCwgZXJyb3IsIG9yaWdpbikge1xyXG4gICAgdmFyIHJlc3VsdCA9IHByZWZpeCArIChlcnJvciA/IFwiIFwiICsgZXJyb3IudG9TdHJpbmcoKSA6IFwiXCIpO1xyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICB2YXIgZXJyb3JEYXRhID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBpZiAoISh0eXBlb2YgZXJyb3JEYXRhID09IFwic3RyaW5nXCIgfHwgZXJyb3JEYXRhIGluc3RhbmNlb2YgU3RyaW5nKSkge1xyXG4gICAgICAgICAgICBlcnJvckRhdGEgPSBKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgKz0gXCIgLSBEYXRhOiBcIiArIGVycm9yRGF0YTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICghKHR5cGVvZiBlcnJvciA9PSBcInN0cmluZ1wiIHx8IGVycm9yIGluc3RhbmNlb2YgU3RyaW5nKSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIgLSBEYXRhOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAob3JpZ2luKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IFwiIC0gT3JpZ2luOiBcIiArIG9yaWdpbjtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YWNrID0gKG5ldyBFcnJvcihcIlwiKSkuc3RhY2s7XHJcbiAgICBpZiAoc3RhY2spIHtcclxuICAgICAgICByZXN1bHQgKz0gXCIgLSBTdGFjazogXCIgKyBzdGFjaztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlRGV2VG9vbHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGdldERlc2tBUEkoKS5zZW5kKFwidG9nZ2xlRGV2VG9vbHNcIik7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGxvZ0Vycm9yKGUsIFwie3FpbnBlbC1yZXN9KEVyckNvZGUtMDAwMDAxKVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkhlYWQgPSB7XHJcbiAgICBnZXREZXNrQVBJLFxyXG4gICAgZ2V0TG9nZ2VkLFxyXG4gICAgbG9nLFxyXG4gICAgbG9nRXJyb3IsXHJcbiAgICBnZXRFcnJvck1lc3NhZ2UsXHJcbiAgICBsb2dXYXJuaW5nLFxyXG4gICAgZ2V0V2FybmluZ01lc3NhZ2UsXHJcbiAgICBsb2dTdXBwb3J0LFxyXG4gICAgZ2V0U3VwcG9ydE1lc3NhZ2UsXHJcbiAgICBnZXRUcmVhdE1lc3NhZ2UsXHJcbiAgICB0b2dnbGVEZXZUb29scyxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWhlYWQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Ta2luID0gZXhwb3J0cy5RaW5TdHlsZXMgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9hcm1fMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbmNvbnN0IHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuZXhwb3J0cy5RaW5TdHlsZXMgPSB7XHJcbiAgICBDb2xvckZvcmVncm91bmQ6IFwiIzE4MDAyN1wiLFxyXG4gICAgQ29sb3JCYWNrZ3JvdW5kOiBcIiNmZmZhZWZcIixcclxuICAgIENvbG9ySW5hY3RpdmU6IFwiI2ZhZWZmZlwiLFxyXG4gICAgQ29sb3JBY3RpdmU6IFwiI2ZhZGVkZVwiLFxyXG4gICAgQ29sb3JBY2NlbnQ6IFwiI2FlMDAwMFwiLFxyXG4gICAgQ29sb3JTZWxlY3RlZDogXCIjNWQ3MmRlOGZcIixcclxuICAgIEZvbnROYW1lOiBcIlNvdXJjZVNhbnNQcm9cIixcclxuICAgIEZvbnRTaXplOiBcIjE2cHhcIixcclxufTtcclxuZnVuY3Rpb24gc3R5bGVBc0JvZHkoZWwpIHtcclxuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgZWwuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgIGVsLnN0eWxlLnJpZ2h0ID0gXCIwcHhcIjtcclxuICAgIGVsLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjlweFwiO1xyXG4gICAgZWwuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxufVxyXG5mdW5jdGlvbiBzdHlsZUFzRWRpdChlbCkge1xyXG4gICAgZWwuc3R5bGUubWFyZ2luID0gXCIxcHhcIjtcclxuICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjNweFwiO1xyXG4gICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyBleHBvcnRzLlFpblN0eWxlcy5Db2xvckZvcmVncm91bmQ7XHJcbiAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgZWwuc3R5bGUuY29sb3IgPSBleHBvcnRzLlFpblN0eWxlcy5Db2xvckZvcmVncm91bmQ7XHJcbiAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLlFpblN0eWxlcy5Db2xvckluYWN0aXZlO1xyXG4gICAgZWwuc3R5bGUuZm9udEZhbWlseSA9IFwiU291cmNlU2Fuc1Byb1wiO1xyXG4gICAgZWwuc3R5bGUuZm9udFNpemUgPSBcIjE2cHhcIjtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yQWN0aXZlO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JBY2NlbnQ7XHJcbiAgICB9KTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9ySW5hY3RpdmU7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyBleHBvcnRzLlFpblN0eWxlcy5Db2xvckZvcmVncm91bmQ7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBzdHlsZU1heFNpemVGb3JOb3RPdmVyRmxvdyhlbCwgcGFyZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkQxXCIpO1xyXG4gICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRDI6IFwiICsgcGFyZW50KTtcclxuICAgIH1cclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBsZXQgbWF4V2lkdGggPSAwO1xyXG4gICAgICAgIGxldCBtYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgIGxldCBpbWVkaWF0ZSA9IGVsO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aCArIGltZWRpYXRlLmNsaWVudExlZnQ7XHJcbiAgICAgICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCArIGltZWRpYXRlLmNsaWVudFRvcDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEMzogXCIgKyBtYXhXaWR0aCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRDQ6IFwiICsgbWF4SGVpZ2h0KTtcclxuICAgICAgICAgICAgaW1lZGlhdGUgPSBpbWVkaWF0ZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH0gd2hpbGUgKGltZWRpYXRlICE9IG51bGwgJiYgaW1lZGlhdGUgIT0gcGFyZW50KTtcclxuICAgICAgICBtYXhXaWR0aCA9IHBhcmVudC5jbGllbnRXaWR0aCAtIG1heFdpZHRoO1xyXG4gICAgICAgIG1heEhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQgLSBtYXhIZWlnaHQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJENTogXCIgKyBtYXhXaWR0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJENjogXCIgKyBtYXhIZWlnaHQpO1xyXG4gICAgICAgIGVsLnN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0eWxlU2l6ZShlbCwgc2l6ZSkge1xyXG4gICAgaWYgKHNpemUpIHtcclxuICAgICAgICBpZiAoc2l6ZSBpbnN0YW5jZW9mIHFpbl9oZWFkXzEuUWluRGltZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZGltID0gZ2V0RGltZW5zaW9uU2l6ZShzaXplKTtcclxuICAgICAgICAgICAgZWwuc3R5bGUud2lkdGggPSBkaW0ud2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGRpbS5oZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0eWxlRmxleE1heChlbCkge1xyXG4gICAgZWwuc3R5bGUuZmxleCA9IFwiMVwiO1xyXG59XHJcbmZ1bmN0aW9uIHN0eWxlRmxleE1pbihlbCkge1xyXG4gICAgZWwuc3R5bGUuZmxleCA9IFwiMFwiO1xyXG59XHJcbmZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdldFdpbmRvd1NpemVTdHlsZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gZ2V0V2luZG93U2l6ZSgpLndpZHRoO1xyXG4gICAgaWYgKHdpZHRoIDwgNjAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbl9oZWFkXzEuUWluR3JhbmRldXIuU01BTEw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh3aWR0aCA8IDEwMDApIHtcclxuICAgICAgICByZXR1cm4gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5NRURJVU07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5MQVJHRTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBoaWRlQWxsSUZyYW1lcygpIHtcclxuICAgIHZhciBkb2NfaWZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2NfaWZyYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkb2NfaWZyYW1lID0gZG9jX2lmcmFtZXNbaV07XHJcbiAgICAgICAgZG9jX2lmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzaG93QWxsSUZyYW1lcygpIHtcclxuICAgIHZhciBkb2NfaWZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2NfaWZyYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkb2NfaWZyYW1lID0gZG9jX2lmcmFtZXNbaV07XHJcbiAgICAgICAgZG9jX2lmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGlzYWJsZVNlbGVjdGlvbihlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFwibm9uZVwiO1xyXG4gICAgZWxlbWVudC5vbnNlbGVjdHN0YXJ0ID0gcWluX2FybV8xLlFpbkFybS5zdG9wRXZlbnQ7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24oKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMzYwKTtcclxufVxyXG5mdW5jdGlvbiBpc0VsZW1lbnRWaXNpYmxlSW5TY3JvbGwoZWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm9mZnNldFRvcCA8IGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRMZWZ0IDwgZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbExlZnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5jbGllbnRXaWR0aCA+XHJcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCAtXHJcbiAgICAgICAgICAgICAgICAoZWxlbWVudC5vZmZzZXRMZWZ0IC0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbExlZnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xpZW50SGVpZ2h0ID5cclxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCAtXHJcbiAgICAgICAgICAgICAgICAoZWxlbWVudC5vZmZzZXRUb3AgLSBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiBwYXJzZUludChlbC5zdHlsZS53aWR0aCksXHJcbiAgICAgICAgaGVpZ2h0OiBwYXJzZUludChlbC5zdHlsZS5oZWlnaHQpLFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXREaW1lbnNpb25TaXplKHNpemUpIHtcclxuICAgIGlmIChzaXplID09IHFpbl9oZWFkXzEuUWluR3JhbmRldXIuTEFSR0UpIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uTGFyZ2UoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNpemUgPT0gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5NRURJVU0pIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uTWVkaXVtKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uU21hbGwoKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBkaW1lbnNpb25TbWFsbCA9IHtcclxuICAgIHdpZHRoOiAxNixcclxuICAgIGhlaWdodDogMTYsXHJcbn07XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvblNtYWxsKCkge1xyXG4gICAgcmV0dXJuIGRpbWVuc2lvblNtYWxsO1xyXG59XHJcbmNvbnN0IGRpbWVuc2lvbk1lZGl1bSA9IHtcclxuICAgIHdpZHRoOiAzMixcclxuICAgIGhlaWdodDogMzIsXHJcbn07XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvbk1lZGl1bSgpIHtcclxuICAgIHJldHVybiBkaW1lbnNpb25NZWRpdW07XHJcbn1cclxuY29uc3QgZGltZW5zaW9uTGFyZ2UgPSB7XHJcbiAgICB3aWR0aDogNjQsXHJcbiAgICBoZWlnaHQ6IDY0LFxyXG59O1xyXG5mdW5jdGlvbiBnZXREaW1lbnNpb25MYXJnZSgpIHtcclxuICAgIHJldHVybiBkaW1lbnNpb25MYXJnZTtcclxufVxyXG5leHBvcnRzLlFpblNraW4gPSB7XHJcbiAgICBzdHlsZXM6IGV4cG9ydHMuUWluU3R5bGVzLFxyXG4gICAgc3R5bGVBc0JvZHksXHJcbiAgICBzdHlsZUFzRWRpdCxcclxuICAgIHN0eWxlTWF4U2l6ZUZvck5vdE92ZXJGbG93LFxyXG4gICAgc3R5bGVTaXplLFxyXG4gICAgc3R5bGVGbGV4TWF4LFxyXG4gICAgc3R5bGVGbGV4TWluLFxyXG4gICAgZ2V0V2luZG93U2l6ZSxcclxuICAgIGdldFdpbmRvd1NpemVTdHlsZSxcclxuICAgIGhpZGVBbGxJRnJhbWVzLFxyXG4gICAgc2hvd0FsbElGcmFtZXMsXHJcbiAgICBkaXNhYmxlU2VsZWN0aW9uLFxyXG4gICAgY2xlYXJTZWxlY3Rpb24sXHJcbiAgICBpc0VsZW1lbnRWaXNpYmxlSW5TY3JvbGwsXHJcbiAgICBnZXREaW1lbnNpb24sXHJcbiAgICBnZXREaW1lbnNpb25TaXplLFxyXG4gICAgZ2V0RGltZW5zaW9uU21hbGwsXHJcbiAgICBnZXREaW1lbnNpb25NZWRpdW0sXHJcbiAgICBnZXREaW1lbnNpb25MYXJnZSxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNraW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Tb3VsID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYXJtXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xyXG5jb25zdCBxaW5fYm9keV8xID0gcmVxdWlyZShcIi4vcWluLWJvZHlcIik7XHJcbmNvbnN0IHFpbl9mb290XzEgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcclxuY29uc3QgcWluX2hlYWRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xyXG5jb25zdCBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbmV4cG9ydHMuUWluU291bCA9IHtcclxuICAgIGFybTogcWluX2FybV8xLlFpbkFybSxcclxuICAgIGJvZHk6IHFpbl9ib2R5XzEuUWluQm9keSxcclxuICAgIGZvb3Q6IHFpbl9mb290XzEuUWluRm9vdCxcclxuICAgIGhlYWQ6IHFpbl9oZWFkXzEuUWluSGVhZCxcclxuICAgIHNraW46IHFpbl9za2luXzEuUWluU2tpbixcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNvdWwuanMubWFwIl19
