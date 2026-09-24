import {
  genericComponent,
  propsFactory,
  provideDefaults
} from "./chunk-L22KC4UD.js";
import {
  toRefs
} from "./chunk-HBNSJJCE.js";

// node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/components/VDefaultsProvider/VDefaultsProvider.js
var makeVDefaultsProviderProps = propsFactory({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider");
var VDefaultsProvider = genericComponent(false)({
  name: "VDefaultsProvider",
  props: makeVDefaultsProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      defaults,
      disabled,
      reset,
      root,
      scoped
    } = toRefs(props);
    provideDefaults(defaults, {
      reset,
      root,
      scoped,
      disabled
    });
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});

export {
  VDefaultsProvider
};
//# sourceMappingURL=chunk-FJ5YFZEN.js.map
