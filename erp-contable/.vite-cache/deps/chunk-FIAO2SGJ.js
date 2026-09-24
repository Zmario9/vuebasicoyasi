import {
  getCurrentInstanceName,
  propsFactory
} from "./chunk-L22KC4UD.js";
import {
  toRef
} from "./chunk-HBNSJJCE.js";

// node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/composables/position.js
var positionValues = ["static", "relative", "fixed", "absolute", "sticky"];
var makePositionProps = propsFactory({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (v) => positionValues.includes(v)
    )
  }
}, "position");
function usePosition(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const positionClasses = toRef(() => {
    return props.position ? `${name}--${props.position}` : void 0;
  });
  return {
    positionClasses
  };
}

export {
  makePositionProps,
  usePosition
};
//# sourceMappingURL=chunk-FIAO2SGJ.js.map
