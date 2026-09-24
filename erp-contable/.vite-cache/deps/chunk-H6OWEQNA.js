import {
  useSsrBoot
} from "./chunk-YDYSGTU5.js";
import {
  useLayout
} from "./chunk-LKU7J4LT.js";
import {
  makeTagProps
} from "./chunk-Z4FZV4DU.js";
import {
  makeDimensionProps,
  useDimension
} from "./chunk-MX7WPQZ6.js";
import {
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

// node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/components/VMain/VMain.js
import "C:/Users/Equipo/Desktop/VUEBASICO/erp-contable/node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/components/VMain/VMain.css";
var makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps({
    tag: "main"
  })
}, "VMain");
var VMain = genericComponent()({
  name: "VMain",
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-main", {
        "v-main--scrollable": props.scrollable
      }, props.class]),
      "style": normalizeStyle([mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style])
    }, {
      default: () => {
        var _a, _b;
        return [props.scrollable ? createBaseVNode("div", {
          "class": "v-main__scroller"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]) : (_b = slots.default) == null ? void 0 : _b.call(slots)];
      }
    }));
    return {};
  }
});

export {
  VMain
};
//# sourceMappingURL=chunk-H6OWEQNA.js.map
