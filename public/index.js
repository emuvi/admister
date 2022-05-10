(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdExpect = void 0;
class AdExpect {
    constructor(options) {
        this._scopes = options.scopes;
        this._filters = options.filters;
        this._waiters = options.waiters;
    }
    get scopes() {
        return this._scopes;
    }
    get filters() {
        return this._filters;
    }
    get waiters() {
        return this._waiters;
    }
}
exports.AdExpect = AdExpect;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdField = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdField {
    constructor(newer) {
        var _a;
        this._edit = null;
        this._typed = null;
        this._title = newer.title;
        this._name = newer.name;
        this._alias = newer.alias;
        this._kind = newer.kind;
        this._options = newer.options;
        this._key = (_a = newer.key) !== null && _a !== void 0 ? _a : false;
        this.init();
    }
    init() {
        this._edit = qinpel_cps_1.QinMutantsArm.newEdit(this._kind, this._options);
        this._typed = {
            name: this._name,
            type: this.edit.getNature(),
            alias: this._alias,
        };
    }
    get title() {
        return this._title;
    }
    get name() {
        return this._name;
    }
    get kind() {
        return this._kind;
    }
    get alias() {
        return this._alias;
    }
    get options() {
        return this._options;
    }
    get key() {
        return this._key;
    }
    get edit() {
        return this._edit;
    }
    get typed() {
        return this._typed;
    }
    get valued() {
        let name = this._name;
        let type = this._edit.getNature();
        let data = this._edit.getData();
        return { name, type, data };
    }
    clean() {
        this.edit.setData(null);
    }
    focus() {
        this.edit.focus();
    }
}
exports.AdField = AdField;

},{"qinpel-cps":18}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdFilterTies = exports.AdFilterLikes = exports.AdFilterSeems = exports.AdFilter = void 0;
class AdFilter {
    constructor(options) {
        this.seems = options === null || options === void 0 ? void 0 : options.seems;
        this.likes = options === null || options === void 0 ? void 0 : options.likes;
        this.valued = options === null || options === void 0 ? void 0 : options.valued;
        this.ties = options === null || options === void 0 ? void 0 : options.ties;
    }
}
exports.AdFilter = AdFilter;
var AdFilterSeems;
(function (AdFilterSeems) {
    AdFilterSeems["SAME"] = "SAME";
    AdFilterSeems["DIVERSE"] = "DIVERSE";
})(AdFilterSeems = exports.AdFilterSeems || (exports.AdFilterSeems = {}));
var AdFilterLikes;
(function (AdFilterLikes) {
    AdFilterLikes["EQUALS"] = "EQUALS";
    AdFilterLikes["BIGGER"] = "BIGGER";
    AdFilterLikes["LESSER"] = "LESSER";
    AdFilterLikes["BIGGER_EQUALS"] = "BIGGER_EQUALS";
    AdFilterLikes["LESSER_EQUALS"] = "LESSER_EQUALS";
    AdFilterLikes["STARTS_WITH"] = "STARTS_WITH";
    AdFilterLikes["ENDS_WITH"] = "ENDS_WITH";
    AdFilterLikes["CONTAINS"] = "CONTAINS";
})(AdFilterLikes = exports.AdFilterLikes || (exports.AdFilterLikes = {}));
var AdFilterTies;
(function (AdFilterTies) {
    AdFilterTies["AND"] = "AND";
    AdFilterTies["OR"] = "OR";
})(AdFilterTies = exports.AdFilterTies || (exports.AdFilterTies = {}));

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdJoinedTies = void 0;
var AdJoinedTies;
(function (AdJoinedTies) {
    AdJoinedTies[AdJoinedTies["INNER"] = 0] = "INNER";
    AdJoinedTies[AdJoinedTies["LEFT"] = 1] = "LEFT";
    AdJoinedTies[AdJoinedTies["RIGHT"] = 2] = "RIGHT";
    AdJoinedTies[AdJoinedTies["FULL"] = 3] = "FULL";
    AdJoinedTies[AdJoinedTies["CROSS"] = 4] = "CROSS";
})(AdJoinedTies = exports.AdJoinedTies || (exports.AdJoinedTies = {}));

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuStartUp = exports.AdMenu = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const qinpel_res_1 = require("qinpel-res");
const ad_expect_1 = require("./ad-expect");
const ad_names_1 = require("./ad-names");
const ad_tools_1 = require("./ad-tools");
class AdMenu extends qinpel_cps_1.QinColumn {
    constructor(items) {
        super();
        this._lines = new Array();
        for (const item of items) {
            const line = this.getLine(item.group);
            const button = new qinpel_cps_1.QinButton({
                icon: new qinpel_cps_1.QinIcon(item.module.icon, qinpel_res_1.QinGrandeur.MEDIUM),
                label: new qinpel_cps_1.QinLabel(item.module.title),
            });
            button.putAsColumn();
            button.addActionMain((_) => {
                this.qinpel.chief.newJobber(item.module.title, item.module.app, ad_tools_1.AdTools.newAdSetupOption(item.module, [ad_tools_1.AdScope.ALL]));
                this.qinpel.jobbed.close();
            });
            line.put(button);
        }
    }
    getLine(title) {
        if (!title) {
            if (this._lines.length === 0) {
                const newLine = new qinpel_cps_1.QinTitled();
                newLine.install(this);
                this._lines.push(newLine);
            }
            return this._lines[this._lines.length - 1];
        }
        for (const line of this._lines) {
            if (line.title == title) {
                return line;
            }
        }
        const newLine = new qinpel_cps_1.QinTitled({ title });
        newLine.install(this);
        this._lines.push(newLine);
        return newLine;
    }
}
exports.AdMenu = AdMenu;
function menuStartUp(menus) {
    const adSetup = qinpel_cps_1.QinTool.qinpel.jobbed.getOption(ad_names_1.AdNames.AdSetup);
    if (adSetup && adSetup.module) {
        for (const menu of menus) {
            if (ad_tools_1.AdTools.isSameModule(menu.module, adSetup.module)) {
                let expect = new ad_expect_1.AdExpect({
                    scopes: adSetup.scopes,
                    filters: adSetup.filters,
                    waiters: new qinpel_res_1.QinWaiters().addWaiter((result) => {
                        qinpel_cps_1.QinTool.qinpel.jobbed.sendWaiters(result);
                    }),
                });
                if (menu.register) {
                    return new menu.register(menu.module, expect);
                }
                else {
                    throw new Error("No menu action defined");
                }
            }
        }
    }
    return new AdMenu(menus);
}
exports.menuStartUp = menuStartUp;

},{"./ad-expect":1,"./ad-names":8,"./ad-tools":15,"qinpel-cps":18,"qinpel-res":51}],6:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdModel = void 0;
class AdModel {
    constructor(register) {
        this._fields = [];
        this._typeds = null;
        this._register = register;
    }
    get register() {
        return this._register;
    }
    get fields() {
        return this._fields;
    }
    get typeds() {
        if (this._typeds == null) {
            this._typeds = [];
            for (let field of this._fields) {
                this._typeds.push(field.typed);
            }
        }
        return this._typeds;
    }
    addField(field) {
        this._fields.push(field);
    }
    getFieldByName(name) {
        for (let field of this._fields) {
            if (field.name === name) {
                return field;
            }
        }
        return null;
    }
    insert() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let valueds = new Array();
                for (let field of this._fields) {
                    valueds.push({
                        name: field.name,
                        type: field.edit.getNature(),
                        data: field.edit.getData(),
                    });
                }
                let insert = {
                    registry: this.register.registry,
                    valueds: valueds,
                };
                this.register.qinpel.chief.talk
                    .post("/reg/new", insert)
                    .then((_) => {
                    resolve(insert);
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
}
exports.AdModel = AdModel;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdModules = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdModules {
}
exports.AdModules = AdModules;
AdModules.BUSINESS = {
    app: "adpeople",
    title: "Negócios",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.REGION = {
    app: "adpeople",
    title: "Região",
    icon: qinpel_cps_1.QinAsset.FaceRegion,
};
AdModules.NATION = {
    app: "adpeople",
    title: "Países",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.STATE = {
    app: "adpeople",
    title: "Estados",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.CITY = {
    app: "adpeople",
    title: "Cidades",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.DISTRICT = {
    app: "adpeople",
    title: "Bairros",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.PEOPLE = {
    app: "adpeople",
    title: "Pessoas",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.PEOPLE_GROUP = {
    app: "adpeople",
    title: "Grupos de Pessoas",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.PEOPLE_SUBGROUP = {
    app: "adpeople",
    title: "SubGrupos de Pessoas",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};

},{"qinpel-cps":18}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdNames = void 0;
var AdNames;
(function (AdNames) {
    AdNames["AdBoard"] = "AdBoard";
    AdNames["AdMister"] = "AdMister";
    AdNames["AdPeople"] = "AdPeople";
    AdNames["AdProduct"] = "AdProduct";
    AdNames["AdProject"] = "AdProject";
    AdNames["AdSales"] = "AdSales";
    AdNames["AdSetup"] = "AdSetup";
})(AdNames = exports.AdNames || (exports.AdNames = {}));

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegBar = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const ad_register_1 = require("./ad-register");
class AdRegBar extends qinpel_cps_1.QinLine {
    constructor(register) {
        super();
        this._qinMenu = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceMenuLines) });
        this._qinMenuViewSingle = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceSplitNotView),
        });
        this._qinMenuViewVertical = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceSplitViewVertical),
        });
        this._qinMenuViewHorizontal = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceSplitViewHorizontal),
        });
        this._qinMenuFocusBody = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceListView),
        });
        this._qinMenuFocusTable = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceGridView),
        });
        this._qinMenuBody = new qinpel_cps_1.QinLine({
            items: [
                this._qinMenuViewSingle,
                this._qinMenuViewVertical,
                this._qinMenuViewHorizontal,
                new qinpel_cps_1.QinDivider(),
                this._qinMenuFocusBody,
                this._qinMenuFocusTable,
            ],
        });
        this._qinPopup = new qinpel_cps_1.QinPopup(this._qinMenuBody);
        this._qinInsert = new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceAdd);
        this._qinSearch = new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceSearch);
        this._qinNotice = new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceEye);
        this._qinMode = new qinpel_cps_1.QinIconPick({
            icons: [this._qinInsert, this._qinSearch, this._qinNotice],
        });
        this._qinGoFirst = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceRUpChevronPush) });
        this._qinGoPrior = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceRLeftChevronPush),
        });
        this._qinGoNext = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceRRightChevronPush),
        });
        this._qinGoLast = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceRDownChevronPush),
        });
        this._qinMutate = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FacePencil) });
        this._qinConfirm = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceConfirm) });
        this._qinCancel = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceCancel) });
        this._qinDelete = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceTrash) });
        this._reg = register;
        this.initMenu();
        this.initMode();
        this.initMove();
        this.initMake();
        this.style.putAsPaddingBottom(2);
        this.style.putAsBorderBottom(2, "#999");
        this.style.putAsMarginBottom(2);
    }
    initMenu() {
        this._qinMenu.install(this);
        this._qinMenu.addActionMain((_) => this._qinPopup.showOnParent(this._qinMenu));
        this._qinMenuViewSingle.addActionMain((_) => {
            this._qinPopup.close();
            this._reg.viewSingle();
        });
        this._qinMenuViewVertical.addActionMain((_) => {
            this._qinPopup.close();
            this._reg.viewVertical();
        });
        this._qinMenuViewHorizontal.addActionMain((_) => {
            this._qinPopup.close();
            this._reg.viewHorizontal();
        });
        this._qinMenuFocusBody.addActionMain((_) => {
            this._qinPopup.close();
            this._reg.focusBody();
        });
        this._qinMenuFocusTable.addActionMain((_) => {
            this._qinPopup.close();
            this._reg.focusTable();
        });
    }
    initMode() {
        this._qinMode.install(this);
        this._qinInsert.addActionMain((_) => this._reg.tryChangeMode(ad_register_1.AdRegMode.INSERT));
        this._qinSearch.addActionMain((_) => this._reg.tryChangeMode(ad_register_1.AdRegMode.SEARCH));
        this._qinNotice.addActionMain((_) => this._reg.tryChangeMode(ad_register_1.AdRegMode.NOTICE));
        this._reg.addListener({
            event: ad_register_1.AdRegEvent.CHANGE_MODE,
            onDid: (values) => this.setMode(values.newValue),
        });
    }
    initMove() {
        this._qinGoFirst.install(this);
        this._qinGoFirst.addActionMain((_) => this._reg.tryGoFirst());
        this._qinGoPrior.install(this);
        this._qinGoPrior.addActionMain((_) => this._reg.tryGoPrior());
        this._qinGoNext.install(this);
        this._qinGoNext.addActionMain((_) => this._reg.tryGoNext());
        this._qinGoLast.install(this);
        this._qinGoLast.addActionMain((_) => this._reg.tryGoLast());
    }
    initMake() {
        this._qinMutate.install(this);
        this._qinMutate.addActionMain((_) => this._reg.tryMutate());
        this._qinConfirm.install(this);
        this._qinConfirm.addActionMain((_) => this._reg.tryConfirm());
        this._qinCancel.install(this);
        this._qinCancel.addActionMain((_) => this._reg.tryCancel());
        this._qinDelete.install(this);
        this._qinDelete.addActionMain((_) => this._reg.tryDelete());
    }
    setMode(mode) {
        this._qinMode.setData(null);
        if (mode) {
            switch (mode) {
                case ad_register_1.AdRegMode.INSERT:
                    this._qinMode.setData(this._qinInsert.asset);
                    this._qinGoFirst.unDisplay();
                    this._qinGoPrior.unDisplay();
                    this._qinGoNext.unDisplay();
                    this._qinGoLast.unDisplay();
                    this._qinMutate.unDisplay();
                    this._qinConfirm.reDisplay();
                    this._qinCancel.reDisplay();
                    this._qinDelete.unDisplay();
                    break;
                case ad_register_1.AdRegMode.SEARCH:
                    this._qinMode.setData(this._qinSearch.asset);
                    this._qinGoFirst.unDisplay();
                    this._qinGoPrior.unDisplay();
                    this._qinGoNext.unDisplay();
                    this._qinGoLast.unDisplay();
                    this._qinMutate.unDisplay();
                    this._qinConfirm.reDisplay();
                    this._qinCancel.reDisplay();
                    this._qinDelete.unDisplay();
                    break;
                case ad_register_1.AdRegMode.NOTICE:
                    this._qinMode.setData(this._qinNotice.asset);
                    this._qinGoFirst.reDisplay();
                    this._qinGoPrior.reDisplay();
                    this._qinGoNext.reDisplay();
                    this._qinGoLast.reDisplay();
                    this._qinMutate.reDisplay();
                    this._qinConfirm.unDisplay();
                    this._qinCancel.unDisplay();
                    this._qinDelete.unDisplay();
                    break;
                case ad_register_1.AdRegMode.MUTATE:
                    this._qinMode.setData(this._qinNotice.asset);
                    this._qinGoFirst.unDisplay();
                    this._qinGoPrior.unDisplay();
                    this._qinGoNext.unDisplay();
                    this._qinGoLast.unDisplay();
                    this._qinConfirm.reDisplay();
                    this._qinCancel.reDisplay();
                    this._qinDelete.reDisplay();
                    break;
            }
        }
    }
}
exports.AdRegBar = AdRegBar;

},{"./ad-register":14,"qinpel-cps":18}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegEditor = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdRegEditor extends qinpel_cps_1.QinPanel {
    constructor(register) {
        super();
        this._tabs = null;
        this._column = null;
        this._line = null;
        this._reg = register;
    }
    addTab(title) {
        if (this._tabs == null) {
            this._tabs = new qinpel_cps_1.QinTabs();
            this._tabs.install(this);
        }
        this._column = new qinpel_cps_1.QinColumn();
        this._tabs.addTab({ title, viewer: this._column });
        this._line = new qinpel_cps_1.QinLine();
        this._line.install(this._column);
    }
    addLine() {
        if (this._column == null) {
            this._column = new qinpel_cps_1.QinColumn();
            this._column.install(this);
        }
        this._line = new qinpel_cps_1.QinLine();
        this._line.install(this._column);
    }
    addField(field) {
        if (this._line == null) {
            this.addLine();
        }
        const editor = field.edit;
        if (field.title) {
            const titled = new qinpel_cps_1.QinField(field.title, editor);
            titled.install(this._line);
        }
        else {
            editor.install(this._line);
        }
    }
}
exports.AdRegEditor = AdRegEditor;

},{"qinpel-cps":18}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegLoader = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdRegLoader {
    constructor(register) {
        this._reg = register;
    }
    load() {
        let registry = this._reg.registry;
        let fields = this._reg.model.typeds;
        let filters = null;
        if (this._reg.expect.filters) {
            filters = [...this._reg.expect.filters];
        }
        let searching = this._reg.search.getFilters();
        if (searching) {
            filters = filters || [];
            filters.push(...searching);
        }
        let select = { registry, fields, filters };
        qinpel_cps_1.QinTool.qinpel.talk
            .post("/reg/ask", select)
            .then((res) => {
            let rows = qinpel_cps_1.QinTool.qinpel.our.soul.body.getCSVRows(res.data);
            if (rows) {
                for (let row of rows) {
                    console.log(row);
                }
            }
        })
            .catch((err) => {
            qinpel_cps_1.QinTool.qinpel.jobbed.statusError(err, "{adcommon}(ErrCode-000002)");
        });
    }
}
exports.AdRegLoader = AdRegLoader;

},{"qinpel-cps":18}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegSearch = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const ad_filter_1 = require("./ad-filter");
class AdRegSearch extends qinpel_cps_1.QinScroll {
    constructor(register) {
        super();
        this._lines = new qinpel_cps_1.QinColumn();
        this._clauses = new Array();
        this._reg = register;
        this._lines.install(this);
        const first = new SearchClause(this);
        this._clauses.push(first);
        first.install(this._lines);
    }
    get reg() {
        return this._reg;
    }
    addField(field) {
        this._clauses.forEach((clause) => {
            clause.addField({ title: field.title, value: field.name });
        });
    }
    addClause(after) {
        const clause = new SearchClause(this);
        this._reg.model.fields.forEach((field) => {
            clause.addField({ title: field.title, value: field.name });
        });
        const index = this._clauses.indexOf(after);
        this._clauses.splice(index + 1, 0, clause);
        this.rebuild();
    }
    delClause(clause) {
        if (this._clauses.length > 1) {
            const index = this._clauses.indexOf(clause);
            this._clauses.splice(index, 1);
            this.rebuild();
        }
        else {
            this._clauses[0].clear();
        }
    }
    rebuild() {
        this._lines.unInstallChildren();
        this._clauses.forEach((clause) => {
            clause.install(this._lines);
        });
    }
    getFilters() {
        let results = null;
        this._clauses.forEach((clause) => {
            let filter = clause.getFilter();
            if (filter) {
                if (!results) {
                    results = [];
                }
                results.push(filter);
            }
        });
        return results;
    }
}
exports.AdRegSearch = AdRegSearch;
class SearchClause extends qinpel_cps_1.QinLine {
    constructor(dad) {
        super();
        this._qinSame = new SearchSame();
        this._qinField = new qinpel_cps_1.QinCombo();
        this._qinLikes = new SearchCondition();
        this._qinValue = new qinpel_cps_1.QinString();
        this._qinTies = new SearchTie();
        this._qinAdd = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FacePlus) });
        this._qinDel = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceMinus) });
        this._dad = dad;
        this._qinSame.install(this);
        this._qinField.addItem({ title: "", value: "" });
        this._qinField.install(this);
        this._qinLikes.install(this);
        this._qinValue.install(this);
        this._qinTies.install(this);
        this._qinAdd.install(this);
        this._qinDel.install(this);
        this._qinAdd.addActionMain((_) => {
            this._dad.addClause(this);
        });
        this._qinDel.addActionMain((_) => {
            this._dad.delClause(this);
        });
        this.style.putAsPaddingBottom(4);
        this.style.putAsBorderBottom(2, "#bbb");
        this.style.putAsMarginBottom(4);
    }
    addField(item) {
        this._qinField.addItem(item);
    }
    clear() {
        this._qinSame.setData("EQUALS");
        this._qinLikes.setData("EQUALS");
        this._qinValue.setData(null);
        this._qinTies.setData("AND");
    }
    getFilter() {
        let fieldName = this._qinField.getData();
        if (!fieldName) {
            return null;
        }
        const field = this._dad.reg.model.getFieldByName(fieldName);
        if (!field) {
            return null;
        }
        return new ad_filter_1.AdFilter({
            seems: this._qinSame.getData(),
            likes: this._qinLikes.getData(),
            valued: {
                name: field.typed.alias || field.typed.name,
                type: field.typed.type,
                data: this._qinValue.getData(),
            },
            ties: this._qinTies.getData(),
        });
    }
}
class SearchSame extends qinpel_cps_1.QinCombo {
    constructor() {
        super();
        this.addItem({ title: "==", value: "SAME" });
        this.addItem({ title: "!=", value: "DIVERSE" });
        this.style.putAsMaxWidth(64);
    }
}
class SearchCondition extends qinpel_cps_1.QinCombo {
    constructor() {
        super();
        this.addItem({ title: "=", value: "EQUALS" });
        this.addItem({ title: ">", value: "BIGGER" });
        this.addItem({ title: "<", value: "LESSER" });
        this.addItem({ title: ">=", value: "BIGGER_EQUALS" });
        this.addItem({ title: "<=", value: "LESSER_EQUALS" });
        this.addItem({ title: "$_", value: "STARTS_WITH" });
        this.addItem({ title: "_$", value: "ENDS_WITH" });
        this.addItem({ title: "_$_", value: "CONTAINS" });
        this.style.putAsMaxWidth(64);
    }
}
class SearchTie extends qinpel_cps_1.QinCombo {
    constructor() {
        super();
        this.addItem({ title: "&&", value: "AND" });
        this.addItem({ title: "||", value: "OR" });
        this.style.putAsMaxWidth(64);
    }
}

},{"./ad-filter":3,"qinpel-cps":18}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegTable = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdRegTable extends qinpel_cps_1.QinTable {
    constructor(register) {
        super();
        this._register = register;
    }
}
exports.AdRegTable = AdRegTable;

},{"qinpel-cps":18}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegEvent = exports.AdRegView = exports.AdRegMode = exports.AdRegister = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const ad_model_1 = require("./ad-model");
const ad_reg_bar_1 = require("./ad-reg-bar");
const ad_reg_editor_1 = require("./ad-reg-editor");
const ad_reg_loader_1 = require("./ad-reg-loader");
const ad_reg_search_1 = require("./ad-reg-search");
const ad_reg_table_1 = require("./ad-reg-table");
const ad_tools_1 = require("./ad-tools");
class AdRegister extends qinpel_cps_1.QinColumn {
    constructor(module, registry, expect) {
        super();
        this._listener = new Array();
        this._body = new qinpel_cps_1.QinStack();
        this._viewSingle = new qinpel_cps_1.QinStack();
        this._viewVertical = new qinpel_cps_1.QinSplitter({ horizontal: false });
        this._viewHorizontal = new qinpel_cps_1.QinSplitter({ horizontal: true });
        this._bar = new ad_reg_bar_1.AdRegBar(this);
        this._editor = new ad_reg_editor_1.AdRegEditor(this);
        this._search = new ad_reg_search_1.AdRegSearch(this);
        this._table = new ad_reg_table_1.AdRegTable(this);
        this._loader = new ad_reg_loader_1.AdRegLoader(this);
        this._module = module;
        this._registry = registry;
        this._expect = expect;
        this._model = new ad_model_1.AdModel(this);
        this._viewSingle.style.putAsFlexMax();
        this._viewVertical.style.putAsFlexMax();
        this._viewHorizontal.style.putAsFlexMax();
        this._bar.install(this);
        this._body.stack(this._editor);
        this._body.stack(this._search);
        if (expect.scopes.find((scope) => scope === ad_tools_1.AdScope.ALL) ||
            expect.scopes.find((scope) => scope === ad_tools_1.AdScope.INSERT)) {
            this.changeMode(AdRegMode.INSERT);
        }
        else {
            this.changeMode(AdRegMode.SEARCH);
        }
        this.viewVertical();
        this._bar.tabIndex = 0;
        this._body.tabIndex = 1;
        this._table.tabIndex = 2;
    }
    get module() {
        return this._module;
    }
    get registry() {
        return this._registry;
    }
    get expect() {
        return this._expect;
    }
    get model() {
        return this._model;
    }
    get regMode() {
        return this._regMode;
    }
    get regView() {
        return this._regView;
    }
    get bar() {
        return this._bar;
    }
    get editor() {
        return this._editor;
    }
    get search() {
        return this._search;
    }
    get table() {
        return this._table;
    }
    get loader() {
        return this._loader;
    }
    addTab(title) {
        this._editor.addTab(title);
    }
    addLine() {
        this._editor.addLine();
    }
    addField(field) {
        this._model.addField(field);
        this._editor.addField(field);
        this._search.addField(field);
        this._table.addHead(field.title);
    }
    changeMode(mode) {
        if (mode === AdRegMode.SEARCH) {
            this._body.show(this._search);
        }
        else {
            this._body.show(this._editor);
        }
        this._regMode = mode;
        this.callDidListeners(AdRegEvent.CHANGE_MODE, { newValue: this._regMode });
    }
    tryChangeMode(mode) {
        let cancel = this.callTryListeners(AdRegEvent.CHANGE_MODE, {
            oldValue: this._regMode,
            setValue: mode,
        });
        if (cancel) {
            return cancel;
        }
        this.changeMode(mode);
        return null;
    }
    tryGoFirst() { }
    tryGoPrior() { }
    tryGoNext() { }
    tryGoLast() { }
    tryMutate() { }
    tryConfirm() {
        if (this.regMode === AdRegMode.SEARCH) {
            this.trySelect();
        }
        else if (this.regMode === AdRegMode.INSERT) {
            this.tryInsert();
        }
        else if (this.regMode === AdRegMode.MUTATE) {
            this.tryUpdate();
        }
    }
    trySelect() {
        this.loader.load();
    }
    tryInsert() {
        this.model
            .insert()
            .then((res) => {
            this.clean();
            this.focusFirstField();
            this.qinpel.jobbed.statusInfo("Inserted: " + JSON.stringify(res));
        })
            .catch((err) => {
            this.qinpel.jobbed.statusError(err, "{adcommon}(ErrCode-000001)");
        });
    }
    tryUpdate() { }
    tryCancel() {
        this.clean();
    }
    tryDelete() { }
    clean() {
        for (let field of this.model.fields) {
            field.clean();
        }
    }
    viewSingle() {
        this._viewVertical.unInstall();
        this._viewHorizontal.unInstall();
        this._viewSingle.install(this);
        this._body.install(this._viewSingle);
        this._table.install(this._viewSingle);
        if (this._regMode === AdRegMode.SEARCH) {
            this._viewSingle.show(this._table);
        }
        else {
            this._viewSingle.show(this._body);
        }
        this._regView = AdRegView.SINGLE;
        this.callDidListeners(AdRegEvent.CHANGE_VIEW, { newValue: this._regView });
    }
    viewVertical() {
        this._viewSingle.unInstall();
        this._viewHorizontal.unInstall();
        this._viewVertical.install(this);
        this._body.install(this._viewVertical);
        this._table.install(this._viewVertical);
        this._body.reDisplay();
        this._table.reDisplay();
        this._regView = AdRegView.VERTICAL;
        this.callDidListeners(AdRegEvent.CHANGE_VIEW, { newValue: this._regView });
    }
    viewHorizontal() {
        this._viewSingle.unInstall();
        this._viewVertical.unInstall();
        this._viewHorizontal.install(this);
        this._body.install(this._viewHorizontal);
        this._table.install(this._viewHorizontal);
        this._body.reDisplay();
        this._table.reDisplay();
        this._regView = AdRegView.HORIZONTAL;
        this.callDidListeners(AdRegEvent.CHANGE_VIEW, { newValue: this._regView });
    }
    addListener(listener) {
        this._listener.push(listener);
    }
    delListener(listener) {
        var index = this._listener.indexOf(listener);
        if (index >= 0) {
            this._listener.splice(index, 1);
        }
    }
    callTryListeners(event, value) {
        this._listener.forEach((listen) => {
            if (listen.event === event) {
                if (listen.onTry) {
                    let cancel = listen.onTry(value);
                    if (cancel) {
                        return cancel;
                    }
                }
            }
        });
        return null;
    }
    callDidListeners(event, value) {
        this._listener.forEach((listen) => {
            if (listen.event === event) {
                if (listen.onDid) {
                    listen.onDid(value);
                }
            }
        });
    }
    focusFirstField() {
        if (this.model.fields.length > 0) {
            this.model.fields[0].focus();
        }
    }
    focusBody() {
        if (this._regView == AdRegView.SINGLE) {
            this._viewSingle.show(this._body);
        }
        this._body.focus();
    }
    focusTable() {
        if (this._regView == AdRegView.SINGLE) {
            this._viewSingle.show(this._table);
        }
        this._table.focus();
    }
}
exports.AdRegister = AdRegister;
var AdRegMode;
(function (AdRegMode) {
    AdRegMode["INSERT"] = "INSERT";
    AdRegMode["SEARCH"] = "SEARCH";
    AdRegMode["NOTICE"] = "NOTICE";
    AdRegMode["MUTATE"] = "MUTATE";
})(AdRegMode = exports.AdRegMode || (exports.AdRegMode = {}));
var AdRegView;
(function (AdRegView) {
    AdRegView["SINGLE"] = "SINGLE";
    AdRegView["VERTICAL"] = "VERTICAL";
    AdRegView["HORIZONTAL"] = "HORIZONTAL";
})(AdRegView = exports.AdRegView || (exports.AdRegView = {}));
var AdRegEvent;
(function (AdRegEvent) {
    AdRegEvent["CHANGE_MODE"] = "CHANGE_MODE";
    AdRegEvent["CHANGE_VIEW"] = "CHANGE_VIEW";
})(AdRegEvent = exports.AdRegEvent || (exports.AdRegEvent = {}));

},{"./ad-model":6,"./ad-reg-bar":9,"./ad-reg-editor":10,"./ad-reg-loader":11,"./ad-reg-search":12,"./ad-reg-table":13,"./ad-tools":15,"qinpel-cps":18}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdTools = exports.AdScope = void 0;
const ad_names_1 = require("./ad-names");
var AdScope;
(function (AdScope) {
    AdScope["ALL"] = "all";
    AdScope["INSERT"] = "insert";
    AdScope["SEARCH"] = "search";
    AdScope["MUTATE"] = "mutate";
    AdScope["DELETE"] = "delete";
})(AdScope = exports.AdScope || (exports.AdScope = {}));
function isSameModule(one, two) {
    return (one === null || one === void 0 ? void 0 : one.app) == (two === null || two === void 0 ? void 0 : two.app) && (one === null || one === void 0 ? void 0 : one.title) == (two === null || two === void 0 ? void 0 : two.title);
}
function newAdSetup(module, scopes, filters) {
    return {
        module,
        scopes,
        filters,
    };
}
function newAdSetupOption(module, scopes, filters) {
    let result = {};
    result[ad_names_1.AdNames.AdSetup] = newAdSetup(module, scopes, filters);
    return result;
}
exports.AdTools = {
    isSameModule,
    newAdSetup,
    newAdSetupOption,
};

},{"./ad-names":8}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdTools = exports.AdScope = exports.AdRegEvent = exports.AdRegView = exports.AdRegMode = exports.AdRegister = exports.AdRegTable = exports.AdRegSearch = exports.AdRegLoader = exports.AdRegEditor = exports.AdRegBar = exports.AdNames = exports.AdModules = exports.AdModel = exports.menuStartUp = exports.AdMenu = exports.AdJoinedTies = exports.AdFilterTies = exports.AdFilterLikes = exports.AdFilterSeems = exports.AdFilter = exports.AdField = exports.AdExpect = void 0;
var ad_expect_1 = require("./ad-expect");
Object.defineProperty(exports, "AdExpect", { enumerable: true, get: function () { return ad_expect_1.AdExpect; } });
var ad_field_1 = require("./ad-field");
Object.defineProperty(exports, "AdField", { enumerable: true, get: function () { return ad_field_1.AdField; } });
var ad_filter_1 = require("./ad-filter");
Object.defineProperty(exports, "AdFilter", { enumerable: true, get: function () { return ad_filter_1.AdFilter; } });
var ad_filter_2 = require("./ad-filter");
Object.defineProperty(exports, "AdFilterSeems", { enumerable: true, get: function () { return ad_filter_2.AdFilterSeems; } });
var ad_filter_3 = require("./ad-filter");
Object.defineProperty(exports, "AdFilterLikes", { enumerable: true, get: function () { return ad_filter_3.AdFilterLikes; } });
var ad_filter_4 = require("./ad-filter");
Object.defineProperty(exports, "AdFilterTies", { enumerable: true, get: function () { return ad_filter_4.AdFilterTies; } });
var ad_joined_1 = require("./ad-joined");
Object.defineProperty(exports, "AdJoinedTies", { enumerable: true, get: function () { return ad_joined_1.AdJoinedTies; } });
var ad_menu_1 = require("./ad-menu");
Object.defineProperty(exports, "AdMenu", { enumerable: true, get: function () { return ad_menu_1.AdMenu; } });
var ad_menu_2 = require("./ad-menu");
Object.defineProperty(exports, "menuStartUp", { enumerable: true, get: function () { return ad_menu_2.menuStartUp; } });
var ad_model_1 = require("./ad-model");
Object.defineProperty(exports, "AdModel", { enumerable: true, get: function () { return ad_model_1.AdModel; } });
var ad_modules_1 = require("./ad-modules");
Object.defineProperty(exports, "AdModules", { enumerable: true, get: function () { return ad_modules_1.AdModules; } });
var ad_names_1 = require("./ad-names");
Object.defineProperty(exports, "AdNames", { enumerable: true, get: function () { return ad_names_1.AdNames; } });
var ad_reg_bar_1 = require("./ad-reg-bar");
Object.defineProperty(exports, "AdRegBar", { enumerable: true, get: function () { return ad_reg_bar_1.AdRegBar; } });
var ad_reg_editor_1 = require("./ad-reg-editor");
Object.defineProperty(exports, "AdRegEditor", { enumerable: true, get: function () { return ad_reg_editor_1.AdRegEditor; } });
var ad_reg_loader_1 = require("./ad-reg-loader");
Object.defineProperty(exports, "AdRegLoader", { enumerable: true, get: function () { return ad_reg_loader_1.AdRegLoader; } });
var ad_reg_search_1 = require("./ad-reg-search");
Object.defineProperty(exports, "AdRegSearch", { enumerable: true, get: function () { return ad_reg_search_1.AdRegSearch; } });
var ad_reg_table_1 = require("./ad-reg-table");
Object.defineProperty(exports, "AdRegTable", { enumerable: true, get: function () { return ad_reg_table_1.AdRegTable; } });
var ad_register_1 = require("./ad-register");
Object.defineProperty(exports, "AdRegister", { enumerable: true, get: function () { return ad_register_1.AdRegister; } });
var ad_register_2 = require("./ad-register");
Object.defineProperty(exports, "AdRegMode", { enumerable: true, get: function () { return ad_register_2.AdRegMode; } });
var ad_register_3 = require("./ad-register");
Object.defineProperty(exports, "AdRegView", { enumerable: true, get: function () { return ad_register_3.AdRegView; } });
var ad_register_4 = require("./ad-register");
Object.defineProperty(exports, "AdRegEvent", { enumerable: true, get: function () { return ad_register_4.AdRegEvent; } });
var ad_tools_1 = require("./ad-tools");
Object.defineProperty(exports, "AdScope", { enumerable: true, get: function () { return ad_tools_1.AdScope; } });
var ad_tools_2 = require("./ad-tools");
Object.defineProperty(exports, "AdTools", { enumerable: true, get: function () { return ad_tools_2.AdTools; } });

},{"./ad-expect":1,"./ad-field":2,"./ad-filter":3,"./ad-joined":4,"./ad-menu":5,"./ad-model":6,"./ad-modules":7,"./ad-names":8,"./ad-reg-bar":9,"./ad-reg-editor":10,"./ad-reg-loader":11,"./ad-reg-search":12,"./ad-reg-table":13,"./ad-register":14,"./ad-tools":15}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
class AdMister extends qinpel_cps_1.QinPanel {
    constructor() {
        super();
        const qinDesk = this.qinpel.chief.newDesk(this.qinpel, {
            addsApps: (manifest) => manifest.group == adcommon_1.AdNames.AdMister,
            addsCfgs: (manifest) => [this.qinpel.our.names.QinBases].indexOf(manifest.title) > -1,
        });
        this.castedQine().appendChild(qinDesk.getMain());
    }
}
new AdMister().style.putAsBody();

},{"adcommon":16,"qinpel-cps":18}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTool = exports.QinTitled = exports.QinTabs = exports.QinTable = exports.QinString = exports.QinStack = exports.QinSplitter = exports.QinSpacer = exports.QinScroll = exports.QinRow = exports.QinPopup = exports.QinPanel = exports.QinMutantsArm = exports.QinMutants = exports.QinLine = exports.QinLabel = exports.QinInteger = exports.QinIcon = exports.QinIconPick = exports.QinIconCell = exports.QinFileView = exports.QinFilePick = exports.QinFilePath = exports.QinField = exports.QinEdit = exports.QinDivider = exports.QinCombo = exports.QinColumn = exports.QinButton = exports.QinBoolean = exports.QinBase = exports.QinBaseStyle = exports.qinUrlAsset = exports.qinAssetUrl = exports.QinAsset = void 0;
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
var qin_divider_1 = require("./qin-divider");
Object.defineProperty(exports, "QinDivider", { enumerable: true, get: function () { return qin_divider_1.QinDivider; } });
var qin_edit_1 = require("./qin-edit");
Object.defineProperty(exports, "QinEdit", { enumerable: true, get: function () { return qin_edit_1.QinEdit; } });
var qin_field_1 = require("./qin-field");
Object.defineProperty(exports, "QinField", { enumerable: true, get: function () { return qin_field_1.QinField; } });
var qin_file_path_1 = require("./qin-file-path");
Object.defineProperty(exports, "QinFilePath", { enumerable: true, get: function () { return qin_file_path_1.QinFilePath; } });
var qin_file_pick_1 = require("./qin-file-pick");
Object.defineProperty(exports, "QinFilePick", { enumerable: true, get: function () { return qin_file_pick_1.QinFilePick; } });
var qin_file_view_1 = require("./qin-file-view");
Object.defineProperty(exports, "QinFileView", { enumerable: true, get: function () { return qin_file_view_1.QinFileView; } });
var qin_icon_cell_1 = require("./qin-icon-cell");
Object.defineProperty(exports, "QinIconCell", { enumerable: true, get: function () { return qin_icon_cell_1.QinIconCell; } });
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
var qin_mutants_1 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutants", { enumerable: true, get: function () { return qin_mutants_1.QinMutants; } });
var qin_mutants_2 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutantsArm", { enumerable: true, get: function () { return qin_mutants_2.QinMutantsArm; } });
var qin_panel_1 = require("./qin-panel");
Object.defineProperty(exports, "QinPanel", { enumerable: true, get: function () { return qin_panel_1.QinPanel; } });
var qin_popup_1 = require("./qin-popup");
Object.defineProperty(exports, "QinPopup", { enumerable: true, get: function () { return qin_popup_1.QinPopup; } });
var qin_row_1 = require("./qin-row");
Object.defineProperty(exports, "QinRow", { enumerable: true, get: function () { return qin_row_1.QinRow; } });
var qin_scroll_1 = require("./qin-scroll");
Object.defineProperty(exports, "QinScroll", { enumerable: true, get: function () { return qin_scroll_1.QinScroll; } });
var qin_spacer_1 = require("./qin-spacer");
Object.defineProperty(exports, "QinSpacer", { enumerable: true, get: function () { return qin_spacer_1.QinSpacer; } });
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
var qin_titled_1 = require("./qin-titled");
Object.defineProperty(exports, "QinTitled", { enumerable: true, get: function () { return qin_titled_1.QinTitled; } });
var qin_tool_1 = require("./qin-tool");
Object.defineProperty(exports, "QinTool", { enumerable: true, get: function () { return qin_tool_1.QinTool; } });

},{"./qin-assets":19,"./qin-base":21,"./qin-base-style":20,"./qin-boolean":22,"./qin-button":23,"./qin-column":24,"./qin-combo":25,"./qin-divider":26,"./qin-edit":27,"./qin-field":28,"./qin-file-path":29,"./qin-file-pick":30,"./qin-file-view":31,"./qin-icon":34,"./qin-icon-cell":32,"./qin-icon-pick":33,"./qin-integer":35,"./qin-label":36,"./qin-line":37,"./qin-mutants":38,"./qin-panel":39,"./qin-popup":40,"./qin-row":41,"./qin-scroll":42,"./qin-spacer":43,"./qin-splitter":44,"./qin-stack":45,"./qin-string":46,"./qin-table":47,"./qin-tabs":48,"./qin-titled":49,"./qin-tool":50}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qinUrlAsset = exports.qinAssetUrl = exports.QinAsset = void 0;
var QinAsset;
(function (QinAsset) {
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
    QinAsset["FaceAltWork"] = "face-alt-work.png";
    QinAsset["FaceArrowDown"] = "face-arrow-down.png";
    QinAsset["FaceArrowLeft"] = "face-arrow-left.png";
    QinAsset["FaceArrowRight"] = "face-arrow-right.png";
    QinAsset["FaceArrowUp"] = "face-arrow-up.png";
    QinAsset["FaceAttach"] = "face-attach.png";
    QinAsset["FaceAzSort"] = "face-az-sort.png";
    QinAsset["FaceBagShopping"] = "face-bag-shopping.png";
    QinAsset["FaceBag"] = "face-bag.png";
    QinAsset["FaceBellDisable"] = "face-bell-disable.png";
    QinAsset["FaceBell"] = "face-bell.png";
    QinAsset["FaceBetweenSpace"] = "face-between-space.png";
    QinAsset["FaceBoilerHomeSmart"] = "face-boiler-home-smart.png";
    QinAsset["FaceBottomToolbar"] = "face-bottom-toolbar.png";
    QinAsset["FaceCUsb"] = "face-c-usb.png";
    QinAsset["FaceCalendar"] = "face-calendar.png";
    QinAsset["FaceCameraDisable"] = "face-camera-disable.png";
    QinAsset["FaceCamera"] = "face-camera.png";
    QinAsset["FaceCancel"] = "face-cancel.png";
    QinAsset["FaceCartShopping"] = "face-cart-shopping.png";
    QinAsset["FaceCart"] = "face-cart.png";
    QinAsset["FaceCheckRadio"] = "face-check-radio.png";
    QinAsset["FaceCheck"] = "face-check.png";
    QinAsset["FaceCheckedRadio"] = "face-checked-radio.png";
    QinAsset["FaceChipSmartphone"] = "face-chip-smartphone.png";
    QinAsset["FaceCircleHalfShape"] = "face-circle-half-shape.png";
    QinAsset["FaceCircleShape"] = "face-circle-shape.png";
    QinAsset["FaceCircle"] = "face-circle.png";
    QinAsset["FaceClearPull"] = "face-clear-pull.png";
    QinAsset["FaceClockSand"] = "face-clock-sand.png";
    QinAsset["FaceClock"] = "face-clock.png";
    QinAsset["FaceClose"] = "face-close.png";
    QinAsset["FaceCog"] = "face-cog.png";
    QinAsset["FaceColsView"] = "face-cols-view.png";
    QinAsset["FaceComfortableView"] = "face-comfortable-view.png";
    QinAsset["FaceCompass"] = "face-compass.png";
    QinAsset["FaceConfirm"] = "face-confirm.png";
    QinAsset["FaceContact"] = "face-contact.png";
    QinAsset["FaceControl"] = "face-control.png";
    QinAsset["FaceCookerHomeSmart"] = "face-cooker-home-smart.png";
    QinAsset["FaceCopy"] = "face-copy.png";
    QinAsset["FaceDayView"] = "face-day-view.png";
    QinAsset["FaceDel"] = "face-del.png";
    QinAsset["FaceDoubleTap"] = "face-double-tap.png";
    QinAsset["FaceDownChevronPush"] = "face-down-chevron-push.png";
    QinAsset["FaceDownPush"] = "face-down-push.png";
    QinAsset["FaceDownTrending"] = "face-down-trending.png";
    QinAsset["FaceDownloadSoftware"] = "face-download-software.png";
    QinAsset["FaceDownload"] = "face-download.png";
    QinAsset["FaceEmptyTrash"] = "face-empty-trash.png";
    QinAsset["FaceEnlarge"] = "face-enlarge.png";
    QinAsset["FaceEnter"] = "face-enter.png";
    QinAsset["FaceErase"] = "face-erase.png";
    QinAsset["FaceExit"] = "face-exit.png";
    QinAsset["FaceEyeDisable"] = "face-eye-disable.png";
    QinAsset["FaceEye"] = "face-eye.png";
    QinAsset["FaceFile"] = "face-file.png";
    QinAsset["FaceFilter"] = "face-filter.png";
    QinAsset["FaceFirstRow"] = "face-first-row.png";
    QinAsset["FaceFolder"] = "face-folder.png";
    QinAsset["FaceFoundSearch"] = "face-found-search.png";
    QinAsset["FaceGear"] = "face-gear.png";
    QinAsset["FaceGlobe"] = "face-globe.png";
    QinAsset["FaceGridView"] = "face-grid-view.png";
    QinAsset["FaceHScroll"] = "face-h-scroll.png";
    QinAsset["FaceHeart"] = "face-heart.png";
    QinAsset["FaceHeatHomeSmart"] = "face-heat-home-smart.png";
    QinAsset["FaceHexagonShape"] = "face-hexagon-shape.png";
    QinAsset["FaceHome"] = "face-home.png";
    QinAsset["FaceHuntProduct"] = "face-hunt-product.png";
    QinAsset["FaceImage"] = "face-image.png";
    QinAsset["FaceInZoom"] = "face-in-zoom.png";
    QinAsset["FaceKitUi"] = "face-kit-ui.png";
    QinAsset["FaceLabel"] = "face-label.png";
    QinAsset["FaceLastRow"] = "face-last-row.png";
    QinAsset["FaceLeftChevronPush"] = "face-left-chevron-push.png";
    QinAsset["FaceLeftPush"] = "face-left-push.png";
    QinAsset["FaceLeftToolbar"] = "face-left-toolbar.png";
    QinAsset["FaceLightHomeSmart"] = "face-light-home-smart.png";
    QinAsset["FaceLink"] = "face-link.png";
    QinAsset["FaceListUser"] = "face-list-user.png";
    QinAsset["FaceListView"] = "face-list-view.png";
    QinAsset["FaceLoadingSearch"] = "face-loading-search.png";
    QinAsset["FaceLock"] = "face-lock.png";
    QinAsset["FaceMachineWashHomeSmart"] = "face-machine-wash-home-smart.png";
    QinAsset["FaceMail"] = "face-mail.png";
    QinAsset["FaceMapDisable"] = "face-map-disable.png";
    QinAsset["FaceMap"] = "face-map.png";
    QinAsset["FaceMenuLines"] = "face-menu-lines.png";
    QinAsset["FaceMessage"] = "face-message.png";
    QinAsset["FaceMicDisable"] = "face-mic-disable.png";
    QinAsset["FaceMic"] = "face-mic.png";
    QinAsset["FaceMinus"] = "face-minus.png";
    QinAsset["FaceMirrorScreen"] = "face-mirror-screen.png";
    QinAsset["FaceMonthView"] = "face-month-view.png";
    QinAsset["FaceMouthNoSmile"] = "face-mouth-no-smile.png";
    QinAsset["FaceMovie"] = "face-movie.png";
    QinAsset["FaceNeutralSmile"] = "face-neutral-smile.png";
    QinAsset["FaceNews"] = "face-news.png";
    QinAsset["FaceNoneSmile"] = "face-none-smile.png";
    QinAsset["FaceODownChevronPush"] = "face-o-down-chevron-push.png";
    QinAsset["FaceOLeftChevronPush"] = "face-o-left-chevron-push.png";
    QinAsset["FaceONextTrackPlay"] = "face-o-next-track-play.png";
    QinAsset["FaceOPrevTrackPlay"] = "face-o-prev-track-play.png";
    QinAsset["FaceOQuote"] = "face-o-quote.png";
    QinAsset["FaceORightChevronPush"] = "face-o-right-chevron-push.png";
    QinAsset["FaceOSelect"] = "face-o-select.png";
    QinAsset["FaceOUpChevronPush"] = "face-o-up-chevron-push.png";
    QinAsset["FaceOVoicemail"] = "face-o-voicemail.png";
    QinAsset["FaceOffSquareToggle"] = "face-off-square-toggle.png";
    QinAsset["FaceOffToggle"] = "face-off-toggle.png";
    QinAsset["FaceOnToggle"] = "face-on-toggle.png";
    QinAsset["FaceOpenMouthSmile"] = "face-open-mouth-smile.png";
    QinAsset["FaceOpenSidebar"] = "face-open-sidebar.png";
    QinAsset["FaceOutZoom"] = "face-out-zoom.png";
    QinAsset["FacePaste"] = "face-paste.png";
    QinAsset["FacePencil"] = "face-pencil.png";
    QinAsset["FacePerson"] = "face-person.png";
    QinAsset["FacePhoneDisable"] = "face-phone-disable.png";
    QinAsset["FacePhone"] = "face-phone.png";
    QinAsset["FacePin"] = "face-pin.png";
    QinAsset["FacePlug"] = "face-plug.png";
    QinAsset["FacePlus"] = "face-plus.png";
    QinAsset["FacePocket"] = "face-pocket.png";
    QinAsset["FacePokemon"] = "face-pokemon.png";
    QinAsset["FacePolaroid"] = "face-polaroid.png";
    QinAsset["FacePoll"] = "face-poll.png";
    QinAsset["FacePresentation"] = "face-presentation.png";
    QinAsset["FacePrevTrackPlay"] = "face-prev-track-play.png";
    QinAsset["FacePrinter"] = "face-printer.png";
    QinAsset["FaceProfile"] = "face-profile.png";
    QinAsset["FaceQr"] = "face-qr.png";
    QinAsset["FaceQuote"] = "face-quote.png";
    QinAsset["FaceRDownChevronPush"] = "face-r-down-chevron-push.png";
    QinAsset["FaceRLeftChevronPush"] = "face-r-left-chevron-push.png";
    QinAsset["FaceRNextTrackPlay"] = "face-r-next-track-play.png";
    QinAsset["FaceRPrevTrackPlay"] = "face-r-prev-track-play.png";
    QinAsset["FaceRRemove"] = "face-r-remove.png";
    QinAsset["FaceRRightChevronPush"] = "face-r-right-chevron-push.png";
    QinAsset["FaceRSelect"] = "face-r-select.png";
    QinAsset["FaceRUpChevronPush"] = "face-r-up-chevron-push.png";
    QinAsset["FaceRVoicemail"] = "face-r-voicemail.png";
    QinAsset["FaceRamSmartphone"] = "face-ram-smartphone.png";
    QinAsset["FaceRatio"] = "face-ratio.png";
    QinAsset["FaceRead"] = "face-read.png";
    QinAsset["FaceReadme"] = "face-readme.png";
    QinAsset["FaceRecord"] = "face-record.png";
    QinAsset["FaceRedo2"] = "face-redo-2.png";
    QinAsset["FaceRedo"] = "face-redo.png";
    QinAsset["FaceRefrigeratorHomeSmart"] = "face-refrigerator-home-smart.png";
    QinAsset["FaceRegion"] = "face-region.png";
    QinAsset["FaceRemote"] = "face-remote.png";
    QinAsset["FaceRemoveUser"] = "face-remove-user.png";
    QinAsset["FaceRemove"] = "face-remove.png";
    QinAsset["FaceRename"] = "face-rename.png";
    QinAsset["FaceReorder"] = "face-reorder.png";
    QinAsset["FaceRepeat"] = "face-repeat.png";
    QinAsset["FaceRhombusShape"] = "face-rhombus-shape.png";
    QinAsset["FaceRightChevronPush"] = "face-right-chevron-push.png";
    QinAsset["FaceRightPush"] = "face-right-push.png";
    QinAsset["FaceRightSidebar"] = "face-right-sidebar.png";
    QinAsset["FaceRightToolbar"] = "face-right-toolbar.png";
    QinAsset["FaceRing"] = "face-ring.png";
    QinAsset["FaceRuler"] = "face-ruler.png";
    QinAsset["FaceSadSmile"] = "face-sad-smile.png";
    QinAsset["FaceSave"] = "face-save.png";
    QinAsset["FaceScan"] = "face-scan.png";
    QinAsset["FaceScreen"] = "face-screen.png";
    QinAsset["FaceSearch2"] = "face-search-2.png";
    QinAsset["FaceSearch"] = "face-search.png";
    QinAsset["FaceSelect"] = "face-select.png";
    QinAsset["FaceSend"] = "face-send.png";
    QinAsset["FaceServer"] = "face-server.png";
    QinAsset["FaceServerless"] = "face-serverless.png";
    QinAsset["FaceSettings"] = "face-settings.png";
    QinAsset["FaceShakeSmartphone"] = "face-shake-smartphone.png";
    QinAsset["FaceShare2"] = "face-share-2.png";
    QinAsset["FaceShare"] = "face-share.png";
    QinAsset["FaceShield2"] = "face-shield-2.png";
    QinAsset["FaceShield"] = "face-shield.png";
    QinAsset["FaceShortcut"] = "face-shortcut.png";
    QinAsset["FaceShotScreen"] = "face-shot-screen.png";
    QinAsset["FaceShrink"] = "face-shrink.png";
    QinAsset["FaceShutterstock"] = "face-shutterstock.png";
    QinAsset["FaceSidebar"] = "face-sidebar.png";
    QinAsset["FaceSignal"] = "face-signal.png";
    QinAsset["FaceSingleTap"] = "face-single-tap.png";
    QinAsset["FaceSize"] = "face-size.png";
    QinAsset["FaceSketch"] = "face-sketch.png";
    QinAsset["FaceSlack"] = "face-slack.png";
    QinAsset["FaceSleep"] = "face-sleep.png";
    QinAsset["FaceSmartphone"] = "face-smartphone.png";
    QinAsset["FaceSmile"] = "face-smile.png";
    QinAsset["FaceSpeakerDisable"] = "face-speaker-disable.png";
    QinAsset["FaceSpeaker"] = "face-speaker.png";
    QinAsset["FaceSpectrum"] = "face-spectrum.png";
    QinAsset["FaceSpinnerAltTwo"] = "face-spinner-alt-two.png";
    QinAsset["FaceSpinnerAlt"] = "face-spinner-alt.png";
    QinAsset["FaceSpinnerTwo"] = "face-spinner-two.png";
    QinAsset["FaceSpinner"] = "face-spinner.png";
    QinAsset["FaceSplitNotView"] = "face-split-not-view.png";
    QinAsset["FaceSplitViewHorizontal"] = "face-split-view-horizontal.png";
    QinAsset["FaceSplitViewVertical"] = "face-split-view-vertical.png";
    QinAsset["FaceSplitView"] = "face-split-view.png";
    QinAsset["FaceSquareShape"] = "face-square-shape.png";
    QinAsset["FaceSquareToggle"] = "face-square-toggle.png";
    QinAsset["FaceSquare"] = "face-square.png";
    QinAsset["FaceStack"] = "face-stack.png";
    QinAsset["FaceStar"] = "face-star.png";
    QinAsset["FaceStark"] = "face-stark.png";
    QinAsset["FaceStopwatch"] = "face-stopwatch.png";
    QinAsset["FaceStories"] = "face-stories.png";
    QinAsset["FaceStudio"] = "face-studio.png";
    QinAsset["FaceStyle"] = "face-style.png";
    QinAsset["FaceSun"] = "face-sun.png";
    QinAsset["FaceSupport"] = "face-support.png";
    QinAsset["FaceSwap"] = "face-swap.png";
    QinAsset["FaceSweden"] = "face-sweden.png";
    QinAsset["FaceSwiss"] = "face-swiss.png";
    QinAsset["FaceSync"] = "face-sync.png";
    QinAsset["FaceTab"] = "face-tab.png";
    QinAsset["FaceTag"] = "face-tag.png";
    QinAsset["FaceTally"] = "face-tally.png";
    QinAsset["FaceTemplate"] = "face-template.png";
    QinAsset["FaceTennis"] = "face-tennis.png";
    QinAsset["FaceTerminal"] = "face-terminal.png";
    QinAsset["FaceTerrain"] = "face-terrain.png";
    QinAsset["FaceThermometer"] = "face-thermometer.png";
    QinAsset["FaceThermostat"] = "face-thermostat.png";
    QinAsset["FaceTikcode"] = "face-tikcode.png";
    QinAsset["FaceTime"] = "face-time.png";
    QinAsset["FaceTimelapse"] = "face-timelapse.png";
    QinAsset["FaceTimer"] = "face-timer.png";
    QinAsset["FaceToday"] = "face-today.png";
    QinAsset["FaceToolbox"] = "face-toolbox.png";
    QinAsset["FaceTopToolbar"] = "face-top-toolbar.png";
    QinAsset["FaceTouchpad"] = "face-touchpad.png";
    QinAsset["FaceTrack"] = "face-track.png";
    QinAsset["FaceTranscript"] = "face-transcript.png";
    QinAsset["FaceTrash2"] = "face-trash-2.png";
    QinAsset["FaceTrash"] = "face-trash.png";
    QinAsset["FaceTree"] = "face-tree.png";
    QinAsset["FaceTrees"] = "face-trees.png";
    QinAsset["FaceTrello"] = "face-trello.png";
    QinAsset["FaceTrending"] = "face-trending.png";
    QinAsset["FaceTriangleShape"] = "face-triangle-shape.png";
    QinAsset["FaceTrophy"] = "face-trophy.png";
    QinAsset["FaceTv"] = "face-tv.png";
    QinAsset["FaceTwilio"] = "face-twilio.png";
    QinAsset["FaceTwitter"] = "face-twitter.png";
    QinAsset["FaceUmbrella"] = "face-umbrella.png";
    QinAsset["FaceUnavailable"] = "face-unavailable.png";
    QinAsset["FaceUnblock"] = "face-unblock.png";
    QinAsset["FaceUndo2"] = "face-undo-2.png";
    QinAsset["FaceUndo"] = "face-undo.png";
    QinAsset["FaceUnfold"] = "face-unfold.png";
    QinAsset["FaceUnlink"] = "face-unlink.png";
    QinAsset["FaceUnlock"] = "face-unlock.png";
    QinAsset["FaceUnsplash"] = "face-unsplash.png";
    QinAsset["FaceUpChevronPush"] = "face-up-chevron-push.png";
    QinAsset["FaceUpPush"] = "face-up-push.png";
    QinAsset["FaceUploadSoftware"] = "face-upload-software.png";
    QinAsset["FaceUpload"] = "face-upload.png";
    QinAsset["FaceUpsideSmile"] = "face-upside-smile.png";
    QinAsset["FaceUsb"] = "face-usb.png";
    QinAsset["FaceUserAdd"] = "face-user-add.png";
    QinAsset["FaceUser"] = "face-user.png";
    QinAsset["FaceUserlane"] = "face-userlane.png";
    QinAsset["FaceVBetweenSpace"] = "face-v-between-space.png";
    QinAsset["FaceVScroll"] = "face-v-scroll.png";
    QinAsset["FaceVerticalSwap"] = "face-vertical-swap.png";
    QinAsset["FaceVinyl"] = "face-vinyl.png";
    QinAsset["FaceVoicemail"] = "face-voicemail.png";
    QinAsset["FaceVolume"] = "face-volume.png";
    QinAsset["FaceWebcam"] = "face-webcam.png";
    QinAsset["FaceWebsite"] = "face-website.png";
    QinAsset["FaceWideScreen"] = "face-wide-screen.png";
    QinAsset["FaceWifiDisable"] = "face-wifi-disable.png";
    QinAsset["FaceWifi"] = "face-wifi.png";
    QinAsset["FaceWindows"] = "face-windows.png";
    QinAsset["FaceYinyang"] = "face-yinyang.png";
    QinAsset["FaceYoutube"] = "face-youtube.png";
    QinAsset["FaceZaSort"] = "face-za-sort.png";
    QinAsset["FaceZeit"] = "face-zeit.png";
    QinAsset["FaceZigzagShape"] = "face-zigzag-shape.png";
    QinAsset["Favicon"] = "favicon.ico";
    QinAsset["JobberClose"] = "jobber-close.png";
    QinAsset["JobberMaximize"] = "jobber-maximize.png";
    QinAsset["JobberMenu"] = "jobber-menu.png";
    QinAsset["JobberMinimize"] = "jobber-minimize.png";
    QinAsset["JobberResize"] = "jobber-resize.png";
    QinAsset["JobberStatusError"] = "jobber-status-error.png";
    QinAsset["JobberStatusInfo"] = "jobber-status-info.png";
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

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBaseStyle = void 0;
const qinpel_res_1 = require("qinpel-res");
class QinBaseStyle {
    constructor(element) {
        this._el = element;
    }
    putAsBody() {
        document.body.appendChild(this._el);
        qinpel_res_1.QinSkin.styleAsBody(this._el);
    }
    delAsBody() {
        document.body.removeChild(this._el);
    }
    putAsWhole() {
        this.putAsPositionAbsolute();
        this.putAsBounds(0, 0, 0, 0);
    }
    putAsEdit() {
        qinpel_res_1.QinSkin.styleAsEdit(this._el);
        this._el.tabIndex = 0;
    }
    putAsScroll() {
        this._el.style.overflow = "auto";
    }
    putAsMargin(margin) {
        this._el.style.margin = this.getPixelsOrInitial(margin);
    }
    putAsMarginTop(margin) {
        this._el.style.marginTop = this.getPixelsOrInitial(margin);
    }
    putAsMarginBottom(margin) {
        this._el.style.marginBottom = this.getPixelsOrInitial(margin);
    }
    putAsMarginLeft(margin) {
        this._el.style.marginLeft = this.getPixelsOrInitial(margin);
    }
    putAsMarginRight(margin) {
        this._el.style.marginRight = this.getPixelsOrInitial(margin);
    }
    putAsPadding(padding) {
        this._el.style.padding = this.getPixelsOrInitial(padding);
    }
    putAsPaddingTop(padding) {
        this._el.style.paddingTop = this.getPixelsOrInitial(padding);
    }
    putAsPaddingBottom(padding) {
        this._el.style.paddingBottom = this.getPixelsOrInitial(padding);
    }
    putAsPaddingLeft(padding) {
        this._el.style.paddingLeft = this.getPixelsOrInitial(padding);
    }
    putAsPaddingRight(padding) {
        this._el.style.paddingRight = this.getPixelsOrInitial(padding);
    }
    putAsBorder(thick, color = qinpel_res_1.QinSkin.styles.ColorForeground, style = "solid") {
        if (thick) {
            this._el.style.border = thick + "px " + style + " " + color;
        }
        else {
            this._el.style.border = "none";
        }
    }
    putAsBorderTop(thick, color = qinpel_res_1.QinSkin.styles.ColorForeground, style = "solid") {
        if (thick) {
            this._el.style.borderTop = thick + "px " + style + " " + color;
        }
        else {
            this._el.style.borderTop = "none";
        }
    }
    putAsBorderBottom(thick, color = qinpel_res_1.QinSkin.styles.ColorForeground, style = "solid") {
        if (thick) {
            this._el.style.borderBottom = thick + "px " + style + " " + color;
        }
        else {
            this._el.style.borderBottom = "none";
        }
    }
    putAsBorderLeft(thick, color = qinpel_res_1.QinSkin.styles.ColorForeground, style = "solid") {
        if (thick) {
            this._el.style.borderLeft = thick + "px " + style + " " + color;
        }
        else {
            this._el.style.borderLeft = "none";
        }
    }
    putAsBorderRight(thick, color = qinpel_res_1.QinSkin.styles.ColorForeground, style = "solid") {
        if (thick) {
            this._el.style.borderRight = thick + "px " + style + " " + color;
        }
        else {
            this._el.style.borderRight = "none";
        }
    }
    putAsDisplayFlex() {
        this._el.style.display = "flex";
    }
    putAsDisplayInline() {
        this._el.style.display = "inline";
    }
    putAsDisplayInlineBlock() {
        this._el.style.display = "inline-block";
    }
    putAsPositionStatic() {
        this._el.style.position = "static";
    }
    putAsPositionAbsolute() {
        this._el.style.position = "absolute";
    }
    putAsPositionFixed() {
        this._el.style.position = "fixed";
    }
    putAsPositionRelative() {
        this._el.style.position = "relative";
    }
    putAsPositionSthicky() {
        this._el.style.position = "sthicky";
    }
    putAsPositionInitial() {
        this._el.style.position = "initial";
    }
    putAsFlexDirectionRow() {
        this._el.style.flexDirection = "row";
    }
    putAsFlexDirectionRowReverse() {
        this._el.style.flexDirection = "row-reverse";
    }
    putAsFlexDirectionColumn() {
        this._el.style.flexDirection = "column";
    }
    putAsFlexDirectionColumnReverse() {
        this._el.style.flexDirection = "column-reverse";
    }
    putAsFlexWrap() {
        this._el.style.flexWrap = "wrap";
    }
    putAsFlexWrapNot() {
        this._el.style.flexWrap = "nowrap";
    }
    putAsFlexWrapReverse() {
        this._el.style.flexWrap = "wrap-reverse";
    }
    putAsFlexMin() {
        this._el.style.flex = "none";
    }
    putAsFlexMax() {
        this._el.style.flex = "auto";
    }
    putAsAllCentered() {
        this._el.style.textAlign = "center";
        this._el.style.alignItems = "center";
        this._el.style.alignContent = "center";
        this._el.style.verticalAlign = "middle";
    }
    putAsBounds(top, right, bottom, left) {
        this._el.style.top = this.getPixelsOrInitial(top);
        this._el.style.right = this.getPixelsOrInitial(right);
        this._el.style.bottom = this.getPixelsOrInitial(bottom);
        this._el.style.left = this.getPixelsOrInitial(left);
    }
    putAsWidth(width) {
        this._el.style.width = this.getPixelsOrInitial(width);
    }
    putAsHeight(height) {
        this._el.style.height = this.getPixelsOrInitial(height);
    }
    putAsSize(width, height) {
        this._el.style.width = this.getPixelsOrInitial(width);
        this._el.style.height = this.getPixelsOrInitial(height);
    }
    putAsMinWidth(width) {
        this._el.style.minWidth = this.getPixelsOrInitial(width);
    }
    putAsMinHeight(height) {
        this._el.style.minHeight = this.getPixelsOrInitial(height);
    }
    putAsMinSize(width, height) {
        this._el.style.minWidth = this.getPixelsOrInitial(width);
        this._el.style.minHeight = this.getPixelsOrInitial(height);
    }
    putAsMaxWidth(width) {
        this._el.style.maxWidth = this.getPixelsOrInitial(width);
    }
    putAsMaxHeight(height) {
        this._el.style.maxHeight = this.getPixelsOrInitial(height);
    }
    putAsMaxSize(width, height) {
        this._el.style.maxWidth = this.getPixelsOrInitial(width);
        this._el.style.maxHeight = this.getPixelsOrInitial(height);
    }
    putAsForeground(foreground) {
        this._el.style.color = foreground;
    }
    putAsBackground(background) {
        this._el.style.background = background;
    }
    putAsBackAsset(asset) {
        this._el.style.backgroundImage = "url('/app/qinpel-app/assets/" + asset + "')";
    }
    putAsBackInitial() {
        this._el.style.backgroundImage = "initial";
    }
    putAsZIndex(index) {
        if (index == null || index == undefined) {
            this._el.style.zIndex = "initial";
        }
        else {
            this._el.style.zIndex = index.toString();
        }
    }
    putAsDisabledSelection() {
        qinpel_res_1.QinSkin.disableSelection(this._el);
    }
    getPixelsOrInitial(value) {
        if (value == null || value == undefined) {
            return "initial";
        }
        return value + "px";
    }
}
exports.QinBaseStyle = QinBaseStyle;

},{"qinpel-res":51}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBase = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_style_1 = require("./qin-base-style");
const qin_tool_1 = require("./qin-tool");
class QinBase {
    constructor(qindred, qined) {
        this._baseParent = null;
        this._pastParent = null;
        this._baseChildren = [];
        this._baseDisplay = null;
        this._baseVisibility = null;
        this._style = null;
        this._qindred = qindred;
        if (qined instanceof QinBase) {
            qined.qinedHTML.id = qindred + qined.qinedHTML.id;
        }
        else {
            qined.id = qin_tool_1.QinTool.qinpel.our.soul.body.makeQindredUID(qindred);
        }
        this._qined = qined;
    }
    get qinedHTML() {
        if (this._qined instanceof QinBase) {
            return this._qined.qinedHTML;
        }
        else {
            return this._qined;
        }
    }
    get qinedBase() {
        if (this._qined instanceof QinBase) {
            return this._qined;
        }
        else {
            return null;
        }
    }
    get qindred() {
        return this._qindred;
    }
    get qinpel() {
        return qin_tool_1.QinTool.qinpel;
    }
    get style() {
        if (this._style == null) {
            this._style = new qin_base_style_1.QinBaseStyle(this.qinedHTML);
        }
        return this._style;
    }
    put(item) {
        item.install(this);
        return this;
    }
    install(onBase) {
        this.unInstall();
        this._baseParent = onBase;
        this._baseParent.addChild(this);
    }
    unInstall() {
        if (this._baseParent != null) {
            this._baseParent.delChild(this);
            this._pastParent = this._baseParent;
            this._baseParent = null;
        }
    }
    reInstall() {
        this.unInstall();
        if (this._pastParent != null) {
            this._pastParent.addChild(this);
            this._baseParent = this._pastParent;
        }
    }
    unInstallChildren() {
        for (let i = this._baseChildren.length - 1; i >= 0; i--) {
            this._baseChildren[i].unInstall();
        }
    }
    unDisplay() {
        if (this.qinedHTML.style.display !== "none") {
            this._baseDisplay = this.qinedHTML.style.display;
            this.qinedHTML.style.display = "none";
        }
    }
    reDisplay() {
        if (this._baseDisplay != null) {
            this.qinedHTML.style.display = this._baseDisplay;
        }
    }
    unVisible() {
        if (this.qinedHTML.style.display !== "hidden") {
            this._baseVisibility = this.qinedHTML.style.visibility;
            this.qinedHTML.style.visibility = "hidden";
        }
    }
    reVisible() {
        if (this._baseVisibility != null) {
            this.qinedHTML.style.visibility = this._baseVisibility;
        }
    }
    addChild(child) {
        this._baseChildren.push(child);
        this.qinedHTML.appendChild(child.qinedHTML);
    }
    delChild(child) {
        let index = this._baseChildren.indexOf(child);
        if (index > -1) {
            this._baseChildren.splice(index, 1);
        }
        this.qinedHTML.removeChild(child.qinedHTML);
    }
    children() {
        return this._baseChildren;
    }
    mustId() {
        var result = this.id;
        if (!result) {
            result = qinpel_res_1.QinBody.makeQinUID();
            this.id = result;
        }
        return result;
    }
    get id() {
        return this.qinedHTML.id;
    }
    set id(id) {
        this.qinedHTML.id = id;
    }
    get tabIndex() {
        return this.qinedHTML.tabIndex;
    }
    set tabIndex(index) {
        this.qinedHTML.tabIndex = index;
    }
    focus() {
        this.qinedHTML.focus();
    }
    addAction(action) {
        qinpel_res_1.QinArm.addAction(this.qinedHTML, action);
    }
    addActionMain(action) {
        qinpel_res_1.QinArm.addActionMain(this.qinedHTML, action);
    }
    addActionMainKey(action) {
        qinpel_res_1.QinArm.addActionMainKey(this.qinedHTML, action);
    }
    addActionMainMouse(action) {
        qinpel_res_1.QinArm.addActionMainMouse(this.qinedHTML, action);
    }
    addActionMainTouch(action) {
        qinpel_res_1.QinArm.addActionMainTouch(this.qinedHTML, action);
    }
    addActionMainPoint(action) {
        qinpel_res_1.QinArm.addActionMainPoint(this.qinedHTML, action);
    }
    addActionMidi(action) {
        qinpel_res_1.QinArm.addActionMidi(this.qinedHTML, action);
    }
    addActionMidiKey(action) {
        qinpel_res_1.QinArm.addActionMidiKey(this.qinedHTML, action);
    }
    addActionMidiMouse(action) {
        qinpel_res_1.QinArm.addActionMidiMouse(this.qinedHTML, action);
    }
    addActionMidiTouch(action) {
        qinpel_res_1.QinArm.addActionMidiTouch(this.qinedHTML, action);
    }
    addActionMidiPoint(action) {
        qinpel_res_1.QinArm.addActionMidiPoint(this.qinedHTML, action);
    }
    addActionMenu(action) {
        qinpel_res_1.QinArm.addActionMenu(this.qinedHTML, action);
    }
    addActionMenuKey(action) {
        qinpel_res_1.QinArm.addActionMenuKey(this.qinedHTML, action);
    }
    addActionMenuMouse(action) {
        qinpel_res_1.QinArm.addActionMenuMouse(this.qinedHTML, action);
    }
    addActionMenuTouch(action) {
        qinpel_res_1.QinArm.addActionMenuTouch(this.qinedHTML, action);
    }
    addActionMenuPoint(action) {
        qinpel_res_1.QinArm.addActionMenuPoint(this.qinedHTML, action);
    }
}
exports.QinBase = QinBase;

},{"./qin-base-style":20,"./qin-tool":50,"qinpel-res":51}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBoolean = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
class QinBoolean extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "boolean", new qin_line_1.QinLine());
        this._qinSpan = new qin_label_1.QinLabel();
        this._qinIcon = new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCheckRadio);
        this._value = false;
        this._qinSpan.install(this.qinedBase);
        this._qinIcon.install(this._qinSpan);
        this._qinSpan.style.putAsEdit();
        this._qinSpan.style.putAsDisplayFlex();
        this._qinSpan.style.putAsAllCentered();
        this._qinSpan.addAction((qinEvent) => {
            if (qinEvent.isMain) {
                this.toggle();
            }
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    castedQine() {
        return this.qinedBase;
    }
    getNature() {
        return qinpel_res_1.QinNature.BOOL;
    }
    getData() {
        return this._value;
    }
    setData(data) {
        this._value = data;
        this.updateIcon();
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
            this._qinIcon.asset = qin_assets_1.QinAsset.FaceCheckedRadio;
        }
        else {
            this._qinIcon.asset = qin_assets_1.QinAsset.FaceCheckRadio;
        }
    }
    toggle() {
        this._value = !this._value;
        this.updateIcon();
    }
}
exports.QinBoolean = QinBoolean;

},{"./qin-assets":19,"./qin-edit":27,"./qin-icon":34,"./qin-label":36,"./qin-line":37,"qinpel-res":51}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinButton = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_1 = require("./qin-base");
class QinButton extends qin_base_1.QinBase {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "button", document.createElement("button"));
        this._qinIcon = null;
        this._qinLabel = null;
        styles.applyOnButton(this.qinedHTML);
        if (options === null || options === void 0 ? void 0 : options.icon) {
            this._qinIcon = options.icon;
            this._qinIcon.install(this);
        }
        if (options === null || options === void 0 ? void 0 : options.label) {
            this._qinLabel = options.label;
            this._qinLabel.install(this);
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get qinLabel() {
        return this._qinLabel;
    }
    putAsRow() {
        this.style.putAsFlexDirectionRow();
    }
    putAsRowReverse() {
        this.style.putAsFlexDirectionRowReverse();
    }
    putAsColumn() {
        this.style.putAsFlexDirectionColumn();
    }
    putAsColumnReverse() {
        this.style.putAsFlexDirectionColumnReverse();
    }
}
exports.QinButton = QinButton;
const styles = {
    applyOnButton: (el) => {
        qinpel_res_1.QinSkin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
        el.style.justifyContent = "center";
    },
};

},{"./qin-base":21,"qinpel-res":51}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinColumn = void 0;
const qin_panel_1 = require("./qin-panel");
class QinColumn extends qin_panel_1.QinPanel {
    constructor(options, isQindred) {
        super(options, (isQindred ? isQindred + "_" : "") + "column");
        this.style.putAsFlexDirectionColumn();
        this.style.putAsFlexWrapNot();
        this.qinedHTML.style.minWidth = "min-content";
        this.qinedHTML.style.minHeight = "min-content";
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinColumn = QinColumn;

},{"./qin-panel":39}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinCombo = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinCombo extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "combo", document.createElement("select"));
        this._elGroups = new Array();
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
    castedQine() {
        return this.qinedHTML;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this.qinedHTML.value;
    }
    setData(data) {
        this.qinedHTML.value = data;
    }
    addItem(item) {
        const option = document.createElement("option");
        option.text = item.title;
        option.value = item.value;
        if (item.selected != undefined && item.selected != null) {
            option.selected = item.selected;
        }
        let group = this.getGroup(item.group);
        if (group) {
            group.appendChild(option);
        }
        else {
            qinpel_res_1.QinSkin.styleAsBase(option);
            this.qinedHTML.appendChild(option);
        }
        return this;
    }
    getGroup(label) {
        if (!label) {
            return null;
        }
        for (let group of this._elGroups) {
            if (group.label == label) {
                return group;
            }
        }
        let newGroup = document.createElement("optgroup");
        newGroup.label = label;
        qinpel_res_1.QinSkin.styleAsBase(newGroup);
        this._elGroups.push(newGroup);
        this.qinedHTML.appendChild(newGroup);
        return newGroup;
    }
}
exports.QinCombo = QinCombo;

},{"./qin-edit":27,"qinpel-res":51}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinDivider = void 0;
const qin_base_1 = require("./qin-base");
class QinDivider extends qin_base_1.QinBase {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "divider", document.createElement("div"));
        this._isHorizontal = true;
        if (options === null || options === void 0 ? void 0 : options.horizontal) {
            this.setHorizontal();
        }
        else {
            this.setVertical();
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    setHorizontal() {
        this.qinedHTML.style.minWidth = "initial";
        this.qinedHTML.style.maxWidth = "initial";
        this.qinedHTML.style.minHeight = "6px";
        this.qinedHTML.style.maxHeight = "6px";
        this.qinedHTML.style.height = "6px";
        this.qinedHTML.style.background =
            "linear-gradient(180deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 26%, rgba(24,0,39,0.8) 42%, rgba(24,0,39,0.8) 58%, rgba(255,250,239,0.1) 74%, rgba(255,250,239,0.1) 100%)";
        this._isHorizontal = true;
    }
    setVertical() {
        this.qinedHTML.style.flexDirection = "row";
        this.qinedHTML.style.minWidth = "6px";
        this.qinedHTML.style.maxWidth = "6px";
        this.qinedHTML.style.minHeight = "initial";
        this.qinedHTML.style.maxHeight = "initial";
        this.qinedHTML.style.width = "6px";
        this.qinedHTML.style.background =
            "linear-gradient(90deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 26%, rgba(24,0,39,0.8) 42%, rgba(24,0,39,0.8) 58%, rgba(255,250,239,0.1) 74%, rgba(255,250,239,0.1) 100%)";
        this._isHorizontal = false;
    }
    get isHorizontal() {
        return this._isHorizontal;
    }
}
exports.QinDivider = QinDivider;

},{"./qin-base":21}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinEdit = void 0;
const qin_base_1 = require("./qin-base");
class QinEdit extends qin_base_1.QinBase {
    constructor(qindred, qined) {
        super(qindred + "_" + "edit", qined);
    }
}
exports.QinEdit = QinEdit;

},{"./qin-base":21}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinField = void 0;
const qin_column_1 = require("./qin-column");
const qin_edit_1 = require("./qin-edit");
const qin_label_1 = require("./qin-label");
class QinField extends qin_edit_1.QinEdit {
    constructor(title, edit, isQindred) {
        super((isQindred ? isQindred + "_" : "") + edit.qindred + "_field", new qin_column_1.QinColumn());
        this._qinLabel = new qin_label_1.QinLabel();
        this._qinEdit = null;
        this._qinLabel.title = title;
        this._qinLabel.install(this.qinedBase);
        this._qinEdit = edit;
        this._qinEdit.install(this.qinedBase);
        this._qinLabel.qinLink(this._qinEdit);
        this.qinedBase.style.putAsMargin(3);
    }
    castedQine() {
        return this.qinedBase;
    }
    getNature() {
        return this._qinEdit.getNature();
    }
    getData() {
        return this._qinEdit.getData();
    }
    setData(data) {
        this._qinEdit.setData(data);
    }
    get qinLabel() {
        return this._qinLabel;
    }
    get qinEdit() {
        return this._qinEdit;
    }
}
exports.QinField = QinField;

},{"./qin-column":24,"./qin-edit":27,"./qin-label":36}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFilePath = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_edit_1 = require("./qin-edit");
const qin_file_pick_1 = require("./qin-file-pick");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_string_1 = require("./qin-string");
class QinFilePath extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "file-path", new qin_line_1.QinLine());
        this._qinPath = new qin_string_1.QinString();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceFolder),
        });
        this._qinPicker = new qin_file_pick_1.QinFilePick({
            nature: options === null || options === void 0 ? void 0 : options.nature,
            operation: options === null || options === void 0 ? void 0 : options.operation,
            descriptors: options === null || options === void 0 ? void 0 : options.descriptors,
            singleSelection: true,
        });
        this._qinPopup = this.qinpel.jobbed.newPopup(this._qinPicker.castedQine().castedQine());
        this._qinPath.install(this.qinedBase);
        this._qinSearch.install(this.qinedBase);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isMain) {
                this._qinPopup.show();
                const upperHeight = this._qinPicker.qinUpper.qinedHTML.clientHeight;
                const explorerMaxHeight = this._qinPopup.maxHeight - (upperHeight + 12);
                this._qinPicker.qinExplorer.style.putAsMaxHeight(explorerMaxHeight);
            }
        });
        this._qinPicker.addChosen((chosen) => {
            if (chosen && chosen.length > 0) {
                this._qinPath.setData(chosen[0]);
            }
            this._qinPopup.close();
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    castedQine() {
        return this.qinedBase;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this._qinPath.getData();
    }
    setData(data) {
        this._qinPath.setData(data);
    }
    get qinPath() {
        return this._qinPath;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinChooser() {
        return this._qinPicker;
    }
    get qinPopup() {
        return this._qinPopup;
    }
}
exports.QinFilePath = QinFilePath;

},{"./qin-assets":19,"./qin-button":23,"./qin-edit":27,"./qin-file-pick":30,"./qin-icon":34,"./qin-line":37,"./qin-string":46,"qinpel-res":51}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFilePick = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_combo_1 = require("./qin-combo");
const qin_edit_1 = require("./qin-edit");
const qin_file_view_1 = require("./qin-file-view");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
const qin_string_1 = require("./qin-string");
class QinFilePick extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "file-pick", new qin_column_1.QinColumn());
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
        this._qinExplorer = new qin_file_view_1.QinFileView();
        this._listeners = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._operation = (options === null || options === void 0 ? void 0 : options.operation) ? options.operation : qinpel_res_1.QinFilesOperation.OPEN;
        this._descriptors = (options === null || options === void 0 ? void 0 : options.descriptors) ? options.descriptors : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options === null || options === void 0 ? void 0 : options.singleSelection : false;
        this.initMain();
        this.initUpper();
        this.initUnder();
    }
    castedQine() {
        return this.qinedBase;
    }
    initMain() {
        this._qinUpper.install(this.qinedBase);
        this._qinUnder.install(this.qinedBase);
    }
    initUpper() {
        this._qinUpper.style.putAsFlexMin();
        this._qinConfirm.install(this._qinUpper);
        this._qinConfirm.addAction((qinEvent) => {
            if (qinEvent.isMain) {
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
            if (qinEvent.isMain) {
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
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this._qinExplorer.getData();
    }
    setData(data) {
        this._qinExplorer.setData(data);
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
exports.QinFilePick = QinFilePick;

},{"./qin-assets":19,"./qin-button":23,"./qin-column":24,"./qin-combo":25,"./qin-edit":27,"./qin-file-view":31,"./qin-icon":34,"./qin-line":37,"./qin-panel":39,"./qin-string":46,"qinpel-res":51}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFileView = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinFileView extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "file-view", new qin_panel_1.QinPanel());
        this._folderActual = "";
        this._folderServer = "";
        this._items = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._extensions = (options === null || options === void 0 ? void 0 : options.extensions) ? options.extensions : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options.singleSelection : false;
        this.initMain();
    }
    castedQine() {
        return this.qinedBase;
    }
    initMain() {
        styles.applyOnMain(this.qinedHTML);
        this.qinedBase.addAction((qinEvent) => {
            if (qinEvent.isMain) {
                this.cleanSelection();
            }
        });
        this.qinedBase.style.putAsDisabledSelection();
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
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
                        this.qinpel.jobbed.statusError(`The item '${itemPath}' is not on the root '${folderRoot}'.`, "{qinpel-cps}(ErrCode-000001)");
                    }
                    else {
                        if (!this.select(itemName)) {
                            this.qinpel.jobbed.statusError(`Does not have the item '${itemName}' on the folder '${folderRoot}'`, "{qinpel-cps}(ErrCode-000002)");
                        }
                    }
                }
            });
        }
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
        this.qinpel.talk
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
            this.qinpel.jobbed.statusError(err, "{qinpel-cps}(ErrCode-000003)");
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
        this.qinedHTML.innerHTML = "";
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
        item.install(this.qinedHTML);
        this._items.push(item);
    }
}
exports.QinFileView = QinFileView;
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
            if (qinEvent.isMain) {
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

},{"./qin-edit":27,"./qin-panel":39,"qinpel-res":51}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconCell = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_1 = require("./qin-base");
class QinIconCell extends qin_base_1.QinBase {
    constructor(icon, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "icon-cell", document.createElement("div"));
        this._selected = false;
        let border = Math.round(icon.size.width / 10);
        let padding = border * 2;
        this.qinedHTML.style.borderRadius = border + "px";
        this.qinedHTML.style.padding = padding + "px";
        this.qinedHTML.style.display = "flex";
        this._qinIcon = icon;
        this._qinIcon.install(this);
    }
    castedQine() {
        return this.qinedHTML;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
        if (this._selected) {
            this.qinedHTML.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorSelected;
        }
        else {
            this.qinedHTML.style.backgroundColor = "initial";
        }
    }
}
exports.QinIconCell = QinIconCell;

},{"./qin-base":21,"qinpel-res":51}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconPick = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_icon_cell_1 = require("./qin-icon-cell");
const qin_line_1 = require("./qin-line");
class QinIconPick extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "icon-pick", new qin_line_1.QinLine());
        this.qinedBase.style.putAsEdit();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options === null || options === void 0 ? void 0 : options.initial);
        }
        if (options === null || options === void 0 ? void 0 : options.icons) {
            for (const icon of options.icons) {
                this.addIcon(icon);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.cells) {
            for (const cell of options.cells) {
                this.addCell(cell);
            }
        }
    }
    castedQine() {
        return this.qinedBase;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        for (let child of this.children()) {
            if (child instanceof qin_icon_cell_1.QinIconCell) {
                if (child.selected) {
                    return child.qinIcon.asset;
                }
            }
        }
        return null;
    }
    setData(asset) {
        for (let child of this.qinedBase.children()) {
            if (child instanceof qin_icon_cell_1.QinIconCell) {
                if (child.qinIcon.asset == asset) {
                    child.selected = true;
                }
                else {
                    child.selected = false;
                }
            }
        }
    }
    addIcon(icon) {
        let option = new qin_icon_cell_1.QinIconCell(icon);
        option.install(this.qinedBase);
    }
    addCell(option) {
        option.install(this.qinedBase);
    }
}
exports.QinIconPick = QinIconPick;

},{"./qin-edit":27,"./qin-icon-cell":32,"./qin-line":37,"qinpel-res":51}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIcon = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_base_1 = require("./qin-base");
class QinIcon extends qin_base_1.QinBase {
    constructor(asset, size = qinpel_res_1.QinGrandeur.SMALL, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "icon", document.createElement("img"));
        this.castedQine().src = (0, qin_assets_1.qinAssetUrl)(asset);
        qinpel_res_1.QinSkin.styleSize(this.qinedHTML, size);
    }
    castedQine() {
        return this.qinedHTML;
    }
    get asset() {
        return (0, qin_assets_1.qinUrlAsset)(this.castedQine().src);
    }
    set asset(asset) {
        this.castedQine().src = (0, qin_assets_1.qinAssetUrl)(asset);
    }
    get size() {
        return qinpel_res_1.QinSkin.getDimension(this.qinedHTML);
    }
}
exports.QinIcon = QinIcon;

},{"./qin-assets":19,"./qin-base":21,"qinpel-res":51}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinInteger extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "integer", document.createElement("input"));
        this.castedQine().type = "number";
        qinpel_res_1.QinSoul.skin.styleAsEdit(this.qinedHTML);
        this.qinedHTML.style.width = "120px";
        this.qinedHTML.addEventListener("focusout", () => {
            this.setData(this.getData());
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    getNature() {
        return qinpel_res_1.QinNature.INT;
    }
    getData() {
        const value = this.castedQine().value;
        if (value == null || value == undefined || value.length == 0) {
            return null;
        }
        else {
            return parseInt(this.castedQine().value, 10);
        }
    }
    setData(data) {
        if (data == null || data == undefined) {
            this.castedQine().value = "";
        }
        else {
            this.castedQine().value = (data | 0).toString();
        }
    }
}
exports.QinInteger = QinInteger;

},{"./qin-edit":27,"qinpel-res":51}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLabel = void 0;
const qin_base_1 = require("./qin-base");
class QinLabel extends qin_base_1.QinBase {
    constructor(title, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "label", document.createElement("label"));
        if (title) {
            this.qinedHTML.textContent = title;
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    get title() {
        return this.qinedHTML.textContent;
    }
    set title(title) {
        this.qinedHTML.textContent = title;
    }
    get link() {
        return this.qinedHTML.getAttribute("for");
    }
    set link(name) {
        this.qinedHTML.setAttribute("for", name);
    }
    qinLink(qinComp) {
        this.link = qinComp.mustId();
    }
}
exports.QinLabel = QinLabel;

},{"./qin-base":21}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLine = void 0;
const qin_panel_1 = require("./qin-panel");
class QinLine extends qin_panel_1.QinPanel {
    constructor(options, isQindred) {
        super(options, (isQindred ? isQindred + "_" : "") + "line");
        this.style.putAsFlexDirectionRow();
        this.style.putAsFlexWrap();
        this.qinedHTML.style.minWidth = "min-content";
        this.qinedHTML.style.minHeight = "min-content";
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinLine = QinLine;

},{"./qin-panel":39}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinMutantsArm = exports.QinMutants = void 0;
const qin_boolean_1 = require("./qin-boolean");
const qin_combo_1 = require("./qin-combo");
const qin_file_path_1 = require("./qin-file-path");
const qin_file_pick_1 = require("./qin-file-pick");
const qin_file_view_1 = require("./qin-file-view");
const qin_icon_pick_1 = require("./qin-icon-pick");
const qin_integer_1 = require("./qin-integer");
const qin_string_1 = require("./qin-string");
var QinMutants;
(function (QinMutants) {
    QinMutants["BOOLEAN"] = "boolean";
    QinMutants["INTEGER"] = "integer";
    QinMutants["STRING"] = "string";
    QinMutants["COMBO"] = "combo";
    QinMutants["ICON_PICK"] = "icon-pick";
    QinMutants["FILE_PATH"] = "file_path";
    QinMutants["FILE_PICK"] = "file_pick";
    QinMutants["FILE_VIEW"] = "file_view";
})(QinMutants = exports.QinMutants || (exports.QinMutants = {}));
function newEdit(kind, options) {
    switch (kind) {
        case QinMutants.BOOLEAN:
            return new qin_boolean_1.QinBoolean(options);
        case QinMutants.INTEGER:
            return new qin_integer_1.QinInteger(options);
        case QinMutants.STRING:
            return new qin_string_1.QinString(options);
        case QinMutants.COMBO:
            return new qin_combo_1.QinCombo(options);
        case QinMutants.ICON_PICK:
            return new qin_icon_pick_1.QinIconPick(options);
        case QinMutants.FILE_PATH:
            return new qin_file_path_1.QinFilePath(options);
        case QinMutants.FILE_PICK:
            return new qin_file_pick_1.QinFilePick(options);
        case QinMutants.FILE_VIEW:
            return new qin_file_view_1.QinFileView(options);
        default:
            throw new Error("Unknown kind of mutant to create: " + kind);
    }
}
exports.QinMutantsArm = {
    newEdit,
};

},{"./qin-boolean":22,"./qin-combo":25,"./qin-file-path":29,"./qin-file-pick":30,"./qin-file-view":31,"./qin-icon-pick":33,"./qin-integer":35,"./qin-string":46}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPanel = void 0;
const qin_base_1 = require("./qin-base");
class QinPanel extends qin_base_1.QinBase {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "panel", document.createElement("div"));
        this.style.putAsDisplayFlex();
        if (options === null || options === void 0 ? void 0 : options.items) {
            for (const item of options.items) {
                item.install(this);
            }
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinPanel = QinPanel;

},{"./qin-base":21}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPopup = void 0;
const qin_tool_1 = require("./qin-tool");
class QinPopup {
    constructor(contents) {
        this._qinMain = qin_tool_1.QinTool.qinpel.jobbed.newPopup(contents.castedQine());
    }
    show() {
        this._qinMain.show();
    }
    showOnParent(parent) {
        this._qinMain.showOnParent(parent.qinedHTML);
    }
    showOnBounds(bounds) {
        this._qinMain.showOnBounds(bounds);
    }
    close() {
        this._qinMain.close();
    }
}
exports.QinPopup = QinPopup;

},{"./qin-tool":50}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinRow = void 0;
const qin_panel_1 = require("./qin-panel");
class QinRow extends qin_panel_1.QinPanel {
    constructor(options, isQindred) {
        super(options, (isQindred ? isQindred + "_" : "") + "row");
        this.style.putAsFlexDirectionRow();
        this.style.putAsFlexWrapNot();
        this.qinedHTML.style.minWidth = "min-content";
        this.qinedHTML.style.minHeight = "min-content";
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinRow = QinRow;

},{"./qin-panel":39}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinScroll = void 0;
const qin_panel_1 = require("./qin-panel");
class QinScroll extends qin_panel_1.QinPanel {
    constructor(options, isQindred) {
        super(options, (isQindred ? isQindred + "_" : "") + "scroll");
        this.style.putAsScroll();
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinScroll = QinScroll;

},{"./qin-panel":39}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSpacer = void 0;
const qin_panel_1 = require("./qin-panel");
class QinSpacer extends qin_panel_1.QinPanel {
    constructor(distance, isQindred) {
        super(null, (isQindred ? isQindred + "_" : "") + "spacer");
        this.style.putAsMinSize(distance !== null && distance !== void 0 ? distance : 4, distance !== null && distance !== void 0 ? distance : 4);
    }
}
exports.QinSpacer = QinSpacer;

},{"./qin-panel":39}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSplitter = void 0;
const qin_base_1 = require("./qin-base");
class QinSplitter extends qin_base_1.QinBase {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "splitter", document.createElement("div"));
        this._elSideA = document.createElement("div");
        this._elMover = document.createElement("div");
        this._elGrowA = document.createElement("div");
        this._elGrowB = document.createElement("div");
        this._elSideB = document.createElement("div");
        this._isHorizontal = true;
        this._qinSideA = null;
        this._qinSideB = null;
        this.qinedHTML.appendChild(this._elSideA);
        this.qinedHTML.appendChild(this._elMover);
        this._elMover.appendChild(this._elGrowA);
        this._elMover.appendChild(this._elGrowB);
        this.qinedHTML.appendChild(this._elSideB);
        this.qinedHTML.style.display = "flex";
        this.qinedHTML.style.flexWrap = "nowrap";
        this._elSideA.style.display = "flex";
        this._elSideA.style.flexWrap = "nowrap";
        this._elSideA.style.overflow = "auto";
        this._elMover.style.display = "flex";
        this._elMover.style.flexWrap = "nowrap";
        this._elMover.style.borderRadius = "12px";
        this._elMover.style.border = "1px solid rgba(255,250,239,0.1)";
        this._elMover.style.overflow = "hidden";
        this._elMover.style.flex = "0";
        this._elGrowA.style.flex = "1";
        this._elGrowB.style.flex = "1";
        this._elSideB.style.display = "flex";
        this._elSideB.style.flexWrap = "nowrap";
        this._elSideB.style.overflow = "auto";
        let balance = (grow, fall) => {
            let related = this._isHorizontal ? "width" : "height";
            let growAt = parseInt(grow.style[related]);
            let fallAt = parseInt(fall.style[related]);
            if (fallAt <= 10)
                return;
            grow.style[related] = growAt + 10 + "%";
            fall.style[related] = fallAt - 10 + "%";
        };
        this._elGrowA.addEventListener("mousedown", (_) => balance(this._elSideA, this._elSideB));
        this._elGrowA.addEventListener("touchstart", (_) => balance(this._elSideA, this._elSideB));
        this._elGrowB.addEventListener("mousedown", (_) => balance(this._elSideB, this._elSideA));
        this._elGrowB.addEventListener("touchstart", (_) => balance(this._elSideB, this._elSideA));
        if (options) {
            if (options.sideA) {
                this.setSideA(options.sideA);
            }
            if (options.sideB) {
                this.setSideB(options.sideB);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.horizontal) {
            this.setHorizontal();
        }
        else {
            this.setVertical();
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    addChild(child) {
        if (this._qinSideA === null) {
            this._qinSideA = child;
            this._elSideA.appendChild(child.qinedHTML);
        }
        else {
            if (this._qinSideB !== null) {
                this._qinSideB.unInstall();
                this._qinSideB = null;
            }
            this._qinSideB = child;
            this._elSideB.appendChild(child.qinedHTML);
        }
        this._baseChildren.push(child);
    }
    delChild(child) {
        let index = this._baseChildren.indexOf(child);
        if (index > -1) {
            this._baseChildren.splice(index, 1);
        }
        if (this._qinSideA === child) {
            this._elSideA.removeChild(child.qinedHTML);
            this._qinSideA = null;
        }
        else if (this._qinSideB === child) {
            this._elSideB.removeChild(child.qinedHTML);
            this._qinSideB = null;
        }
    }
    setHorizontal() {
        this.qinedHTML.style.flexDirection = "row";
        this._elMover.style.flexDirection = "row";
        this._elSideA.style.width = "50%";
        this._elSideA.style.height = "100%";
        this._elSideB.style.width = "50%";
        this._elSideB.style.height = "100%";
        this._elMover.style.minWidth = "24px";
        this._elMover.style.maxWidth = "24px";
        this._elMover.style.minHeight = "initial";
        this._elMover.style.maxHeight = "initial";
        this._elMover.style.width = "24px";
        this._elMover.style.height = "100%";
        this._elGrowA.style.background =
            "linear-gradient(90deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._elGrowB.style.background =
            "linear-gradient(270deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._isHorizontal = true;
    }
    setVertical() {
        this.qinedHTML.style.flexDirection = "column";
        this._elMover.style.flexDirection = "column";
        this._elSideA.style.width = "100%";
        this._elSideA.style.height = "50%";
        this._elSideB.style.width = "100%";
        this._elSideB.style.height = "50%";
        this._elMover.style.minWidth = "initial";
        this._elMover.style.maxWidth = "initial";
        this._elMover.style.minHeight = "24px";
        this._elMover.style.maxHeight = "24px";
        this._elMover.style.width = "100%";
        this._elMover.style.height = "24px";
        this._elGrowA.style.background =
            "linear-gradient(180deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._elGrowB.style.background =
            "linear-gradient(0deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._isHorizontal = false;
    }
    setSideA(side) {
        if (this._qinSideA !== null) {
            this._qinSideA.unInstall();
            this._qinSideA = null;
        }
        this._qinSideA = side;
        this._elSideA.appendChild(side.qinedHTML);
    }
    setSideB(side) {
        if (this._qinSideB !== null) {
            this._qinSideB.unInstall();
            this._qinSideB = null;
        }
        this._qinSideB = side;
        this._elSideB.appendChild(side.qinedHTML);
    }
}
exports.QinSplitter = QinSplitter;

},{"./qin-base":21}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinStack = void 0;
const qin_panel_1 = require("./qin-panel");
class QinStack extends qin_panel_1.QinPanel {
    constructor(options, isQindred) {
        super(options, (isQindred ? isQindred + "_" : "") + "stack");
        this.style.putAsFlexDirectionRow();
        this.style.putAsFlexWrapNot();
    }
    put(item) {
        item.install(this);
        return this;
    }
    addChild(child) {
        this.children().forEach((inChild) => {
            inChild.unDisplay();
        });
        super.addChild(child);
    }
    stack(child) {
        return this.put(child);
    }
    show(child) {
        this.children().forEach((inChild) => {
            if (inChild === child) {
                inChild.reDisplay();
            }
            else {
                inChild.unDisplay();
            }
        });
    }
}
exports.QinStack = QinStack;

},{"./qin-panel":39}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinString = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinString extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "string", document.createElement("input"));
        this.castedQine().type = "text";
        if (options === null || options === void 0 ? void 0 : options.maxLength) {
            this.castedQine().maxLength = options.maxLength;
            let position = Math.min(Math.max(options.maxLength - 10, 0), 90);
            let width = Math.floor(90 + (position * 7) / 3);
            this.qinedHTML.style.width = width + "px";
        }
        qinpel_res_1.QinSkin.styleAsEdit(this.qinedHTML);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this.castedQine().value;
    }
    setData(data) {
        this.castedQine().value = data;
    }
    insertAtCursor(data) {
        if (!data)
            return;
        let startPos = this.castedQine().selectionStart;
        let endPos = this.castedQine().selectionEnd;
        let oldVal = this.castedQine().value;
        let newVal = (startPos > 0 ? oldVal.substring(0, startPos) : "") +
            data +
            (endPos < oldVal.length ? oldVal.substring(endPos) : "");
        this.castedQine().value = newVal;
        this.castedQine().selectionStart = startPos;
        this.castedQine().selectionEnd = startPos + data.length;
    }
}
exports.QinString = QinString;

},{"./qin-edit":27,"qinpel-res":51}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTable = void 0;
const qin_base_1 = require("./qin-base");
class QinTable extends qin_base_1.QinBase {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "table", document.createElement("div"));
        this._elTable = document.createElement("table");
        this._elTHead = document.createElement("thead");
        this._elTHeadRow = document.createElement("tr");
        this._elTBody = document.createElement("tbody");
        this._linesSize = 0;
        this.qinedHTML.appendChild(this._elTable);
        this._elTable.appendChild(this._elTHead);
        this._elTHead.appendChild(this._elTHeadRow);
        this._elTable.appendChild(this._elTBody);
        styles.applyOnTable(this._elTable);
        styles.applyOnHead(this._elTHead);
        styles.applyOnHeadRow(this._elTHeadRow);
        styles.applyOnBody(this._elTBody);
    }
    castedQine() {
        return this.qinedHTML;
    }
    getLines() {
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
    addLines(lines) {
        this.delLines();
        for (const line of lines) {
            this.addLine(line);
        }
    }
    setHead(head) {
        this._elTHeadRow.innerHTML = "";
        for (const cell of head) {
            let th = document.createElement("th");
            th.innerText = cell;
            styles.applyOnHeadCol(th);
            this._elTHeadRow.appendChild(th);
        }
    }
    getHead() {
        let result = [];
        this._elTHeadRow.querySelectorAll("th").forEach((th) => {
            result.push(th.innerText);
        });
        return result;
    }
    addHead(head) {
        let th = document.createElement("th");
        th.innerText = head;
        styles.applyOnHeadCol(th);
        this._elTHeadRow.appendChild(th);
    }
    addLine(line) {
        let tr = document.createElement("tr");
        if (this._linesSize % 2 === 0) {
            styles.applyOnBodyRow(tr);
        }
        else {
            styles.applyOnBodyRowOdd(tr);
        }
        for (const cell of line) {
            let td = document.createElement("td");
            td.innerText = cell.toString();
            styles.applyOnBodyCol(td);
            tr.appendChild(td);
        }
        this._elTBody.appendChild(tr);
        this._linesSize++;
    }
    delLines() {
        this._elTBody.innerHTML = "";
        this._linesSize = 0;
    }
}
exports.QinTable = QinTable;
const styles = {
    applyOnTable: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.border = "1px solid #9e9e9e";
    },
    applyOnHead: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
    },
    applyOnHeadRow: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.backgroundColor = "#56cd6436";
    },
    applyOnHeadCol: (el) => {
        el.style.margin = "0px";
        el.style.padding = "5px";
        el.style.borderRight = "1px solid #5e5e5e";
        el.style.borderBottom = "2px solid #5e5e5e";
    },
    applyOnBody: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
    },
    applyOnBodyRow: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.backgroundColor = "#5664cd36";
    },
    applyOnBodyRowOdd: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.backgroundColor = "#cda95636";
    },
    applyOnBodyCol: (el) => {
        el.style.margin = "0px";
        el.style.padding = "5px";
        el.style.borderRight = "1px solid #5e5e5e";
        el.style.borderBottom = "2px solid #5e5e5e";
    },
};

},{"./qin-base":21}],48:[function(require,module,exports){
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
    constructor(options, isQindred) {
        super(null, (isQindred ? isQindred + "_" : "") + "tabs");
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
            if (qinEvent.isMain) {
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
        this._qinPanel.unInstallChildren();
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

},{"./qin-button":23,"./qin-column":24,"./qin-label":36,"./qin-line":37,"./qin-panel":39,"qinpel-res":51}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTitled = void 0;
const qin_column_1 = require("./qin-column");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
class QinTitled extends qin_column_1.QinColumn {
    constructor(options, isQindred) {
        super(null, (isQindred ? isQindred + "_" : "") + "titled");
        this._qinTitle = new qin_label_1.QinLabel();
        this._qinHead = new qin_line_1.QinLine({ items: [this._qinTitle] });
        this._qinBody = new qin_line_1.QinLine();
        if (options === null || options === void 0 ? void 0 : options.title) {
            this._qinTitle.title = options.title;
        }
        this._qinHead.install(this);
        this._qinBody.install(this);
        if (options === null || options === void 0 ? void 0 : options.items) {
            options.items.forEach((item) => item.install(this));
        }
    }
    put(item) {
        item.install(this);
        return this;
    }
    addChild(child) {
        if (child === this._qinBody || child === this._qinHead) {
            super.addChild(child);
        }
        else {
            this._qinBody.addChild(child);
        }
    }
    delChild(child) {
        if (child === this._qinBody || child === this._qinHead) {
            super.delChild(child);
        }
        else {
            this._qinBody.delChild(child);
        }
    }
    get title() {
        return this._qinTitle.title;
    }
    set title(title) {
        this._qinTitle.title = title;
    }
}
exports.QinTitled = QinTitled;

},{"./qin-column":24,"./qin-label":36,"./qin-line":37}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTool = void 0;
const refQinpel = window.frameElement.qinpel;
exports.QinTool = {
    qinpel: refQinpel,
};

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = exports.QinSkin = exports.QinStyles = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = exports.QinHead = exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = exports.QinBody = exports.QinNature = exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
var qin_arm_1 = require("./qin-arm");
Object.defineProperty(exports, "QinEvent", { enumerable: true, get: function () { return qin_arm_1.QinEvent; } });
var qin_arm_2 = require("./qin-arm");
Object.defineProperty(exports, "QinWaiters", { enumerable: true, get: function () { return qin_arm_2.QinWaiters; } });
var qin_arm_3 = require("./qin-arm");
Object.defineProperty(exports, "QinPointerCalls", { enumerable: true, get: function () { return qin_arm_3.QinPointerCalls; } });
var qin_arm_4 = require("./qin-arm");
Object.defineProperty(exports, "QinArm", { enumerable: true, get: function () { return qin_arm_4.QinArm; } });
var qin_body_1 = require("./qin-body");
Object.defineProperty(exports, "QinNature", { enumerable: true, get: function () { return qin_body_1.QinNature; } });
var qin_body_2 = require("./qin-body");
Object.defineProperty(exports, "QinBody", { enumerable: true, get: function () { return qin_body_2.QinBody; } });
var qin_foot_1 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesNature", { enumerable: true, get: function () { return qin_foot_1.QinFilesNature; } });
var qin_foot_2 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesOperation", { enumerable: true, get: function () { return qin_foot_2.QinFilesOperation; } });
var qin_foot_3 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesDescriptor", { enumerable: true, get: function () { return qin_foot_3.QinFilesDescriptor; } });
var qin_foot_4 = require("./qin-foot");
Object.defineProperty(exports, "QinFoot", { enumerable: true, get: function () { return qin_foot_4.QinFoot; } });
var qin_head_1 = require("./qin-head");
Object.defineProperty(exports, "QinHead", { enumerable: true, get: function () { return qin_head_1.QinHead; } });
var qin_skin_1 = require("./qin-skin");
Object.defineProperty(exports, "QinPoint", { enumerable: true, get: function () { return qin_skin_1.QinPoint; } });
var qin_skin_2 = require("./qin-skin");
Object.defineProperty(exports, "QinDimension", { enumerable: true, get: function () { return qin_skin_2.QinDimension; } });
var qin_skin_3 = require("./qin-skin");
Object.defineProperty(exports, "QinBounds", { enumerable: true, get: function () { return qin_skin_3.QinBounds; } });
var qin_skin_4 = require("./qin-skin");
Object.defineProperty(exports, "QinGrandeur", { enumerable: true, get: function () { return qin_skin_4.QinGrandeur; } });
var qin_skin_5 = require("./qin-skin");
Object.defineProperty(exports, "QinStyles", { enumerable: true, get: function () { return qin_skin_5.QinStyles; } });
var qin_skin_6 = require("./qin-skin");
Object.defineProperty(exports, "QinSkin", { enumerable: true, get: function () { return qin_skin_6.QinSkin; } });
var qin_soul_1 = require("./qin-soul");
Object.defineProperty(exports, "QinSoul", { enumerable: true, get: function () { return qin_soul_1.QinSoul; } });

},{"./qin-arm":52,"./qin-body":53,"./qin-foot":54,"./qin-head":55,"./qin-skin":56,"./qin-soul":57}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
const qin_skin_1 = require("./qin-skin");
class QinEvent {
    constructor(origin, isStart, kind) {
        var _a, _b, _c;
        this._eventKey = null;
        this._eventMouse = null;
        this._eventTouch = null;
        this._point = null;
        this._stop = false;
        this._origin = origin;
        this._start = isStart;
        this._eventKey = (_a = kind === null || kind === void 0 ? void 0 : kind.eventKey) !== null && _a !== void 0 ? _a : null;
        this._eventMouse = (_b = kind === null || kind === void 0 ? void 0 : kind.eventMouse) !== null && _b !== void 0 ? _b : null;
        this._eventTouch = (_c = kind === null || kind === void 0 ? void 0 : kind.eventTouch) !== null && _c !== void 0 ? _c : null;
        if (this._eventMouse) {
            this._point = makeEventMousePoint(isStart, this._eventMouse);
        }
        else if (this._eventTouch) {
            this._point = makeEventTouch(isStart, this._eventTouch);
        }
    }
    get isStart() {
        return this._start;
    }
    get fromOrigin() {
        return this._origin;
    }
    get fromTarget() {
        if (this._eventKey) {
            return this._eventKey.target;
        }
        else if (this._eventMouse) {
            return this._eventMouse.target;
        }
        else if (this._eventTouch) {
            return this._eventTouch.target;
        }
        return null;
    }
    get fromTyping() {
        return !!this._eventKey;
    }
    get fromPointing() {
        return !!this._point;
    }
    get hasAlt() {
        if (this._eventKey) {
            return this._eventKey.altKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.altKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.altKey;
        }
        return false;
    }
    get hasCtrl() {
        if (this._eventKey) {
            return this._eventKey.ctrlKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.ctrlKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.ctrlKey;
        }
        return false;
    }
    get hasShift() {
        if (this._eventKey) {
            return this._eventKey.shiftKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.shiftKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.shiftKey;
        }
        return false;
    }
    get hasMeta() {
        if (this._eventKey) {
            return this._eventKey.metaKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.metaKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.metaKey;
        }
        return false;
    }
    get keyTyped() {
        if (this._eventKey) {
            return this._eventKey.key;
        }
        return null;
    }
    get isEnter() {
        return isKeyEnter(this._eventKey);
    }
    get isEscape() {
        return isKeyEscape(this._eventKey);
    }
    get isSpace() {
        return isKeySpace(this._eventKey);
    }
    get isDouble() {
        if (this._eventMouse) {
            return isEventMouseDouble(this._start, this._eventMouse);
        }
        else if (this._eventTouch) {
            return isEventTouchDouble(this._start, this._eventTouch);
        }
        return false;
    }
    get isLong() {
        if (this._eventMouse) {
            return isEventMouseLong(this._start, this._eventMouse);
        }
        else if (this._eventTouch) {
            return isEventTouchLong(this._start, this._eventTouch);
        }
        return false;
    }
    get point() {
        return this._point;
    }
    get pointX() {
        var _a;
        return (_a = this._point) === null || _a === void 0 ? void 0 : _a.posX;
    }
    get pointY() {
        var _a;
        return (_a = this._point) === null || _a === void 0 ? void 0 : _a.posY;
    }
    get isFirstButton() {
        return isFirstButton(this._eventMouse);
    }
    get isMiddleButton() {
        return isMiddleButton(this._eventMouse);
    }
    get isSecondButton() {
        return isSecondButton(this._eventMouse);
    }
    get isOneFinger() {
        return isOneFinger(this._eventTouch);
    }
    get isTwoFingers() {
        return isTwoFingers(this._eventTouch);
    }
    get isThreeFingers() {
        return isThreeFingers(this._eventTouch);
    }
    get isFourFingers() {
        return isFourFingers(this._eventTouch);
    }
    get isMain() {
        if (this._start) {
            return false;
        }
        if (this._eventKey) {
            return isMainKey(this._eventKey);
        }
        else if (this._eventMouse) {
            return isMainMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMainTouch(this._eventTouch);
        }
        return false;
    }
    get isMainKey() {
        if (this._start) {
            return false;
        }
        return isMainKey(this._eventKey);
    }
    get isMainMouse() {
        if (this._start) {
            return false;
        }
        return isMainMouse(this._eventMouse);
    }
    get isMainTouch() {
        if (this._start) {
            return false;
        }
        return isMainTouch(this._eventTouch);
    }
    get isMainPoint() {
        if (this._start) {
            return false;
        }
        return isMainMouse(this._eventMouse) || isMainTouch(this._eventTouch);
    }
    get isMidi() {
        if (this._start) {
            return false;
        }
        if (this._eventKey) {
            return isMidiKey(this._eventKey);
        }
        else if (this._eventMouse) {
            return isMidiMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMidiTouch(this._eventTouch);
        }
        return false;
    }
    get isMidiKey() {
        if (this._start) {
            return false;
        }
        return isMidiKey(this._eventKey);
    }
    get isMidiMouse() {
        if (this._start) {
            return false;
        }
        return isMidiMouse(this._eventMouse);
    }
    get isMidiTouch() {
        if (this._start) {
            return false;
        }
        return isMidiTouch(this._eventTouch);
    }
    get isMidiPoint() {
        if (this._start) {
            return false;
        }
        if (this._eventMouse) {
            return isMidiMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMidiTouch(this._eventTouch);
        }
        return false;
    }
    get isMenu() {
        if (this._start) {
            return false;
        }
        if (this._eventKey) {
            return isMenuKey(this._eventKey);
        }
        else if (this._eventKey) {
            return isMenuMouse(this._eventMouse);
        }
        else if (this._eventKey) {
            return isMenuTouch(this._eventTouch);
        }
        return false;
    }
    get isMenuKey() {
        if (this._start) {
            return false;
        }
        return isMenuKey(this._eventKey);
    }
    get isMenuMouse() {
        if (this._start) {
            return false;
        }
        return isMenuMouse(this._eventMouse);
    }
    get isMenuTouch() {
        if (this._start) {
            return false;
        }
        return isMenuTouch(this._eventTouch);
    }
    get isMenuPoint() {
        if (this._start) {
            return false;
        }
        if (this._eventMouse) {
            return isMenuMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMenuTouch(this._eventTouch);
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
    return stopPropagation(event);
}
function stopPropagation(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    event.cancelBubble = true;
    return false;
}
var lastEventMouse = null;
var lastEventTouch = null;
function makeEventMousePoint(isStart, ev) {
    if (!ev) {
        return null;
    }
    const result = {
        posX: 0,
        posY: 0,
    };
    if (ev.clientX || ev.clientY) {
        result.posX = ev.clientX;
        result.posY = ev.clientY;
    }
    if (isStart) {
        lastEventMouse = ev;
    }
    return result;
}
function makeEventTouch(isStart, ev) {
    if (!ev) {
        return null;
    }
    const result = {
        posX: 0,
        posY: 0,
    };
    if (ev.touches && this._event.touches.length >= 1) {
        let index = Math.floor(this._event.touches.length / 2);
        result.posX = ev.touches[index].clientX;
        result.posY = ev.touches[index].clientY;
    }
    if (isStart) {
        lastEventTouch = ev;
    }
    return result;
}
function isEventMouseDouble(isStart, ev) {
    if (!isStart || lastEventMouse == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventMouse.timeStamp;
    return timeDif < 450;
}
function isEventTouchDouble(isStart, ev) {
    if (!isStart || lastEventTouch == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventTouch.timeStamp;
    return timeDif < 450;
}
function isEventMouseLong(isStart, ev) {
    if (!isStart || lastEventMouse == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventMouse.timeStamp;
    return timeDif > 840;
}
function isEventTouchLong(isStart, ev) {
    if (!isStart || lastEventTouch == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventTouch.timeStamp;
    return timeDif > 840;
}
function isKeyInList(ev, list) {
    if (!ev) {
        return false;
    }
    let keyLower = ev.key.toLowerCase();
    return list.indexOf(keyLower) > -1;
}
function isKeyEnter(ev) {
    if (!ev) {
        return false;
    }
    return isKeyInList(ev, ["enter", "return"]) || ev.keyCode === 13;
}
function isKeyEscape(ev) {
    if (!ev) {
        return false;
    }
    return isKeyInList(ev, ["esc", "escape"]) || ev.keyCode === 27;
}
function isKeySpace(ev) {
    if (!ev) {
        return false;
    }
    return isKeyInList(ev, [" ", "space", "spacebar"]) || ev.keyCode === 32;
}
function isFirstButton(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 0;
}
function isMiddleButton(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 1;
}
function isSecondButton(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 2;
}
function isOneFinger(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 1;
}
function isTwoFingers(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 2;
}
function isThreeFingers(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 3;
}
function isFourFingers(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 4;
}
function isMainKey(ev) {
    if (!ev) {
        return false;
    }
    return isKeyEnter(ev);
}
function isMidiKey(ev) {
    if (!ev) {
        return false;
    }
    return ev.ctrlKey && ev.altKey && isKeySpace(ev);
}
function isMenuKey(ev) {
    if (!ev) {
        return false;
    }
    return ev.ctrlKey && !ev.altKey && isKeySpace(ev);
}
function isMainMouse(ev) {
    if (!ev) {
        return false;
    }
    return isFirstButton(ev);
}
function isMainTouch(ev) {
    if (!ev) {
        return false;
    }
    return isOneFinger(ev);
}
function isMidiMouse(ev) {
    if (!ev) {
        return false;
    }
    return isMiddleButton(ev);
}
function isMidiTouch(ev) {
    if (!ev) {
        return false;
    }
    return isThreeFingers(ev);
}
function isMenuMouse(ev) {
    if (!ev) {
        return false;
    }
    return isSecondButton(ev);
}
function isMenuTouch(ev) {
    if (!ev) {
        return false;
    }
    return isTwoFingers(ev);
}
function addAction(origin, action) {
    origin.addEventListener("keydown", actKeyDown);
    origin.addEventListener("keyup", actKeyUp);
    origin.addEventListener("mousedown", actMouseDown);
    origin.addEventListener("mouseup", actMouseUp);
    origin.addEventListener("touchstart", actTouchStart);
    origin.addEventListener("touchend", actTouchEnd);
    function actKeyDown(ev) {
        let qinEvent = new QinEvent(origin, true, { eventKey: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(origin, false, { eventKey: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
    function actMouseDown(ev) {
        let qinEvent = new QinEvent(origin, true, { eventMouse: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(origin, false, { eventMouse: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
    function actTouchStart(ev) {
        let qinEvent = new QinEvent(origin, true, { eventTouch: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(origin, false, { eventTouch: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
}
function addActionMain(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMain) {
            action(qinEvent);
        }
    });
}
function addActionMainKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainKey) {
            action(qinEvent);
        }
    });
}
function addActionMainMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainMouse) {
            action(qinEvent);
        }
    });
}
function addActionMainTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainMouse) {
            action(qinEvent);
        }
    });
}
function addActionMainPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainPoint) {
            action(qinEvent);
        }
    });
}
function addActionMidi(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidi) {
            action(qinEvent);
        }
    });
}
function addActionMidiKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiKey) {
            action(qinEvent);
        }
    });
}
function addActionMidiMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiMouse) {
            action(qinEvent);
        }
    });
}
function addActionMidiTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiMouse) {
            action(qinEvent);
        }
    });
}
function addActionMidiPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiPoint) {
            action(qinEvent);
        }
    });
}
function addActionMenu(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenu) {
            action(qinEvent);
        }
    });
}
function addActionMenuKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuKey) {
            action(qinEvent);
        }
    });
}
function addActionMenuMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuMouse) {
            action(qinEvent);
        }
    });
}
function addActionMenuTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuMouse) {
            action(qinEvent);
        }
    });
}
function addActionMenuPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuPoint) {
            action(qinEvent);
        }
    });
}
function addActions(origins, action) {
    for (const element of origins) {
        addAction(element, action);
    }
}
function addActionsMain(origins, action) {
    for (const element of origins) {
        addActionMain(element, action);
    }
}
function addActionsMainKey(origins, action) {
    for (const element of origins) {
        addActionMain(element, action);
    }
}
function addActionsMainPoint(origins, action) {
    for (const element of origins) {
        addActionMain(element, action);
    }
}
function addMover(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitPosX = 0;
    var dragInitPosY = 0;
    for (let source of sources) {
        source.onmousedown = onMoverMouseInit;
        source.ontouchstart = onMoverTouchInit;
        source.ondragstart = stopEvent;
    }
    function onMoverMouseInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventMouseDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventMouseLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventMousePoint(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitPosX = parseInt(target.style.left, 10);
        dragInitPosY = parseInt(target.style.top, 10);
        document.onmousemove = onMoverMouseMove;
        document.ontouchmove = onMoverTouchMove;
        document.onmouseup = onMoverClose;
        document.ontouchend = onMoverClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onMoverTouchInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventTouchDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventTouchLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventTouch(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitPosX = parseInt(target.style.left, 10);
        dragInitPosY = parseInt(target.style.top, 10);
        document.onmousemove = onMoverMouseMove;
        document.ontouchmove = onMoverTouchMove;
        document.onmouseup = onMoverClose;
        document.ontouchend = onMoverClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onMoverMouseMove(ev) {
        const pointer = makeEventMousePoint(false, ev);
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
    function onMoverTouchMove(ev) {
        const pointer = makeEventTouch(false, ev);
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
        source.onmousedown = onResizerMouseInit;
        source.ontouchstart = onResizerTouchInit;
        source.ondragstart = stopEvent;
    }
    function onResizerMouseInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventMouseDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventMouseLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventMousePoint(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitWidth = parseInt(target.style.width, 10);
        dragInitHeight = parseInt(target.style.height, 10);
        document.onmousemove = onResizerMouseMove;
        document.ontouchmove = onResizerTouchMove;
        document.onmouseup = onResizerClose;
        document.ontouchend = onResizerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onResizerTouchInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventTouchDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventTouchLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventTouch(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitWidth = parseInt(target.style.width, 10);
        dragInitHeight = parseInt(target.style.height, 10);
        document.onmousemove = onResizerMouseMove;
        document.ontouchmove = onResizerTouchMove;
        document.onmouseup = onResizerClose;
        document.ontouchend = onResizerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onResizerMouseMove(ev) {
        const pointer = makeEventMousePoint(false, ev);
        var frameDragDifX = pointer.posX - dragInitEventX;
        var frameDragDifY = pointer.posY - dragInitEventY;
        var frameDragFinalWidth = dragInitWidth + frameDragDifX;
        var frameDragFinalHeight = dragInitHeight + frameDragDifY;
        target.style.width = (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
        target.style.height = (frameDragFinalHeight > 0 ? frameDragFinalHeight : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onResizerTouchMove(ev) {
        const pointer = makeEventTouch(false, ev);
        var frameDragDifX = pointer.posX - dragInitEventX;
        var frameDragDifY = pointer.posY - dragInitEventY;
        var frameDragFinalWidth = dragInitWidth + frameDragDifX;
        var frameDragFinalHeight = dragInitHeight + frameDragDifY;
        target.style.width = (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
        target.style.height = (frameDragFinalHeight > 0 ? frameDragFinalHeight : 0) + "px";
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
    target.onmousedown = onScrollerMouseInit;
    target.ontouchstart = onScrollerTouchInit;
    function onScrollerMouseInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        stopPropagation(ev);
        if (dragCalls && dragCalls.onDouble && isEventMouseDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventMouseLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventMousePoint(true, ev);
        dragInitX = pointer.posX;
        dragInitY = pointer.posY;
        dragScrollX = target.scrollLeft;
        dragScrollY = target.scrollTop;
        document.onmousemove = onScrollerMouseMove;
        document.ontouchmove = onScrollerTouchMove;
        document.ontouchend = onScrollerClose;
        document.onmouseup = onScrollerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onScrollerTouchInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventTouchDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventTouchLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventTouch(true, ev);
        dragInitX = pointer.posX;
        dragInitY = pointer.posY;
        dragScrollX = target.scrollLeft;
        dragScrollY = target.scrollTop;
        document.onmousemove = onScrollerMouseMove;
        document.ontouchmove = onScrollerTouchMove;
        document.onmouseup = onScrollerClose;
        document.ontouchend = onScrollerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onScrollerMouseMove(ev) {
        const pointer = makeEventMousePoint(false, ev);
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
    function onScrollerTouchMove(ev) {
        const pointer = makeEventTouch(false, ev);
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
    makeEventMousePoint,
    makeEventTouch,
    isEventMouseDouble,
    isEventTouchDouble,
    isEventMouseLong,
    isEventTouchLong,
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
    isMainMouse,
    isMainTouch,
    isMidiMouse,
    isMidiTouch,
    isMenuMouse,
    isMenuTouch,
    addAction,
    addActionMain,
    addActionMainKey,
    addActionMainMouse,
    addActionMainTouch,
    addActionMainPoint,
    addActionMidi,
    addActionMidiKey,
    addActionMidiMouse,
    addActionMidiTouch,
    addActionMidiPoint,
    addActionMenu,
    addActionMenuKey,
    addActionMenuMouse,
    addActionMenuTouch,
    addActionMenuPoint,
    addActions,
    addActionsMain,
    addActionsMainKey,
    addActionsMainPoint,
    addMover,
    addResizer,
    addScroller,
};

},{"./qin-skin":56}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBody = exports.QinNature = void 0;
var QinNature;
(function (QinNature) {
    QinNature["BIT"] = "BIT";
    QinNature["BOOL"] = "BOOL";
    QinNature["BYTE"] = "BYTE";
    QinNature["TINY"] = "TINY";
    QinNature["SMALL"] = "SMALL";
    QinNature["INT"] = "INT";
    QinNature["LONG"] = "LONG";
    QinNature["SERIAL"] = "SERIAL";
    QinNature["BIG_SERIAL"] = "BIG_SERIAL";
    QinNature["FLOAT"] = "FLOAT";
    QinNature["REAL"] = "REAL";
    QinNature["DOUBLE"] = "DOUBLE";
    QinNature["NUMERIC"] = "NUMERIC";
    QinNature["BIG_NUMERIC"] = "BIG_NUMERIC";
    QinNature["CHAR"] = "CHAR";
    QinNature["CHARS"] = "CHARS";
    QinNature["DATE"] = "DATE";
    QinNature["TIME"] = "TIME";
    QinNature["DATE_TIME"] = "DATE_TIME";
    QinNature["TIMESTAMP"] = "TIMESTAMP";
    QinNature["BYTES"] = "BYTES";
    QinNature["BLOB"] = "BLOB";
    QinNature["TEXT"] = "TEXT";
})(QinNature = exports.QinNature || (exports.QinNature = {}));
function makeQinUID() {
    return ("qin_uid_" +
        getLastChars(Date.now() + "", 4, "0", false) +
        "_" +
        fillToString(Math.floor(Math.random() * 10000), 5, "0", false));
}
function makeQindredUID(qindred) {
    return (qindred +
        "_qindred_" +
        getLastChars(Date.now() + "", 4, "0", false) +
        "_" +
        fillToString(Math.floor(Math.random() * 10000), 5, "0", false));
}
function getLastChars(source, count, fillWith = " ", atEnd = true) {
    if (source.length < count) {
        return fillToString(source, count, fillWith, atEnd);
    }
    return source.substring(source.length - count);
}
function fillToString(value, tilSize, withStr = " ", atEnd = true) {
    let result = value.toString();
    while (result.length < tilSize) {
        if (atEnd) {
            result += withStr;
        }
        else {
            result = withStr + result;
        }
    }
    return result;
}
function getTextLines(fromText) {
    return fromText.match(/[^\r\n]+/g);
}
function getCSVRows(fromText) {
    var lines = getTextLines(fromText);
    var result = [];
    for (let line of lines) {
        let row = new Array();
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
                    row.push(column_value);
                    column_value = "";
                    column_index++;
                }
                else {
                    column_value += actual;
                }
            }
        }
        column_value = unmaskSpecialChars(column_value);
        row.push(column_value);
        result.push(row);
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
    makeQinUID,
    makeQindredUID,
    getLastChars,
    fillToString,
    getTextLines,
    getCSVRows,
    maskSpecialChars,
    unmaskSpecialChars,
    parseParameters,
};

},{}],54:[function(require,module,exports){
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

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinHead = void 0;
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
    options["SameSite"] = "Strict";
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    updatedCookie += "; Secure";
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
    getCookie,
    setCookie,
    delCookie,
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

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSkin = exports.QinStyles = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = void 0;
const qin_arm_1 = require("./qin-arm");
class QinPoint {
}
exports.QinPoint = QinPoint;
class QinDimension {
}
exports.QinDimension = QinDimension;
class QinBounds {
}
exports.QinBounds = QinBounds;
var QinGrandeur;
(function (QinGrandeur) {
    QinGrandeur["SMALL"] = "small";
    QinGrandeur["MEDIUM"] = "medium";
    QinGrandeur["LARGE"] = "large";
})(QinGrandeur = exports.QinGrandeur || (exports.QinGrandeur = {}));
exports.QinStyles = {
    ColorForeground: "#180027ff",
    ColorBackground: "#fffcf9ff",
    ColorInactive: "#fcf9ffff",
    ColorActive: "#fdededff",
    ColorAccent: "#ae0000ff",
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
function styleAsBase(el) {
    el.style.margin = "1px";
    el.style.padding = "3px";
    el.style.outline = "none";
    el.style.color = exports.QinStyles.ColorForeground;
    el.style.fontFamily = "SourceSansPro";
    el.style.fontSize = "16px";
}
function styleAsEdit(el) {
    styleAsBase(el);
    el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    el.style.borderRadius = "3px";
    el.style.backgroundColor = exports.QinStyles.ColorInactive;
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
        if (size instanceof QinDimension) {
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
        return QinGrandeur.SMALL;
    }
    else if (width < 1000) {
        return QinGrandeur.MEDIUM;
    }
    else {
        return QinGrandeur.LARGE;
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
    if (size == QinGrandeur.LARGE) {
        return getDimensionLarge();
    }
    else if (size == QinGrandeur.MEDIUM) {
        return getDimensionMedium();
    }
    else {
        return getDimensionSmall();
    }
}
const dimensionSmall = {
    width: 21,
    height: 21,
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
    styleAsBase,
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

},{"./qin-arm":52}],57:[function(require,module,exports){
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

},{"./qin-arm":52,"./qin-body":53,"./qin-foot":54,"./qin-head":55,"./qin-skin":56}]},{},[17])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWV4cGVjdC5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWZpZWxkLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtZmlsdGVyLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtam9pbmVkLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtbWVudS5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLW1vZGVsLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtbW9kdWxlcy5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLW5hbWVzLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtcmVnLWJhci5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLXJlZy1lZGl0b3IuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC1yZWctbG9hZGVyLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtcmVnLXNlYXJjaC5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLXJlZy10YWJsZS5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLXJlZ2lzdGVyLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtdG9vbHMuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hbGwuanMiLCJidWlsZC9pbmRleC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYXNzZXRzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYmFzZS1zdHlsZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWJhc2UuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1ib29sZWFuLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYnV0dG9uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29sdW1uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29tYm8uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1kaXZpZGVyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZWRpdC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWZpZWxkLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZmlsZS1wYXRoLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZmlsZS1waWNrLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZmlsZS12aWV3LmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4taWNvbi1jZWxsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4taWNvbi1waWNrLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4taWNvbi5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWludGVnZXIuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1sYWJlbC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWxpbmUuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1tdXRhbnRzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tcGFuZWwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1wb3B1cC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXJvdy5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXNjcm9sbC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXNwYWNlci5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXNwbGl0dGVyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tc3RhY2suanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1zdHJpbmcuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10YWJsZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXRhYnMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10aXRsZWQuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10b29sLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9hbGwuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1hcm0uanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1ib2R5LmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tZm9vdC5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWhlYWQuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1za2luLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tc291bC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2phQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ppQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRFeHBlY3QgPSB2b2lkIDA7XHJcbmNsYXNzIEFkRXhwZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9zY29wZXMgPSBvcHRpb25zLnNjb3BlcztcclxuICAgICAgICB0aGlzLl9maWx0ZXJzID0gb3B0aW9ucy5maWx0ZXJzO1xyXG4gICAgICAgIHRoaXMuX3dhaXRlcnMgPSBvcHRpb25zLndhaXRlcnM7XHJcbiAgICB9XHJcbiAgICBnZXQgc2NvcGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY29wZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgZmlsdGVycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVycztcclxuICAgIH1cclxuICAgIGdldCB3YWl0ZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93YWl0ZXJzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRFeHBlY3QgPSBBZEV4cGVjdDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtZXhwZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRGaWVsZCA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNsYXNzIEFkRmllbGQge1xyXG4gICAgY29uc3RydWN0b3IobmV3ZXIpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5fZWRpdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdHlwZWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gbmV3ZXIudGl0bGU7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5ld2VyLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fYWxpYXMgPSBuZXdlci5hbGlhcztcclxuICAgICAgICB0aGlzLl9raW5kID0gbmV3ZXIua2luZDtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gbmV3ZXIub3B0aW9ucztcclxuICAgICAgICB0aGlzLl9rZXkgPSAoX2EgPSBuZXdlci5rZXkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9lZGl0ID0gcWlucGVsX2Nwc18xLlFpbk11dGFudHNBcm0ubmV3RWRpdCh0aGlzLl9raW5kLCB0aGlzLl9vcHRpb25zKTtcclxuICAgICAgICB0aGlzLl90eXBlZCA9IHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZSxcclxuICAgICAgICAgICAgdHlwZTogdGhpcy5lZGl0LmdldE5hdHVyZSgpLFxyXG4gICAgICAgICAgICBhbGlhczogdGhpcy5fYWxpYXMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIGdldCBraW5kKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9raW5kO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFsaWFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbGlhcztcclxuICAgIH1cclxuICAgIGdldCBvcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gICAgfVxyXG4gICAgZ2V0IGtleSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5O1xyXG4gICAgfVxyXG4gICAgZ2V0IGVkaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VkaXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgdHlwZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGVkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbHVlZCgpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuX25hbWU7XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLl9lZGl0LmdldE5hdHVyZSgpO1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5fZWRpdC5nZXREYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgdHlwZSwgZGF0YSB9O1xyXG4gICAgfVxyXG4gICAgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0LnNldERhdGEobnVsbCk7XHJcbiAgICB9XHJcbiAgICBmb2N1cygpIHtcclxuICAgICAgICB0aGlzLmVkaXQuZm9jdXMoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkRmllbGQgPSBBZEZpZWxkO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1maWVsZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkRmlsdGVyVGllcyA9IGV4cG9ydHMuQWRGaWx0ZXJMaWtlcyA9IGV4cG9ydHMuQWRGaWx0ZXJTZWVtcyA9IGV4cG9ydHMuQWRGaWx0ZXIgPSB2b2lkIDA7XHJcbmNsYXNzIEFkRmlsdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnNlZW1zID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNlZW1zO1xyXG4gICAgICAgIHRoaXMubGlrZXMgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubGlrZXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZWQgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFsdWVkO1xyXG4gICAgICAgIHRoaXMudGllcyA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy50aWVzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRGaWx0ZXIgPSBBZEZpbHRlcjtcclxudmFyIEFkRmlsdGVyU2VlbXM7XHJcbihmdW5jdGlvbiAoQWRGaWx0ZXJTZWVtcykge1xyXG4gICAgQWRGaWx0ZXJTZWVtc1tcIlNBTUVcIl0gPSBcIlNBTUVcIjtcclxuICAgIEFkRmlsdGVyU2VlbXNbXCJESVZFUlNFXCJdID0gXCJESVZFUlNFXCI7XHJcbn0pKEFkRmlsdGVyU2VlbXMgPSBleHBvcnRzLkFkRmlsdGVyU2VlbXMgfHwgKGV4cG9ydHMuQWRGaWx0ZXJTZWVtcyA9IHt9KSk7XHJcbnZhciBBZEZpbHRlckxpa2VzO1xyXG4oZnVuY3Rpb24gKEFkRmlsdGVyTGlrZXMpIHtcclxuICAgIEFkRmlsdGVyTGlrZXNbXCJFUVVBTFNcIl0gPSBcIkVRVUFMU1wiO1xyXG4gICAgQWRGaWx0ZXJMaWtlc1tcIkJJR0dFUlwiXSA9IFwiQklHR0VSXCI7XHJcbiAgICBBZEZpbHRlckxpa2VzW1wiTEVTU0VSXCJdID0gXCJMRVNTRVJcIjtcclxuICAgIEFkRmlsdGVyTGlrZXNbXCJCSUdHRVJfRVFVQUxTXCJdID0gXCJCSUdHRVJfRVFVQUxTXCI7XHJcbiAgICBBZEZpbHRlckxpa2VzW1wiTEVTU0VSX0VRVUFMU1wiXSA9IFwiTEVTU0VSX0VRVUFMU1wiO1xyXG4gICAgQWRGaWx0ZXJMaWtlc1tcIlNUQVJUU19XSVRIXCJdID0gXCJTVEFSVFNfV0lUSFwiO1xyXG4gICAgQWRGaWx0ZXJMaWtlc1tcIkVORFNfV0lUSFwiXSA9IFwiRU5EU19XSVRIXCI7XHJcbiAgICBBZEZpbHRlckxpa2VzW1wiQ09OVEFJTlNcIl0gPSBcIkNPTlRBSU5TXCI7XHJcbn0pKEFkRmlsdGVyTGlrZXMgPSBleHBvcnRzLkFkRmlsdGVyTGlrZXMgfHwgKGV4cG9ydHMuQWRGaWx0ZXJMaWtlcyA9IHt9KSk7XHJcbnZhciBBZEZpbHRlclRpZXM7XHJcbihmdW5jdGlvbiAoQWRGaWx0ZXJUaWVzKSB7XHJcbiAgICBBZEZpbHRlclRpZXNbXCJBTkRcIl0gPSBcIkFORFwiO1xyXG4gICAgQWRGaWx0ZXJUaWVzW1wiT1JcIl0gPSBcIk9SXCI7XHJcbn0pKEFkRmlsdGVyVGllcyA9IGV4cG9ydHMuQWRGaWx0ZXJUaWVzIHx8IChleHBvcnRzLkFkRmlsdGVyVGllcyA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLWZpbHRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkSm9pbmVkVGllcyA9IHZvaWQgMDtcclxudmFyIEFkSm9pbmVkVGllcztcclxuKGZ1bmN0aW9uIChBZEpvaW5lZFRpZXMpIHtcclxuICAgIEFkSm9pbmVkVGllc1tBZEpvaW5lZFRpZXNbXCJJTk5FUlwiXSA9IDBdID0gXCJJTk5FUlwiO1xyXG4gICAgQWRKb2luZWRUaWVzW0FkSm9pbmVkVGllc1tcIkxFRlRcIl0gPSAxXSA9IFwiTEVGVFwiO1xyXG4gICAgQWRKb2luZWRUaWVzW0FkSm9pbmVkVGllc1tcIlJJR0hUXCJdID0gMl0gPSBcIlJJR0hUXCI7XHJcbiAgICBBZEpvaW5lZFRpZXNbQWRKb2luZWRUaWVzW1wiRlVMTFwiXSA9IDNdID0gXCJGVUxMXCI7XHJcbiAgICBBZEpvaW5lZFRpZXNbQWRKb2luZWRUaWVzW1wiQ1JPU1NcIl0gPSA0XSA9IFwiQ1JPU1NcIjtcclxufSkoQWRKb2luZWRUaWVzID0gZXhwb3J0cy5BZEpvaW5lZFRpZXMgfHwgKGV4cG9ydHMuQWRKb2luZWRUaWVzID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtam9pbmVkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMubWVudVN0YXJ0VXAgPSBleHBvcnRzLkFkTWVudSA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBhZF9leHBlY3RfMSA9IHJlcXVpcmUoXCIuL2FkLWV4cGVjdFwiKTtcclxuY29uc3QgYWRfbmFtZXNfMSA9IHJlcXVpcmUoXCIuL2FkLW5hbWVzXCIpO1xyXG5jb25zdCBhZF90b29sc18xID0gcmVxdWlyZShcIi4vYWQtdG9vbHNcIik7XHJcbmNsYXNzIEFkTWVudSBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4ge1xyXG4gICAgY29uc3RydWN0b3IoaXRlbXMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2xpbmVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLmdldExpbmUoaXRlbS5ncm91cCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihpdGVtLm1vZHVsZS5pY29uLCBxaW5wZWxfcmVzXzEuUWluR3JhbmRldXIuTUVESVVNKSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBuZXcgcWlucGVsX2Nwc18xLlFpbkxhYmVsKGl0ZW0ubW9kdWxlLnRpdGxlKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wdXRBc0NvbHVtbigpO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuY2hpZWYubmV3Sm9iYmVyKGl0ZW0ubW9kdWxlLnRpdGxlLCBpdGVtLm1vZHVsZS5hcHAsIGFkX3Rvb2xzXzEuQWRUb29scy5uZXdBZFNldHVwT3B0aW9uKGl0ZW0ubW9kdWxlLCBbYWRfdG9vbHNfMS5BZFNjb3BlLkFMTF0pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucWlucGVsLmpvYmJlZC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGluZS5wdXQoYnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRMaW5lKHRpdGxlKSB7XHJcbiAgICAgICAgaWYgKCF0aXRsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbGluZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdMaW5lID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5UaXRsZWQoKTtcclxuICAgICAgICAgICAgICAgIG5ld0xpbmUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVzLnB1c2gobmV3TGluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVzW3RoaXMuX2xpbmVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgdGhpcy5fbGluZXMpIHtcclxuICAgICAgICAgICAgaWYgKGxpbmUudGl0bGUgPT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5ld0xpbmUgPSBuZXcgcWlucGVsX2Nwc18xLlFpblRpdGxlZCh7IHRpdGxlIH0pO1xyXG4gICAgICAgIG5ld0xpbmUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9saW5lcy5wdXNoKG5ld0xpbmUpO1xyXG4gICAgICAgIHJldHVybiBuZXdMaW5lO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRNZW51ID0gQWRNZW51O1xyXG5mdW5jdGlvbiBtZW51U3RhcnRVcChtZW51cykge1xyXG4gICAgY29uc3QgYWRTZXR1cCA9IHFpbnBlbF9jcHNfMS5RaW5Ub29sLnFpbnBlbC5qb2JiZWQuZ2V0T3B0aW9uKGFkX25hbWVzXzEuQWROYW1lcy5BZFNldHVwKTtcclxuICAgIGlmIChhZFNldHVwICYmIGFkU2V0dXAubW9kdWxlKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBtZW51IG9mIG1lbnVzKSB7XHJcbiAgICAgICAgICAgIGlmIChhZF90b29sc18xLkFkVG9vbHMuaXNTYW1lTW9kdWxlKG1lbnUubW9kdWxlLCBhZFNldHVwLm1vZHVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBleHBlY3QgPSBuZXcgYWRfZXhwZWN0XzEuQWRFeHBlY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlczogYWRTZXR1cC5zY29wZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyczogYWRTZXR1cC5maWx0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdhaXRlcnM6IG5ldyBxaW5wZWxfcmVzXzEuUWluV2FpdGVycygpLmFkZFdhaXRlcigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHFpbnBlbF9jcHNfMS5RaW5Ub29sLnFpbnBlbC5qb2JiZWQuc2VuZFdhaXRlcnMocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lbnUucmVnaXN0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IG1lbnUucmVnaXN0ZXIobWVudS5tb2R1bGUsIGV4cGVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtZW51IGFjdGlvbiBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBBZE1lbnUobWVudXMpO1xyXG59XHJcbmV4cG9ydHMubWVudVN0YXJ0VXAgPSBtZW51U3RhcnRVcDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtbWVudS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRNb2RlbCA9IHZvaWQgMDtcclxuY2xhc3MgQWRNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWdpc3Rlcikge1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3R5cGVkcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXIgPSByZWdpc3RlcjtcclxuICAgIH1cclxuICAgIGdldCByZWdpc3RlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWVsZHM7XHJcbiAgICB9XHJcbiAgICBnZXQgdHlwZWRzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlZHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl90eXBlZHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgdGhpcy5fZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90eXBlZHMucHVzaChmaWVsZC50eXBlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGVkcztcclxuICAgIH1cclxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgdGhpcy5fZmllbGRzLnB1c2goZmllbGQpO1xyXG4gICAgfVxyXG4gICAgZ2V0RmllbGRCeU5hbWUobmFtZSkge1xyXG4gICAgICAgIGZvciAobGV0IGZpZWxkIG9mIHRoaXMuX2ZpZWxkcykge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaW5zZXJ0KCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVkcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgdGhpcy5fZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVkcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmllbGQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZmllbGQuZWRpdC5nZXROYXR1cmUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZmllbGQuZWRpdC5nZXREYXRhKCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5zZXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJ5OiB0aGlzLnJlZ2lzdGVyLnJlZ2lzdHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlZHM6IHZhbHVlZHMsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlci5xaW5wZWwuY2hpZWYudGFsa1xyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KFwiL3JlZy9uZXdcIiwgaW5zZXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChfKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbnNlcnQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRNb2RlbCA9IEFkTW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLW1vZGVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRNb2R1bGVzID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY2xhc3MgQWRNb2R1bGVzIHtcclxufVxyXG5leHBvcnRzLkFkTW9kdWxlcyA9IEFkTW9kdWxlcztcclxuQWRNb2R1bGVzLkJVU0lORVNTID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJOZWfDs2Npb3NcIixcclxuICAgIGljb246IHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlR2xvYmUsXHJcbn07XHJcbkFkTW9kdWxlcy5SRUdJT04gPSB7XHJcbiAgICBhcHA6IFwiYWRwZW9wbGVcIixcclxuICAgIHRpdGxlOiBcIlJlZ2nDo29cIixcclxuICAgIGljb246IHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlUmVnaW9uLFxyXG59O1xyXG5BZE1vZHVsZXMuTkFUSU9OID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJQYcOtc2VzXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUdsb2JlLFxyXG59O1xyXG5BZE1vZHVsZXMuU1RBVEUgPSB7XHJcbiAgICBhcHA6IFwiYWRwZW9wbGVcIixcclxuICAgIHRpdGxlOiBcIkVzdGFkb3NcIixcclxuICAgIGljb246IHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlR2xvYmUsXHJcbn07XHJcbkFkTW9kdWxlcy5DSVRZID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJDaWRhZGVzXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUdsb2JlLFxyXG59O1xyXG5BZE1vZHVsZXMuRElTVFJJQ1QgPSB7XHJcbiAgICBhcHA6IFwiYWRwZW9wbGVcIixcclxuICAgIHRpdGxlOiBcIkJhaXJyb3NcIixcclxuICAgIGljb246IHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlR2xvYmUsXHJcbn07XHJcbkFkTW9kdWxlcy5QRU9QTEUgPSB7XHJcbiAgICBhcHA6IFwiYWRwZW9wbGVcIixcclxuICAgIHRpdGxlOiBcIlBlc3NvYXNcIixcclxuICAgIGljb246IHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlR2xvYmUsXHJcbn07XHJcbkFkTW9kdWxlcy5QRU9QTEVfR1JPVVAgPSB7XHJcbiAgICBhcHA6IFwiYWRwZW9wbGVcIixcclxuICAgIHRpdGxlOiBcIkdydXBvcyBkZSBQZXNzb2FzXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUdsb2JlLFxyXG59O1xyXG5BZE1vZHVsZXMuUEVPUExFX1NVQkdST1VQID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJTdWJHcnVwb3MgZGUgUGVzc29hc1wiLFxyXG4gICAgaWNvbjogcWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VHbG9iZSxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtbW9kdWxlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkTmFtZXMgPSB2b2lkIDA7XHJcbnZhciBBZE5hbWVzO1xyXG4oZnVuY3Rpb24gKEFkTmFtZXMpIHtcclxuICAgIEFkTmFtZXNbXCJBZEJvYXJkXCJdID0gXCJBZEJvYXJkXCI7XHJcbiAgICBBZE5hbWVzW1wiQWRNaXN0ZXJcIl0gPSBcIkFkTWlzdGVyXCI7XHJcbiAgICBBZE5hbWVzW1wiQWRQZW9wbGVcIl0gPSBcIkFkUGVvcGxlXCI7XHJcbiAgICBBZE5hbWVzW1wiQWRQcm9kdWN0XCJdID0gXCJBZFByb2R1Y3RcIjtcclxuICAgIEFkTmFtZXNbXCJBZFByb2plY3RcIl0gPSBcIkFkUHJvamVjdFwiO1xyXG4gICAgQWROYW1lc1tcIkFkU2FsZXNcIl0gPSBcIkFkU2FsZXNcIjtcclxuICAgIEFkTmFtZXNbXCJBZFNldHVwXCJdID0gXCJBZFNldHVwXCI7XHJcbn0pKEFkTmFtZXMgPSBleHBvcnRzLkFkTmFtZXMgfHwgKGV4cG9ydHMuQWROYW1lcyA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLW5hbWVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRSZWdCYXIgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xyXG5jb25zdCBhZF9yZWdpc3Rlcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnaXN0ZXJcIik7XHJcbmNsYXNzIEFkUmVnQmFyIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpbkxpbmUge1xyXG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnUgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7IGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZU1lbnVMaW5lcykgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudVZpZXdTaW5nbGUgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVNwbGl0Tm90VmlldyksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudVZpZXdWZXJ0aWNhbCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlU3BsaXRWaWV3VmVydGljYWwpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnVWaWV3SG9yaXpvbnRhbCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlU3BsaXRWaWV3SG9yaXpvbnRhbCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudUZvY3VzQm9keSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlTGlzdFZpZXcpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnVGb2N1c1RhYmxlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oe1xyXG4gICAgICAgICAgICBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VHcmlkVmlldyksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudUJvZHkgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkxpbmUoe1xyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluTWVudVZpZXdTaW5nbGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5NZW51Vmlld1ZlcnRpY2FsLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluTWVudVZpZXdIb3Jpem9udGFsLFxyXG4gICAgICAgICAgICAgICAgbmV3IHFpbnBlbF9jcHNfMS5RaW5EaXZpZGVyKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5NZW51Rm9jdXNCb2R5LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluTWVudUZvY3VzVGFibGUsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluUG9wdXAgPSBuZXcgcWlucGVsX2Nwc18xLlFpblBvcHVwKHRoaXMuX3Fpbk1lbnVCb2R5KTtcclxuICAgICAgICB0aGlzLl9xaW5JbnNlcnQgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VBZGQpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVNlYXJjaCk7XHJcbiAgICAgICAgdGhpcy5fcWluTm90aWNlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlRXllKTtcclxuICAgICAgICB0aGlzLl9xaW5Nb2RlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uUGljayh7XHJcbiAgICAgICAgICAgIGljb25zOiBbdGhpcy5fcWluSW5zZXJ0LCB0aGlzLl9xaW5TZWFyY2gsIHRoaXMuX3Fpbk5vdGljZV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluR29GaXJzdCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHsgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlUlVwQ2hldnJvblB1c2gpIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvUHJpb3IgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVJMZWZ0Q2hldnJvblB1c2gpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvTmV4dCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlUlJpZ2h0Q2hldnJvblB1c2gpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvTGFzdCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlUkRvd25DaGV2cm9uUHVzaCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTXV0YXRlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oeyBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VQZW5jaWwpIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0gPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7IGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUNvbmZpcm0pIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkNhbmNlbCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHsgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlQ2FuY2VsKSB9KTtcclxuICAgICAgICB0aGlzLl9xaW5EZWxldGUgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7IGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVRyYXNoKSB9KTtcclxuICAgICAgICB0aGlzLl9yZWcgPSByZWdpc3RlcjtcclxuICAgICAgICB0aGlzLmluaXRNZW51KCk7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1vdmUoKTtcclxuICAgICAgICB0aGlzLmluaXRNYWtlKCk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc1BhZGRpbmdCb3R0b20oMik7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0JvcmRlckJvdHRvbSgyLCBcIiM5OTlcIik7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc01hcmdpbkJvdHRvbSgyKTtcclxuICAgIH1cclxuICAgIGluaXRNZW51KCkge1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5NZW51LmFkZEFjdGlvbk1haW4oKF8pID0+IHRoaXMuX3FpblBvcHVwLnNob3dPblBhcmVudCh0aGlzLl9xaW5NZW51KSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudVZpZXdTaW5nbGUuYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Qb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWcudmlld1NpbmdsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnVWaWV3VmVydGljYWwuYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Qb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWcudmlld1ZlcnRpY2FsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudVZpZXdIb3Jpem9udGFsLmFkZEFjdGlvbk1haW4oKF8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVnLnZpZXdIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudUZvY3VzQm9keS5hZGRBY3Rpb25NYWluKChfKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy5mb2N1c0JvZHkoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NZW51Rm9jdXNUYWJsZS5hZGRBY3Rpb25NYWluKChfKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy5mb2N1c1RhYmxlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0TW9kZSgpIHtcclxuICAgICAgICB0aGlzLl9xaW5Nb2RlLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluSW5zZXJ0LmFkZEFjdGlvbk1haW4oKF8pID0+IHRoaXMuX3JlZy50cnlDaGFuZ2VNb2RlKGFkX3JlZ2lzdGVyXzEuQWRSZWdNb2RlLklOU0VSVCkpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5hZGRBY3Rpb25NYWluKChfKSA9PiB0aGlzLl9yZWcudHJ5Q2hhbmdlTW9kZShhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5TRUFSQ0gpKTtcclxuICAgICAgICB0aGlzLl9xaW5Ob3RpY2UuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeUNoYW5nZU1vZGUoYWRfcmVnaXN0ZXJfMS5BZFJlZ01vZGUuTk9USUNFKSk7XHJcbiAgICAgICAgdGhpcy5fcmVnLmFkZExpc3RlbmVyKHtcclxuICAgICAgICAgICAgZXZlbnQ6IGFkX3JlZ2lzdGVyXzEuQWRSZWdFdmVudC5DSEFOR0VfTU9ERSxcclxuICAgICAgICAgICAgb25EaWQ6ICh2YWx1ZXMpID0+IHRoaXMuc2V0TW9kZSh2YWx1ZXMubmV3VmFsdWUpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5pdE1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluR29GaXJzdC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvRmlyc3QuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeUdvRmlyc3QoKSk7XHJcbiAgICAgICAgdGhpcy5fcWluR29Qcmlvci5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvUHJpb3IuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeUdvUHJpb3IoKSk7XHJcbiAgICAgICAgdGhpcy5fcWluR29OZXh0Lmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluR29OZXh0LmFkZEFjdGlvbk1haW4oKF8pID0+IHRoaXMuX3JlZy50cnlHb05leHQoKSk7XHJcbiAgICAgICAgdGhpcy5fcWluR29MYXN0Lmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluR29MYXN0LmFkZEFjdGlvbk1haW4oKF8pID0+IHRoaXMuX3JlZy50cnlHb0xhc3QoKSk7XHJcbiAgICB9XHJcbiAgICBpbml0TWFrZSgpIHtcclxuICAgICAgICB0aGlzLl9xaW5NdXRhdGUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5NdXRhdGUuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeU11dGF0ZSgpKTtcclxuICAgICAgICB0aGlzLl9xaW5Db25maXJtLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybS5hZGRBY3Rpb25NYWluKChfKSA9PiB0aGlzLl9yZWcudHJ5Q29uZmlybSgpKTtcclxuICAgICAgICB0aGlzLl9xaW5DYW5jZWwuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5DYW5jZWwuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeUNhbmNlbCgpKTtcclxuICAgICAgICB0aGlzLl9xaW5EZWxldGUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5EZWxldGUuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeURlbGV0ZSgpKTtcclxuICAgIH1cclxuICAgIHNldE1vZGUobW9kZSkge1xyXG4gICAgICAgIHRoaXMuX3Fpbk1vZGUuc2V0RGF0YShudWxsKTtcclxuICAgICAgICBpZiAobW9kZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgYWRfcmVnaXN0ZXJfMS5BZFJlZ01vZGUuSU5TRVJUOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Fpbk1vZGUuc2V0RGF0YSh0aGlzLl9xaW5JbnNlcnQuYXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvRmlyc3QudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29Qcmlvci51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb05leHQudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29MYXN0LnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Fpbk11dGF0ZS51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Db25maXJtLnJlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkNhbmNlbC5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5EZWxldGUudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGFkX3JlZ2lzdGVyXzEuQWRSZWdNb2RlLlNFQVJDSDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Nb2RlLnNldERhdGEodGhpcy5fcWluU2VhcmNoLmFzc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb0ZpcnN0LnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvUHJpb3IudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29OZXh0LnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvTGFzdC51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5NdXRhdGUudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluQ29uZmlybS5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5DYW5jZWwucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluRGVsZXRlLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5OT1RJQ0U6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluTW9kZS5zZXREYXRhKHRoaXMuX3Fpbk5vdGljZS5hc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29GaXJzdC5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb1ByaW9yLnJlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvTmV4dC5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb0xhc3QucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluTXV0YXRlLnJlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkNvbmZpcm0udW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluQ2FuY2VsLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkRlbGV0ZS51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgYWRfcmVnaXN0ZXJfMS5BZFJlZ01vZGUuTVVUQVRFOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Fpbk1vZGUuc2V0RGF0YSh0aGlzLl9xaW5Ob3RpY2UuYXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvRmlyc3QudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29Qcmlvci51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb05leHQudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29MYXN0LnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkNvbmZpcm0ucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluQ2FuY2VsLnJlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkRlbGV0ZS5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkUmVnQmFyID0gQWRSZWdCYXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZy1iYXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFJlZ0VkaXRvciA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNsYXNzIEFkUmVnRWRpdG9yIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpblBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHJlZ2lzdGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl90YWJzID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9jb2x1bW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2xpbmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3JlZyA9IHJlZ2lzdGVyO1xyXG4gICAgfVxyXG4gICAgYWRkVGFiKHRpdGxlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RhYnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl90YWJzID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5UYWJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29sdW1uID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4oKTtcclxuICAgICAgICB0aGlzLl90YWJzLmFkZFRhYih7IHRpdGxlLCB2aWV3ZXI6IHRoaXMuX2NvbHVtbiB9KTtcclxuICAgICAgICB0aGlzLl9saW5lID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fbGluZS5pbnN0YWxsKHRoaXMuX2NvbHVtbik7XHJcbiAgICB9XHJcbiAgICBhZGRMaW5lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb2x1bW4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2x1bW4gPSBuZXcgcWlucGVsX2Nwc18xLlFpbkNvbHVtbigpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2x1bW4uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGluZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluTGluZSgpO1xyXG4gICAgICAgIHRoaXMuX2xpbmUuaW5zdGFsbCh0aGlzLl9jb2x1bW4pO1xyXG4gICAgfVxyXG4gICAgYWRkRmllbGQoZmllbGQpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGluZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBlZGl0b3IgPSBmaWVsZC5lZGl0O1xyXG4gICAgICAgIGlmIChmaWVsZC50aXRsZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZWQgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkZpZWxkKGZpZWxkLnRpdGxlLCBlZGl0b3IpO1xyXG4gICAgICAgICAgICB0aXRsZWQuaW5zdGFsbCh0aGlzLl9saW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVkaXRvci5pbnN0YWxsKHRoaXMuX2xpbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkUmVnRWRpdG9yID0gQWRSZWdFZGl0b3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZy1lZGl0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFJlZ0xvYWRlciA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNsYXNzIEFkUmVnTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHJlZ2lzdGVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmVnID0gcmVnaXN0ZXI7XHJcbiAgICB9XHJcbiAgICBsb2FkKCkge1xyXG4gICAgICAgIGxldCByZWdpc3RyeSA9IHRoaXMuX3JlZy5yZWdpc3RyeTtcclxuICAgICAgICBsZXQgZmllbGRzID0gdGhpcy5fcmVnLm1vZGVsLnR5cGVkcztcclxuICAgICAgICBsZXQgZmlsdGVycyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlZy5leHBlY3QuZmlsdGVycykge1xyXG4gICAgICAgICAgICBmaWx0ZXJzID0gWy4uLnRoaXMuX3JlZy5leHBlY3QuZmlsdGVyc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWFyY2hpbmcgPSB0aGlzLl9yZWcuc2VhcmNoLmdldEZpbHRlcnMoKTtcclxuICAgICAgICBpZiAoc2VhcmNoaW5nKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMgPSBmaWx0ZXJzIHx8IFtdO1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goLi4uc2VhcmNoaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IHsgcmVnaXN0cnksIGZpZWxkcywgZmlsdGVycyB9O1xyXG4gICAgICAgIHFpbnBlbF9jcHNfMS5RaW5Ub29sLnFpbnBlbC50YWxrXHJcbiAgICAgICAgICAgIC5wb3N0KFwiL3JlZy9hc2tcIiwgc2VsZWN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByb3dzID0gcWlucGVsX2Nwc18xLlFpblRvb2wucWlucGVsLm91ci5zb3VsLmJvZHkuZ2V0Q1NWUm93cyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChyb3dzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgb2Ygcm93cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBxaW5wZWxfY3BzXzEuUWluVG9vbC5xaW5wZWwuam9iYmVkLnN0YXR1c0Vycm9yKGVyciwgXCJ7YWRjb21tb259KEVyckNvZGUtMDAwMDAyKVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkUmVnTG9hZGVyID0gQWRSZWdMb2FkZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZy1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFJlZ1NlYXJjaCA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNvbnN0IGFkX2ZpbHRlcl8xID0gcmVxdWlyZShcIi4vYWQtZmlsdGVyXCIpO1xyXG5jbGFzcyBBZFJlZ1NlYXJjaCBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5TY3JvbGwge1xyXG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2xpbmVzID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4oKTtcclxuICAgICAgICB0aGlzLl9jbGF1c2VzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5fcmVnID0gcmVnaXN0ZXI7XHJcbiAgICAgICAgdGhpcy5fbGluZXMuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICBjb25zdCBmaXJzdCA9IG5ldyBTZWFyY2hDbGF1c2UodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fY2xhdXNlcy5wdXNoKGZpcnN0KTtcclxuICAgICAgICBmaXJzdC5pbnN0YWxsKHRoaXMuX2xpbmVzKTtcclxuICAgIH1cclxuICAgIGdldCByZWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZztcclxuICAgIH1cclxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgdGhpcy5fY2xhdXNlcy5mb3JFYWNoKChjbGF1c2UpID0+IHtcclxuICAgICAgICAgICAgY2xhdXNlLmFkZEZpZWxkKHsgdGl0bGU6IGZpZWxkLnRpdGxlLCB2YWx1ZTogZmllbGQubmFtZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkZENsYXVzZShhZnRlcikge1xyXG4gICAgICAgIGNvbnN0IGNsYXVzZSA9IG5ldyBTZWFyY2hDbGF1c2UodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcmVnLm1vZGVsLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBjbGF1c2UuYWRkRmllbGQoeyB0aXRsZTogZmllbGQudGl0bGUsIHZhbHVlOiBmaWVsZC5uYW1lIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fY2xhdXNlcy5pbmRleE9mKGFmdGVyKTtcclxuICAgICAgICB0aGlzLl9jbGF1c2VzLnNwbGljZShpbmRleCArIDEsIDAsIGNsYXVzZSk7XHJcbiAgICAgICAgdGhpcy5yZWJ1aWxkKCk7XHJcbiAgICB9XHJcbiAgICBkZWxDbGF1c2UoY2xhdXNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NsYXVzZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2NsYXVzZXMuaW5kZXhPZihjbGF1c2UpO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGF1c2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVidWlsZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xhdXNlc1swXS5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlYnVpbGQoKSB7XHJcbiAgICAgICAgdGhpcy5fbGluZXMudW5JbnN0YWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLl9jbGF1c2VzLmZvckVhY2goKGNsYXVzZSkgPT4ge1xyXG4gICAgICAgICAgICBjbGF1c2UuaW5zdGFsbCh0aGlzLl9saW5lcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRGaWx0ZXJzKCkge1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9jbGF1c2VzLmZvckVhY2goKGNsYXVzZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gY2xhdXNlLmdldEZpbHRlcigpO1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZmlsdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRSZWdTZWFyY2ggPSBBZFJlZ1NlYXJjaDtcclxuY2xhc3MgU2VhcmNoQ2xhdXNlIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpbkxpbmUge1xyXG4gICAgY29uc3RydWN0b3IoZGFkKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5TYW1lID0gbmV3IFNlYXJjaFNhbWUoKTtcclxuICAgICAgICB0aGlzLl9xaW5GaWVsZCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQ29tYm8oKTtcclxuICAgICAgICB0aGlzLl9xaW5MaWtlcyA9IG5ldyBTZWFyY2hDb25kaXRpb24oKTtcclxuICAgICAgICB0aGlzLl9xaW5WYWx1ZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5fcWluVGllcyA9IG5ldyBTZWFyY2hUaWUoKTtcclxuICAgICAgICB0aGlzLl9xaW5BZGQgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7IGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVBsdXMpIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkRlbCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHsgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlTWludXMpIH0pO1xyXG4gICAgICAgIHRoaXMuX2RhZCA9IGRhZDtcclxuICAgICAgICB0aGlzLl9xaW5TYW1lLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluRmllbGQuYWRkSXRlbSh7IHRpdGxlOiBcIlwiLCB2YWx1ZTogXCJcIiB9KTtcclxuICAgICAgICB0aGlzLl9xaW5GaWVsZC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3Fpbkxpa2VzLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluVmFsdWUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5UaWVzLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluQWRkLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluRGVsLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluQWRkLmFkZEFjdGlvbk1haW4oKF8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZGFkLmFkZENsYXVzZSh0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5EZWwuYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9kYWQuZGVsQ2xhdXNlKHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNQYWRkaW5nQm90dG9tKDQpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNCb3JkZXJCb3R0b20oMiwgXCIjYmJiXCIpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNNYXJnaW5Cb3R0b20oNCk7XHJcbiAgICB9XHJcbiAgICBhZGRGaWVsZChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5fcWluRmllbGQuYWRkSXRlbShpdGVtKTtcclxuICAgIH1cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuX3FpblNhbWUuc2V0RGF0YShcIkVRVUFMU1wiKTtcclxuICAgICAgICB0aGlzLl9xaW5MaWtlcy5zZXREYXRhKFwiRVFVQUxTXCIpO1xyXG4gICAgICAgIHRoaXMuX3FpblZhbHVlLnNldERhdGEobnVsbCk7XHJcbiAgICAgICAgdGhpcy5fcWluVGllcy5zZXREYXRhKFwiQU5EXCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0RmlsdGVyKCkge1xyXG4gICAgICAgIGxldCBmaWVsZE5hbWUgPSB0aGlzLl9xaW5GaWVsZC5nZXREYXRhKCk7XHJcbiAgICAgICAgaWYgKCFmaWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5fZGFkLnJlZy5tb2RlbC5nZXRGaWVsZEJ5TmFtZShmaWVsZE5hbWUpO1xyXG4gICAgICAgIGlmICghZmllbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgYWRfZmlsdGVyXzEuQWRGaWx0ZXIoe1xyXG4gICAgICAgICAgICBzZWVtczogdGhpcy5fcWluU2FtZS5nZXREYXRhKCksXHJcbiAgICAgICAgICAgIGxpa2VzOiB0aGlzLl9xaW5MaWtlcy5nZXREYXRhKCksXHJcbiAgICAgICAgICAgIHZhbHVlZDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZmllbGQudHlwZWQuYWxpYXMgfHwgZmllbGQudHlwZWQubmFtZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IGZpZWxkLnR5cGVkLnR5cGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLl9xaW5WYWx1ZS5nZXREYXRhKCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpZXM6IHRoaXMuX3FpblRpZXMuZ2V0RGF0YSgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFNlYXJjaFNhbWUgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluQ29tYm8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCI9PVwiLCB2YWx1ZTogXCJTQU1FXCIgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHsgdGl0bGU6IFwiIT1cIiwgdmFsdWU6IFwiRElWRVJTRVwiIH0pO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNNYXhXaWR0aCg2NCk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgU2VhcmNoQ29uZGl0aW9uIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpbkNvbWJvIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHsgdGl0bGU6IFwiPVwiLCB2YWx1ZTogXCJFUVVBTFNcIiB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCI+XCIsIHZhbHVlOiBcIkJJR0dFUlwiIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIjxcIiwgdmFsdWU6IFwiTEVTU0VSXCIgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHsgdGl0bGU6IFwiPj1cIiwgdmFsdWU6IFwiQklHR0VSX0VRVUFMU1wiIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIjw9XCIsIHZhbHVlOiBcIkxFU1NFUl9FUVVBTFNcIiB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCIkX1wiLCB2YWx1ZTogXCJTVEFSVFNfV0lUSFwiIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIl8kXCIsIHZhbHVlOiBcIkVORFNfV0lUSFwiIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIl8kX1wiLCB2YWx1ZTogXCJDT05UQUlOU1wiIH0pO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNNYXhXaWR0aCg2NCk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgU2VhcmNoVGllIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpbkNvbWJvIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHsgdGl0bGU6IFwiJiZcIiwgdmFsdWU6IFwiQU5EXCIgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHsgdGl0bGU6IFwifHxcIiwgdmFsdWU6IFwiT1JcIiB9KTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzTWF4V2lkdGgoNjQpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZy1zZWFyY2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFJlZ1RhYmxlID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY2xhc3MgQWRSZWdUYWJsZSBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5UYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWdpc3Rlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXIgPSByZWdpc3RlcjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkUmVnVGFibGUgPSBBZFJlZ1RhYmxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWctdGFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFJlZ0V2ZW50ID0gZXhwb3J0cy5BZFJlZ1ZpZXcgPSBleHBvcnRzLkFkUmVnTW9kZSA9IGV4cG9ydHMuQWRSZWdpc3RlciA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNvbnN0IGFkX21vZGVsXzEgPSByZXF1aXJlKFwiLi9hZC1tb2RlbFwiKTtcclxuY29uc3QgYWRfcmVnX2Jhcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnLWJhclwiKTtcclxuY29uc3QgYWRfcmVnX2VkaXRvcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnLWVkaXRvclwiKTtcclxuY29uc3QgYWRfcmVnX2xvYWRlcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnLWxvYWRlclwiKTtcclxuY29uc3QgYWRfcmVnX3NlYXJjaF8xID0gcmVxdWlyZShcIi4vYWQtcmVnLXNlYXJjaFwiKTtcclxuY29uc3QgYWRfcmVnX3RhYmxlXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctdGFibGVcIik7XHJcbmNvbnN0IGFkX3Rvb2xzXzEgPSByZXF1aXJlKFwiLi9hZC10b29sc1wiKTtcclxuY2xhc3MgQWRSZWdpc3RlciBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4ge1xyXG4gICAgY29uc3RydWN0b3IobW9kdWxlLCByZWdpc3RyeSwgZXhwZWN0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkgPSBuZXcgcWlucGVsX2Nwc18xLlFpblN0YWNrKCk7XHJcbiAgICAgICAgdGhpcy5fdmlld1NpbmdsZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluU3RhY2soKTtcclxuICAgICAgICB0aGlzLl92aWV3VmVydGljYWwgPSBuZXcgcWlucGVsX2Nwc18xLlFpblNwbGl0dGVyKHsgaG9yaXpvbnRhbDogZmFsc2UgfSk7XHJcbiAgICAgICAgdGhpcy5fdmlld0hvcml6b250YWwgPSBuZXcgcWlucGVsX2Nwc18xLlFpblNwbGl0dGVyKHsgaG9yaXpvbnRhbDogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLl9iYXIgPSBuZXcgYWRfcmVnX2Jhcl8xLkFkUmVnQmFyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2VkaXRvciA9IG5ldyBhZF9yZWdfZWRpdG9yXzEuQWRSZWdFZGl0b3IodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoID0gbmV3IGFkX3JlZ19zZWFyY2hfMS5BZFJlZ1NlYXJjaCh0aGlzKTtcclxuICAgICAgICB0aGlzLl90YWJsZSA9IG5ldyBhZF9yZWdfdGFibGVfMS5BZFJlZ1RhYmxlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IG5ldyBhZF9yZWdfbG9hZGVyXzEuQWRSZWdMb2FkZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gbW9kdWxlO1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5ID0gcmVnaXN0cnk7XHJcbiAgICAgICAgdGhpcy5fZXhwZWN0ID0gZXhwZWN0O1xyXG4gICAgICAgIHRoaXMuX21vZGVsID0gbmV3IGFkX21vZGVsXzEuQWRNb2RlbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl92aWV3U2luZ2xlLnN0eWxlLnB1dEFzRmxleE1heCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdWZXJ0aWNhbC5zdHlsZS5wdXRBc0ZsZXhNYXgoKTtcclxuICAgICAgICB0aGlzLl92aWV3SG9yaXpvbnRhbC5zdHlsZS5wdXRBc0ZsZXhNYXgoKTtcclxuICAgICAgICB0aGlzLl9iYXIuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9ib2R5LnN0YWNrKHRoaXMuX2VkaXRvcik7XHJcbiAgICAgICAgdGhpcy5fYm9keS5zdGFjayh0aGlzLl9zZWFyY2gpO1xyXG4gICAgICAgIGlmIChleHBlY3Quc2NvcGVzLmZpbmQoKHNjb3BlKSA9PiBzY29wZSA9PT0gYWRfdG9vbHNfMS5BZFNjb3BlLkFMTCkgfHxcclxuICAgICAgICAgICAgZXhwZWN0LnNjb3Blcy5maW5kKChzY29wZSkgPT4gc2NvcGUgPT09IGFkX3Rvb2xzXzEuQWRTY29wZS5JTlNFUlQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTW9kZShBZFJlZ01vZGUuSU5TRVJUKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTW9kZShBZFJlZ01vZGUuU0VBUkNIKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWV3VmVydGljYWwoKTtcclxuICAgICAgICB0aGlzLl9iYXIudGFiSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuX2JvZHkudGFiSW5kZXggPSAxO1xyXG4gICAgICAgIHRoaXMuX3RhYmxlLnRhYkluZGV4ID0gMjtcclxuICAgIH1cclxuICAgIGdldCBtb2R1bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZHVsZTtcclxuICAgIH1cclxuICAgIGdldCByZWdpc3RyeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cnk7XHJcbiAgICB9XHJcbiAgICBnZXQgZXhwZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBlY3Q7XHJcbiAgICB9XHJcbiAgICBnZXQgbW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlZ01vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ01vZGU7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVnVmlldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVnVmlldztcclxuICAgIH1cclxuICAgIGdldCBiYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgIH1cclxuICAgIGdldCBlZGl0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VkaXRvcjtcclxuICAgIH1cclxuICAgIGdldCBzZWFyY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaDtcclxuICAgIH1cclxuICAgIGdldCB0YWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGFibGU7XHJcbiAgICB9XHJcbiAgICBnZXQgbG9hZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXI7XHJcbiAgICB9XHJcbiAgICBhZGRUYWIodGl0bGUpIHtcclxuICAgICAgICB0aGlzLl9lZGl0b3IuYWRkVGFiKHRpdGxlKTtcclxuICAgIH1cclxuICAgIGFkZExpbmUoKSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdG9yLmFkZExpbmUoKTtcclxuICAgIH1cclxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZWwuYWRkRmllbGQoZmllbGQpO1xyXG4gICAgICAgIHRoaXMuX2VkaXRvci5hZGRGaWVsZChmaWVsZCk7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoLmFkZEZpZWxkKGZpZWxkKTtcclxuICAgICAgICB0aGlzLl90YWJsZS5hZGRIZWFkKGZpZWxkLnRpdGxlKTtcclxuICAgIH1cclxuICAgIGNoYW5nZU1vZGUobW9kZSkge1xyXG4gICAgICAgIGlmIChtb2RlID09PSBBZFJlZ01vZGUuU0VBUkNIKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JvZHkuc2hvdyh0aGlzLl9zZWFyY2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYm9keS5zaG93KHRoaXMuX2VkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlZ01vZGUgPSBtb2RlO1xyXG4gICAgICAgIHRoaXMuY2FsbERpZExpc3RlbmVycyhBZFJlZ0V2ZW50LkNIQU5HRV9NT0RFLCB7IG5ld1ZhbHVlOiB0aGlzLl9yZWdNb2RlIH0pO1xyXG4gICAgfVxyXG4gICAgdHJ5Q2hhbmdlTW9kZShtb2RlKSB7XHJcbiAgICAgICAgbGV0IGNhbmNlbCA9IHRoaXMuY2FsbFRyeUxpc3RlbmVycyhBZFJlZ0V2ZW50LkNIQU5HRV9NT0RFLCB7XHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiB0aGlzLl9yZWdNb2RlLFxyXG4gICAgICAgICAgICBzZXRWYWx1ZTogbW9kZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoY2FuY2VsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYW5jZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhbmdlTW9kZShtb2RlKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHRyeUdvRmlyc3QoKSB7IH1cclxuICAgIHRyeUdvUHJpb3IoKSB7IH1cclxuICAgIHRyeUdvTmV4dCgpIHsgfVxyXG4gICAgdHJ5R29MYXN0KCkgeyB9XHJcbiAgICB0cnlNdXRhdGUoKSB7IH1cclxuICAgIHRyeUNvbmZpcm0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVnTW9kZSA9PT0gQWRSZWdNb2RlLlNFQVJDSCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyeVNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnJlZ01vZGUgPT09IEFkUmVnTW9kZS5JTlNFUlQpIHtcclxuICAgICAgICAgICAgdGhpcy50cnlJbnNlcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5yZWdNb2RlID09PSBBZFJlZ01vZGUuTVVUQVRFKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5VXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5U2VsZWN0KCkge1xyXG4gICAgICAgIHRoaXMubG9hZGVyLmxvYWQoKTtcclxuICAgIH1cclxuICAgIHRyeUluc2VydCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsXHJcbiAgICAgICAgICAgIC5pbnNlcnQoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c0ZpcnN0RmllbGQoKTtcclxuICAgICAgICAgICAgdGhpcy5xaW5wZWwuam9iYmVkLnN0YXR1c0luZm8oXCJJbnNlcnRlZDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnFpbnBlbC5qb2JiZWQuc3RhdHVzRXJyb3IoZXJyLCBcInthZGNvbW1vbn0oRXJyQ29kZS0wMDAwMDEpXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdHJ5VXBkYXRlKCkgeyB9XHJcbiAgICB0cnlDYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgfVxyXG4gICAgdHJ5RGVsZXRlKCkgeyB9XHJcbiAgICBjbGVhbigpIHtcclxuICAgICAgICBmb3IgKGxldCBmaWVsZCBvZiB0aGlzLm1vZGVsLmZpZWxkcykge1xyXG4gICAgICAgICAgICBmaWVsZC5jbGVhbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZpZXdTaW5nbGUoKSB7XHJcbiAgICAgICAgdGhpcy5fdmlld1ZlcnRpY2FsLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdIb3Jpem9udGFsLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdTaW5nbGUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9ib2R5Lmluc3RhbGwodGhpcy5fdmlld1NpbmdsZSk7XHJcbiAgICAgICAgdGhpcy5fdGFibGUuaW5zdGFsbCh0aGlzLl92aWV3U2luZ2xlKTtcclxuICAgICAgICBpZiAodGhpcy5fcmVnTW9kZSA9PT0gQWRSZWdNb2RlLlNFQVJDSCkge1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3U2luZ2xlLnNob3codGhpcy5fdGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fdmlld1NpbmdsZS5zaG93KHRoaXMuX2JvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZWdWaWV3ID0gQWRSZWdWaWV3LlNJTkdMRTtcclxuICAgICAgICB0aGlzLmNhbGxEaWRMaXN0ZW5lcnMoQWRSZWdFdmVudC5DSEFOR0VfVklFVywgeyBuZXdWYWx1ZTogdGhpcy5fcmVnVmlldyB9KTtcclxuICAgIH1cclxuICAgIHZpZXdWZXJ0aWNhbCgpIHtcclxuICAgICAgICB0aGlzLl92aWV3U2luZ2xlLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdIb3Jpem9udGFsLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdWZXJ0aWNhbC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkuaW5zdGFsbCh0aGlzLl92aWV3VmVydGljYWwpO1xyXG4gICAgICAgIHRoaXMuX3RhYmxlLmluc3RhbGwodGhpcy5fdmlld1ZlcnRpY2FsKTtcclxuICAgICAgICB0aGlzLl9ib2R5LnJlRGlzcGxheSgpO1xyXG4gICAgICAgIHRoaXMuX3RhYmxlLnJlRGlzcGxheSgpO1xyXG4gICAgICAgIHRoaXMuX3JlZ1ZpZXcgPSBBZFJlZ1ZpZXcuVkVSVElDQUw7XHJcbiAgICAgICAgdGhpcy5jYWxsRGlkTGlzdGVuZXJzKEFkUmVnRXZlbnQuQ0hBTkdFX1ZJRVcsIHsgbmV3VmFsdWU6IHRoaXMuX3JlZ1ZpZXcgfSk7XHJcbiAgICB9XHJcbiAgICB2aWV3SG9yaXpvbnRhbCgpIHtcclxuICAgICAgICB0aGlzLl92aWV3U2luZ2xlLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdWZXJ0aWNhbC51bkluc3RhbGwoKTtcclxuICAgICAgICB0aGlzLl92aWV3SG9yaXpvbnRhbC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkuaW5zdGFsbCh0aGlzLl92aWV3SG9yaXpvbnRhbCk7XHJcbiAgICAgICAgdGhpcy5fdGFibGUuaW5zdGFsbCh0aGlzLl92aWV3SG9yaXpvbnRhbCk7XHJcbiAgICAgICAgdGhpcy5fYm9keS5yZURpc3BsYXkoKTtcclxuICAgICAgICB0aGlzLl90YWJsZS5yZURpc3BsYXkoKTtcclxuICAgICAgICB0aGlzLl9yZWdWaWV3ID0gQWRSZWdWaWV3LkhPUklaT05UQUw7XHJcbiAgICAgICAgdGhpcy5jYWxsRGlkTGlzdGVuZXJzKEFkUmVnRXZlbnQuQ0hBTkdFX1ZJRVcsIHsgbmV3VmFsdWU6IHRoaXMuX3JlZ1ZpZXcgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgZGVsTGlzdGVuZXIobGlzdGVuZXIpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9saXN0ZW5lci5pbmRleE9mKGxpc3RlbmVyKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhbGxUcnlMaXN0ZW5lcnMoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIuZm9yRWFjaCgobGlzdGVuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW4uZXZlbnQgPT09IGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuLm9uVHJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbmNlbCA9IGxpc3Rlbi5vblRyeSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FuY2VsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2FsbERpZExpc3RlbmVycyhldmVudCwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lci5mb3JFYWNoKChsaXN0ZW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGxpc3Rlbi5ldmVudCA9PT0gZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW4ub25EaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW4ub25EaWQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmb2N1c0ZpcnN0RmllbGQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5maWVsZHNbMF0uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb2N1c0JvZHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlZ1ZpZXcgPT0gQWRSZWdWaWV3LlNJTkdMRSkge1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3U2luZ2xlLnNob3codGhpcy5fYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2JvZHkuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGZvY3VzVGFibGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlZ1ZpZXcgPT0gQWRSZWdWaWV3LlNJTkdMRSkge1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3U2luZ2xlLnNob3codGhpcy5fdGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90YWJsZS5mb2N1cygpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRSZWdpc3RlciA9IEFkUmVnaXN0ZXI7XHJcbnZhciBBZFJlZ01vZGU7XHJcbihmdW5jdGlvbiAoQWRSZWdNb2RlKSB7XHJcbiAgICBBZFJlZ01vZGVbXCJJTlNFUlRcIl0gPSBcIklOU0VSVFwiO1xyXG4gICAgQWRSZWdNb2RlW1wiU0VBUkNIXCJdID0gXCJTRUFSQ0hcIjtcclxuICAgIEFkUmVnTW9kZVtcIk5PVElDRVwiXSA9IFwiTk9USUNFXCI7XHJcbiAgICBBZFJlZ01vZGVbXCJNVVRBVEVcIl0gPSBcIk1VVEFURVwiO1xyXG59KShBZFJlZ01vZGUgPSBleHBvcnRzLkFkUmVnTW9kZSB8fCAoZXhwb3J0cy5BZFJlZ01vZGUgPSB7fSkpO1xyXG52YXIgQWRSZWdWaWV3O1xyXG4oZnVuY3Rpb24gKEFkUmVnVmlldykge1xyXG4gICAgQWRSZWdWaWV3W1wiU0lOR0xFXCJdID0gXCJTSU5HTEVcIjtcclxuICAgIEFkUmVnVmlld1tcIlZFUlRJQ0FMXCJdID0gXCJWRVJUSUNBTFwiO1xyXG4gICAgQWRSZWdWaWV3W1wiSE9SSVpPTlRBTFwiXSA9IFwiSE9SSVpPTlRBTFwiO1xyXG59KShBZFJlZ1ZpZXcgPSBleHBvcnRzLkFkUmVnVmlldyB8fCAoZXhwb3J0cy5BZFJlZ1ZpZXcgPSB7fSkpO1xyXG52YXIgQWRSZWdFdmVudDtcclxuKGZ1bmN0aW9uIChBZFJlZ0V2ZW50KSB7XHJcbiAgICBBZFJlZ0V2ZW50W1wiQ0hBTkdFX01PREVcIl0gPSBcIkNIQU5HRV9NT0RFXCI7XHJcbiAgICBBZFJlZ0V2ZW50W1wiQ0hBTkdFX1ZJRVdcIl0gPSBcIkNIQU5HRV9WSUVXXCI7XHJcbn0pKEFkUmVnRXZlbnQgPSBleHBvcnRzLkFkUmVnRXZlbnQgfHwgKGV4cG9ydHMuQWRSZWdFdmVudCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZ2lzdGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRUb29scyA9IGV4cG9ydHMuQWRTY29wZSA9IHZvaWQgMDtcclxuY29uc3QgYWRfbmFtZXNfMSA9IHJlcXVpcmUoXCIuL2FkLW5hbWVzXCIpO1xyXG52YXIgQWRTY29wZTtcclxuKGZ1bmN0aW9uIChBZFNjb3BlKSB7XHJcbiAgICBBZFNjb3BlW1wiQUxMXCJdID0gXCJhbGxcIjtcclxuICAgIEFkU2NvcGVbXCJJTlNFUlRcIl0gPSBcImluc2VydFwiO1xyXG4gICAgQWRTY29wZVtcIlNFQVJDSFwiXSA9IFwic2VhcmNoXCI7XHJcbiAgICBBZFNjb3BlW1wiTVVUQVRFXCJdID0gXCJtdXRhdGVcIjtcclxuICAgIEFkU2NvcGVbXCJERUxFVEVcIl0gPSBcImRlbGV0ZVwiO1xyXG59KShBZFNjb3BlID0gZXhwb3J0cy5BZFNjb3BlIHx8IChleHBvcnRzLkFkU2NvcGUgPSB7fSkpO1xyXG5mdW5jdGlvbiBpc1NhbWVNb2R1bGUob25lLCB0d28pIHtcclxuICAgIHJldHVybiAob25lID09PSBudWxsIHx8IG9uZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25lLmFwcCkgPT0gKHR3byA9PT0gbnVsbCB8fCB0d28gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHR3by5hcHApICYmIChvbmUgPT09IG51bGwgfHwgb25lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbmUudGl0bGUpID09ICh0d28gPT09IG51bGwgfHwgdHdvID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0d28udGl0bGUpO1xyXG59XHJcbmZ1bmN0aW9uIG5ld0FkU2V0dXAobW9kdWxlLCBzY29wZXMsIGZpbHRlcnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbW9kdWxlLFxyXG4gICAgICAgIHNjb3BlcyxcclxuICAgICAgICBmaWx0ZXJzLFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBuZXdBZFNldHVwT3B0aW9uKG1vZHVsZSwgc2NvcGVzLCBmaWx0ZXJzKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICByZXN1bHRbYWRfbmFtZXNfMS5BZE5hbWVzLkFkU2V0dXBdID0gbmV3QWRTZXR1cChtb2R1bGUsIHNjb3BlcywgZmlsdGVycyk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMuQWRUb29scyA9IHtcclxuICAgIGlzU2FtZU1vZHVsZSxcclxuICAgIG5ld0FkU2V0dXAsXHJcbiAgICBuZXdBZFNldHVwT3B0aW9uLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC10b29scy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkVG9vbHMgPSBleHBvcnRzLkFkU2NvcGUgPSBleHBvcnRzLkFkUmVnRXZlbnQgPSBleHBvcnRzLkFkUmVnVmlldyA9IGV4cG9ydHMuQWRSZWdNb2RlID0gZXhwb3J0cy5BZFJlZ2lzdGVyID0gZXhwb3J0cy5BZFJlZ1RhYmxlID0gZXhwb3J0cy5BZFJlZ1NlYXJjaCA9IGV4cG9ydHMuQWRSZWdMb2FkZXIgPSBleHBvcnRzLkFkUmVnRWRpdG9yID0gZXhwb3J0cy5BZFJlZ0JhciA9IGV4cG9ydHMuQWROYW1lcyA9IGV4cG9ydHMuQWRNb2R1bGVzID0gZXhwb3J0cy5BZE1vZGVsID0gZXhwb3J0cy5tZW51U3RhcnRVcCA9IGV4cG9ydHMuQWRNZW51ID0gZXhwb3J0cy5BZEpvaW5lZFRpZXMgPSBleHBvcnRzLkFkRmlsdGVyVGllcyA9IGV4cG9ydHMuQWRGaWx0ZXJMaWtlcyA9IGV4cG9ydHMuQWRGaWx0ZXJTZWVtcyA9IGV4cG9ydHMuQWRGaWx0ZXIgPSBleHBvcnRzLkFkRmllbGQgPSBleHBvcnRzLkFkRXhwZWN0ID0gdm9pZCAwO1xyXG52YXIgYWRfZXhwZWN0XzEgPSByZXF1aXJlKFwiLi9hZC1leHBlY3RcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRXhwZWN0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9leHBlY3RfMS5BZEV4cGVjdDsgfSB9KTtcclxudmFyIGFkX2ZpZWxkXzEgPSByZXF1aXJlKFwiLi9hZC1maWVsZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRGaWVsZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZmllbGRfMS5BZEZpZWxkOyB9IH0pO1xyXG52YXIgYWRfZmlsdGVyXzEgPSByZXF1aXJlKFwiLi9hZC1maWx0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmlsdGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9maWx0ZXJfMS5BZEZpbHRlcjsgfSB9KTtcclxudmFyIGFkX2ZpbHRlcl8yID0gcmVxdWlyZShcIi4vYWQtZmlsdGVyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZEZpbHRlclNlZW1zXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9maWx0ZXJfMi5BZEZpbHRlclNlZW1zOyB9IH0pO1xyXG52YXIgYWRfZmlsdGVyXzMgPSByZXF1aXJlKFwiLi9hZC1maWx0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmlsdGVyTGlrZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2ZpbHRlcl8zLkFkRmlsdGVyTGlrZXM7IH0gfSk7XHJcbnZhciBhZF9maWx0ZXJfNCA9IHJlcXVpcmUoXCIuL2FkLWZpbHRlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRGaWx0ZXJUaWVzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9maWx0ZXJfNC5BZEZpbHRlclRpZXM7IH0gfSk7XHJcbnZhciBhZF9qb2luZWRfMSA9IHJlcXVpcmUoXCIuL2FkLWpvaW5lZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRKb2luZWRUaWVzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9qb2luZWRfMS5BZEpvaW5lZFRpZXM7IH0gfSk7XHJcbnZhciBhZF9tZW51XzEgPSByZXF1aXJlKFwiLi9hZC1tZW51XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZE1lbnVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX21lbnVfMS5BZE1lbnU7IH0gfSk7XHJcbnZhciBhZF9tZW51XzIgPSByZXF1aXJlKFwiLi9hZC1tZW51XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtZW51U3RhcnRVcFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfbWVudV8yLm1lbnVTdGFydFVwOyB9IH0pO1xyXG52YXIgYWRfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL2FkLW1vZGVsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZE1vZGVsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9tb2RlbF8xLkFkTW9kZWw7IH0gfSk7XHJcbnZhciBhZF9tb2R1bGVzXzEgPSByZXF1aXJlKFwiLi9hZC1tb2R1bGVzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZE1vZHVsZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX21vZHVsZXNfMS5BZE1vZHVsZXM7IH0gfSk7XHJcbnZhciBhZF9uYW1lc18xID0gcmVxdWlyZShcIi4vYWQtbmFtZXNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkTmFtZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX25hbWVzXzEuQWROYW1lczsgfSB9KTtcclxudmFyIGFkX3JlZ19iYXJfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy1iYXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnQmFyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdfYmFyXzEuQWRSZWdCYXI7IH0gfSk7XHJcbnZhciBhZF9yZWdfZWRpdG9yXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctZWRpdG9yXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ0VkaXRvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnX2VkaXRvcl8xLkFkUmVnRWRpdG9yOyB9IH0pO1xyXG52YXIgYWRfcmVnX2xvYWRlcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnLWxvYWRlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRSZWdMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3JlZ19sb2FkZXJfMS5BZFJlZ0xvYWRlcjsgfSB9KTtcclxudmFyIGFkX3JlZ19zZWFyY2hfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy1zZWFyY2hcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnU2VhcmNoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdfc2VhcmNoXzEuQWRSZWdTZWFyY2g7IH0gfSk7XHJcbnZhciBhZF9yZWdfdGFibGVfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy10YWJsZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRSZWdUYWJsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnX3RhYmxlXzEuQWRSZWdUYWJsZTsgfSB9KTtcclxudmFyIGFkX3JlZ2lzdGVyXzEgPSByZXF1aXJlKFwiLi9hZC1yZWdpc3RlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRSZWdpc3RlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnaXN0ZXJfMS5BZFJlZ2lzdGVyOyB9IH0pO1xyXG52YXIgYWRfcmVnaXN0ZXJfMiA9IHJlcXVpcmUoXCIuL2FkLXJlZ2lzdGVyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ01vZGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3JlZ2lzdGVyXzIuQWRSZWdNb2RlOyB9IH0pO1xyXG52YXIgYWRfcmVnaXN0ZXJfMyA9IHJlcXVpcmUoXCIuL2FkLXJlZ2lzdGVyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ1ZpZXdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3JlZ2lzdGVyXzMuQWRSZWdWaWV3OyB9IH0pO1xyXG52YXIgYWRfcmVnaXN0ZXJfNCA9IHJlcXVpcmUoXCIuL2FkLXJlZ2lzdGVyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ0V2ZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdpc3Rlcl80LkFkUmVnRXZlbnQ7IH0gfSk7XHJcbnZhciBhZF90b29sc18xID0gcmVxdWlyZShcIi4vYWQtdG9vbHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkU2NvcGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3Rvb2xzXzEuQWRTY29wZTsgfSB9KTtcclxudmFyIGFkX3Rvb2xzXzIgPSByZXF1aXJlKFwiLi9hZC10b29sc1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRUb29sc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfdG9vbHNfMi5BZFRvb2xzOyB9IH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYWRjb21tb25fMSA9IHJlcXVpcmUoXCJhZGNvbW1vblwiKTtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNsYXNzIEFkTWlzdGVyIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpblBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc3QgcWluRGVzayA9IHRoaXMucWlucGVsLmNoaWVmLm5ld0Rlc2sodGhpcy5xaW5wZWwsIHtcclxuICAgICAgICAgICAgYWRkc0FwcHM6IChtYW5pZmVzdCkgPT4gbWFuaWZlc3QuZ3JvdXAgPT0gYWRjb21tb25fMS5BZE5hbWVzLkFkTWlzdGVyLFxyXG4gICAgICAgICAgICBhZGRzQ2ZnczogKG1hbmlmZXN0KSA9PiBbdGhpcy5xaW5wZWwub3VyLm5hbWVzLlFpbkJhc2VzXS5pbmRleE9mKG1hbmlmZXN0LnRpdGxlKSA+IC0xLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLmFwcGVuZENoaWxkKHFpbkRlc2suZ2V0TWFpbigpKTtcclxuICAgIH1cclxufVxyXG5uZXcgQWRNaXN0ZXIoKS5zdHlsZS5wdXRBc0JvZHkoKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Ub29sID0gZXhwb3J0cy5RaW5UaXRsZWQgPSBleHBvcnRzLlFpblRhYnMgPSBleHBvcnRzLlFpblRhYmxlID0gZXhwb3J0cy5RaW5TdHJpbmcgPSBleHBvcnRzLlFpblN0YWNrID0gZXhwb3J0cy5RaW5TcGxpdHRlciA9IGV4cG9ydHMuUWluU3BhY2VyID0gZXhwb3J0cy5RaW5TY3JvbGwgPSBleHBvcnRzLlFpblJvdyA9IGV4cG9ydHMuUWluUG9wdXAgPSBleHBvcnRzLlFpblBhbmVsID0gZXhwb3J0cy5RaW5NdXRhbnRzQXJtID0gZXhwb3J0cy5RaW5NdXRhbnRzID0gZXhwb3J0cy5RaW5MaW5lID0gZXhwb3J0cy5RaW5MYWJlbCA9IGV4cG9ydHMuUWluSW50ZWdlciA9IGV4cG9ydHMuUWluSWNvbiA9IGV4cG9ydHMuUWluSWNvblBpY2sgPSBleHBvcnRzLlFpbkljb25DZWxsID0gZXhwb3J0cy5RaW5GaWxlVmlldyA9IGV4cG9ydHMuUWluRmlsZVBpY2sgPSBleHBvcnRzLlFpbkZpbGVQYXRoID0gZXhwb3J0cy5RaW5GaWVsZCA9IGV4cG9ydHMuUWluRWRpdCA9IGV4cG9ydHMuUWluRGl2aWRlciA9IGV4cG9ydHMuUWluQ29tYm8gPSBleHBvcnRzLlFpbkNvbHVtbiA9IGV4cG9ydHMuUWluQnV0dG9uID0gZXhwb3J0cy5RaW5Cb29sZWFuID0gZXhwb3J0cy5RaW5CYXNlID0gZXhwb3J0cy5RaW5CYXNlU3R5bGUgPSBleHBvcnRzLnFpblVybEFzc2V0ID0gZXhwb3J0cy5xaW5Bc3NldFVybCA9IGV4cG9ydHMuUWluQXNzZXQgPSB2b2lkIDA7XHJcbnZhciBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Bc3NldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18xLlFpbkFzc2V0OyB9IH0pO1xyXG52YXIgcWluX2Fzc2V0c18yID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicWluQXNzZXRVcmxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hc3NldHNfMi5xaW5Bc3NldFVybDsgfSB9KTtcclxudmFyIHFpbl9hc3NldHNfMyA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInFpblVybEFzc2V0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXNzZXRzXzMucWluVXJsQXNzZXQ7IH0gfSk7XHJcbnZhciBxaW5fYmFzZV9zdHlsZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2Utc3R5bGVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJhc2VTdHlsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Jhc2Vfc3R5bGVfMS5RaW5CYXNlU3R5bGU7IH0gfSk7XHJcbnZhciBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJhc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9iYXNlXzEuUWluQmFzZTsgfSB9KTtcclxudmFyIHFpbl9ib29sZWFuXzEgPSByZXF1aXJlKFwiLi9xaW4tYm9vbGVhblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm9vbGVhblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Jvb2xlYW5fMS5RaW5Cb29sZWFuOyB9IH0pO1xyXG52YXIgcWluX2J1dHRvbl8xID0gcmVxdWlyZShcIi4vcWluLWJ1dHRvblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQnV0dG9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYnV0dG9uXzEuUWluQnV0dG9uOyB9IH0pO1xyXG52YXIgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQ29sdW1uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fY29sdW1uXzEuUWluQ29sdW1uOyB9IH0pO1xyXG52YXIgcWluX2NvbWJvXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tYm9cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkNvbWJvXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fY29tYm9fMS5RaW5Db21ibzsgfSB9KTtcclxudmFyIHFpbl9kaXZpZGVyXzEgPSByZXF1aXJlKFwiLi9xaW4tZGl2aWRlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRGl2aWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2RpdmlkZXJfMS5RaW5EaXZpZGVyOyB9IH0pO1xyXG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5FZGl0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZWRpdF8xLlFpbkVkaXQ7IH0gfSk7XHJcbnZhciBxaW5fZmllbGRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWVsZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmllbGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9maWVsZF8xLlFpbkZpZWxkOyB9IH0pO1xyXG52YXIgcWluX2ZpbGVfcGF0aF8xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtcGF0aFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZVBhdGhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9maWxlX3BhdGhfMS5RaW5GaWxlUGF0aDsgfSB9KTtcclxudmFyIHFpbl9maWxlX3BpY2tfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXBpY2tcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVQaWNrXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmlsZV9waWNrXzEuUWluRmlsZVBpY2s7IH0gfSk7XHJcbnZhciBxaW5fZmlsZV92aWV3XzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS12aWV3XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlVmlld1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ZpbGVfdmlld18xLlFpbkZpbGVWaWV3OyB9IH0pO1xyXG52YXIgcWluX2ljb25fY2VsbF8xID0gcmVxdWlyZShcIi4vcWluLWljb24tY2VsbFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSWNvbkNlbGxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9pY29uX2NlbGxfMS5RaW5JY29uQ2VsbDsgfSB9KTtcclxudmFyIHFpbl9pY29uX3BpY2tfMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uLXBpY2tcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkljb25QaWNrXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faWNvbl9waWNrXzEuUWluSWNvblBpY2s7IH0gfSk7XHJcbnZhciBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkljb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9pY29uXzEuUWluSWNvbjsgfSB9KTtcclxudmFyIHFpbl9pbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9xaW4taW50ZWdlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSW50ZWdlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ludGVnZXJfMS5RaW5JbnRlZ2VyOyB9IH0pO1xyXG52YXIgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkxhYmVsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbGFiZWxfMS5RaW5MYWJlbDsgfSB9KTtcclxudmFyIHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTGluZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2xpbmVfMS5RaW5MaW5lOyB9IH0pO1xyXG52YXIgcWluX211dGFudHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1tdXRhbnRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NdXRhbnRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbXV0YW50c18xLlFpbk11dGFudHM7IH0gfSk7XHJcbnZhciBxaW5fbXV0YW50c18yID0gcmVxdWlyZShcIi4vcWluLW11dGFudHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbk11dGFudHNBcm1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9tdXRhbnRzXzIuUWluTXV0YW50c0FybTsgfSB9KTtcclxudmFyIHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5QYW5lbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3BhbmVsXzEuUWluUGFuZWw7IH0gfSk7XHJcbnZhciBxaW5fcG9wdXBfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wb3B1cFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUG9wdXBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9wb3B1cF8xLlFpblBvcHVwOyB9IH0pO1xyXG52YXIgcWluX3Jvd18xID0gcmVxdWlyZShcIi4vcWluLXJvd1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUm93XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fcm93XzEuUWluUm93OyB9IH0pO1xyXG52YXIgcWluX3Njcm9sbF8xID0gcmVxdWlyZShcIi4vcWluLXNjcm9sbFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU2Nyb2xsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2Nyb2xsXzEuUWluU2Nyb2xsOyB9IH0pO1xyXG52YXIgcWluX3NwYWNlcl8xID0gcmVxdWlyZShcIi4vcWluLXNwYWNlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU3BhY2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc3BhY2VyXzEuUWluU3BhY2VyOyB9IH0pO1xyXG52YXIgcWluX3NwbGl0dGVyXzEgPSByZXF1aXJlKFwiLi9xaW4tc3BsaXR0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNwbGl0dGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc3BsaXR0ZXJfMS5RaW5TcGxpdHRlcjsgfSB9KTtcclxudmFyIHFpbl9zdGFja18xID0gcmVxdWlyZShcIi4vcWluLXN0YWNrXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TdGFja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3N0YWNrXzEuUWluU3RhY2s7IH0gfSk7XHJcbnZhciBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TdHJpbmdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zdHJpbmdfMS5RaW5TdHJpbmc7IH0gfSk7XHJcbnZhciBxaW5fdGFibGVfMSA9IHJlcXVpcmUoXCIuL3Fpbi10YWJsZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVGFibGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl90YWJsZV8xLlFpblRhYmxlOyB9IH0pO1xyXG52YXIgcWluX3RhYnNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10YWJzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5UYWJzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdGFic18xLlFpblRhYnM7IH0gfSk7XHJcbnZhciBxaW5fdGl0bGVkXzEgPSByZXF1aXJlKFwiLi9xaW4tdGl0bGVkXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5UaXRsZWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl90aXRsZWRfMS5RaW5UaXRsZWQ7IH0gfSk7XHJcbnZhciBxaW5fdG9vbF8xID0gcmVxdWlyZShcIi4vcWluLXRvb2xcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblRvb2xcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl90b29sXzEuUWluVG9vbDsgfSB9KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucWluVXJsQXNzZXQgPSBleHBvcnRzLnFpbkFzc2V0VXJsID0gZXhwb3J0cy5RaW5Bc3NldCA9IHZvaWQgMDtcclxudmFyIFFpbkFzc2V0O1xyXG4oZnVuY3Rpb24gKFFpbkFzc2V0KSB7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTBcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTNcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTZcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTlcIl0gPSBcImJhY2tncm91bmQtZGFyay0xOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIxXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjJcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyM1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjVcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjhcIl0gPSBcImJhY2tncm91bmQtZGFyay0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazNcIl0gPSBcImJhY2tncm91bmQtZGFyay0zLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazRcIl0gPSBcImJhY2tncm91bmQtZGFyay00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazVcIl0gPSBcImJhY2tncm91bmQtZGFyay01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazZcIl0gPSBcImJhY2tncm91bmQtZGFyay02LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazdcIl0gPSBcImJhY2tncm91bmQtZGFyay03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazhcIl0gPSBcImJhY2tncm91bmQtZGFyay04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazlcIl0gPSBcImJhY2tncm91bmQtZGFyay05LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFya1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDFcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDExXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIxXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0N1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ4XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxN1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjVcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjhcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyQXBwc1wiXSA9IFwiZXhwbG9yZXItYXBwcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJDbWRzXCJdID0gXCJleHBsb3Jlci1jbWRzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckRpclwiXSA9IFwiZXhwbG9yZXItZGlyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckV4ZWNcIl0gPSBcImV4cGxvcmVyLWV4ZWMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyRmlsZVwiXSA9IFwiZXhwbG9yZXItZmlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJJbWFnZVwiXSA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyTW92aWVcIl0gPSBcImV4cGxvcmVyLW1vdmllLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3Jlck11c2ljXCJdID0gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJaaXBwZWRcIl0gPSBcImV4cGxvcmVyLXppcHBlZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFkZFwiXSA9IFwiZmFjZS1hZGQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBbHRXb3JrXCJdID0gXCJmYWNlLWFsdC13b3JrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dEb3duXCJdID0gXCJmYWNlLWFycm93LWRvd24ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd0xlZnRcIl0gPSBcImZhY2UtYXJyb3ctbGVmdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93UmlnaHRcIl0gPSBcImZhY2UtYXJyb3ctcmlnaHQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd1VwXCJdID0gXCJmYWNlLWFycm93LXVwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXR0YWNoXCJdID0gXCJmYWNlLWF0dGFjaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUF6U29ydFwiXSA9IFwiZmFjZS1hei1zb3J0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQmFnU2hvcHBpbmdcIl0gPSBcImZhY2UtYmFnLXNob3BwaW5nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQmFnXCJdID0gXCJmYWNlLWJhZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJlbGxEaXNhYmxlXCJdID0gXCJmYWNlLWJlbGwtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJlbGxcIl0gPSBcImZhY2UtYmVsbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJldHdlZW5TcGFjZVwiXSA9IFwiZmFjZS1iZXR3ZWVuLXNwYWNlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQm9pbGVySG9tZVNtYXJ0XCJdID0gXCJmYWNlLWJvaWxlci1ob21lLXNtYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQm90dG9tVG9vbGJhclwiXSA9IFwiZmFjZS1ib3R0b20tdG9vbGJhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNVc2JcIl0gPSBcImZhY2UtYy11c2IucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYWxlbmRhclwiXSA9IFwiZmFjZS1jYWxlbmRhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhbWVyYURpc2FibGVcIl0gPSBcImZhY2UtY2FtZXJhLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYW1lcmFcIl0gPSBcImZhY2UtY2FtZXJhLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FuY2VsXCJdID0gXCJmYWNlLWNhbmNlbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhcnRTaG9wcGluZ1wiXSA9IFwiZmFjZS1jYXJ0LXNob3BwaW5nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FydFwiXSA9IFwiZmFjZS1jYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2hlY2tSYWRpb1wiXSA9IFwiZmFjZS1jaGVjay1yYWRpby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNoZWNrXCJdID0gXCJmYWNlLWNoZWNrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2hlY2tlZFJhZGlvXCJdID0gXCJmYWNlLWNoZWNrZWQtcmFkaW8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaGlwU21hcnRwaG9uZVwiXSA9IFwiZmFjZS1jaGlwLXNtYXJ0cGhvbmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaXJjbGVIYWxmU2hhcGVcIl0gPSBcImZhY2UtY2lyY2xlLWhhbGYtc2hhcGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaXJjbGVTaGFwZVwiXSA9IFwiZmFjZS1jaXJjbGUtc2hhcGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaXJjbGVcIl0gPSBcImZhY2UtY2lyY2xlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2xlYXJQdWxsXCJdID0gXCJmYWNlLWNsZWFyLXB1bGwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDbG9ja1NhbmRcIl0gPSBcImZhY2UtY2xvY2stc2FuZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNsb2NrXCJdID0gXCJmYWNlLWNsb2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2xvc2VcIl0gPSBcImZhY2UtY2xvc2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb2dcIl0gPSBcImZhY2UtY29nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29sc1ZpZXdcIl0gPSBcImZhY2UtY29scy12aWV3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29tZm9ydGFibGVWaWV3XCJdID0gXCJmYWNlLWNvbWZvcnRhYmxlLXZpZXcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb21wYXNzXCJdID0gXCJmYWNlLWNvbXBhc3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb25maXJtXCJdID0gXCJmYWNlLWNvbmZpcm0ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb250YWN0XCJdID0gXCJmYWNlLWNvbnRhY3QucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb250cm9sXCJdID0gXCJmYWNlLWNvbnRyb2wucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb29rZXJIb21lU21hcnRcIl0gPSBcImZhY2UtY29va2VyLWhvbWUtc21hcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb3B5XCJdID0gXCJmYWNlLWNvcHkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEYXlWaWV3XCJdID0gXCJmYWNlLWRheS12aWV3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRGVsXCJdID0gXCJmYWNlLWRlbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZURvdWJsZVRhcFwiXSA9IFwiZmFjZS1kb3VibGUtdGFwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRG93bkNoZXZyb25QdXNoXCJdID0gXCJmYWNlLWRvd24tY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRG93blB1c2hcIl0gPSBcImZhY2UtZG93bi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRG93blRyZW5kaW5nXCJdID0gXCJmYWNlLWRvd24tdHJlbmRpbmcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEb3dubG9hZFNvZnR3YXJlXCJdID0gXCJmYWNlLWRvd25sb2FkLXNvZnR3YXJlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRG93bmxvYWRcIl0gPSBcImZhY2UtZG93bmxvYWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFbXB0eVRyYXNoXCJdID0gXCJmYWNlLWVtcHR5LXRyYXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRW5sYXJnZVwiXSA9IFwiZmFjZS1lbmxhcmdlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRW50ZXJcIl0gPSBcImZhY2UtZW50ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFcmFzZVwiXSA9IFwiZmFjZS1lcmFzZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUV4aXRcIl0gPSBcImZhY2UtZXhpdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUV5ZURpc2FibGVcIl0gPSBcImZhY2UtZXllLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFeWVcIl0gPSBcImZhY2UtZXllLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRmlsZVwiXSA9IFwiZmFjZS1maWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRmlsdGVyXCJdID0gXCJmYWNlLWZpbHRlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUZpcnN0Um93XCJdID0gXCJmYWNlLWZpcnN0LXJvdy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUZvbGRlclwiXSA9IFwiZmFjZS1mb2xkZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VGb3VuZFNlYXJjaFwiXSA9IFwiZmFjZS1mb3VuZC1zZWFyY2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VHZWFyXCJdID0gXCJmYWNlLWdlYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VHbG9iZVwiXSA9IFwiZmFjZS1nbG9iZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUdyaWRWaWV3XCJdID0gXCJmYWNlLWdyaWQtdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUhTY3JvbGxcIl0gPSBcImZhY2UtaC1zY3JvbGwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VIZWFydFwiXSA9IFwiZmFjZS1oZWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUhlYXRIb21lU21hcnRcIl0gPSBcImZhY2UtaGVhdC1ob21lLXNtYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSGV4YWdvblNoYXBlXCJdID0gXCJmYWNlLWhleGFnb24tc2hhcGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VIb21lXCJdID0gXCJmYWNlLWhvbWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VIdW50UHJvZHVjdFwiXSA9IFwiZmFjZS1odW50LXByb2R1Y3QucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VJbWFnZVwiXSA9IFwiZmFjZS1pbWFnZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUluWm9vbVwiXSA9IFwiZmFjZS1pbi16b29tLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlS2l0VWlcIl0gPSBcImZhY2Uta2l0LXVpLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGFiZWxcIl0gPSBcImZhY2UtbGFiZWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMYXN0Um93XCJdID0gXCJmYWNlLWxhc3Qtcm93LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGVmdENoZXZyb25QdXNoXCJdID0gXCJmYWNlLWxlZnQtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGVmdFB1c2hcIl0gPSBcImZhY2UtbGVmdC1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGVmdFRvb2xiYXJcIl0gPSBcImZhY2UtbGVmdC10b29sYmFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGlnaHRIb21lU21hcnRcIl0gPSBcImZhY2UtbGlnaHQtaG9tZS1zbWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxpbmtcIl0gPSBcImZhY2UtbGluay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxpc3RVc2VyXCJdID0gXCJmYWNlLWxpc3QtdXNlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxpc3RWaWV3XCJdID0gXCJmYWNlLWxpc3Qtdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxvYWRpbmdTZWFyY2hcIl0gPSBcImZhY2UtbG9hZGluZy1zZWFyY2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMb2NrXCJdID0gXCJmYWNlLWxvY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNYWNoaW5lV2FzaEhvbWVTbWFydFwiXSA9IFwiZmFjZS1tYWNoaW5lLXdhc2gtaG9tZS1zbWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1haWxcIl0gPSBcImZhY2UtbWFpbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1hcERpc2FibGVcIl0gPSBcImZhY2UtbWFwLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNYXBcIl0gPSBcImZhY2UtbWFwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWVudUxpbmVzXCJdID0gXCJmYWNlLW1lbnUtbGluZXMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNZXNzYWdlXCJdID0gXCJmYWNlLW1lc3NhZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNaWNEaXNhYmxlXCJdID0gXCJmYWNlLW1pYy1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWljXCJdID0gXCJmYWNlLW1pYy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1pbnVzXCJdID0gXCJmYWNlLW1pbnVzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWlycm9yU2NyZWVuXCJdID0gXCJmYWNlLW1pcnJvci1zY3JlZW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNb250aFZpZXdcIl0gPSBcImZhY2UtbW9udGgtdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1vdXRoTm9TbWlsZVwiXSA9IFwiZmFjZS1tb3V0aC1uby1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1vdmllXCJdID0gXCJmYWNlLW1vdmllLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTmV1dHJhbFNtaWxlXCJdID0gXCJmYWNlLW5ldXRyYWwtc21pbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VOZXdzXCJdID0gXCJmYWNlLW5ld3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VOb25lU21pbGVcIl0gPSBcImZhY2Utbm9uZS1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9Eb3duQ2hldnJvblB1c2hcIl0gPSBcImZhY2Utby1kb3duLWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9MZWZ0Q2hldnJvblB1c2hcIl0gPSBcImZhY2Utby1sZWZ0LWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9OZXh0VHJhY2tQbGF5XCJdID0gXCJmYWNlLW8tbmV4dC10cmFjay1wbGF5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT1ByZXZUcmFja1BsYXlcIl0gPSBcImZhY2Utby1wcmV2LXRyYWNrLXBsYXkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPUXVvdGVcIl0gPSBcImZhY2Utby1xdW90ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9SaWdodENoZXZyb25QdXNoXCJdID0gXCJmYWNlLW8tcmlnaHQtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT1NlbGVjdFwiXSA9IFwiZmFjZS1vLXNlbGVjdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9VcENoZXZyb25QdXNoXCJdID0gXCJmYWNlLW8tdXAtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT1ZvaWNlbWFpbFwiXSA9IFwiZmFjZS1vLXZvaWNlbWFpbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9mZlNxdWFyZVRvZ2dsZVwiXSA9IFwiZmFjZS1vZmYtc3F1YXJlLXRvZ2dsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9mZlRvZ2dsZVwiXSA9IFwiZmFjZS1vZmYtdG9nZ2xlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT25Ub2dnbGVcIl0gPSBcImZhY2Utb24tdG9nZ2xlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT3Blbk1vdXRoU21pbGVcIl0gPSBcImZhY2Utb3Blbi1tb3V0aC1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9wZW5TaWRlYmFyXCJdID0gXCJmYWNlLW9wZW4tc2lkZWJhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU91dFpvb21cIl0gPSBcImZhY2Utb3V0LXpvb20ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQYXN0ZVwiXSA9IFwiZmFjZS1wYXN0ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBlbmNpbFwiXSA9IFwiZmFjZS1wZW5jaWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQZXJzb25cIl0gPSBcImZhY2UtcGVyc29uLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGhvbmVEaXNhYmxlXCJdID0gXCJmYWNlLXBob25lLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQaG9uZVwiXSA9IFwiZmFjZS1waG9uZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBpblwiXSA9IFwiZmFjZS1waW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQbHVnXCJdID0gXCJmYWNlLXBsdWcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQbHVzXCJdID0gXCJmYWNlLXBsdXMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQb2NrZXRcIl0gPSBcImZhY2UtcG9ja2V0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUG9rZW1vblwiXSA9IFwiZmFjZS1wb2tlbW9uLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUG9sYXJvaWRcIl0gPSBcImZhY2UtcG9sYXJvaWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQb2xsXCJdID0gXCJmYWNlLXBvbGwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQcmVzZW50YXRpb25cIl0gPSBcImZhY2UtcHJlc2VudGF0aW9uLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUHJldlRyYWNrUGxheVwiXSA9IFwiZmFjZS1wcmV2LXRyYWNrLXBsYXkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQcmludGVyXCJdID0gXCJmYWNlLXByaW50ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQcm9maWxlXCJdID0gXCJmYWNlLXByb2ZpbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VRclwiXSA9IFwiZmFjZS1xci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVF1b3RlXCJdID0gXCJmYWNlLXF1b3RlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUkRvd25DaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1yLWRvd24tY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUkxlZnRDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1yLWxlZnQtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUk5leHRUcmFja1BsYXlcIl0gPSBcImZhY2Utci1uZXh0LXRyYWNrLXBsYXkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSUHJldlRyYWNrUGxheVwiXSA9IFwiZmFjZS1yLXByZXYtdHJhY2stcGxheS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJSZW1vdmVcIl0gPSBcImZhY2Utci1yZW1vdmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSUmlnaHRDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1yLXJpZ2h0LWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJTZWxlY3RcIl0gPSBcImZhY2Utci1zZWxlY3QucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSVXBDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1yLXVwLWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJWb2ljZW1haWxcIl0gPSBcImZhY2Utci12b2ljZW1haWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSYW1TbWFydHBob25lXCJdID0gXCJmYWNlLXJhbS1zbWFydHBob25lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmF0aW9cIl0gPSBcImZhY2UtcmF0aW8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWFkXCJdID0gXCJmYWNlLXJlYWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWFkbWVcIl0gPSBcImZhY2UtcmVhZG1lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVjb3JkXCJdID0gXCJmYWNlLXJlY29yZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlZG8yXCJdID0gXCJmYWNlLXJlZG8tMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlZG9cIl0gPSBcImZhY2UtcmVkby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlZnJpZ2VyYXRvckhvbWVTbWFydFwiXSA9IFwiZmFjZS1yZWZyaWdlcmF0b3ItaG9tZS1zbWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlZ2lvblwiXSA9IFwiZmFjZS1yZWdpb24ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZW1vdGVcIl0gPSBcImZhY2UtcmVtb3RlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVtb3ZlVXNlclwiXSA9IFwiZmFjZS1yZW1vdmUtdXNlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlbW92ZVwiXSA9IFwiZmFjZS1yZW1vdmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZW5hbWVcIl0gPSBcImZhY2UtcmVuYW1lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVvcmRlclwiXSA9IFwiZmFjZS1yZW9yZGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVwZWF0XCJdID0gXCJmYWNlLXJlcGVhdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJob21idXNTaGFwZVwiXSA9IFwiZmFjZS1yaG9tYnVzLXNoYXBlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmlnaHRDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1yaWdodC1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSaWdodFB1c2hcIl0gPSBcImZhY2UtcmlnaHQtcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJpZ2h0U2lkZWJhclwiXSA9IFwiZmFjZS1yaWdodC1zaWRlYmFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmlnaHRUb29sYmFyXCJdID0gXCJmYWNlLXJpZ2h0LXRvb2xiYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSaW5nXCJdID0gXCJmYWNlLXJpbmcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSdWxlclwiXSA9IFwiZmFjZS1ydWxlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNhZFNtaWxlXCJdID0gXCJmYWNlLXNhZC1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNhdmVcIl0gPSBcImZhY2Utc2F2ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNjYW5cIl0gPSBcImZhY2Utc2Nhbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNjcmVlblwiXSA9IFwiZmFjZS1zY3JlZW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZWFyY2gyXCJdID0gXCJmYWNlLXNlYXJjaC0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2VhcmNoXCJdID0gXCJmYWNlLXNlYXJjaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNlbGVjdFwiXSA9IFwiZmFjZS1zZWxlY3QucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZW5kXCJdID0gXCJmYWNlLXNlbmQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZXJ2ZXJcIl0gPSBcImZhY2Utc2VydmVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2VydmVybGVzc1wiXSA9IFwiZmFjZS1zZXJ2ZXJsZXNzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2V0dGluZ3NcIl0gPSBcImZhY2Utc2V0dGluZ3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaGFrZVNtYXJ0cGhvbmVcIl0gPSBcImZhY2Utc2hha2Utc21hcnRwaG9uZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNoYXJlMlwiXSA9IFwiZmFjZS1zaGFyZS0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hhcmVcIl0gPSBcImZhY2Utc2hhcmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaGllbGQyXCJdID0gXCJmYWNlLXNoaWVsZC0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hpZWxkXCJdID0gXCJmYWNlLXNoaWVsZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNob3J0Y3V0XCJdID0gXCJmYWNlLXNob3J0Y3V0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hvdFNjcmVlblwiXSA9IFwiZmFjZS1zaG90LXNjcmVlbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNocmlua1wiXSA9IFwiZmFjZS1zaHJpbmsucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaHV0dGVyc3RvY2tcIl0gPSBcImZhY2Utc2h1dHRlcnN0b2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2lkZWJhclwiXSA9IFwiZmFjZS1zaWRlYmFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2lnbmFsXCJdID0gXCJmYWNlLXNpZ25hbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNpbmdsZVRhcFwiXSA9IFwiZmFjZS1zaW5nbGUtdGFwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2l6ZVwiXSA9IFwiZmFjZS1zaXplLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2tldGNoXCJdID0gXCJmYWNlLXNrZXRjaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNsYWNrXCJdID0gXCJmYWNlLXNsYWNrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2xlZXBcIl0gPSBcImZhY2Utc2xlZXAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTbWFydHBob25lXCJdID0gXCJmYWNlLXNtYXJ0cGhvbmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTbWlsZVwiXSA9IFwiZmFjZS1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwZWFrZXJEaXNhYmxlXCJdID0gXCJmYWNlLXNwZWFrZXItZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwZWFrZXJcIl0gPSBcImZhY2Utc3BlYWtlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwZWN0cnVtXCJdID0gXCJmYWNlLXNwZWN0cnVtLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3Bpbm5lckFsdFR3b1wiXSA9IFwiZmFjZS1zcGlubmVyLWFsdC10d28ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGlubmVyQWx0XCJdID0gXCJmYWNlLXNwaW5uZXItYWx0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3Bpbm5lclR3b1wiXSA9IFwiZmFjZS1zcGlubmVyLXR3by5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwaW5uZXJcIl0gPSBcImZhY2Utc3Bpbm5lci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwbGl0Tm90Vmlld1wiXSA9IFwiZmFjZS1zcGxpdC1ub3Qtdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwbGl0Vmlld0hvcml6b250YWxcIl0gPSBcImZhY2Utc3BsaXQtdmlldy1ob3Jpem9udGFsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3BsaXRWaWV3VmVydGljYWxcIl0gPSBcImZhY2Utc3BsaXQtdmlldy12ZXJ0aWNhbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwbGl0Vmlld1wiXSA9IFwiZmFjZS1zcGxpdC12aWV3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3F1YXJlU2hhcGVcIl0gPSBcImZhY2Utc3F1YXJlLXNoYXBlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3F1YXJlVG9nZ2xlXCJdID0gXCJmYWNlLXNxdWFyZS10b2dnbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcXVhcmVcIl0gPSBcImZhY2Utc3F1YXJlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3RhY2tcIl0gPSBcImZhY2Utc3RhY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdGFyXCJdID0gXCJmYWNlLXN0YXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdGFya1wiXSA9IFwiZmFjZS1zdGFyay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN0b3B3YXRjaFwiXSA9IFwiZmFjZS1zdG9wd2F0Y2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdG9yaWVzXCJdID0gXCJmYWNlLXN0b3JpZXMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdHVkaW9cIl0gPSBcImZhY2Utc3R1ZGlvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3R5bGVcIl0gPSBcImZhY2Utc3R5bGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdW5cIl0gPSBcImZhY2Utc3VuLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3VwcG9ydFwiXSA9IFwiZmFjZS1zdXBwb3J0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3dhcFwiXSA9IFwiZmFjZS1zd2FwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3dlZGVuXCJdID0gXCJmYWNlLXN3ZWRlbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN3aXNzXCJdID0gXCJmYWNlLXN3aXNzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3luY1wiXSA9IFwiZmFjZS1zeW5jLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGFiXCJdID0gXCJmYWNlLXRhYi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRhZ1wiXSA9IFwiZmFjZS10YWcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUYWxseVwiXSA9IFwiZmFjZS10YWxseS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRlbXBsYXRlXCJdID0gXCJmYWNlLXRlbXBsYXRlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGVubmlzXCJdID0gXCJmYWNlLXRlbm5pcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRlcm1pbmFsXCJdID0gXCJmYWNlLXRlcm1pbmFsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGVycmFpblwiXSA9IFwiZmFjZS10ZXJyYWluLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGhlcm1vbWV0ZXJcIl0gPSBcImZhY2UtdGhlcm1vbWV0ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUaGVybW9zdGF0XCJdID0gXCJmYWNlLXRoZXJtb3N0YXQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUaWtjb2RlXCJdID0gXCJmYWNlLXRpa2NvZGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUaW1lXCJdID0gXCJmYWNlLXRpbWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUaW1lbGFwc2VcIl0gPSBcImZhY2UtdGltZWxhcHNlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGltZXJcIl0gPSBcImZhY2UtdGltZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUb2RheVwiXSA9IFwiZmFjZS10b2RheS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRvb2xib3hcIl0gPSBcImZhY2UtdG9vbGJveC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRvcFRvb2xiYXJcIl0gPSBcImZhY2UtdG9wLXRvb2xiYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUb3VjaHBhZFwiXSA9IFwiZmFjZS10b3VjaHBhZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyYWNrXCJdID0gXCJmYWNlLXRyYWNrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJhbnNjcmlwdFwiXSA9IFwiZmFjZS10cmFuc2NyaXB0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJhc2gyXCJdID0gXCJmYWNlLXRyYXNoLTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmFzaFwiXSA9IFwiZmFjZS10cmFzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyZWVcIl0gPSBcImZhY2UtdHJlZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyZWVzXCJdID0gXCJmYWNlLXRyZWVzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJlbGxvXCJdID0gXCJmYWNlLXRyZWxsby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyZW5kaW5nXCJdID0gXCJmYWNlLXRyZW5kaW5nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJpYW5nbGVTaGFwZVwiXSA9IFwiZmFjZS10cmlhbmdsZS1zaGFwZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyb3BoeVwiXSA9IFwiZmFjZS10cm9waHkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUdlwiXSA9IFwiZmFjZS10di5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVR3aWxpb1wiXSA9IFwiZmFjZS10d2lsaW8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUd2l0dGVyXCJdID0gXCJmYWNlLXR3aXR0ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbWJyZWxsYVwiXSA9IFwiZmFjZS11bWJyZWxsYS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVuYXZhaWxhYmxlXCJdID0gXCJmYWNlLXVuYXZhaWxhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5ibG9ja1wiXSA9IFwiZmFjZS11bmJsb2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5kbzJcIl0gPSBcImZhY2UtdW5kby0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5kb1wiXSA9IFwiZmFjZS11bmRvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5mb2xkXCJdID0gXCJmYWNlLXVuZm9sZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVubGlua1wiXSA9IFwiZmFjZS11bmxpbmsucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmxvY2tcIl0gPSBcImZhY2UtdW5sb2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5zcGxhc2hcIl0gPSBcImZhY2UtdW5zcGxhc2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVcENoZXZyb25QdXNoXCJdID0gXCJmYWNlLXVwLWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVwUHVzaFwiXSA9IFwiZmFjZS11cC1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXBsb2FkU29mdHdhcmVcIl0gPSBcImZhY2UtdXBsb2FkLXNvZnR3YXJlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXBsb2FkXCJdID0gXCJmYWNlLXVwbG9hZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVwc2lkZVNtaWxlXCJdID0gXCJmYWNlLXVwc2lkZS1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVzYlwiXSA9IFwiZmFjZS11c2IucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVc2VyQWRkXCJdID0gXCJmYWNlLXVzZXItYWRkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXNlclwiXSA9IFwiZmFjZS11c2VyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXNlcmxhbmVcIl0gPSBcImZhY2UtdXNlcmxhbmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VWQmV0d2VlblNwYWNlXCJdID0gXCJmYWNlLXYtYmV0d2Vlbi1zcGFjZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVZTY3JvbGxcIl0gPSBcImZhY2Utdi1zY3JvbGwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VWZXJ0aWNhbFN3YXBcIl0gPSBcImZhY2UtdmVydGljYWwtc3dhcC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVZpbnlsXCJdID0gXCJmYWNlLXZpbnlsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVm9pY2VtYWlsXCJdID0gXCJmYWNlLXZvaWNlbWFpbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVZvbHVtZVwiXSA9IFwiZmFjZS12b2x1bWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VXZWJjYW1cIl0gPSBcImZhY2Utd2ViY2FtLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlV2Vic2l0ZVwiXSA9IFwiZmFjZS13ZWJzaXRlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlV2lkZVNjcmVlblwiXSA9IFwiZmFjZS13aWRlLXNjcmVlbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVdpZmlEaXNhYmxlXCJdID0gXCJmYWNlLXdpZmktZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVdpZmlcIl0gPSBcImZhY2Utd2lmaS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVdpbmRvd3NcIl0gPSBcImZhY2Utd2luZG93cy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVlpbnlhbmdcIl0gPSBcImZhY2UteWlueWFuZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVlvdXR1YmVcIl0gPSBcImZhY2UteW91dHViZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVphU29ydFwiXSA9IFwiZmFjZS16YS1zb3J0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlWmVpdFwiXSA9IFwiZmFjZS16ZWl0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlWmlnemFnU2hhcGVcIl0gPSBcImZhY2UtemlnemFnLXNoYXBlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYXZpY29uXCJdID0gXCJmYXZpY29uLmljb1wiO1xyXG4gICAgUWluQXNzZXRbXCJKb2JiZXJDbG9zZVwiXSA9IFwiam9iYmVyLWNsb3NlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJKb2JiZXJNYXhpbWl6ZVwiXSA9IFwiam9iYmVyLW1heGltaXplLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJKb2JiZXJNZW51XCJdID0gXCJqb2JiZXItbWVudS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiSm9iYmVyTWluaW1pemVcIl0gPSBcImpvYmJlci1taW5pbWl6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiSm9iYmVyUmVzaXplXCJdID0gXCJqb2JiZXItcmVzaXplLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJKb2JiZXJTdGF0dXNFcnJvclwiXSA9IFwiam9iYmVyLXN0YXR1cy1lcnJvci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiSm9iYmVyU3RhdHVzSW5mb1wiXSA9IFwiam9iYmVyLXN0YXR1cy1pbmZvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJMb2dpbktleVwiXSA9IFwibG9naW4ta2V5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJNZW51RGV2dG9vbHNcIl0gPSBcIm1lbnUtZGV2dG9vbHMuaWNvXCI7XHJcbiAgICBRaW5Bc3NldFtcIlFpbnBlbDQ4XCJdID0gXCJxaW5wZWwtNDgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIlFpbnBlbFwiXSA9IFwicWlucGVsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJTb3VyY2VTYW5zUHJvXCJdID0gXCJzb3VyY2Utc2Fucy1wcm8udHRmXCI7XHJcbiAgICBRaW5Bc3NldFtcIlNvdXJjZVNlcmlmUHJvXCJdID0gXCJzb3VyY2Utc2VyaWYtcHJvLnR0ZlwiO1xyXG59KShRaW5Bc3NldCA9IGV4cG9ydHMuUWluQXNzZXQgfHwgKGV4cG9ydHMuUWluQXNzZXQgPSB7fSkpO1xyXG5mdW5jdGlvbiBxaW5Bc3NldFVybChhc3NldCkge1xyXG4gICAgcmV0dXJuIFwiL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIGFzc2V0O1xyXG59XHJcbmV4cG9ydHMucWluQXNzZXRVcmwgPSBxaW5Bc3NldFVybDtcclxuZnVuY3Rpb24gcWluVXJsQXNzZXQodXJsKSB7XHJcbiAgICBjb25zdCBhc3NldCA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xyXG4gICAgcmV0dXJuIGFzc2V0O1xyXG59XHJcbmV4cG9ydHMucWluVXJsQXNzZXQgPSBxaW5VcmxBc3NldDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWFzc2V0cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkJhc2VTdHlsZSA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNsYXNzIFFpbkJhc2VTdHlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZWwgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHV0QXNCb2R5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWwpO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNCb2R5KHRoaXMuX2VsKTtcclxuICAgIH1cclxuICAgIGRlbEFzQm9keSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuX2VsKTtcclxuICAgIH1cclxuICAgIHB1dEFzV2hvbGUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXRBc1Bvc2l0aW9uQWJzb2x1dGUoKTtcclxuICAgICAgICB0aGlzLnB1dEFzQm91bmRzKDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgcHV0QXNFZGl0KCkge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNFZGl0KHRoaXMuX2VsKTtcclxuICAgICAgICB0aGlzLl9lbC50YWJJbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICBwdXRBc1Njcm9sbCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW4obWFyZ2luKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubWFyZ2luID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWFyZ2luVG9wKG1hcmdpbikge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1hcmdpblRvcCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKG1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBwdXRBc01hcmdpbkJvdHRvbShtYXJnaW4pIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW5MZWZ0KG1hcmdpbikge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1hcmdpbkxlZnQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW5SaWdodChtYXJnaW4pIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXJnaW5SaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKG1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBwdXRBc1BhZGRpbmcocGFkZGluZykge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBhZGRpbmcgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcclxuICAgIH1cclxuICAgIHB1dEFzUGFkZGluZ1RvcChwYWRkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUucGFkZGluZ1RvcCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQYWRkaW5nQm90dG9tKHBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwocGFkZGluZyk7XHJcbiAgICB9XHJcbiAgICBwdXRBc1BhZGRpbmdMZWZ0KHBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5wYWRkaW5nTGVmdCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQYWRkaW5nUmlnaHQocGFkZGluZykge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCb3JkZXIodGhpY2ssIGNvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yRm9yZWdyb3VuZCwgc3R5bGUgPSBcInNvbGlkXCIpIHtcclxuICAgICAgICBpZiAodGhpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyID0gdGhpY2sgKyBcInB4IFwiICsgc3R5bGUgKyBcIiBcIiArIGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNCb3JkZXJUb3AodGhpY2ssIGNvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yRm9yZWdyb3VuZCwgc3R5bGUgPSBcInNvbGlkXCIpIHtcclxuICAgICAgICBpZiAodGhpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyVG9wID0gdGhpY2sgKyBcInB4IFwiICsgc3R5bGUgKyBcIiBcIiArIGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyVG9wID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNCb3JkZXJCb3R0b20odGhpY2ssIGNvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yRm9yZWdyb3VuZCwgc3R5bGUgPSBcInNvbGlkXCIpIHtcclxuICAgICAgICBpZiAodGhpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyQm90dG9tID0gdGhpY2sgKyBcInB4IFwiICsgc3R5bGUgKyBcIiBcIiArIGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNCb3JkZXJMZWZ0KHRoaWNrLCBjb2xvciA9IHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckZvcmVncm91bmQsIHN0eWxlID0gXCJzb2xpZFwiKSB7XHJcbiAgICAgICAgaWYgKHRoaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlckxlZnQgPSB0aGljayArIFwicHggXCIgKyBzdHlsZSArIFwiIFwiICsgY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNCb3JkZXJSaWdodCh0aGljaywgY29sb3IgPSBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JGb3JlZ3JvdW5kLCBzdHlsZSA9IFwic29saWRcIikge1xyXG4gICAgICAgIGlmICh0aGljaykge1xyXG4gICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS5ib3JkZXJSaWdodCA9IHRoaWNrICsgXCJweCBcIiArIHN0eWxlICsgXCIgXCIgKyBjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNEaXNwbGF5RmxleCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0Rpc3BsYXlJbmxpbmUoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0Rpc3BsYXlJbmxpbmVCbG9jaygpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25TdGF0aWMoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvbkFic29sdXRlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvbkZpeGVkKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvblJlbGF0aXZlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvblN0aGlja3koKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUucG9zaXRpb24gPSBcInN0aGlja3lcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25Jbml0aWFsKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBvc2l0aW9uID0gXCJpbml0aWFsXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Sb3coKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Sb3dSZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvdy1yZXZlcnNlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW4oKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW5SZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtbi1yZXZlcnNlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhXcmFwKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhXcmFwTm90KCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleFdyYXBSZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwLXJldmVyc2VcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleE1pbigpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5mbGV4ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhNYXgoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuZmxleCA9IFwiYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNBbGxDZW50ZXJlZCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmFsaWduQ29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0JvdW5kcyh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS50b3AgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh0b3ApO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnJpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwocmlnaHQpO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvdHRvbSA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGJvdHRvbSk7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubGVmdCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGxlZnQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNXaWR0aCh3aWR0aCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLndpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNIZWlnaHQoaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUud2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzTWluV2lkdGgod2lkdGgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5taW5XaWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWluSGVpZ2h0KGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1pbkhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01pblNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1pbldpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1pbkhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01heFdpZHRoKHdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubWF4V2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01heEhlaWdodChoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXhTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXhXaWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGb3JlZ3JvdW5kKGZvcmVncm91bmQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5jb2xvciA9IGZvcmVncm91bmQ7XHJcbiAgICB9XHJcbiAgICBwdXRBc0JhY2tncm91bmQoYmFja2dyb3VuZCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCYWNrQXNzZXQoYXNzZXQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIGFzc2V0ICsgXCInKVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCYWNrSW5pdGlhbCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcImluaXRpYWxcIjtcclxuICAgIH1cclxuICAgIHB1dEFzWkluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IG51bGwgfHwgaW5kZXggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuekluZGV4ID0gaW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdXRBc0Rpc2FibGVkU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLmRpc2FibGVTZWxlY3Rpb24odGhpcy5fZWwpO1xyXG4gICAgfVxyXG4gICAgZ2V0UGl4ZWxzT3JJbml0aWFsKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImluaXRpYWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgXCJweFwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQmFzZVN0eWxlID0gUWluQmFzZVN0eWxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYmFzZS1zdHlsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkJhc2UgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYmFzZV9zdHlsZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2Utc3R5bGVcIik7XHJcbmNvbnN0IHFpbl90b29sXzEgPSByZXF1aXJlKFwiLi9xaW4tdG9vbFwiKTtcclxuY2xhc3MgUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihxaW5kcmVkLCBxaW5lZCkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3Bhc3RQYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VEaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9iYXNlVmlzaWJpbGl0eSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc3R5bGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3FpbmRyZWQgPSBxaW5kcmVkO1xyXG4gICAgICAgIGlmIChxaW5lZCBpbnN0YW5jZW9mIFFpbkJhc2UpIHtcclxuICAgICAgICAgICAgcWluZWQucWluZWRIVE1MLmlkID0gcWluZHJlZCArIHFpbmVkLnFpbmVkSFRNTC5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHFpbmVkLmlkID0gcWluX3Rvb2xfMS5RaW5Ub29sLnFpbnBlbC5vdXIuc291bC5ib2R5Lm1ha2VRaW5kcmVkVUlEKHFpbmRyZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9xaW5lZCA9IHFpbmVkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbmVkSFRNTCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcWluZWQgaW5zdGFuY2VvZiBRaW5CYXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9xaW5lZC5xaW5lZEhUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcWluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHFpbmVkQmFzZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcWluZWQgaW5zdGFuY2VvZiBRaW5CYXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9xaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBxaW5kcmVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5kcmVkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbnBlbCgpIHtcclxuICAgICAgICByZXR1cm4gcWluX3Rvb2xfMS5RaW5Ub29sLnFpbnBlbDtcclxuICAgIH1cclxuICAgIGdldCBzdHlsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3R5bGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHlsZSA9IG5ldyBxaW5fYmFzZV9zdHlsZV8xLlFpbkJhc2VTdHlsZSh0aGlzLnFpbmVkSFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdHlsZTtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaW5zdGFsbChvbkJhc2UpIHtcclxuICAgICAgICB0aGlzLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQgPSBvbkJhc2U7XHJcbiAgICAgICAgdGhpcy5fYmFzZVBhcmVudC5hZGRDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHVuSW5zdGFsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fYmFzZVBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQuZGVsQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bhc3RQYXJlbnQgPSB0aGlzLl9iYXNlUGFyZW50O1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlUGFyZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZUluc3RhbGwoKSB7XHJcbiAgICAgICAgdGhpcy51bkluc3RhbGwoKTtcclxuICAgICAgICBpZiAodGhpcy5fcGFzdFBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bhc3RQYXJlbnQuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQgPSB0aGlzLl9wYXN0UGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVuSW5zdGFsbENoaWxkcmVuKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9iYXNlQ2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuW2ldLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVuRGlzcGxheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5xaW5lZEhUTUwuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZURpc3BsYXkgPSB0aGlzLnFpbmVkSFRNTC5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVEaXNwbGF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9iYXNlRGlzcGxheSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9iYXNlRGlzcGxheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1blZpc2libGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucWluZWRIVE1MLnN0eWxlLmRpc3BsYXkgIT09IFwiaGlkZGVuXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZVZpc2liaWxpdHkgPSB0aGlzLnFpbmVkSFRNTC5zdHlsZS52aXNpYmlsaXR5O1xyXG4gICAgICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZVZpc2libGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Jhc2VWaXNpYmlsaXR5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUudmlzaWJpbGl0eSA9IHRoaXMuX2Jhc2VWaXNpYmlsaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLmFwcGVuZENoaWxkKGNoaWxkLnFpbmVkSFRNTCk7XHJcbiAgICB9XHJcbiAgICBkZWxDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2Jhc2VDaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlQ2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwucmVtb3ZlQ2hpbGQoY2hpbGQucWluZWRIVE1MKTtcclxuICAgIH1cclxuICAgIGNoaWxkcmVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYXNlQ2hpbGRyZW47XHJcbiAgICB9XHJcbiAgICBtdXN0SWQoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcWlucGVsX3Jlc18xLlFpbkJvZHkubWFrZVFpblVJRCgpO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkSFRNTC5pZDtcclxuICAgIH1cclxuICAgIHNldCBpZChpZCkge1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgdGFiSW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MLnRhYkluZGV4O1xyXG4gICAgfVxyXG4gICAgc2V0IHRhYkluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwudGFiSW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuICAgIGZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb24odGhpcy5xaW5lZEhUTUwsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NYWluKGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWFpbih0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1haW5LZXkoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NYWluS2V5KHRoaXMucWluZWRIVE1MLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWFpbk1vdXNlKGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWFpbk1vdXNlKHRoaXMucWluZWRIVE1MLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWFpblRvdWNoKGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWFpblRvdWNoKHRoaXMucWluZWRIVE1MLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWFpblBvaW50KGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWFpblBvaW50KHRoaXMucWluZWRIVE1MLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWlkaShhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1pZGkodGhpcy5xaW5lZEhUTUwsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NaWRpS2V5KGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWlkaUtleSh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1pZGlNb3VzZShhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1pZGlNb3VzZSh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1pZGlUb3VjaChhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1pZGlUb3VjaCh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1pZGlQb2ludChhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1pZGlQb2ludCh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1lbnUoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NZW51KHRoaXMucWluZWRIVE1MLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWVudUtleShhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1lbnVLZXkodGhpcy5xaW5lZEhUTUwsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NZW51TW91c2UoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NZW51TW91c2UodGhpcy5xaW5lZEhUTUwsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NZW51VG91Y2goYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NZW51VG91Y2godGhpcy5xaW5lZEhUTUwsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NZW51UG9pbnQoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NZW51UG9pbnQodGhpcy5xaW5lZEhUTUwsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5CYXNlID0gUWluQmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJhc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Cb29sZWFuID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XHJcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNsYXNzIFFpbkJvb2xlYW4gZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIoKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcImJvb2xlYW5cIiwgbmV3IHFpbl9saW5lXzEuUWluTGluZSgpKTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuID0gbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKCk7XHJcbiAgICAgICAgdGhpcy5fcWluSWNvbiA9IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDaGVja1JhZGlvKTtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4uaW5zdGFsbCh0aGlzLnFpbmVkQmFzZSk7XHJcbiAgICAgICAgdGhpcy5fcWluSWNvbi5pbnN0YWxsKHRoaXMuX3FpblNwYW4pO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4uc3R5bGUucHV0QXNFZGl0KCk7XHJcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5zdHlsZS5wdXRBc0Rpc3BsYXlGbGV4KCk7XHJcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5zdHlsZS5wdXRBc0FsbENlbnRlcmVkKCk7XHJcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc01haW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzdGVkUWluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5lZEJhc2U7XHJcbiAgICB9XHJcbiAgICBnZXROYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbnBlbF9yZXNfMS5RaW5OYXR1cmUuQk9PTDtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblNwYW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblNwYW47XHJcbiAgICB9XHJcbiAgICBnZXQgcWluSWNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluSWNvbjtcclxuICAgIH1cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlSWNvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5hc3NldCA9IHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ2hlY2tlZFJhZGlvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5hc3NldCA9IHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ2hlY2tSYWRpbztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAhdGhpcy5fdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5Cb29sZWFuID0gUWluQm9vbGVhbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJvb2xlYW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5CdXR0b24gPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkJ1dHRvbiBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcigoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwiYnV0dG9uXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikpO1xyXG4gICAgICAgIHRoaXMuX3Fpbkljb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3FpbkxhYmVsID0gbnVsbDtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkJ1dHRvbih0aGlzLnFpbmVkSFRNTCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pY29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Fpbkljb24gPSBvcHRpb25zLmljb247XHJcbiAgICAgICAgICAgIHRoaXMuX3Fpbkljb24uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5MYWJlbCA9IG9wdGlvbnMubGFiZWw7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkxhYmVsLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzdGVkUWluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5lZEhUTUw7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluSWNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluSWNvbjtcclxuICAgIH1cclxuICAgIGdldCBxaW5MYWJlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTGFiZWw7XHJcbiAgICB9XHJcbiAgICBwdXRBc1JvdygpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleERpcmVjdGlvblJvdygpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNSb3dSZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4RGlyZWN0aW9uUm93UmV2ZXJzZSgpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNDb2x1bW4oKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW4oKTtcclxuICAgIH1cclxuICAgIHB1dEFzQ29sdW1uUmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleERpcmVjdGlvbkNvbHVtblJldmVyc2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkJ1dHRvbiA9IFFpbkJ1dHRvbjtcclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYXBwbHlPbkJ1dHRvbjogKGVsKSA9PiB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0VkaXQoZWwpO1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcclxuICAgICAgICBlbC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBlbC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICB9LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYnV0dG9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQ29sdW1uID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluQ29sdW1uIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucywgKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcImNvbHVtblwiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleERpcmVjdGlvbkNvbHVtbigpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4V3JhcE5vdCgpO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1pbldpZHRoID0gXCJtaW4tY29udGVudFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1pbkhlaWdodCA9IFwibWluLWNvbnRlbnRcIjtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQ29sdW1uID0gUWluQ29sdW1uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY29sdW1uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQ29tYm8gPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNsYXNzIFFpbkNvbWJvIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHN1cGVyKChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgXCJjb21ib1wiLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpKTtcclxuICAgICAgICB0aGlzLl9lbEdyb3VwcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNFZGl0KCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pdGVtcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIG9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLnNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXN0ZWRRaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkSFRNTDtcclxuICAgIH1cclxuICAgIGdldE5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gcWlucGVsX3Jlc18xLlFpbk5hdHVyZS5DSEFSUztcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwudmFsdWUgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgYWRkSXRlbShpdGVtKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24udGV4dCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCAhPSB1bmRlZmluZWQgJiYgaXRlbS5zZWxlY3RlZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGl0ZW0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBncm91cCA9IHRoaXMuZ2V0R3JvdXAoaXRlbS5ncm91cCk7XHJcbiAgICAgICAgaWYgKGdyb3VwKSB7XHJcbiAgICAgICAgICAgIGdyb3VwLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZUFzQmFzZShvcHRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnFpbmVkSFRNTC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldEdyb3VwKGxhYmVsKSB7XHJcbiAgICAgICAgaWYgKCFsYWJlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgZ3JvdXAgb2YgdGhpcy5fZWxHcm91cHMpIHtcclxuICAgICAgICAgICAgaWYgKGdyb3VwLmxhYmVsID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xyXG4gICAgICAgIG5ld0dyb3VwLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0Jhc2UobmV3R3JvdXApO1xyXG4gICAgICAgIHRoaXMuX2VsR3JvdXBzLnB1c2gobmV3R3JvdXApO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLmFwcGVuZENoaWxkKG5ld0dyb3VwKTtcclxuICAgICAgICByZXR1cm4gbmV3R3JvdXA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5Db21ibyA9IFFpbkNvbWJvO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY29tYm8uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5EaXZpZGVyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkRpdmlkZXIgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIoKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcImRpdmlkZXJcIiwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICAgICAgdGhpcy5faXNIb3Jpem9udGFsID0gdHJ1ZTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzdGVkUWluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5lZEhUTUw7XHJcbiAgICB9XHJcbiAgICBzZXRIb3Jpem9udGFsKCkge1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1pbldpZHRoID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUubWF4V2lkdGggPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5taW5IZWlnaHQgPSBcIjZweFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1heEhlaWdodCA9IFwiNnB4XCI7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuaGVpZ2h0ID0gXCI2cHhcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5iYWNrZ3JvdW5kID1cclxuICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMCUsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAyNiUsIHJnYmEoMjQsMCwzOSwwLjgpIDQyJSwgcmdiYSgyNCwwLDM5LDAuOCkgNTglLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgNzQlLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMTAwJSlcIjtcclxuICAgICAgICB0aGlzLl9pc0hvcml6b250YWwgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2V0VmVydGljYWwoKSB7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUubWluV2lkdGggPSBcIjZweFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1heFdpZHRoID0gXCI2cHhcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5taW5IZWlnaHQgPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5tYXhIZWlnaHQgPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS53aWR0aCA9IFwiNnB4XCI7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuYmFja2dyb3VuZCA9XHJcbiAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMCUsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAyNiUsIHJnYmEoMjQsMCwzOSwwLjgpIDQyJSwgcmdiYSgyNCwwLDM5LDAuOCkgNTglLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgNzQlLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMTAwJSlcIjtcclxuICAgICAgICB0aGlzLl9pc0hvcml6b250YWwgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc0hvcml6b250YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSG9yaXpvbnRhbDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkRpdmlkZXIgPSBRaW5EaXZpZGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZGl2aWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkVkaXQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluRWRpdCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihxaW5kcmVkLCBxaW5lZCkge1xyXG4gICAgICAgIHN1cGVyKHFpbmRyZWQgKyBcIl9cIiArIFwiZWRpdFwiLCBxaW5lZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5FZGl0ID0gUWluRWRpdDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWVkaXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5GaWVsZCA9IHZvaWQgMDtcclxuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5fbGFiZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1sYWJlbFwiKTtcclxuY2xhc3MgUWluRmllbGQgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGVkaXQsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHN1cGVyKChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgZWRpdC5xaW5kcmVkICsgXCJfZmllbGRcIiwgbmV3IHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4oKSk7XHJcbiAgICAgICAgdGhpcy5fcWluTGFiZWwgPSBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwoKTtcclxuICAgICAgICB0aGlzLl9xaW5FZGl0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9xaW5MYWJlbC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuX3FpbkxhYmVsLmluc3RhbGwodGhpcy5xaW5lZEJhc2UpO1xyXG4gICAgICAgIHRoaXMuX3FpbkVkaXQgPSBlZGl0O1xyXG4gICAgICAgIHRoaXMuX3FpbkVkaXQuaW5zdGFsbCh0aGlzLnFpbmVkQmFzZSk7XHJcbiAgICAgICAgdGhpcy5fcWluTGFiZWwucWluTGluayh0aGlzLl9xaW5FZGl0KTtcclxuICAgICAgICB0aGlzLnFpbmVkQmFzZS5zdHlsZS5wdXRBc01hcmdpbigzKTtcclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRCYXNlO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FZGl0LmdldE5hdHVyZSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluRWRpdC5nZXREYXRhKCk7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9xaW5FZGl0LnNldERhdGEoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluTGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkxhYmVsO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkVkaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWVsZCA9IFFpbkZpZWxkO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmllbGQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5GaWxlUGF0aCA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWluX2ZpbGVfcGlja18xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtcGlja1wiKTtcclxuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNvbnN0IHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XHJcbmNsYXNzIFFpbkZpbGVQYXRoIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHN1cGVyKChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgXCJmaWxlLXBhdGhcIiwgbmV3IHFpbl9saW5lXzEuUWluTGluZSgpKTtcclxuICAgICAgICB0aGlzLl9xaW5QYXRoID0gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2ggPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VGb2xkZXIpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpblBpY2tlciA9IG5ldyBxaW5fZmlsZV9waWNrXzEuUWluRmlsZVBpY2soe1xyXG4gICAgICAgICAgICBuYXR1cmU6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbjogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wZXJhdGlvbixcclxuICAgICAgICAgICAgZGVzY3JpcHRvcnM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZXNjcmlwdG9ycyxcclxuICAgICAgICAgICAgc2luZ2xlU2VsZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpblBvcHVwID0gdGhpcy5xaW5wZWwuam9iYmVkLm5ld1BvcHVwKHRoaXMuX3FpblBpY2tlci5jYXN0ZWRRaW5lKCkuY2FzdGVkUWluZSgpKTtcclxuICAgICAgICB0aGlzLl9xaW5QYXRoLmluc3RhbGwodGhpcy5xaW5lZEJhc2UpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5pbnN0YWxsKHRoaXMucWluZWRCYXNlKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2guYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5Qb3B1cC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cHBlckhlaWdodCA9IHRoaXMuX3FpblBpY2tlci5xaW5VcHBlci5xaW5lZEhUTUwuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwbG9yZXJNYXhIZWlnaHQgPSB0aGlzLl9xaW5Qb3B1cC5tYXhIZWlnaHQgLSAodXBwZXJIZWlnaHQgKyAxMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5QaWNrZXIucWluRXhwbG9yZXIuc3R5bGUucHV0QXNNYXhIZWlnaHQoZXhwbG9yZXJNYXhIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluUGlja2VyLmFkZENob3NlbigoY2hvc2VuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaG9zZW4gJiYgY2hvc2VuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpblBhdGguc2V0RGF0YShjaG9zZW5bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRCYXNlO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluTmF0dXJlLkNIQVJTO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGF0aC5nZXREYXRhKCk7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9xaW5QYXRoLnNldERhdGEoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGF0aDtcclxuICAgIH1cclxuICAgIGdldCBxaW5TZWFyY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblNlYXJjaDtcclxuICAgIH1cclxuICAgIGdldCBxaW5DaG9vc2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5QaWNrZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluUG9wdXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBvcHVwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluRmlsZVBhdGggPSBRaW5GaWxlUGF0aDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZpbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkZpbGVQaWNrID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuY29uc3QgcWluX2J1dHRvbl8xID0gcmVxdWlyZShcIi4vcWluLWJ1dHRvblwiKTtcclxuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcclxuY29uc3QgcWluX2NvbWJvXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tYm9cIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWluX2ZpbGVfdmlld18xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtdmlld1wiKTtcclxuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5jb25zdCBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xyXG5jbGFzcyBRaW5GaWxlUGljayBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcigoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwiZmlsZS1waWNrXCIsIG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCkpO1xyXG4gICAgICAgIHRoaXMuX3FpblVwcGVyID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xyXG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0gPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDb25maXJtKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIgPSBuZXcgcWluX3N0cmluZ18xLlFpblN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMgPSBuZXcgcWluX2NvbWJvXzEuUWluQ29tYm8oKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2ggPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VTZWFyY2gpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpblVuZGVyID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIgPSBuZXcgcWluX2ZpbGVfdmlld18xLlFpbkZpbGVWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUpID8gb3B0aW9ucy5uYXR1cmUgOiBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuQk9USDtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wZXJhdGlvbikgPyBvcHRpb25zLm9wZXJhdGlvbiA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc09wZXJhdGlvbi5PUEVOO1xyXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0b3JzID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZXNjcmlwdG9ycykgPyBvcHRpb25zLmRlc2NyaXB0b3JzIDogW107XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24pID8gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpbmdsZVNlbGVjdGlvbiA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcclxuICAgICAgICB0aGlzLmluaXRVcHBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdFVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBjYXN0ZWRRaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkQmFzZTtcclxuICAgIH1cclxuICAgIGluaXRNYWluKCkge1xyXG4gICAgICAgIHRoaXMuX3FpblVwcGVyLmluc3RhbGwodGhpcy5xaW5lZEJhc2UpO1xyXG4gICAgICAgIHRoaXMuX3FpblVuZGVyLmluc3RhbGwodGhpcy5xaW5lZEJhc2UpO1xyXG4gICAgfVxyXG4gICAgaW5pdFVwcGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3FpblVwcGVyLnN0eWxlLnB1dEFzRmxleE1pbigpO1xyXG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0uaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XHJcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybS5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc01haW4pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNob3NlbiBvZiB0aGlzLl9saXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaG9zZW4oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLmluc3RhbGwodGhpcy5fcWluVXBwZXIpO1xyXG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5zdHlsZS5wdXRBc01pbldpZHRoKDEwMCk7XHJcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLnN0eWxlLnB1dEFzRmxleE1heCgpO1xyXG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc0VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIoKTtcclxuICAgICAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLmluc3RhbGwodGhpcy5fcWluVXBwZXIpO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuc3R5bGUucHV0QXNNaW5XaWR0aCgxMDApO1xyXG4gICAgICAgIHRoaXMuaW5pdEV4dGVuc2lvbnMoKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2guaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRm9sZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0VW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluVW5kZXIuc3R5bGUucHV0QXNTY3JvbGwoKTtcclxuICAgICAgICB0aGlzLl9xaW5VbmRlci5zdHlsZS5wdXRBc0ZsZXhNYXgoKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5pbnN0YWxsKHRoaXMuX3FpblVuZGVyKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5uYXR1cmUgPSB0aGlzLl9uYXR1cmU7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uID0gdGhpcy5fc2luZ2xlU2VsZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgaW5pdEV4dGVuc2lvbnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Rlc2NyaXB0b3JzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuYWRkSXRlbSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbGwgRmlsZXMgKCouKilcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIipcIixcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuZXh0ZW5zaW9ucyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2Rlc2NyaXB0b3JzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMuX2Rlc2NyaXB0b3JzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuYWRkSXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0b3IuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlc2NyaXB0b3IuZXh0ZW5zaW9ucy5qb2luKFwiO1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogaW5kZXggPT0gMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmV4dGVuc2lvbnMgPSB0aGlzLl9kZXNjcmlwdG9yc1swXS5leHRlbnNpb25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gcWlucGVsX3Jlc18xLlFpbk5hdHVyZS5DSEFSUztcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkV4cGxvcmVyLmdldERhdGEoKTtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLnNldERhdGEoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluVXBwZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblVwcGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkNvbmZpcm0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkNvbmZpcm07XHJcbiAgICB9XHJcbiAgICBnZXQgcWluRm9sZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5Gb2xkZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluRXh0ZW5zaW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluRXh0ZW5zaW9ucztcclxuICAgIH1cclxuICAgIGdldCBxaW5TZWFyY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblNlYXJjaDtcclxuICAgIH1cclxuICAgIGdldCBxaW5VbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluVW5kZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluRXhwbG9yZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkV4cGxvcmVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmF0dXJlO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hdHVyZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX25hdHVyZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLm5hdHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IG9wZXJhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IG9wZXJhdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRlc2NyaXB0b3JzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdG9ycztcclxuICAgIH1cclxuICAgIHNldCBkZXNjcmlwdG9ycyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0b3JzID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgc2luZ2xlU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVTZWxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBzZXQgc2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBsb2FkRm9sZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmxvYWQodGhpcy5fcWluRm9sZGVyLmdldERhdGEoKSwgKGxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuc2V0RGF0YShsb2FkZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkQ2hvc2VuKGNob3Nlbikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGNob3Nlbik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlUGljayA9IFFpbkZpbGVQaWNrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmlsZS1waWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRmlsZVZpZXcgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5jbGFzcyBRaW5GaWxlVmlldyBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcigoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwiZmlsZS12aWV3XCIsIG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpKTtcclxuICAgICAgICB0aGlzLl9mb2xkZXJBY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9uYXR1cmUgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSkgPyBvcHRpb25zLm5hdHVyZSA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmV4dGVuc2lvbnMpID8gb3B0aW9ucy5leHRlbnNpb25zIDogW107XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24pID8gb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24gOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBjYXN0ZWRRaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkQmFzZTtcclxuICAgIH1cclxuICAgIGluaXRNYWluKCkge1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uTWFpbih0aGlzLnFpbmVkSFRNTCk7XHJcbiAgICAgICAgdGhpcy5xaW5lZEJhc2UuYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnFpbmVkQmFzZS5zdHlsZS5wdXRBc0Rpc2FibGVkU2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBnZXROYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbnBlbF9yZXNfMS5RaW5OYXR1cmUuQ0hBUlM7XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlzU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRQYXRoSm9pbih0aGlzLl9mb2xkZXJTZXJ2ZXIsIGl0ZW0uZ2V0TmFtZSgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgZm9sZGVyUm9vdCA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0UGFyZW50KGRhdGFbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQoZm9sZGVyUm9vdCwgKF8pID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbVBhdGggb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtUm9vdCA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0UGFyZW50KGl0ZW1QYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFN0ZW0oaXRlbVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUm9vdCAhPT0gZm9sZGVyUm9vdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnFpbnBlbC5qb2JiZWQuc3RhdHVzRXJyb3IoYFRoZSBpdGVtICcke2l0ZW1QYXRofScgaXMgbm90IG9uIHRoZSByb290ICcke2ZvbGRlclJvb3R9Jy5gLCBcIntxaW5wZWwtY3BzfShFcnJDb2RlLTAwMDAwMSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0KGl0ZW1OYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuam9iYmVkLnN0YXR1c0Vycm9yKGBEb2VzIG5vdCBoYXZlIHRoZSBpdGVtICcke2l0ZW1OYW1lfScgb24gdGhlIGZvbGRlciAnJHtmb2xkZXJSb290fSdgLCBcIntxaW5wZWwtY3BzfShFcnJDb2RlLTAwMDAwMilcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBuYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdHVyZTtcclxuICAgIH1cclxuICAgIHNldCBuYXR1cmUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9uYXR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBleHRlbnNpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHRlbnNpb25zO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4dGVuc2lvbnModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9leHRlbnNpb25zID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgc2luZ2xlU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVTZWxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBzZXQgc2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaW5nbGVTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGdldCBmb2xkZXJBY3R1YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlckFjdHVhbDtcclxuICAgIH1cclxuICAgIGdldCBmb2xkZXJTZXJ2ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlclNlcnZlcjtcclxuICAgIH1cclxuICAgIHVwZGF0ZVNpbmdsZVNlbGVjdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2luZ2xlU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5SGFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFscmVhZHlIYXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUhhcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZChmb2xkZXIsIG9uTG9hZCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICB0aGlzLnFpbnBlbC50YWxrXHJcbiAgICAgICAgICAgIC5wb3N0KFwiL2Rpci9saXN0XCIsIHsgcGF0aDogZm9sZGVyIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gZm9sZGVyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBsaW5lIG9mIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmJvZHkuZ2V0VGV4dExpbmVzKHJlcy5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmVWYWx1ZSA9IGxpbmUuc3Vic3RyaW5nKDMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJQOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb2xkZXJTZXJ2ZXIgPSBsaW5lVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQobGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJEOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRElSRUNUT1JJRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdEaXIobGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJGOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRklMRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0RmlsZUV4dGVuc2lvbihsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFzc2VkRXh0ZW5zaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2V4dGVuc2lvbnMgJiYgdGhpcy5fZXh0ZW5zaW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWRFeHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzZWRFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3RmlsZShsaW5lVmFsdWUsIGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnFpbnBlbC5qb2JiZWQuc3RhdHVzRXJyb3IoZXJyLCBcIntxaW5wZWwtY3BzfShFcnJDb2RlLTAwMDAwMylcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWxvYWQob25Mb2FkKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkKHRoaXMuX2ZvbGRlclNlcnZlciwgb25Mb2FkKTtcclxuICAgIH1cclxuICAgIGdvRm9sZGVyVXAob25Mb2FkKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHFpbnBlbF9yZXNfMS5RaW5Gb290LmdldFBhcmVudCh0aGlzLl9mb2xkZXJTZXJ2ZXIpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKHBhcmVudCwgb25Mb2FkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9mb2xkZXJTZXJ2ZXIgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW5TZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX2l0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udW5zZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoaXRlbU5hbWUpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zLmZpbmQoKGluc2lkZSkgPT4gaW5zaWRlLmdldE5hbWUoKSA9PSBpdGVtTmFtZSk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5zZWxlY3QoaXRlbU5hbWUpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zLmZpbmQoKGluc2lkZSkgPT4gaW5zaWRlLmdldE5hbWUoKSA9PSBpdGVtTmFtZSk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZXdEaXIobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBcImV4cGxvcmVyLWRpci5wbmdcIik7XHJcbiAgICB9XHJcbiAgICBuZXdGaWxlKG5hbWUsIGV4dGVuc2lvbikge1xyXG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBnZXRJY29uTmFtZShleHRlbnNpb24pKTtcclxuICAgIH1cclxuICAgIG5ld0l0ZW0obmFtZSwgaWNvbikge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSh0aGlzLCBuYW1lLCBpY29uKTtcclxuICAgICAgICBpdGVtLmluc3RhbGwodGhpcy5xaW5lZEhUTUwpO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlVmlldyA9IFFpbkZpbGVWaWV3O1xyXG5jbGFzcyBJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGV4cGxvcmVyLCBmaWxlTmFtZSwgaWNvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLmRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuc3Bhbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLmltZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHRoaXMuc3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5leHBsb3JlciA9IGV4cGxvcmVyO1xyXG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB0aGlzLmljb25OYW1lID0gaWNvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5pbml0SXRlbSgpO1xyXG4gICAgfVxyXG4gICAgaW5pdEl0ZW0oKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZJdGVtKHRoaXMuZGl2SXRlbSk7XHJcbiAgICAgICAgdGhpcy5kaXZJdGVtLnRhYkluZGV4ID0gMDtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdkl0ZW1Cb2R5KHRoaXMuZGl2SXRlbUJvZHkpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbS5hcHBlbmRDaGlsZCh0aGlzLmRpdkl0ZW1Cb2R5KTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5JY29uKHRoaXMuc3Bhbkljb24pO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuSWNvbik7XHJcbiAgICAgICAgdGhpcy5pbWdJY29uLnNyYyA9IFwiL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIHRoaXMuaWNvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5zcGFuSWNvbi5hcHBlbmRDaGlsZCh0aGlzLmltZ0ljb24pO1xyXG4gICAgICAgIHRoaXMuc3BhblRleHQuaW5uZXJUZXh0ID0gdGhpcy5maWxlTmFtZTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5UZXh0KHRoaXMuc3BhblRleHQpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuVGV4dCk7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuYXJtLmFkZEFjdGlvbih0aGlzLmRpdkl0ZW0sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpdkl0ZW0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbnN0YWxsKG9uKSB7XHJcbiAgICAgICAgb24uYXBwZW5kQ2hpbGQodGhpcy5kaXZJdGVtKTtcclxuICAgIH1cclxuICAgIHNlbGVjdCgpIHtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdlNlbGVjdCh0aGlzLmRpdkl0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5zZWxlY3QoKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZVblNlbGVjdCh0aGlzLmRpdkl0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBsb3Jlci5zaW5nbGVTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9yZXIuY2xlYW5TZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZU5hbWU7XHJcbiAgICB9XHJcbiAgICBpc1NlbGVjdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldEljb25OYW1lKGZyb21FeHRlbnNpb24pIHtcclxuICAgIGxldCByZXN1bHQgPSBcImV4cGxvcmVyLWZpbGUucG5nXCI7XHJcbiAgICBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVBcHAoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWFwcHMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUNtZChmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItY21kcy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlRXhlYyhmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItZXhlYy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlSW1hZ2UoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVWZWN0b3IoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVNdXNpYyhmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItbXVzaWMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZU1vdmllKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlWmlwcGVkKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25NYWluOiAoZWwpID0+IHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KGVsKTtcclxuICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbldpZHRoID0gXCIxNjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbkhlaWdodCA9IFwiMTYwcHhcIjtcclxuICAgICAgICBlbC50YWJJbmRleCA9IDA7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkl0ZW06IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMnB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiOXB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMzNjAwNDVcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmNvbG9yID0gXCIjMjcwMDM2XCI7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjYWUwMDAwXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMzYwMDQ1XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkl0ZW1Cb2R5OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICAgICAgZWwuc3R5bGUud2lkdGggPSBcIjk2cHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uU3Bhbkljb246IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPblNwYW5UZXh0OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGVsLnN0eWxlLndvcmRXcmFwID0gXCJicmVhay13b3JkXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdlNlbGVjdDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlZmZmXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdlVuU2VsZWN0OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcclxuICAgIH0sXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1maWxlLXZpZXcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5JY29uQ2VsbCA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluSWNvbkNlbGwgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoaWNvbiwgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIoKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcImljb24tY2VsbFwiLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBib3JkZXIgPSBNYXRoLnJvdW5kKGljb24uc2l6ZS53aWR0aCAvIDEwKTtcclxuICAgICAgICBsZXQgcGFkZGluZyA9IGJvcmRlciAqIDI7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuYm9yZGVyUmFkaXVzID0gYm9yZGVyICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLnBhZGRpbmcgPSBwYWRkaW5nICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB0aGlzLl9xaW5JY29uID0gaWNvbjtcclxuICAgICAgICB0aGlzLl9xaW5JY29uLmluc3RhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICBjYXN0ZWRRaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkSFRNTDtcclxuICAgIH1cclxuICAgIGdldCBxaW5JY29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5JY29uO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNlbGVjdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RlZChzZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvclNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluSWNvbkNlbGwgPSBRaW5JY29uQ2VsbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWljb24tY2VsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkljb25QaWNrID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5faWNvbl9jZWxsXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvbi1jZWxsXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNsYXNzIFFpbkljb25QaWNrIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHN1cGVyKChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgXCJpY29uLXBpY2tcIiwgbmV3IHFpbl9saW5lXzEuUWluTGluZSgpKTtcclxuICAgICAgICB0aGlzLnFpbmVkQmFzZS5zdHlsZS5wdXRBc0VkaXQoKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pY29ucykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGljb24gb2Ygb3B0aW9ucy5pY29ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJY29uKGljb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY2VsbHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIG9wdGlvbnMuY2VsbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2VsbChjZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRCYXNlO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluTmF0dXJlLkNIQVJTO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgcWluX2ljb25fY2VsbF8xLlFpbkljb25DZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQucWluSWNvbi5hc3NldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHNldERhdGEoYXNzZXQpIHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLnFpbmVkQmFzZS5jaGlsZHJlbigpKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIHFpbl9pY29uX2NlbGxfMS5RaW5JY29uQ2VsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnFpbkljb24uYXNzZXQgPT0gYXNzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkSWNvbihpY29uKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBxaW5faWNvbl9jZWxsXzEuUWluSWNvbkNlbGwoaWNvbik7XHJcbiAgICAgICAgb3B0aW9uLmluc3RhbGwodGhpcy5xaW5lZEJhc2UpO1xyXG4gICAgfVxyXG4gICAgYWRkQ2VsbChvcHRpb24pIHtcclxuICAgICAgICBvcHRpb24uaW5zdGFsbCh0aGlzLnFpbmVkQmFzZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5JY29uUGljayA9IFFpbkljb25QaWNrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taWNvbi1waWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluSWNvbiA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluSWNvbiBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihhc3NldCwgc2l6ZSA9IHFpbnBlbF9yZXNfMS5RaW5HcmFuZGV1ci5TTUFMTCwgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIoKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcImljb25cIiwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSk7XHJcbiAgICAgICAgdGhpcy5jYXN0ZWRRaW5lKCkuc3JjID0gKDAsIHFpbl9hc3NldHNfMS5xaW5Bc3NldFVybCkoYXNzZXQpO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlU2l6ZSh0aGlzLnFpbmVkSFRNTCwgc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBjYXN0ZWRRaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkSFRNTDtcclxuICAgIH1cclxuICAgIGdldCBhc3NldCgpIHtcclxuICAgICAgICByZXR1cm4gKDAsIHFpbl9hc3NldHNfMS5xaW5VcmxBc3NldCkodGhpcy5jYXN0ZWRRaW5lKCkuc3JjKTtcclxuICAgIH1cclxuICAgIHNldCBhc3NldChhc3NldCkge1xyXG4gICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLnNyYyA9ICgwLCBxaW5fYXNzZXRzXzEucWluQXNzZXRVcmwpKGFzc2V0KTtcclxuICAgIH1cclxuICAgIGdldCBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluU2tpbi5nZXREaW1lbnNpb24odGhpcy5xaW5lZEhUTUwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluSWNvbiA9IFFpbkljb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1pY29uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluSW50ZWdlciA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY2xhc3MgUWluSW50ZWdlciBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcigoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwiaW50ZWdlclwiLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0VkaXQodGhpcy5xaW5lZEhUTUwpO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLndpZHRoID0gXCIxMjBweFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLmdldERhdGEoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluTmF0dXJlLklOVDtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNhc3RlZFFpbmUoKS52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSB1bmRlZmluZWQgfHwgdmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5jYXN0ZWRRaW5lKCkudmFsdWUsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YSA9PSBudWxsIHx8IGRhdGEgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLnZhbHVlID0gKGRhdGEgfCAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkludGVnZXIgPSBRaW5JbnRlZ2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taW50ZWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkxhYmVsID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkxhYmVsIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcigoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwibGFiZWxcIiwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpKTtcclxuICAgICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5xaW5lZEhUTUwudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXN0ZWRRaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkSFRNTDtcclxuICAgIH1cclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5lZEhUTUwudGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGxpbmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MLmdldEF0dHJpYnV0ZShcImZvclwiKTtcclxuICAgIH1cclxuICAgIHNldCBsaW5rKG5hbWUpIHtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgbmFtZSk7XHJcbiAgICB9XHJcbiAgICBxaW5MaW5rKHFpbkNvbXApIHtcclxuICAgICAgICB0aGlzLmxpbmsgPSBxaW5Db21wLm11c3RJZCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluTGFiZWwgPSBRaW5MYWJlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWxhYmVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluTGluZSA9IHZvaWQgMDtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpbkxpbmUgZXh0ZW5kcyBxaW5fcGFuZWxfMS5RaW5QYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zLCAoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwibGluZVwiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleERpcmVjdGlvblJvdygpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4V3JhcCgpO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1pbldpZHRoID0gXCJtaW4tY29udGVudFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1pbkhlaWdodCA9IFwibWluLWNvbnRlbnRcIjtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluTGluZSA9IFFpbkxpbmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1saW5lLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluTXV0YW50c0FybSA9IGV4cG9ydHMuUWluTXV0YW50cyA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jvb2xlYW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib29sZWFuXCIpO1xyXG5jb25zdCBxaW5fY29tYm9fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb21ib1wiKTtcclxuY29uc3QgcWluX2ZpbGVfcGF0aF8xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtcGF0aFwiKTtcclxuY29uc3QgcWluX2ZpbGVfcGlja18xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtcGlja1wiKTtcclxuY29uc3QgcWluX2ZpbGVfdmlld18xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtdmlld1wiKTtcclxuY29uc3QgcWluX2ljb25fcGlja18xID0gcmVxdWlyZShcIi4vcWluLWljb24tcGlja1wiKTtcclxuY29uc3QgcWluX2ludGVnZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1pbnRlZ2VyXCIpO1xyXG5jb25zdCBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xyXG52YXIgUWluTXV0YW50cztcclxuKGZ1bmN0aW9uIChRaW5NdXRhbnRzKSB7XHJcbiAgICBRaW5NdXRhbnRzW1wiQk9PTEVBTlwiXSA9IFwiYm9vbGVhblwiO1xyXG4gICAgUWluTXV0YW50c1tcIklOVEVHRVJcIl0gPSBcImludGVnZXJcIjtcclxuICAgIFFpbk11dGFudHNbXCJTVFJJTkdcIl0gPSBcInN0cmluZ1wiO1xyXG4gICAgUWluTXV0YW50c1tcIkNPTUJPXCJdID0gXCJjb21ib1wiO1xyXG4gICAgUWluTXV0YW50c1tcIklDT05fUElDS1wiXSA9IFwiaWNvbi1waWNrXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiRklMRV9QQVRIXCJdID0gXCJmaWxlX3BhdGhcIjtcclxuICAgIFFpbk11dGFudHNbXCJGSUxFX1BJQ0tcIl0gPSBcImZpbGVfcGlja1wiO1xyXG4gICAgUWluTXV0YW50c1tcIkZJTEVfVklFV1wiXSA9IFwiZmlsZV92aWV3XCI7XHJcbn0pKFFpbk11dGFudHMgPSBleHBvcnRzLlFpbk11dGFudHMgfHwgKGV4cG9ydHMuUWluTXV0YW50cyA9IHt9KSk7XHJcbmZ1bmN0aW9uIG5ld0VkaXQoa2luZCwgb3B0aW9ucykge1xyXG4gICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkJPT0xFQU46XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2Jvb2xlYW5fMS5RaW5Cb29sZWFuKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5JTlRFR0VSOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9pbnRlZ2VyXzEuUWluSW50ZWdlcihvcHRpb25zKTtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuU1RSSU5HOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkNPTUJPOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9jb21ib18xLlFpbkNvbWJvKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5JQ09OX1BJQ0s6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ljb25fcGlja18xLlFpbkljb25QaWNrKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5GSUxFX1BBVEg6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ZpbGVfcGF0aF8xLlFpbkZpbGVQYXRoKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5GSUxFX1BJQ0s6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ZpbGVfcGlja18xLlFpbkZpbGVQaWNrKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5GSUxFX1ZJRVc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ZpbGVfdmlld18xLlFpbkZpbGVWaWV3KG9wdGlvbnMpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24ga2luZCBvZiBtdXRhbnQgdG8gY3JlYXRlOiBcIiArIGtpbmQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluTXV0YW50c0FybSA9IHtcclxuICAgIG5ld0VkaXQsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1tdXRhbnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluUGFuZWwgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluUGFuZWwgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIoKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcInBhbmVsXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNEaXNwbGF5RmxleCgpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MO1xyXG4gICAgfVxyXG4gICAgcHV0KGl0ZW0pIHtcclxuICAgICAgICBpdGVtLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5QYW5lbCA9IFFpblBhbmVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tcGFuZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Qb3B1cCA9IHZvaWQgMDtcclxuY29uc3QgcWluX3Rvb2xfMSA9IHJlcXVpcmUoXCIuL3Fpbi10b29sXCIpO1xyXG5jbGFzcyBRaW5Qb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBxaW5fdG9vbF8xLlFpblRvb2wucWlucGVsLmpvYmJlZC5uZXdQb3B1cChjb250ZW50cy5jYXN0ZWRRaW5lKCkpO1xyXG4gICAgfVxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnNob3coKTtcclxuICAgIH1cclxuICAgIHNob3dPblBhcmVudChwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnNob3dPblBhcmVudChwYXJlbnQucWluZWRIVE1MKTtcclxuICAgIH1cclxuICAgIHNob3dPbkJvdW5kcyhib3VuZHMpIHtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnNob3dPbkJvdW5kcyhib3VuZHMpO1xyXG4gICAgfVxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5jbG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluUG9wdXAgPSBRaW5Qb3B1cDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXBvcHVwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluUm93ID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluUm93IGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucywgKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcInJvd1wiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleERpcmVjdGlvblJvdygpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4V3JhcE5vdCgpO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1pbldpZHRoID0gXCJtaW4tY29udGVudFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1pbkhlaWdodCA9IFwibWluLWNvbnRlbnRcIjtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluUm93ID0gUWluUm93O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tcm93LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU2Nyb2xsID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluU2Nyb2xsIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucywgKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcInNjcm9sbFwiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzU2Nyb2xsKCk7XHJcbiAgICB9XHJcbiAgICBwdXQoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblNjcm9sbCA9IFFpblNjcm9sbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNjcm9sbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblNwYWNlciA9IHZvaWQgMDtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpblNwYWNlciBleHRlbmRzIHFpbl9wYW5lbF8xLlFpblBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpc3RhbmNlLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcihudWxsLCAoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwic3BhY2VyXCIpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNNaW5TaXplKGRpc3RhbmNlICE9PSBudWxsICYmIGRpc3RhbmNlICE9PSB2b2lkIDAgPyBkaXN0YW5jZSA6IDQsIGRpc3RhbmNlICE9PSBudWxsICYmIGRpc3RhbmNlICE9PSB2b2lkIDAgPyBkaXN0YW5jZSA6IDQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluU3BhY2VyID0gUWluU3BhY2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3BhY2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU3BsaXR0ZXIgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluU3BsaXR0ZXIgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIoKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcInNwbGl0dGVyXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcWluU2lkZUEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3FpblNpZGVCID0gbnVsbDtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5hcHBlbmRDaGlsZCh0aGlzLl9lbFNpZGVBKTtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5hcHBlbmRDaGlsZCh0aGlzLl9lbE1vdmVyKTtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsR3Jvd0EpO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxHcm93Qik7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuYXBwZW5kQ2hpbGQodGhpcy5fZWxTaWRlQik7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEycHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYmEoMjU1LDI1MCwyMzksMC4xKVwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUuZmxleCA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Euc3R5bGUuZmxleCA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Iuc3R5bGUuZmxleCA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuZmxleFdyYXAgPSBcIm5vd3JhcFwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICBsZXQgYmFsYW5jZSA9IChncm93LCBmYWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZWxhdGVkID0gdGhpcy5faXNIb3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIjtcclxuICAgICAgICAgICAgbGV0IGdyb3dBdCA9IHBhcnNlSW50KGdyb3cuc3R5bGVbcmVsYXRlZF0pO1xyXG4gICAgICAgICAgICBsZXQgZmFsbEF0ID0gcGFyc2VJbnQoZmFsbC5zdHlsZVtyZWxhdGVkXSk7XHJcbiAgICAgICAgICAgIGlmIChmYWxsQXQgPD0gMTApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGdyb3cuc3R5bGVbcmVsYXRlZF0gPSBncm93QXQgKyAxMCArIFwiJVwiO1xyXG4gICAgICAgICAgICBmYWxsLnN0eWxlW3JlbGF0ZWRdID0gZmFsbEF0IC0gMTAgKyBcIiVcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0EuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoXykgPT4gYmFsYW5jZSh0aGlzLl9lbFNpZGVBLCB0aGlzLl9lbFNpZGVCKSk7XHJcbiAgICAgICAgdGhpcy5fZWxHcm93QS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoXykgPT4gYmFsYW5jZSh0aGlzLl9lbFNpZGVBLCB0aGlzLl9lbFNpZGVCKSk7XHJcbiAgICAgICAgdGhpcy5fZWxHcm93Qi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChfKSA9PiBiYWxhbmNlKHRoaXMuX2VsU2lkZUIsIHRoaXMuX2VsU2lkZUEpKTtcclxuICAgICAgICB0aGlzLl9lbEdyb3dCLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChfKSA9PiBiYWxhbmNlKHRoaXMuX2VsU2lkZUIsIHRoaXMuX2VsU2lkZUEpKTtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaWRlQSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaWRlQShvcHRpb25zLnNpZGVBKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaWRlQikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaWRlQihvcHRpb25zLnNpZGVCKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzdGVkUWluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5lZEhUTUw7XHJcbiAgICB9XHJcbiAgICBhZGRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9xaW5TaWRlQSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQSA9IGNoaWxkO1xyXG4gICAgICAgICAgICB0aGlzLl9lbFNpZGVBLmFwcGVuZENoaWxkKGNoaWxkLnFpbmVkSFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcWluU2lkZUIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpblNpZGVCLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluU2lkZUIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblNpZGVCID0gY2hpbGQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsU2lkZUIuYXBwZW5kQ2hpbGQoY2hpbGQucWluZWRIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgfVxyXG4gICAgZGVsQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9iYXNlQ2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9xaW5TaWRlQSA9PT0gY2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxTaWRlQS5yZW1vdmVDaGlsZChjaGlsZC5xaW5lZEhUTUwpO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3FpblNpZGVCID09PSBjaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbFNpZGVCLnJlbW92ZUNoaWxkKGNoaWxkLnFpbmVkSFRNTCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblNpZGVCID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIb3Jpem9udGFsKCkge1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQS5zdHlsZS53aWR0aCA9IFwiNTAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLnN0eWxlLndpZHRoID0gXCI1MCVcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUubWluV2lkdGggPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLm1heFdpZHRoID0gXCIyNHB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5taW5IZWlnaHQgPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLm1heEhlaWdodCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Euc3R5bGUuYmFja2dyb3VuZCA9XHJcbiAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMCUsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSA4NCUsIHJnYmEoMjQsMCwzOSwwLjgpIDk4JSwgcmdiYSgyNCwwLDM5LDAuOCkgMTAwJSlcIjtcclxuICAgICAgICB0aGlzLl9lbEdyb3dCLnN0eWxlLmJhY2tncm91bmQgPVxyXG4gICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAwJSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDg0JSwgcmdiYSgyNCwwLDM5LDAuOCkgOTglLCByZ2JhKDI0LDAsMzksMC44KSAxMDAlKVwiO1xyXG4gICAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZXRWZXJ0aWNhbCgpIHtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUEuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmhlaWdodCA9IFwiNTAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuaGVpZ2h0ID0gXCI1MCVcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLm1pbldpZHRoID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5tYXhXaWR0aCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUubWluSGVpZ2h0ID0gXCIyNHB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5tYXhIZWlnaHQgPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbEdyb3dBLnN0eWxlLmJhY2tncm91bmQgPVxyXG4gICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAwJSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDg0JSwgcmdiYSgyNCwwLDM5LDAuOCkgOTglLCByZ2JhKDI0LDAsMzksMC44KSAxMDAlKVwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Iuc3R5bGUuYmFja2dyb3VuZCA9XHJcbiAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAwJSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDg0JSwgcmdiYSgyNCwwLDM5LDAuOCkgOTglLCByZ2JhKDI0LDAsMzksMC44KSAxMDAlKVwiO1xyXG4gICAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0U2lkZUEoc2lkZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9xaW5TaWRlQSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQS51bkluc3RhbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5fcWluU2lkZUEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9xaW5TaWRlQSA9IHNpZGU7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQS5hcHBlbmRDaGlsZChzaWRlLnFpbmVkSFRNTCk7XHJcbiAgICB9XHJcbiAgICBzZXRTaWRlQihzaWRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3FpblNpZGVCICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblNpZGVCLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3FpblNpZGVCID0gc2lkZTtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLmFwcGVuZENoaWxkKHNpZGUucWluZWRIVE1MKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblNwbGl0dGVyID0gUWluU3BsaXR0ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1zcGxpdHRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblN0YWNrID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluU3RhY2sgZXh0ZW5kcyBxaW5fcGFuZWxfMS5RaW5QYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zLCAoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwic3RhY2tcIik7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhEaXJlY3Rpb25Sb3coKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleFdyYXBOb3QoKTtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYWRkQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuKCkuZm9yRWFjaCgoaW5DaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBpbkNoaWxkLnVuRGlzcGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN1cGVyLmFkZENoaWxkKGNoaWxkKTtcclxuICAgIH1cclxuICAgIHN0YWNrKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGNoaWxkKTtcclxuICAgIH1cclxuICAgIHNob3coY2hpbGQpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuKCkuZm9yRWFjaCgoaW5DaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5DaGlsZCA9PT0gY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGluQ2hpbGQucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbkNoaWxkLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5TdGFjayA9IFFpblN0YWNrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3RhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5TdHJpbmcgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNsYXNzIFFpblN0cmluZyBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcigoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwic3RyaW5nXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgdGhpcy5jYXN0ZWRRaW5lKCkudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLm1heExlbmd0aCA9IG9wdGlvbnMubWF4TGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBNYXRoLm1pbihNYXRoLm1heChvcHRpb25zLm1heExlbmd0aCAtIDEwLCAwKSwgOTApO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSBNYXRoLmZsb29yKDkwICsgKHBvc2l0aW9uICogNykgLyAzKTtcclxuICAgICAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0VkaXQodGhpcy5xaW5lZEhUTUwpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5pbml0aWFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXN0ZWRRaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkSFRNTDtcclxuICAgIH1cclxuICAgIGdldE5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gcWlucGVsX3Jlc18xLlFpbk5hdHVyZS5DSEFSUztcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FzdGVkUWluZSgpLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jYXN0ZWRRaW5lKCkudmFsdWUgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgaW5zZXJ0QXRDdXJzb3IoZGF0YSkge1xyXG4gICAgICAgIGlmICghZGF0YSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IHRoaXMuY2FzdGVkUWluZSgpLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLmNhc3RlZFFpbmUoKS5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgbGV0IG9sZFZhbCA9IHRoaXMuY2FzdGVkUWluZSgpLnZhbHVlO1xyXG4gICAgICAgIGxldCBuZXdWYWwgPSAoc3RhcnRQb3MgPiAwID8gb2xkVmFsLnN1YnN0cmluZygwLCBzdGFydFBvcykgOiBcIlwiKSArXHJcbiAgICAgICAgICAgIGRhdGEgK1xyXG4gICAgICAgICAgICAoZW5kUG9zIDwgb2xkVmFsLmxlbmd0aCA/IG9sZFZhbC5zdWJzdHJpbmcoZW5kUG9zKSA6IFwiXCIpO1xyXG4gICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLnZhbHVlID0gbmV3VmFsO1xyXG4gICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRQb3M7XHJcbiAgICAgICAgdGhpcy5jYXN0ZWRRaW5lKCkuc2VsZWN0aW9uRW5kID0gc3RhcnRQb3MgKyBkYXRhLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblN0cmluZyA9IFFpblN0cmluZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblRhYmxlID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpblRhYmxlIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHN1cGVyKChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgXCJ0YWJsZVwiLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgICB0aGlzLl9lbFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICAgICAgdGhpcy5fZWxUSGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICB0aGlzLl9lbFRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgICAgIHRoaXMuX2xpbmVzU2l6ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuYXBwZW5kQ2hpbGQodGhpcy5fZWxUYWJsZSk7XHJcbiAgICAgICAgdGhpcy5fZWxUYWJsZS5hcHBlbmRDaGlsZCh0aGlzLl9lbFRIZWFkKTtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkLmFwcGVuZENoaWxkKHRoaXMuX2VsVEhlYWRSb3cpO1xyXG4gICAgICAgIHRoaXMuX2VsVGFibGUuYXBwZW5kQ2hpbGQodGhpcy5fZWxUQm9keSk7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25UYWJsZSh0aGlzLl9lbFRhYmxlKTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkhlYWQodGhpcy5fZWxUSGVhZCk7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25IZWFkUm93KHRoaXMuX2VsVEhlYWRSb3cpO1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uQm9keSh0aGlzLl9lbFRCb2R5KTtcclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MO1xyXG4gICAgfVxyXG4gICAgZ2V0TGluZXMoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2VsVEJvZHkucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmZvckVhY2goKHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gW107XHJcbiAgICAgICAgICAgIHRyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKS5mb3JFYWNoKCh0ZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGluZS5wdXNoKHRkLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChsaW5lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgYWRkTGluZXMobGluZXMpIHtcclxuICAgICAgICB0aGlzLmRlbExpbmVzKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZShsaW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIZWFkKGhlYWQpIHtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkUm93LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGhlYWQpIHtcclxuICAgICAgICAgICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICB0aC5pbm5lclRleHQgPSBjZWxsO1xyXG4gICAgICAgICAgICBzdHlsZXMuYXBwbHlPbkhlYWRDb2wodGgpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbFRIZWFkUm93LmFwcGVuZENoaWxkKHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRIZWFkKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkUm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aFwiKS5mb3JFYWNoKCh0aCkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aC5pbm5lclRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBhZGRIZWFkKGhlYWQpIHtcclxuICAgICAgICBsZXQgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgdGguaW5uZXJUZXh0ID0gaGVhZDtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkhlYWRDb2wodGgpO1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWRSb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgfVxyXG4gICAgYWRkTGluZShsaW5lKSB7XHJcbiAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLl9saW5lc1NpemUgJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAgIHN0eWxlcy5hcHBseU9uQm9keVJvdyh0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdHlsZXMuYXBwbHlPbkJvZHlSb3dPZGQodHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgbGluZSkge1xyXG4gICAgICAgICAgICBsZXQgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkLmlubmVyVGV4dCA9IGNlbGwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgc3R5bGVzLmFwcGx5T25Cb2R5Q29sKHRkKTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbFRCb2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICB0aGlzLl9saW5lc1NpemUrKztcclxuICAgIH1cclxuICAgIGRlbExpbmVzKCkge1xyXG4gICAgICAgIHRoaXMuX2VsVEJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9saW5lc1NpemUgPSAwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluVGFibGUgPSBRaW5UYWJsZTtcclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYXBwbHlPblRhYmxlOiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM5ZTllOWVcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uSGVhZDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uSGVhZFJvdzogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM1NmNkNjQzNlwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25IZWFkQ29sOiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCIxcHggc29saWQgIzVlNWU1ZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkICM1ZTVlNWVcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uQm9keTogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uQm9keVJvdzogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM1NjY0Y2QzNlwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25Cb2R5Um93T2RkOiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2NkYTk1NjM2XCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkJvZHlDb2w6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyUmlnaHQgPSBcIjFweCBzb2xpZCAjNWU1ZTVlXCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIycHggc29saWQgIzVlNWU1ZVwiO1xyXG4gICAgfSxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluVGFicyA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbmNvbnN0IHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XHJcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5jbGFzcyBRaW5UYWJzIGV4dGVuZHMgcWluX2NvbHVtbl8xLlFpbkNvbHVtbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcihudWxsLCAoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwidGFic1wiKTtcclxuICAgICAgICB0aGlzLl9xaW5UYWJzID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xyXG4gICAgICAgIHRoaXMuX3FpblBhbmVsID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5fdGFicyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3FpblRhYnMuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5QYW5lbC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUYWIodGFiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBxaW5UYWJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5UYWJzO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblBhbmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5QYW5lbDtcclxuICAgIH1cclxuICAgIGFkZFRhYih0YWIpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbih7IGxhYmVsOiBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwodGFiLnRpdGxlKSB9KTtcclxuICAgICAgICBidXR0b24uc3R5bGUucHV0QXNCYWNrZ3JvdW5kKHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckluYWN0aXZlKTtcclxuICAgICAgICBidXR0b24uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWV3ZXIodGFiLnZpZXdlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBidXR0b24uaW5zdGFsbCh0aGlzLl9xaW5UYWJzKTtcclxuICAgICAgICBsZXQgZmlyc3QgPSB0aGlzLl90YWJzLmxlbmd0aCA9PSAwO1xyXG4gICAgICAgIGxldCB0YWJSZWYgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0YWIudGl0bGUsXHJcbiAgICAgICAgICAgIHZpZXdlcjogdGFiLnZpZXdlcixcclxuICAgICAgICAgICAgYnV0dG9uLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fdGFicy5wdXNoKHRhYlJlZik7XHJcbiAgICAgICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXdlcih0YWIudmlld2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93VGFiKHRpdGxlKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0YWIgb2YgdGhpcy5fdGFicykge1xyXG4gICAgICAgICAgICBpZiAodGFiLnRpdGxlID09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWV3ZXIodGFiLnZpZXdlcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dWaWV3ZXIodmlld2VyKSB7XHJcbiAgICAgICAgdGhpcy5fcWluUGFuZWwudW5JbnN0YWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB2aWV3ZXIuaW5zdGFsbCh0aGlzLl9xaW5QYW5lbCk7XHJcbiAgICAgICAgZm9yIChjb25zdCB0YWIgb2YgdGhpcy5fdGFicykge1xyXG4gICAgICAgICAgICBpZiAodGFiLnZpZXdlciA9PSB2aWV3ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRhYi5idXR0b24uc3R5bGUucHV0QXNCYWNrZ3JvdW5kKHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckFjdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YWIuYnV0dG9uLnN0eWxlLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JJbmFjdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5UYWJzID0gUWluVGFicztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRhYnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5UaXRsZWQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XHJcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNsYXNzIFFpblRpdGxlZCBleHRlbmRzIHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4ge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIobnVsbCwgKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcInRpdGxlZFwiKTtcclxuICAgICAgICB0aGlzLl9xaW5UaXRsZSA9IG5ldyBxaW5fbGFiZWxfMS5RaW5MYWJlbCgpO1xyXG4gICAgICAgIHRoaXMuX3FpbkhlYWQgPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKHsgaXRlbXM6IFt0aGlzLl9xaW5UaXRsZV0gfSk7XHJcbiAgICAgICAgdGhpcy5fcWluQm9keSA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblRpdGxlLnRpdGxlID0gb3B0aW9ucy50aXRsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcWluSGVhZC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3FpbkJvZHkuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5pbnN0YWxsKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdXQoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFkZENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkID09PSB0aGlzLl9xaW5Cb2R5IHx8IGNoaWxkID09PSB0aGlzLl9xaW5IZWFkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFkZENoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkJvZHkuYWRkQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRlbENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkID09PSB0aGlzLl9xaW5Cb2R5IHx8IGNoaWxkID09PSB0aGlzLl9xaW5IZWFkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmRlbENoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkJvZHkuZGVsQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluVGl0bGUudGl0bGU7XHJcbiAgICB9XHJcbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLl9xaW5UaXRsZS50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluVGl0bGVkID0gUWluVGl0bGVkO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tdGl0bGVkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluVG9vbCA9IHZvaWQgMDtcclxuY29uc3QgcmVmUWlucGVsID0gd2luZG93LmZyYW1lRWxlbWVudC5xaW5wZWw7XHJcbmV4cG9ydHMuUWluVG9vbCA9IHtcclxuICAgIHFpbnBlbDogcmVmUWlucGVsLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tdG9vbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblNvdWwgPSBleHBvcnRzLlFpblNraW4gPSBleHBvcnRzLlFpblN0eWxlcyA9IGV4cG9ydHMuUWluR3JhbmRldXIgPSBleHBvcnRzLlFpbkJvdW5kcyA9IGV4cG9ydHMuUWluRGltZW5zaW9uID0gZXhwb3J0cy5RaW5Qb2ludCA9IGV4cG9ydHMuUWluSGVhZCA9IGV4cG9ydHMuUWluRm9vdCA9IGV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSBleHBvcnRzLlFpbkJvZHkgPSBleHBvcnRzLlFpbk5hdHVyZSA9IGV4cG9ydHMuUWluQXJtID0gZXhwb3J0cy5RaW5Qb2ludGVyQ2FsbHMgPSBleHBvcnRzLlFpbldhaXRlcnMgPSBleHBvcnRzLlFpbkV2ZW50ID0gdm9pZCAwO1xyXG52YXIgcWluX2FybV8xID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRXZlbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fMS5RaW5FdmVudDsgfSB9KTtcclxudmFyIHFpbl9hcm1fMiA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbldhaXRlcnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fMi5RaW5XYWl0ZXJzOyB9IH0pO1xyXG52YXIgcWluX2FybV8zID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUG9pbnRlckNhbGxzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzMuUWluUG9pbnRlckNhbGxzOyB9IH0pO1xyXG52YXIgcWluX2FybV80ID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQXJtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzQuUWluQXJtOyB9IH0pO1xyXG52YXIgcWluX2JvZHlfMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib2R5XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5OYXR1cmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9ib2R5XzEuUWluTmF0dXJlOyB9IH0pO1xyXG52YXIgcWluX2JvZHlfMiA9IHJlcXVpcmUoXCIuL3Fpbi1ib2R5XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Cb2R5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYm9keV8yLlFpbkJvZHk7IH0gfSk7XHJcbnZhciBxaW5fZm9vdF8xID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzTmF0dXJlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8xLlFpbkZpbGVzTmF0dXJlOyB9IH0pO1xyXG52YXIgcWluX2Zvb3RfMiA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlc09wZXJhdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMi5RaW5GaWxlc09wZXJhdGlvbjsgfSB9KTtcclxudmFyIHFpbl9mb290XzMgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZXNEZXNjcmlwdG9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8zLlFpbkZpbGVzRGVzY3JpcHRvcjsgfSB9KTtcclxudmFyIHFpbl9mb290XzQgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRm9vdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfNC5RaW5Gb290OyB9IH0pO1xyXG52YXIgcWluX2hlYWRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5IZWFkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF8xLlFpbkhlYWQ7IH0gfSk7XHJcbnZhciBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBvaW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2tpbl8xLlFpblBvaW50OyB9IH0pO1xyXG52YXIgcWluX3NraW5fMiA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5EaW1lbnNpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9za2luXzIuUWluRGltZW5zaW9uOyB9IH0pO1xyXG52YXIgcWluX3NraW5fMyA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Cb3VuZHNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9za2luXzMuUWluQm91bmRzOyB9IH0pO1xyXG52YXIgcWluX3NraW5fNCA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5HcmFuZGV1clwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fNC5RaW5HcmFuZGV1cjsgfSB9KTtcclxudmFyIHFpbl9za2luXzUgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU3R5bGVzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2tpbl81LlFpblN0eWxlczsgfSB9KTtcclxudmFyIHFpbl9za2luXzYgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU2tpblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fNi5RaW5Ta2luOyB9IH0pO1xyXG52YXIgcWluX3NvdWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zb3VsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Tb3VsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc291bF8xLlFpblNvdWw7IH0gfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkFybSA9IGV4cG9ydHMuUWluUG9pbnRlckNhbGxzID0gZXhwb3J0cy5RaW5XYWl0ZXJzID0gZXhwb3J0cy5RaW5FdmVudCA9IHZvaWQgMDtcclxuY29uc3QgcWluX3NraW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xyXG5jbGFzcyBRaW5FdmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcmlnaW4sIGlzU3RhcnQsIGtpbmQpIHtcclxuICAgICAgICB2YXIgX2EsIF9iLCBfYztcclxuICAgICAgICB0aGlzLl9ldmVudEtleSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRNb3VzZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRUb3VjaCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcG9pbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3N0b3AgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vcmlnaW4gPSBvcmlnaW47XHJcbiAgICAgICAgdGhpcy5fc3RhcnQgPSBpc1N0YXJ0O1xyXG4gICAgICAgIHRoaXMuX2V2ZW50S2V5ID0gKF9hID0ga2luZCA9PT0gbnVsbCB8fCBraW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBraW5kLmV2ZW50S2V5KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50TW91c2UgPSAoX2IgPSBraW5kID09PSBudWxsIHx8IGtpbmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGtpbmQuZXZlbnRNb3VzZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcclxuICAgICAgICB0aGlzLl9ldmVudFRvdWNoID0gKF9jID0ga2luZCA9PT0gbnVsbCB8fCBraW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBraW5kLmV2ZW50VG91Y2gpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9pbnQgPSBtYWtlRXZlbnRNb3VzZVBvaW50KGlzU3RhcnQsIHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50ID0gbWFrZUV2ZW50VG91Y2goaXNTdGFydCwgdGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGlzU3RhcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xyXG4gICAgfVxyXG4gICAgZ2V0IGZyb21PcmlnaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbjtcclxuICAgIH1cclxuICAgIGdldCBmcm9tVGFyZ2V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRLZXkudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudE1vdXNlLnRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRUb3VjaC50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IGZyb21UeXBpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZXZlbnRLZXk7XHJcbiAgICB9XHJcbiAgICBnZXQgZnJvbVBvaW50aW5nKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX3BvaW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IGhhc0FsdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50S2V5LmFsdEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRNb3VzZS5hbHRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50VG91Y2guYWx0S2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaGFzQ3RybCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50S2V5LmN0cmxLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50TW91c2UuY3RybEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRUb3VjaC5jdHJsS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaGFzU2hpZnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudEtleS5zaGlmdEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRNb3VzZS5zaGlmdEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRUb3VjaC5zaGlmdEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGhhc01ldGEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudEtleS5tZXRhS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudE1vdXNlLm1ldGFLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50VG91Y2gubWV0YUtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGtleVR5cGVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRLZXkua2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCBpc0VudGVyKCkge1xyXG4gICAgICAgIHJldHVybiBpc0tleUVudGVyKHRoaXMuX2V2ZW50S2V5KTtcclxuICAgIH1cclxuICAgIGdldCBpc0VzY2FwZSgpIHtcclxuICAgICAgICByZXR1cm4gaXNLZXlFc2NhcGUodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzU3BhY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzS2V5U3BhY2UodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRG91YmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0V2ZW50TW91c2VEb3VibGUodGhpcy5fc3RhcnQsIHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0V2ZW50VG91Y2hEb3VibGUodGhpcy5fc3RhcnQsIHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNMb25nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0V2ZW50TW91c2VMb25nKHRoaXMuX3N0YXJ0LCB0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNFdmVudFRvdWNoTG9uZyh0aGlzLl9zdGFydCwgdGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBwb2ludCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9pbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9pbnRYKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fcG9pbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wb3NYO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvaW50WSgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX3BvaW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucG9zWTtcclxuICAgIH1cclxuICAgIGdldCBpc0ZpcnN0QnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiBpc0ZpcnN0QnV0dG9uKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWlkZGxlQnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiBpc01pZGRsZUJ1dHRvbih0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgIH1cclxuICAgIGdldCBpc1NlY29uZEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gaXNTZWNvbmRCdXR0b24odGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNPbmVGaW5nZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzT25lRmluZ2VyKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzVHdvRmluZ2VycygpIHtcclxuICAgICAgICByZXR1cm4gaXNUd29GaW5nZXJzKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzVGhyZWVGaW5nZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBpc1RocmVlRmluZ2Vycyh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc0ZvdXJGaW5nZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBpc0ZvdXJGaW5nZXJzKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWFpbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWFpbktleSh0aGlzLl9ldmVudEtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWFpbk1vdXNlKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01haW5Ub3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWFpbktleSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNYWluS2V5KHRoaXMuX2V2ZW50S2V5KTtcclxuICAgIH1cclxuICAgIGdldCBpc01haW5Nb3VzZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNYWluTW91c2UodGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNYWluVG91Y2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWFpblRvdWNoKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWFpblBvaW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01haW5Nb3VzZSh0aGlzLl9ldmVudE1vdXNlKSB8fCBpc01haW5Ub3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc01pZGkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01pZGlLZXkodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01pZGlNb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNaWRpVG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc01pZGlLZXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWlkaUtleSh0aGlzLl9ldmVudEtleSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNaWRpTW91c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWlkaU1vdXNlKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWlkaVRvdWNoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01pZGlUb3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc01pZGlQb2ludCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNaWRpTW91c2UodGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWlkaVRvdWNoKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNZW51KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNZW51S2V5KHRoaXMuX2V2ZW50S2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWVudU1vdXNlKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNZW51VG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc01lbnVLZXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWVudUtleSh0aGlzLl9ldmVudEtleSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNZW51TW91c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWVudU1vdXNlKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWVudVRvdWNoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01lbnVUb3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc01lbnVQb2ludCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNZW51TW91c2UodGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWVudVRvdWNoKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RvcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcDtcclxuICAgIH1cclxuICAgIGNvbnN1bWVkKCkge1xyXG4gICAgICAgIHRoaXMuX3N0b3AgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluRXZlbnQgPSBRaW5FdmVudDtcclxuY2xhc3MgUWluV2FpdGVycyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsKSB7XHJcbiAgICAgICAgdGhpcy53YWl0ZXJzID0gaW5pdGlhbCA/IGluaXRpYWwgOiBbXTtcclxuICAgIH1cclxuICAgIGFkZFdhaXRlcih3YWl0ZXIpIHtcclxuICAgICAgICB0aGlzLndhaXRlcnMucHVzaCh3YWl0ZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaGFzV2FpdGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhaXRlcnMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuICAgIHNlbmRXYWl0ZXJzKHJlc3VsdCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgd2FpdGVyIG9mIHRoaXMud2FpdGVycykge1xyXG4gICAgICAgICAgICB3YWl0ZXIocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5XYWl0ZXJzID0gUWluV2FpdGVycztcclxuY2xhc3MgUWluUG9pbnRlckNhbGxzIHtcclxufVxyXG5leHBvcnRzLlFpblBvaW50ZXJDYWxscyA9IFFpblBvaW50ZXJDYWxscztcclxuZnVuY3Rpb24gc3RvcEV2ZW50KGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0b3BQcm9wYWdhdGlvbihldmVudCk7XHJcbn1cclxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbnZhciBsYXN0RXZlbnRNb3VzZSA9IG51bGw7XHJcbnZhciBsYXN0RXZlbnRUb3VjaCA9IG51bGw7XHJcbmZ1bmN0aW9uIG1ha2VFdmVudE1vdXNlUG9pbnQoaXNTdGFydCwgZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgICBwb3NYOiAwLFxyXG4gICAgICAgIHBvc1k6IDAsXHJcbiAgICB9O1xyXG4gICAgaWYgKGV2LmNsaWVudFggfHwgZXYuY2xpZW50WSkge1xyXG4gICAgICAgIHJlc3VsdC5wb3NYID0gZXYuY2xpZW50WDtcclxuICAgICAgICByZXN1bHQucG9zWSA9IGV2LmNsaWVudFk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTdGFydCkge1xyXG4gICAgICAgIGxhc3RFdmVudE1vdXNlID0gZXY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VFdmVudFRvdWNoKGlzU3RhcnQsIGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgICAgcG9zWDogMCxcclxuICAgICAgICBwb3NZOiAwLFxyXG4gICAgfTtcclxuICAgIGlmIChldi50b3VjaGVzICYmIHRoaXMuX2V2ZW50LnRvdWNoZXMubGVuZ3RoID49IDEpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKHRoaXMuX2V2ZW50LnRvdWNoZXMubGVuZ3RoIC8gMik7XHJcbiAgICAgICAgcmVzdWx0LnBvc1ggPSBldi50b3VjaGVzW2luZGV4XS5jbGllbnRYO1xyXG4gICAgICAgIHJlc3VsdC5wb3NZID0gZXYudG91Y2hlc1tpbmRleF0uY2xpZW50WTtcclxuICAgIH1cclxuICAgIGlmIChpc1N0YXJ0KSB7XHJcbiAgICAgICAgbGFzdEV2ZW50VG91Y2ggPSBldjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gaXNFdmVudE1vdXNlRG91YmxlKGlzU3RhcnQsIGV2KSB7XHJcbiAgICBpZiAoIWlzU3RhcnQgfHwgbGFzdEV2ZW50TW91c2UgPT0gbnVsbCB8fCBldiA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGltZURpZiA9IGV2LnRpbWVTdGFtcCAtIGxhc3RFdmVudE1vdXNlLnRpbWVTdGFtcDtcclxuICAgIHJldHVybiB0aW1lRGlmIDwgNDUwO1xyXG59XHJcbmZ1bmN0aW9uIGlzRXZlbnRUb3VjaERvdWJsZShpc1N0YXJ0LCBldikge1xyXG4gICAgaWYgKCFpc1N0YXJ0IHx8IGxhc3RFdmVudFRvdWNoID09IG51bGwgfHwgZXYgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbWVEaWYgPSBldi50aW1lU3RhbXAgLSBsYXN0RXZlbnRUb3VjaC50aW1lU3RhbXA7XHJcbiAgICByZXR1cm4gdGltZURpZiA8IDQ1MDtcclxufVxyXG5mdW5jdGlvbiBpc0V2ZW50TW91c2VMb25nKGlzU3RhcnQsIGV2KSB7XHJcbiAgICBpZiAoIWlzU3RhcnQgfHwgbGFzdEV2ZW50TW91c2UgPT0gbnVsbCB8fCBldiA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGltZURpZiA9IGV2LnRpbWVTdGFtcCAtIGxhc3RFdmVudE1vdXNlLnRpbWVTdGFtcDtcclxuICAgIHJldHVybiB0aW1lRGlmID4gODQwO1xyXG59XHJcbmZ1bmN0aW9uIGlzRXZlbnRUb3VjaExvbmcoaXNTdGFydCwgZXYpIHtcclxuICAgIGlmICghaXNTdGFydCB8fCBsYXN0RXZlbnRUb3VjaCA9PSBudWxsIHx8IGV2ID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aW1lRGlmID0gZXYudGltZVN0YW1wIC0gbGFzdEV2ZW50VG91Y2gudGltZVN0YW1wO1xyXG4gICAgcmV0dXJuIHRpbWVEaWYgPiA4NDA7XHJcbn1cclxuZnVuY3Rpb24gaXNLZXlJbkxpc3QoZXYsIGxpc3QpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQga2V5TG93ZXIgPSBldi5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBsaXN0LmluZGV4T2Yoa2V5TG93ZXIpID4gLTE7XHJcbn1cclxuZnVuY3Rpb24gaXNLZXlFbnRlcihldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0tleUluTGlzdChldiwgW1wiZW50ZXJcIiwgXCJyZXR1cm5cIl0pIHx8IGV2LmtleUNvZGUgPT09IDEzO1xyXG59XHJcbmZ1bmN0aW9uIGlzS2V5RXNjYXBlKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzS2V5SW5MaXN0KGV2LCBbXCJlc2NcIiwgXCJlc2NhcGVcIl0pIHx8IGV2LmtleUNvZGUgPT09IDI3O1xyXG59XHJcbmZ1bmN0aW9uIGlzS2V5U3BhY2UoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNLZXlJbkxpc3QoZXYsIFtcIiBcIiwgXCJzcGFjZVwiLCBcInNwYWNlYmFyXCJdKSB8fCBldi5rZXlDb2RlID09PSAzMjtcclxufVxyXG5mdW5jdGlvbiBpc0ZpcnN0QnV0dG9uKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYuYnV0dG9uKSA9PSAwO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWlkZGxlQnV0dG9uKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYuYnV0dG9uKSA9PSAxO1xyXG59XHJcbmZ1bmN0aW9uIGlzU2Vjb25kQnV0dG9uKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYuYnV0dG9uKSA9PSAyO1xyXG59XHJcbmZ1bmN0aW9uIGlzT25lRmluZ2VyKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYudG91Y2hlcy5sZW5ndGgpID09IDE7XHJcbn1cclxuZnVuY3Rpb24gaXNUd29GaW5nZXJzKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYudG91Y2hlcy5sZW5ndGgpID09IDI7XHJcbn1cclxuZnVuY3Rpb24gaXNUaHJlZUZpbmdlcnMoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi50b3VjaGVzLmxlbmd0aCkgPT0gMztcclxufVxyXG5mdW5jdGlvbiBpc0ZvdXJGaW5nZXJzKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYudG91Y2hlcy5sZW5ndGgpID09IDQ7XHJcbn1cclxuZnVuY3Rpb24gaXNNYWluS2V5KGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzS2V5RW50ZXIoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWlkaUtleShldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBldi5jdHJsS2V5ICYmIGV2LmFsdEtleSAmJiBpc0tleVNwYWNlKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc01lbnVLZXkoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXYuY3RybEtleSAmJiAhZXYuYWx0S2V5ICYmIGlzS2V5U3BhY2UoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWFpbk1vdXNlKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRmlyc3RCdXR0b24oZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWFpblRvdWNoKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzT25lRmluZ2VyKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc01pZGlNb3VzZShldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc01pZGRsZUJ1dHRvbihldik7XHJcbn1cclxuZnVuY3Rpb24gaXNNaWRpVG91Y2goZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNUaHJlZUZpbmdlcnMoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWVudU1vdXNlKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzU2Vjb25kQnV0dG9uKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc01lbnVUb3VjaChldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1R3b0ZpbmdlcnMoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbihvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGFjdEtleURvd24pO1xyXG4gICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBhY3RLZXlVcCk7XHJcbiAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBhY3RNb3VzZURvd24pO1xyXG4gICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGFjdE1vdXNlVXApO1xyXG4gICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGFjdFRvdWNoU3RhcnQpO1xyXG4gICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBhY3RUb3VjaEVuZCk7XHJcbiAgICBmdW5jdGlvbiBhY3RLZXlEb3duKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KG9yaWdpbiwgdHJ1ZSwgeyBldmVudEtleTogZXYgfSk7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wUHJvcGFnYXRpb24oZXYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdEtleVVwKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KG9yaWdpbiwgZmFsc2UsIHsgZXZlbnRLZXk6IGV2IH0pO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcFByb3BhZ2F0aW9uKGV2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RNb3VzZURvd24oZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQob3JpZ2luLCB0cnVlLCB7IGV2ZW50TW91c2U6IGV2IH0pO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcFByb3BhZ2F0aW9uKGV2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RNb3VzZVVwKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KG9yaWdpbiwgZmFsc2UsIHsgZXZlbnRNb3VzZTogZXYgfSk7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wUHJvcGFnYXRpb24oZXYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdFRvdWNoU3RhcnQoZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQob3JpZ2luLCB0cnVlLCB7IGV2ZW50VG91Y2g6IGV2IH0pO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcFByb3BhZ2F0aW9uKGV2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RUb3VjaEVuZChldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChvcmlnaW4sIGZhbHNlLCB7IGV2ZW50VG91Y2g6IGV2IH0pO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcFByb3BhZ2F0aW9uKGV2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWFpbihvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpbikge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1haW5LZXkob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01haW5LZXkpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NYWluTW91c2Uob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01haW5Nb3VzZSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1haW5Ub3VjaChvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpbk1vdXNlKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWFpblBvaW50KG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluUG9pbnQpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NaWRpKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNaWRpKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWlkaUtleShvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWlkaUtleSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1pZGlNb3VzZShvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWlkaU1vdXNlKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWlkaVRvdWNoKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNaWRpTW91c2UpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NaWRpUG9pbnQob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01pZGlQb2ludCkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1lbnUob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01lbnUpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NZW51S2V5KG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNZW51S2V5KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWVudU1vdXNlKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNZW51TW91c2UpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NZW51VG91Y2gob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01lbnVNb3VzZSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1lbnVQb2ludChvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWVudVBvaW50KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9ucyhvcmlnaW5zLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvcmlnaW5zKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uKGVsZW1lbnQsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uc01haW4ob3JpZ2lucywgYWN0aW9uKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb3JpZ2lucykge1xyXG4gICAgICAgIGFkZEFjdGlvbk1haW4oZWxlbWVudCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25zTWFpbktleShvcmlnaW5zLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvcmlnaW5zKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uTWFpbihlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbnNNYWluUG9pbnQob3JpZ2lucywgYWN0aW9uKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb3JpZ2lucykge1xyXG4gICAgICAgIGFkZEFjdGlvbk1haW4oZWxlbWVudCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRNb3Zlcihzb3VyY2VzLCB0YXJnZXQsIGRyYWdDYWxscykge1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdEV2ZW50WSA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRQb3NYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFBvc1kgPSAwO1xyXG4gICAgZm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcclxuICAgICAgICBzb3VyY2Uub25tb3VzZWRvd24gPSBvbk1vdmVyTW91c2VJbml0O1xyXG4gICAgICAgIHNvdXJjZS5vbnRvdWNoc3RhcnQgPSBvbk1vdmVyVG91Y2hJbml0O1xyXG4gICAgICAgIHNvdXJjZS5vbmRyYWdzdGFydCA9IHN0b3BFdmVudDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJNb3VzZUluaXQoZXYpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50TW91c2VEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50TW91c2VMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudE1vdXNlUG9pbnQodHJ1ZSwgZXYpO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdJbml0UG9zWCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS5sZWZ0LCAxMCk7XHJcbiAgICAgICAgZHJhZ0luaXRQb3NZID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLnRvcCwgMTApO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25Nb3Zlck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uTW92ZXJUb3VjaE1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25Nb3ZlckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvbk1vdmVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJUb3VjaEluaXQoZXYpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50VG91Y2hEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50VG91Y2hMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFRvdWNoKHRydWUsIGV2KTtcclxuICAgICAgICBkcmFnSW5pdEV2ZW50WCA9IHBvaW50ZXIucG9zWDtcclxuICAgICAgICBkcmFnSW5pdEV2ZW50WSA9IHBvaW50ZXIucG9zWTtcclxuICAgICAgICBkcmFnSW5pdFBvc1ggPSBwYXJzZUludCh0YXJnZXQuc3R5bGUubGVmdCwgMTApO1xyXG4gICAgICAgIGRyYWdJbml0UG9zWSA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS50b3AsIDEwKTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uTW92ZXJNb3VzZU1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvbk1vdmVyVG91Y2hNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uTW92ZXJDbG9zZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25Nb3ZlckNsb3NlO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbk1vdmVyTW91c2VNb3ZlKGV2KSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudE1vdXNlUG9pbnQoZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdEV2ZW50WDtcclxuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcclxuICAgICAgICB2YXIgZHJhZ0ZpbmFsWCA9IGRyYWdJbml0UG9zWCArIGRyYWdEaWZYO1xyXG4gICAgICAgIHZhciBkcmFnRmluYWxZID0gZHJhZ0luaXRQb3NZICsgZHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSAoZHJhZ0ZpbmFsWCA+IDAgPyBkcmFnRmluYWxYIDogMCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IChkcmFnRmluYWxZID4gMCA/IGRyYWdGaW5hbFkgOiAwKSArIFwicHhcIjtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJUb3VjaE1vdmUoZXYpIHtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50VG91Y2goZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdEV2ZW50WDtcclxuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcclxuICAgICAgICB2YXIgZHJhZ0ZpbmFsWCA9IGRyYWdJbml0UG9zWCArIGRyYWdEaWZYO1xyXG4gICAgICAgIHZhciBkcmFnRmluYWxZID0gZHJhZ0luaXRQb3NZICsgZHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSAoZHJhZ0ZpbmFsWCA+IDAgPyBkcmFnRmluYWxYIDogMCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IChkcmFnRmluYWxZID4gMCA/IGRyYWdGaW5hbFkgOiAwKSArIFwicHhcIjtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJDbG9zZShldikge1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uc2hvd0FsbElGcmFtZXMoKTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkVuZCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25FbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkUmVzaXplcihzb3VyY2VzLCB0YXJnZXQsIGRyYWdDYWxscykge1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdEV2ZW50WSA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRXaWR0aCA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRIZWlnaHQgPSAwO1xyXG4gICAgZm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcclxuICAgICAgICBzb3VyY2Uub25tb3VzZWRvd24gPSBvblJlc2l6ZXJNb3VzZUluaXQ7XHJcbiAgICAgICAgc291cmNlLm9udG91Y2hzdGFydCA9IG9uUmVzaXplclRvdWNoSW5pdDtcclxuICAgICAgICBzb3VyY2Uub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblJlc2l6ZXJNb3VzZUluaXQoZXYpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50TW91c2VEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50TW91c2VMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudE1vdXNlUG9pbnQodHJ1ZSwgZXYpO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdJbml0V2lkdGggPSBwYXJzZUludCh0YXJnZXQuc3R5bGUud2lkdGgsIDEwKTtcclxuICAgICAgICBkcmFnSW5pdEhlaWdodCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS5oZWlnaHQsIDEwKTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uUmVzaXplck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uUmVzaXplclRvdWNoTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvblJlc2l6ZXJDbG9zZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25SZXNpemVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplclRvdWNoSW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRUb3VjaERvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRUb3VjaExvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50VG91Y2godHJ1ZSwgZXYpO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdJbml0V2lkdGggPSBwYXJzZUludCh0YXJnZXQuc3R5bGUud2lkdGgsIDEwKTtcclxuICAgICAgICBkcmFnSW5pdEhlaWdodCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS5oZWlnaHQsIDEwKTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uUmVzaXplck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uUmVzaXplclRvdWNoTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvblJlc2l6ZXJDbG9zZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25SZXNpemVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplck1vdXNlTW92ZShldikge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRNb3VzZVBvaW50KGZhbHNlLCBldik7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdEV2ZW50WDtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRGlmWSA9IHBvaW50ZXIucG9zWSAtIGRyYWdJbml0RXZlbnRZO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdGaW5hbFdpZHRoID0gZHJhZ0luaXRXaWR0aCArIGZyYW1lRHJhZ0RpZlg7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsSGVpZ2h0ID0gZHJhZ0luaXRIZWlnaHQgKyBmcmFtZURyYWdEaWZZO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS53aWR0aCA9IChmcmFtZURyYWdGaW5hbFdpZHRoID4gMCA/IGZyYW1lRHJhZ0ZpbmFsV2lkdGggOiAwKSArIFwicHhcIjtcclxuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gKGZyYW1lRHJhZ0ZpbmFsSGVpZ2h0ID4gMCA/IGZyYW1lRHJhZ0ZpbmFsSGVpZ2h0IDogMCkgKyBcInB4XCI7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Nb3ZlKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbk1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblJlc2l6ZXJUb3VjaE1vdmUoZXYpIHtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50VG91Y2goZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRFdmVudFk7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsV2lkdGggPSBkcmFnSW5pdFdpZHRoICsgZnJhbWVEcmFnRGlmWDtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRmluYWxIZWlnaHQgPSBkcmFnSW5pdEhlaWdodCArIGZyYW1lRHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gKGZyYW1lRHJhZ0ZpbmFsV2lkdGggPiAwID8gZnJhbWVEcmFnRmluYWxXaWR0aCA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAoZnJhbWVEcmFnRmluYWxIZWlnaHQgPiAwID8gZnJhbWVEcmFnRmluYWxIZWlnaHQgOiAwKSArIFwicHhcIjtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplckNsb3NlKGV2KSB7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRTY3JvbGxlcih0YXJnZXQsIGRyYWdDYWxscykge1xyXG4gICAgdmFyIGRyYWdJbml0WCA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRZID0gMDtcclxuICAgIHZhciBkcmFnU2Nyb2xsWCA9IDA7XHJcbiAgICB2YXIgZHJhZ1Njcm9sbFkgPSAwO1xyXG4gICAgdGFyZ2V0Lm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xyXG4gICAgdGFyZ2V0Lm9ubW91c2Vkb3duID0gb25TY3JvbGxlck1vdXNlSW5pdDtcclxuICAgIHRhcmdldC5vbnRvdWNoc3RhcnQgPSBvblNjcm9sbGVyVG91Y2hJbml0O1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGxlck1vdXNlSW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3BQcm9wYWdhdGlvbihldik7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudE1vdXNlRG91YmxlKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudE1vdXNlTG9uZyh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRNb3VzZVBvaW50KHRydWUsIGV2KTtcclxuICAgICAgICBkcmFnSW5pdFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdTY3JvbGxYID0gdGFyZ2V0LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgZHJhZ1Njcm9sbFkgPSB0YXJnZXQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25TY3JvbGxlck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uU2Nyb2xsZXJUb3VjaE1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uU2Nyb2xsZXJDbG9zZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvblNjcm9sbGVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJUb3VjaEluaXQoZXYpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50VG91Y2hEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50VG91Y2hMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFRvdWNoKHRydWUsIGV2KTtcclxuICAgICAgICBkcmFnSW5pdFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdTY3JvbGxYID0gdGFyZ2V0LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgZHJhZ1Njcm9sbFkgPSB0YXJnZXQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25TY3JvbGxlck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uU2Nyb2xsZXJUb3VjaE1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25TY3JvbGxlckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblNjcm9sbGVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJNb3VzZU1vdmUoZXYpIHtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50TW91c2VQb2ludChmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0WDtcclxuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdFk7XHJcbiAgICAgICAgdmFyIGRyYWdOZXdYID0gZHJhZ1Njcm9sbFggLSBkcmFnRGlmWDtcclxuICAgICAgICB2YXIgZHJhZ05ld1kgPSBkcmFnU2Nyb2xsWSAtIGRyYWdEaWZZO1xyXG4gICAgICAgIHRhcmdldC5zY3JvbGxUbyhkcmFnTmV3WCwgZHJhZ05ld1kpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25TY3JvbGxlclRvdWNoTW92ZShldikge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRUb3VjaChmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0WDtcclxuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdFk7XHJcbiAgICAgICAgdmFyIGRyYWdOZXdYID0gZHJhZ1Njcm9sbFggLSBkcmFnRGlmWDtcclxuICAgICAgICB2YXIgZHJhZ05ld1kgPSBkcmFnU2Nyb2xsWSAtIGRyYWdEaWZZO1xyXG4gICAgICAgIHRhcmdldC5zY3JvbGxUbyhkcmFnTmV3WCwgZHJhZ05ld1kpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25TY3JvbGxlckNsb3NlKGV2KSB7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkFybSA9IHtcclxuICAgIHN0b3BFdmVudCxcclxuICAgIG1ha2VFdmVudE1vdXNlUG9pbnQsXHJcbiAgICBtYWtlRXZlbnRUb3VjaCxcclxuICAgIGlzRXZlbnRNb3VzZURvdWJsZSxcclxuICAgIGlzRXZlbnRUb3VjaERvdWJsZSxcclxuICAgIGlzRXZlbnRNb3VzZUxvbmcsXHJcbiAgICBpc0V2ZW50VG91Y2hMb25nLFxyXG4gICAgaXNLZXlJbkxpc3QsXHJcbiAgICBpc0tleUVudGVyLFxyXG4gICAgaXNLZXlTcGFjZSxcclxuICAgIGlzRmlyc3RCdXR0b24sXHJcbiAgICBpc01pZGRsZUJ1dHRvbixcclxuICAgIGlzU2Vjb25kQnV0dG9uLFxyXG4gICAgaXNPbmVGaW5nZXIsXHJcbiAgICBpc1R3b0ZpbmdlcnMsXHJcbiAgICBpc1RocmVlRmluZ2VycyxcclxuICAgIGlzRm91ckZpbmdlcnMsXHJcbiAgICBpc01haW5Nb3VzZSxcclxuICAgIGlzTWFpblRvdWNoLFxyXG4gICAgaXNNaWRpTW91c2UsXHJcbiAgICBpc01pZGlUb3VjaCxcclxuICAgIGlzTWVudU1vdXNlLFxyXG4gICAgaXNNZW51VG91Y2gsXHJcbiAgICBhZGRBY3Rpb24sXHJcbiAgICBhZGRBY3Rpb25NYWluLFxyXG4gICAgYWRkQWN0aW9uTWFpbktleSxcclxuICAgIGFkZEFjdGlvbk1haW5Nb3VzZSxcclxuICAgIGFkZEFjdGlvbk1haW5Ub3VjaCxcclxuICAgIGFkZEFjdGlvbk1haW5Qb2ludCxcclxuICAgIGFkZEFjdGlvbk1pZGksXHJcbiAgICBhZGRBY3Rpb25NaWRpS2V5LFxyXG4gICAgYWRkQWN0aW9uTWlkaU1vdXNlLFxyXG4gICAgYWRkQWN0aW9uTWlkaVRvdWNoLFxyXG4gICAgYWRkQWN0aW9uTWlkaVBvaW50LFxyXG4gICAgYWRkQWN0aW9uTWVudSxcclxuICAgIGFkZEFjdGlvbk1lbnVLZXksXHJcbiAgICBhZGRBY3Rpb25NZW51TW91c2UsXHJcbiAgICBhZGRBY3Rpb25NZW51VG91Y2gsXHJcbiAgICBhZGRBY3Rpb25NZW51UG9pbnQsXHJcbiAgICBhZGRBY3Rpb25zLFxyXG4gICAgYWRkQWN0aW9uc01haW4sXHJcbiAgICBhZGRBY3Rpb25zTWFpbktleSxcclxuICAgIGFkZEFjdGlvbnNNYWluUG9pbnQsXHJcbiAgICBhZGRNb3ZlcixcclxuICAgIGFkZFJlc2l6ZXIsXHJcbiAgICBhZGRTY3JvbGxlcixcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWFybS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkJvZHkgPSBleHBvcnRzLlFpbk5hdHVyZSA9IHZvaWQgMDtcclxudmFyIFFpbk5hdHVyZTtcclxuKGZ1bmN0aW9uIChRaW5OYXR1cmUpIHtcclxuICAgIFFpbk5hdHVyZVtcIkJJVFwiXSA9IFwiQklUXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJCT09MXCJdID0gXCJCT09MXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJCWVRFXCJdID0gXCJCWVRFXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJUSU5ZXCJdID0gXCJUSU5ZXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJTTUFMTFwiXSA9IFwiU01BTExcIjtcclxuICAgIFFpbk5hdHVyZVtcIklOVFwiXSA9IFwiSU5UXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJMT05HXCJdID0gXCJMT05HXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJTRVJJQUxcIl0gPSBcIlNFUklBTFwiO1xyXG4gICAgUWluTmF0dXJlW1wiQklHX1NFUklBTFwiXSA9IFwiQklHX1NFUklBTFwiO1xyXG4gICAgUWluTmF0dXJlW1wiRkxPQVRcIl0gPSBcIkZMT0FUXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJSRUFMXCJdID0gXCJSRUFMXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJET1VCTEVcIl0gPSBcIkRPVUJMRVwiO1xyXG4gICAgUWluTmF0dXJlW1wiTlVNRVJJQ1wiXSA9IFwiTlVNRVJJQ1wiO1xyXG4gICAgUWluTmF0dXJlW1wiQklHX05VTUVSSUNcIl0gPSBcIkJJR19OVU1FUklDXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJDSEFSXCJdID0gXCJDSEFSXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJDSEFSU1wiXSA9IFwiQ0hBUlNcIjtcclxuICAgIFFpbk5hdHVyZVtcIkRBVEVcIl0gPSBcIkRBVEVcIjtcclxuICAgIFFpbk5hdHVyZVtcIlRJTUVcIl0gPSBcIlRJTUVcIjtcclxuICAgIFFpbk5hdHVyZVtcIkRBVEVfVElNRVwiXSA9IFwiREFURV9USU1FXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJUSU1FU1RBTVBcIl0gPSBcIlRJTUVTVEFNUFwiO1xyXG4gICAgUWluTmF0dXJlW1wiQllURVNcIl0gPSBcIkJZVEVTXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJCTE9CXCJdID0gXCJCTE9CXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJURVhUXCJdID0gXCJURVhUXCI7XHJcbn0pKFFpbk5hdHVyZSA9IGV4cG9ydHMuUWluTmF0dXJlIHx8IChleHBvcnRzLlFpbk5hdHVyZSA9IHt9KSk7XHJcbmZ1bmN0aW9uIG1ha2VRaW5VSUQoKSB7XHJcbiAgICByZXR1cm4gKFwicWluX3VpZF9cIiArXHJcbiAgICAgICAgZ2V0TGFzdENoYXJzKERhdGUubm93KCkgKyBcIlwiLCA0LCBcIjBcIiwgZmFsc2UpICtcclxuICAgICAgICBcIl9cIiArXHJcbiAgICAgICAgZmlsbFRvU3RyaW5nKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSwgNSwgXCIwXCIsIGZhbHNlKSk7XHJcbn1cclxuZnVuY3Rpb24gbWFrZVFpbmRyZWRVSUQocWluZHJlZCkge1xyXG4gICAgcmV0dXJuIChxaW5kcmVkICtcclxuICAgICAgICBcIl9xaW5kcmVkX1wiICtcclxuICAgICAgICBnZXRMYXN0Q2hhcnMoRGF0ZS5ub3coKSArIFwiXCIsIDQsIFwiMFwiLCBmYWxzZSkgK1xyXG4gICAgICAgIFwiX1wiICtcclxuICAgICAgICBmaWxsVG9TdHJpbmcoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApLCA1LCBcIjBcIiwgZmFsc2UpKTtcclxufVxyXG5mdW5jdGlvbiBnZXRMYXN0Q2hhcnMoc291cmNlLCBjb3VudCwgZmlsbFdpdGggPSBcIiBcIiwgYXRFbmQgPSB0cnVlKSB7XHJcbiAgICBpZiAoc291cmNlLmxlbmd0aCA8IGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbGxUb1N0cmluZyhzb3VyY2UsIGNvdW50LCBmaWxsV2l0aCwgYXRFbmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvdXJjZS5zdWJzdHJpbmcoc291cmNlLmxlbmd0aCAtIGNvdW50KTtcclxufVxyXG5mdW5jdGlvbiBmaWxsVG9TdHJpbmcodmFsdWUsIHRpbFNpemUsIHdpdGhTdHIgPSBcIiBcIiwgYXRFbmQgPSB0cnVlKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgdGlsU2l6ZSkge1xyXG4gICAgICAgIGlmIChhdEVuZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gd2l0aFN0cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHdpdGhTdHIgKyByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBnZXRUZXh0TGluZXMoZnJvbVRleHQpIHtcclxuICAgIHJldHVybiBmcm9tVGV4dC5tYXRjaCgvW15cXHJcXG5dKy9nKTtcclxufVxyXG5mdW5jdGlvbiBnZXRDU1ZSb3dzKGZyb21UZXh0KSB7XHJcbiAgICB2YXIgbGluZXMgPSBnZXRUZXh0TGluZXMoZnJvbVRleHQpO1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xyXG4gICAgICAgIGxldCByb3cgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBsZXQgaW5zaWRlX3F1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjb2x1bW5fdmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGxldCBjb2x1bW5faW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGNoYXJfaW5kZXggPSAwOyBjaGFyX2luZGV4IDwgbGluZS5sZW5ndGg7IGNoYXJfaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgYWN0dWFsID0gbGluZS5jaGFyQXQoY2hhcl9pbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChpbnNpZGVfcXVvdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IGNoYXJfaW5kZXggPCBsaW5lLmxlbmd0aCAtIDEgPyBsaW5lLmNoYXJBdChjaGFyX2luZGV4ICsgMSkgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlX3F1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSArPSBhY3R1YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNpZGVfcXVvdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFjdHVhbCA9PSBcIixcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSA9IHVubWFza1NwZWNpYWxDaGFycyhjb2x1bW5fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKGNvbHVtbl92YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5faW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSArPSBhY3R1YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29sdW1uX3ZhbHVlID0gdW5tYXNrU3BlY2lhbENoYXJzKGNvbHVtbl92YWx1ZSk7XHJcbiAgICAgICAgcm93LnB1c2goY29sdW1uX3ZhbHVlKTtcclxuICAgICAgICByZXN1bHQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBtYXNrU3BlY2lhbENoYXJzKGZyb21UZXh0KSB7XHJcbiAgICByZXR1cm4gZnJvbVRleHRcclxuICAgICAgICAucmVwbGFjZShcIlxcXFxcIiwgXCJcXFxcXFxcXFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxyXCIsIFwiXFxcXHJcIilcclxuICAgICAgICAucmVwbGFjZShcIlxcblwiLCBcIlxcXFxuXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgXCJcXFxcdFwiKTtcclxufVxyXG5mdW5jdGlvbiB1bm1hc2tTcGVjaWFsQ2hhcnMoZnJvbVRleHQpIHtcclxuICAgIHJldHVybiBmcm9tVGV4dFxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXFxcXFxcIiwgXCJcXFxcXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcclwiLCBcIlxcclwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXG5cIiwgXCJcXG5cIilcclxuICAgICAgICAucmVwbGFjZShcIlxcXFx0XCIsIFwiXFx0XCIpO1xyXG59XHJcbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVycyhzb3VyY2UpIHtcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIGxldCBvcGVuID0gZmFsc2U7XHJcbiAgICBsZXQgYWN0dWFsID0gXCJcIjtcclxuICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIEFycmF5LmZyb20oc291cmNlKSkge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgb3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFjdHVhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbCArPSBsZXR0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgb3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWN0dWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGxldHRlciA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFjdHVhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbCArPSBsZXR0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMuUWluQm9keSA9IHtcclxuICAgIG1ha2VRaW5VSUQsXHJcbiAgICBtYWtlUWluZHJlZFVJRCxcclxuICAgIGdldExhc3RDaGFycyxcclxuICAgIGZpbGxUb1N0cmluZyxcclxuICAgIGdldFRleHRMaW5lcyxcclxuICAgIGdldENTVlJvd3MsXHJcbiAgICBtYXNrU3BlY2lhbENoYXJzLFxyXG4gICAgdW5tYXNrU3BlY2lhbENoYXJzLFxyXG4gICAgcGFyc2VQYXJhbWV0ZXJzLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYm9keS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkZvb3QgPSBleHBvcnRzLlFpbkZpbGVzRGVzY3JpcHRvciA9IGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gPSBleHBvcnRzLlFpbkZpbGVzTmF0dXJlID0gdm9pZCAwO1xyXG52YXIgUWluRmlsZXNOYXR1cmU7XHJcbihmdW5jdGlvbiAoUWluRmlsZXNOYXR1cmUpIHtcclxuICAgIFFpbkZpbGVzTmF0dXJlW1wiQk9USFwiXSA9IFwiYm90aFwiO1xyXG4gICAgUWluRmlsZXNOYXR1cmVbXCJESVJFQ1RPUklFU1wiXSA9IFwiZGlyZWN0b3JpZXNcIjtcclxuICAgIFFpbkZpbGVzTmF0dXJlW1wiRklMRVNcIl0gPSBcImZpbGVzXCI7XHJcbn0pKFFpbkZpbGVzTmF0dXJlID0gZXhwb3J0cy5RaW5GaWxlc05hdHVyZSB8fCAoZXhwb3J0cy5RaW5GaWxlc05hdHVyZSA9IHt9KSk7XHJcbnZhciBRaW5GaWxlc09wZXJhdGlvbjtcclxuKGZ1bmN0aW9uIChRaW5GaWxlc09wZXJhdGlvbikge1xyXG4gICAgUWluRmlsZXNPcGVyYXRpb25bXCJPUEVOXCJdID0gXCJvcGVuXCI7XHJcbiAgICBRaW5GaWxlc09wZXJhdGlvbltcIlNBVkVcIl0gPSBcInNhdmVcIjtcclxufSkoUWluRmlsZXNPcGVyYXRpb24gPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uIHx8IChleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0ge30pKTtcclxuY2xhc3MgUWluRmlsZXNEZXNjcmlwdG9yIHtcclxufVxyXG5leHBvcnRzLlFpbkZpbGVzRGVzY3JpcHRvciA9IFFpbkZpbGVzRGVzY3JpcHRvcjtcclxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbn1cclxuZnVuY3Rpb24gaXNMb2NhbEhvc3QoKSB7XHJcbiAgICB2YXIgbG9jYXRpb24gPSBnZXRMb2NhdGlvbigpO1xyXG4gICAgdmFyIHN0YXJ0ID0gbG9jYXRpb24uaW5kZXhPZihcIjovL1wiKTtcclxuICAgIGlmIChzdGFydCA9PSAtMSkge1xyXG4gICAgICAgIHN0YXJ0ID0gMDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0YXJ0ICs9IDM7XHJcbiAgICB9XHJcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uLnN1YnN0cmluZyhzdGFydCk7XHJcbiAgICByZXR1cm4gbG9jYXRpb24uaW5kZXhPZihcImxvY2FsaG9zdFwiKSA9PT0gMCB8fCBsb2NhdGlvbi5pbmRleE9mKFwiMTI3LjAuMC4xXCIpID09PSAwO1xyXG59XHJcbmZ1bmN0aW9uIGdldFNlcGFyYXRvcihvZlBhdGgpIHtcclxuICAgIGxldCByZXN1bHQgPSBcIi9cIjtcclxuICAgIGlmIChvZlBhdGggJiYgb2ZQYXRoLmluZGV4T2YoXCJcXFxcXCIpID4gLTEpIHtcclxuICAgICAgICByZXN1bHQgPSBcIlxcXFxcIjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gZ2V0UGF0aEpvaW4ocGF0aEEsIHBhdGhCKSB7XHJcbiAgICBpZiAocGF0aEEgPT0gbnVsbCB8fCBwYXRoQSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwYXRoQSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBpZiAocGF0aEIgPT0gbnVsbCB8fCBwYXRoQiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwYXRoQiA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBpZiAocGF0aEEubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gcGF0aEI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXRoQi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBwYXRoQTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCB1bmlvbiA9IFwiL1wiO1xyXG4gICAgICAgIGlmIChwYXRoQS5pbmRleE9mKFwiXFxcXFwiKSA+IC0xIHx8IHBhdGhCLmluZGV4T2YoXCJcXFxcXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgdW5pb24gPSBcIlxcXFxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhdGhBRW5kID0gcGF0aEEuc3Vic3RyaW5nKHBhdGhBLmxlbmd0aCAtIDEsIHBhdGhBLmxlbmd0aCk7XHJcbiAgICAgICAgbGV0IHBhdGhCU3RhcnQgPSBwYXRoQi5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICAgICAgaWYgKHBhdGhBRW5kID09IHVuaW9uIHx8IHBhdGhCU3RhcnQgPT0gdW5pb24pIHtcclxuICAgICAgICAgICAgdW5pb24gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aEEgKyB1bmlvbiArIHBhdGhCO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldFBhcmVudChwYXRoKSB7XHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICAgIGxldCBzZXBhcmF0b3IgPSBnZXRTZXBhcmF0b3IocGF0aCk7XHJcbiAgICAgICAgbGV0IGxhc3QgPSBwYXRoLmxhc3RJbmRleE9mKHNlcGFyYXRvcik7XHJcbiAgICAgICAgaWYgKGxhc3QgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGF0aC5zdWJzdHJpbmcoMCwgbGFzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U3RlbShwYXRoKSB7XHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICAgIGxldCBzZXBhcmF0b3IgPSBnZXRTZXBhcmF0b3IocGF0aCk7XHJcbiAgICAgICAgbGV0IGxhc3QgPSBwYXRoLmxhc3RJbmRleE9mKHNlcGFyYXRvcik7XHJcbiAgICAgICAgaWYgKGxhc3QgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGF0aC5zdWJzdHJpbmcobGFzdCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcbmZ1bmN0aW9uIGdldEZpbGVFeHRlbnNpb24obmFtZSkge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gbmFtZS5sYXN0SW5kZXhPZihcIi5cIik7XHJcbiAgICBpZiAocG9zaXRpb24gPiAtMSkge1xyXG4gICAgICAgIHJldHVybiBuYW1lLnN1YnN0cmluZyhwb3NpdGlvbiArIDEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgYXBwc0V4dGVuc2lvbnMgPSBbXHJcbiAgICBcImh0bVwiLCBcImh0bWxcIiwgXCJjc3NcIiwgXCJqc1wiLCBcImpzeFwiLCBcInRzXCIsIFwidHN4XCIsIFwicGh0bWxcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVBcHAoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gYXBwc0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgY21kc0V4dGVuc2lvbnMgPSBbXHJcbiAgICBcImhcIiwgXCJjXCIsIFwiaHBwXCIsIFwiY3BwXCIsIFwicnNcIiwgXCJqbFwiLFxyXG4gICAgXCJjc1wiLCBcImNzcHJvalwiLCBcImZzXCIsIFwibWxcIiwgXCJmc2lcIiwgXCJtbGlcIiwgXCJmc3hcIiwgXCJmc3NjcmlwdFwiLFxyXG4gICAgXCJqYXZhXCIsIFwiZ3lcIiwgXCJndnlcIiwgXCJncm9vdnlcIiwgXCJzY1wiLCBcInNjYWxhXCIsIFwiY2xqXCIsXHJcbiAgICBcInB5XCIsIFwicnVieVwiLCBcInBocFwiLCBcInBodG1sXCIsXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZUNtZChleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBjbWRzRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5jb25zdCBleGVjRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiZXhlXCIsIFwiamFyXCIsIFwiY29tXCIsIFwiYmF0XCIsIFwic2hcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVFeGVjKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIGV4ZWNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IGltYWdlRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwianBnXCIsIFwianBlZ1wiLCBcInBuZ1wiLCBcImdpZlwiLCBcImJtcFwiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZUltYWdlKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIGltYWdlRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5jb25zdCB2ZWN0b3JFeHRlbnNpb25zID0gW1xyXG4gICAgXCJzdmdcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVWZWN0b3IoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gdmVjdG9yRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5jb25zdCBtb3ZpZUV4dGVuc2lvbnMgPSBbXHJcbiAgICBcImF2aVwiLCBcIm1wNFwiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZU1vdmllKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIG1vdmllRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5jb25zdCBtdXNpY0V4dGVuc2lvbnMgPSBbXHJcbiAgICBcIndhdlwiLCBcIm1wM1wiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZU11c2ljKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIG11c2ljRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5jb25zdCB6aXBwZWRFeHRlbnNpb25zID0gW1xyXG4gICAgXCJ6aXBcIiwgXCJyYXJcIiwgXCI3elwiLCBcInRhclwiLCBcImd6XCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlWmlwcGVkKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIHppcHBlZEV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuZXhwb3J0cy5RaW5Gb290ID0ge1xyXG4gICAgZ2V0TG9jYXRpb24sXHJcbiAgICBpc0xvY2FsSG9zdCxcclxuICAgIGdldFNlcGFyYXRvcixcclxuICAgIGdldFBhdGhKb2luLFxyXG4gICAgZ2V0UGFyZW50LFxyXG4gICAgZ2V0U3RlbSxcclxuICAgIGdldEZpbGVFeHRlbnNpb24sXHJcbiAgICBpc0ZpbGVBcHAsXHJcbiAgICBpc0ZpbGVDbWQsXHJcbiAgICBpc0ZpbGVFeGVjLFxyXG4gICAgaXNGaWxlSW1hZ2UsXHJcbiAgICBpc0ZpbGVWZWN0b3IsXHJcbiAgICBpc0ZpbGVNb3ZpZSxcclxuICAgIGlzRmlsZU11c2ljLFxyXG4gICAgaXNGaWxlWmlwcGVkLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZm9vdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkhlYWQgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lLCBvckRlZmF1bHQpIHtcclxuICAgIGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjb29raWVQYWlyID0gY29va2llc1tpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZVBhaXJbMF0pLnRyaW0oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZVBhaXJbMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvckRlZmF1bHQ7XHJcbn1cclxuZnVuY3Rpb24gc2V0Q29va2llKG5hbWUsIHZhbHVlLCBvcHRpb25zID0ge30pIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgcGF0aDogXCIvXCIgfSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoIW9wdGlvbnMuZXhwaXJlcykge1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAxICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gZGF0ZTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gb3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBvcHRpb25zW1wiU2FtZVNpdGVcIl0gPSBcIlN0cmljdFwiO1xyXG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICBmb3IgKGxldCBvcHRpb25LZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI7IFwiICsgb3B0aW9uS2V5O1xyXG4gICAgICAgIGxldCBvcHRpb25WYWx1ZSA9IG9wdGlvbnNbb3B0aW9uS2V5XTtcclxuICAgICAgICBpZiAob3B0aW9uVmFsdWUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIj1cIiArIG9wdGlvblZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZWRDb29raWUgKz0gXCI7IFNlY3VyZVwiO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcclxufVxyXG5mdW5jdGlvbiBkZWxDb29raWUobmFtZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgdXBkYXRlZENvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArIFwiPTsgIGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIjtcclxuICAgIGlmIChvcHRpb25zLmV4cGlyZXMpIHtcclxuICAgICAgICBkZWxldGUgb3B0aW9ucy5leHBpcmVzO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgb3B0aW9uS2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiOyBcIiArIG9wdGlvbktleTtcclxuICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBvcHRpb25zW29wdGlvbktleV07XHJcbiAgICAgICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBvcHRpb25WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xyXG59XHJcbmZ1bmN0aW9uIGdldERlc2tBUEkoKSB7XHJcbiAgICB2YXIgd2luID0gd2luZG93O1xyXG4gICAgaWYgKHdpbi5kZXNrQVBJKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbi5kZXNrQVBJO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgd2luID0gd2luZG93LnBhcmVudDtcclxuICAgIH1cclxuICAgIGlmICh3aW4uZGVza0FQSSkge1xyXG4gICAgICAgIHJldHVybiB3aW4uZGVza0FQSTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHdpbiA9IHdpbmRvdy50b3A7XHJcbiAgICB9XHJcbiAgICBpZiAod2luLmRlc2tBUEkpIHtcclxuICAgICAgICByZXR1cm4gd2luLmRlc2tBUEk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmNvbnN0IGxvZ2dlZCA9IFtdO1xyXG5mdW5jdGlvbiBnZXRMb2dnZWQoKSB7XHJcbiAgICByZXR1cm4gbG9nZ2VkO1xyXG59XHJcbmZ1bmN0aW9uIGxvZyhtZXNzYWdlKSB7XHJcbiAgICBsb2dnZWQucHVzaChtZXNzYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoXykgeyB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGdldERlc2tBUEkoKS5zZW5kKFwibG9nT25NYWluXCIsIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKF8pIHsgfVxyXG59XHJcbmZ1bmN0aW9uIGxvZ0Vycm9yKGVycm9yLCBvcmlnaW4pIHtcclxuICAgIGxvZyhnZXRFcnJvck1lc3NhZ2UoZXJyb3IsIG9yaWdpbikpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvciwgb3JpZ2luKSB7XHJcbiAgICByZXR1cm4gZ2V0VHJlYXRNZXNzYWdlKFwiUHJvYmxlbSB3aXRoOlwiLCBlcnJvciwgb3JpZ2luKTtcclxufVxyXG5mdW5jdGlvbiBsb2dXYXJuaW5nKGVycm9yLCBvcmlnaW4pIHtcclxuICAgIGxvZyhnZXRXYXJuaW5nTWVzc2FnZShlcnJvciwgb3JpZ2luKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0V2FybmluZ01lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIkNoZWNrb3V0IHRoaXM6XCIsIGVycm9yLCBvcmlnaW4pO1xyXG59XHJcbmZ1bmN0aW9uIGxvZ1N1cHBvcnQoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgbG9nKGdldFN1cHBvcnRNZXNzYWdlKGVycm9yLCBvcmlnaW4pKTtcclxufVxyXG5mdW5jdGlvbiBnZXRTdXBwb3J0TWVzc2FnZShlcnJvciwgb3JpZ2luKSB7XHJcbiAgICByZXR1cm4gZ2V0VHJlYXRNZXNzYWdlKFwiTmVlZCBTdXBwb3J0IG9uOlwiLCBlcnJvciwgb3JpZ2luKTtcclxufVxyXG5mdW5jdGlvbiBnZXRUcmVhdE1lc3NhZ2UocHJlZml4LCBlcnJvciwgb3JpZ2luKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gcHJlZml4ICsgKGVycm9yID8gXCIgXCIgKyBlcnJvci50b1N0cmluZygpIDogXCJcIik7XHJcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgIHZhciBlcnJvckRhdGEgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGlmICghKHR5cGVvZiBlcnJvckRhdGEgPT0gXCJzdHJpbmdcIiB8fCBlcnJvckRhdGEgaW5zdGFuY2VvZiBTdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIGVycm9yRGF0YSA9IEpTT04uc3RyaW5naWZ5KGVycm9yRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdCArPSBcIiAtIERhdGE6IFwiICsgZXJyb3JEYXRhO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKCEodHlwZW9mIGVycm9yID09IFwic3RyaW5nXCIgfHwgZXJyb3IgaW5zdGFuY2VvZiBTdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiAtIERhdGE6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChvcmlnaW4pIHtcclxuICAgICAgICByZXN1bHQgKz0gXCIgLSBPcmlnaW46IFwiICsgb3JpZ2luO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhY2sgPSAobmV3IEVycm9yKFwiXCIpKS5zdGFjaztcclxuICAgIGlmIChzdGFjaykge1xyXG4gICAgICAgIHJlc3VsdCArPSBcIiAtIFN0YWNrOiBcIiArIHN0YWNrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiB0b2dnbGVEZXZUb29scygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZ2V0RGVza0FQSSgpLnNlbmQoXCJ0b2dnbGVEZXZUb29sc1wiKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgbG9nRXJyb3IoZSwgXCJ7cWlucGVsLXJlc30oRXJyQ29kZS0wMDAwMDEpXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluSGVhZCA9IHtcclxuICAgIGdldENvb2tpZSxcclxuICAgIHNldENvb2tpZSxcclxuICAgIGRlbENvb2tpZSxcclxuICAgIGdldERlc2tBUEksXHJcbiAgICBnZXRMb2dnZWQsXHJcbiAgICBsb2csXHJcbiAgICBsb2dFcnJvcixcclxuICAgIGdldEVycm9yTWVzc2FnZSxcclxuICAgIGxvZ1dhcm5pbmcsXHJcbiAgICBnZXRXYXJuaW5nTWVzc2FnZSxcclxuICAgIGxvZ1N1cHBvcnQsXHJcbiAgICBnZXRTdXBwb3J0TWVzc2FnZSxcclxuICAgIGdldFRyZWF0TWVzc2FnZSxcclxuICAgIHRvZ2dsZURldlRvb2xzLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taGVhZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblNraW4gPSBleHBvcnRzLlFpblN0eWxlcyA9IGV4cG9ydHMuUWluR3JhbmRldXIgPSBleHBvcnRzLlFpbkJvdW5kcyA9IGV4cG9ydHMuUWluRGltZW5zaW9uID0gZXhwb3J0cy5RaW5Qb2ludCA9IHZvaWQgMDtcclxuY29uc3QgcWluX2FybV8xID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcclxuY2xhc3MgUWluUG9pbnQge1xyXG59XHJcbmV4cG9ydHMuUWluUG9pbnQgPSBRaW5Qb2ludDtcclxuY2xhc3MgUWluRGltZW5zaW9uIHtcclxufVxyXG5leHBvcnRzLlFpbkRpbWVuc2lvbiA9IFFpbkRpbWVuc2lvbjtcclxuY2xhc3MgUWluQm91bmRzIHtcclxufVxyXG5leHBvcnRzLlFpbkJvdW5kcyA9IFFpbkJvdW5kcztcclxudmFyIFFpbkdyYW5kZXVyO1xyXG4oZnVuY3Rpb24gKFFpbkdyYW5kZXVyKSB7XHJcbiAgICBRaW5HcmFuZGV1cltcIlNNQUxMXCJdID0gXCJzbWFsbFwiO1xyXG4gICAgUWluR3JhbmRldXJbXCJNRURJVU1cIl0gPSBcIm1lZGl1bVwiO1xyXG4gICAgUWluR3JhbmRldXJbXCJMQVJHRVwiXSA9IFwibGFyZ2VcIjtcclxufSkoUWluR3JhbmRldXIgPSBleHBvcnRzLlFpbkdyYW5kZXVyIHx8IChleHBvcnRzLlFpbkdyYW5kZXVyID0ge30pKTtcclxuZXhwb3J0cy5RaW5TdHlsZXMgPSB7XHJcbiAgICBDb2xvckZvcmVncm91bmQ6IFwiIzE4MDAyN2ZmXCIsXHJcbiAgICBDb2xvckJhY2tncm91bmQ6IFwiI2ZmZmNmOWZmXCIsXHJcbiAgICBDb2xvckluYWN0aXZlOiBcIiNmY2Y5ZmZmZlwiLFxyXG4gICAgQ29sb3JBY3RpdmU6IFwiI2ZkZWRlZGZmXCIsXHJcbiAgICBDb2xvckFjY2VudDogXCIjYWUwMDAwZmZcIixcclxuICAgIENvbG9yU2VsZWN0ZWQ6IFwiIzVkNzJkZThmXCIsXHJcbiAgICBGb250TmFtZTogXCJTb3VyY2VTYW5zUHJvXCIsXHJcbiAgICBGb250U2l6ZTogXCIxNnB4XCIsXHJcbn07XHJcbmZ1bmN0aW9uIHN0eWxlQXNCb2R5KGVsKSB7XHJcbiAgICBlbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIGVsLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xyXG4gICAgZWwuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCI5cHhcIjtcclxuICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVBc0Jhc2UoZWwpIHtcclxuICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMXB4XCI7XHJcbiAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIzcHhcIjtcclxuICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgIGVsLnN0eWxlLmNvbG9yID0gZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JGb3JlZ3JvdW5kO1xyXG4gICAgZWwuc3R5bGUuZm9udEZhbWlseSA9IFwiU291cmNlU2Fuc1Byb1wiO1xyXG4gICAgZWwuc3R5bGUuZm9udFNpemUgPSBcIjE2cHhcIjtcclxufVxyXG5mdW5jdGlvbiBzdHlsZUFzRWRpdChlbCkge1xyXG4gICAgc3R5bGVBc0Jhc2UoZWwpO1xyXG4gICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyBleHBvcnRzLlFpblN0eWxlcy5Db2xvckZvcmVncm91bmQ7XHJcbiAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JJbmFjdGl2ZTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yQWN0aXZlO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JBY2NlbnQ7XHJcbiAgICB9KTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9ySW5hY3RpdmU7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyBleHBvcnRzLlFpblN0eWxlcy5Db2xvckZvcmVncm91bmQ7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBzdHlsZU1heFNpemVGb3JOb3RPdmVyRmxvdyhlbCwgcGFyZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkQxXCIpO1xyXG4gICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRDI6IFwiICsgcGFyZW50KTtcclxuICAgIH1cclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBsZXQgbWF4V2lkdGggPSAwO1xyXG4gICAgICAgIGxldCBtYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgIGxldCBpbWVkaWF0ZSA9IGVsO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aCArIGltZWRpYXRlLmNsaWVudExlZnQ7XHJcbiAgICAgICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCArIGltZWRpYXRlLmNsaWVudFRvcDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEMzogXCIgKyBtYXhXaWR0aCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRDQ6IFwiICsgbWF4SGVpZ2h0KTtcclxuICAgICAgICAgICAgaW1lZGlhdGUgPSBpbWVkaWF0ZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH0gd2hpbGUgKGltZWRpYXRlICE9IG51bGwgJiYgaW1lZGlhdGUgIT0gcGFyZW50KTtcclxuICAgICAgICBtYXhXaWR0aCA9IHBhcmVudC5jbGllbnRXaWR0aCAtIG1heFdpZHRoO1xyXG4gICAgICAgIG1heEhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQgLSBtYXhIZWlnaHQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJENTogXCIgKyBtYXhXaWR0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJENjogXCIgKyBtYXhIZWlnaHQpO1xyXG4gICAgICAgIGVsLnN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0eWxlU2l6ZShlbCwgc2l6ZSkge1xyXG4gICAgaWYgKHNpemUpIHtcclxuICAgICAgICBpZiAoc2l6ZSBpbnN0YW5jZW9mIFFpbkRpbWVuc2lvbikge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS53aWR0aCA9IHNpemUud2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGRpbSA9IGdldERpbWVuc2lvblNpemUoc2l6ZSk7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gZGltLndpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBkaW0uaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdHlsZUZsZXhNYXgoZWwpIHtcclxuICAgIGVsLnN0eWxlLmZsZXggPSBcIjFcIjtcclxufVxyXG5mdW5jdGlvbiBzdHlsZUZsZXhNaW4oZWwpIHtcclxuICAgIGVsLnN0eWxlLmZsZXggPSBcIjBcIjtcclxufVxyXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplU3R5bGUoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IGdldFdpbmRvd1NpemUoKS53aWR0aDtcclxuICAgIGlmICh3aWR0aCA8IDYwMCkge1xyXG4gICAgICAgIHJldHVybiBRaW5HcmFuZGV1ci5TTUFMTDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHdpZHRoIDwgMTAwMCkge1xyXG4gICAgICAgIHJldHVybiBRaW5HcmFuZGV1ci5NRURJVU07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gUWluR3JhbmRldXIuTEFSR0U7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaGlkZUFsbElGcmFtZXMoKSB7XHJcbiAgICB2YXIgZG9jX2lmcmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlmcmFtZVwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9jX2lmcmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZG9jX2lmcmFtZSA9IGRvY19pZnJhbWVzW2ldO1xyXG4gICAgICAgIGRvY19pZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2hvd0FsbElGcmFtZXMoKSB7XHJcbiAgICB2YXIgZG9jX2lmcmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlmcmFtZVwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9jX2lmcmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZG9jX2lmcmFtZSA9IGRvY19pZnJhbWVzW2ldO1xyXG4gICAgICAgIGRvY19pZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGRpc2FibGVTZWxlY3Rpb24oZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gXCJub25lXCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcclxuICAgIGVsZW1lbnQub25zZWxlY3RzdGFydCA9IHFpbl9hcm1fMS5RaW5Bcm0uc3RvcEV2ZW50O1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDM2MCk7XHJcbn1cclxuZnVuY3Rpb24gaXNFbGVtZW50VmlzaWJsZUluU2Nyb2xsKGVsZW1lbnQpIHtcclxuICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRUb3AgPCBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQub2Zmc2V0TGVmdCA8IGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxMZWZ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xpZW50V2lkdGggPlxyXG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGggLVxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQub2Zmc2V0TGVmdCAtIGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxMZWZ0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA+XHJcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLVxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvbihlbCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogcGFyc2VJbnQoZWwuc3R5bGUud2lkdGgpLFxyXG4gICAgICAgIGhlaWdodDogcGFyc2VJbnQoZWwuc3R5bGUuaGVpZ2h0KSxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGltZW5zaW9uU2l6ZShzaXplKSB7XHJcbiAgICBpZiAoc2l6ZSA9PSBRaW5HcmFuZGV1ci5MQVJHRSkge1xyXG4gICAgICAgIHJldHVybiBnZXREaW1lbnNpb25MYXJnZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2l6ZSA9PSBRaW5HcmFuZGV1ci5NRURJVU0pIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uTWVkaXVtKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uU21hbGwoKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBkaW1lbnNpb25TbWFsbCA9IHtcclxuICAgIHdpZHRoOiAyMSxcclxuICAgIGhlaWdodDogMjEsXHJcbn07XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvblNtYWxsKCkge1xyXG4gICAgcmV0dXJuIGRpbWVuc2lvblNtYWxsO1xyXG59XHJcbmNvbnN0IGRpbWVuc2lvbk1lZGl1bSA9IHtcclxuICAgIHdpZHRoOiAzMixcclxuICAgIGhlaWdodDogMzIsXHJcbn07XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvbk1lZGl1bSgpIHtcclxuICAgIHJldHVybiBkaW1lbnNpb25NZWRpdW07XHJcbn1cclxuY29uc3QgZGltZW5zaW9uTGFyZ2UgPSB7XHJcbiAgICB3aWR0aDogNjQsXHJcbiAgICBoZWlnaHQ6IDY0LFxyXG59O1xyXG5mdW5jdGlvbiBnZXREaW1lbnNpb25MYXJnZSgpIHtcclxuICAgIHJldHVybiBkaW1lbnNpb25MYXJnZTtcclxufVxyXG5leHBvcnRzLlFpblNraW4gPSB7XHJcbiAgICBzdHlsZXM6IGV4cG9ydHMuUWluU3R5bGVzLFxyXG4gICAgc3R5bGVBc0JvZHksXHJcbiAgICBzdHlsZUFzQmFzZSxcclxuICAgIHN0eWxlQXNFZGl0LFxyXG4gICAgc3R5bGVNYXhTaXplRm9yTm90T3ZlckZsb3csXHJcbiAgICBzdHlsZVNpemUsXHJcbiAgICBzdHlsZUZsZXhNYXgsXHJcbiAgICBzdHlsZUZsZXhNaW4sXHJcbiAgICBnZXRXaW5kb3dTaXplLFxyXG4gICAgZ2V0V2luZG93U2l6ZVN0eWxlLFxyXG4gICAgaGlkZUFsbElGcmFtZXMsXHJcbiAgICBzaG93QWxsSUZyYW1lcyxcclxuICAgIGRpc2FibGVTZWxlY3Rpb24sXHJcbiAgICBjbGVhclNlbGVjdGlvbixcclxuICAgIGlzRWxlbWVudFZpc2libGVJblNjcm9sbCxcclxuICAgIGdldERpbWVuc2lvbixcclxuICAgIGdldERpbWVuc2lvblNpemUsXHJcbiAgICBnZXREaW1lbnNpb25TbWFsbCxcclxuICAgIGdldERpbWVuc2lvbk1lZGl1bSxcclxuICAgIGdldERpbWVuc2lvbkxhcmdlLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc2tpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblNvdWwgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9hcm1fMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbmNvbnN0IHFpbl9ib2R5XzEgPSByZXF1aXJlKFwiLi9xaW4tYm9keVwiKTtcclxuY29uc3QgcWluX2Zvb3RfMSA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xyXG5jb25zdCBxaW5faGVhZF8xID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XHJcbmNvbnN0IHFpbl9za2luXzEgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuZXhwb3J0cy5RaW5Tb3VsID0ge1xyXG4gICAgYXJtOiBxaW5fYXJtXzEuUWluQXJtLFxyXG4gICAgYm9keTogcWluX2JvZHlfMS5RaW5Cb2R5LFxyXG4gICAgZm9vdDogcWluX2Zvb3RfMS5RaW5Gb290LFxyXG4gICAgaGVhZDogcWluX2hlYWRfMS5RaW5IZWFkLFxyXG4gICAgc2tpbjogcWluX3NraW5fMS5RaW5Ta2luLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc291bC5qcy5tYXAiXX0=
