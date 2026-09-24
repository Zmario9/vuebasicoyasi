import {
  makeDensityProps,
  useDensity
} from "./chunk-NBJUUCTC.js";
import {
  makeTagProps
} from "./chunk-Z4FZV4DU.js";
import {
  makeThemeProps,
  provideTheme
} from "./chunk-32ZEMQ6R.js";
import {
  convertToUnit,
  genericComponent,
  makeComponentProps,
  propsFactory,
  useRender
} from "./chunk-L22KC4UD.js";
import {
  createBaseVNode,
  createVNode,
  normalizeClass,
  normalizeStyle
} from "./chunk-HBNSJJCE.js";

// node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/components/VTable/VTable.js
import "C:/Users/Equipo/Desktop/VUEBASICO/erp-contable/node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/components/VTable/VTable.css";
var makeVTableProps = propsFactory({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  striped: {
    type: String,
    default: null,
    validator: (v) => ["even", "odd"].includes(v)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTable");
var VTable = genericComponent()({
  name: "VTable",
  props: makeVTableProps(),
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-table", {
        "v-table--fixed-height": !!props.height,
        "v-table--fixed-header": props.fixedHeader,
        "v-table--fixed-footer": props.fixedFooter,
        "v-table--has-top": !!slots.top,
        "v-table--has-bottom": !!slots.bottom,
        "v-table--hover": props.hover,
        "v-table--striped-even": props.striped === "even",
        "v-table--striped-odd": props.striped === "odd"
      }, themeClasses.value, densityClasses.value, props.class]),
      "style": normalizeStyle(props.style)
    }, {
      default: () => {
        var _a, _b, _c;
        return [(_a = slots.top) == null ? void 0 : _a.call(slots), slots.default ? createBaseVNode("div", {
          "class": "v-table__wrapper",
          "style": {
            height: convertToUnit(props.height)
          }
        }, [createBaseVNode("table", null, [slots.default()])]) : (_b = slots.wrapper) == null ? void 0 : _b.call(slots), (_c = slots.bottom) == null ? void 0 : _c.call(slots)];
      }
    }));
    return {};
  }
});

export {
  makeVTableProps,
  VTable
};
//# sourceMappingURL=chunk-3BVTQOU2.js.map
