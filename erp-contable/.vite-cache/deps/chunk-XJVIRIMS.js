import {
  VProgressLinear
} from "./chunk-S4MIWDVA.js";
import {
  getCurrentInstanceName,
  propsFactory
} from "./chunk-L22KC4UD.js";
import {
  createBaseVNode,
  createVNode,
  normalizeClass,
  toRef
} from "./chunk-HBNSJJCE.js";

// node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/composables/loader.js
var makeLoaderProps = propsFactory({
  loading: [Boolean, String]
}, "loader");
function useLoader(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const loaderClasses = toRef(() => ({
    [`${name}--loading`]: props.loading
  }));
  return {
    loaderClasses
  };
}
function LoaderSlot(props, _ref) {
  var _a;
  let {
    slots
  } = _ref;
  return createBaseVNode("div", {
    "class": normalizeClass(`${props.name}__loader`)
  }, [((_a = slots.default) == null ? void 0 : _a.call(slots, {
    color: props.color,
    isActive: props.active
  })) || createVNode(VProgressLinear, {
    "absolute": props.absolute,
    "active": props.active,
    "color": props.color,
    "height": "2",
    "indeterminate": true
  }, null)]);
}

export {
  makeLoaderProps,
  useLoader,
  LoaderSlot
};
//# sourceMappingURL=chunk-XJVIRIMS.js.map
