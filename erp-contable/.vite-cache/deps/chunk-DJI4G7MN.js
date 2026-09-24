import {
  isObject,
  onlyDefinedProps,
  propsFactory
} from "./chunk-L22KC4UD.js";
import {
  Transition,
  TransitionGroup,
  h,
  mergeProps
} from "./chunk-HBNSJJCE.js";

// node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/composables/transition.js
var makeTransitionProps = propsFactory({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (val) => val !== true
  }
}, "transition");
var MaybeTransition = (props, _ref) => {
  let {
    slots
  } = _ref;
  const {
    transition,
    disabled,
    group,
    target,
    ...rest
  } = props;
  const {
    component = group ? TransitionGroup : Transition,
    ...customProps
  } = isObject(transition) ? transition : {};
  let transitionProps;
  if (isObject(transition)) {
    transitionProps = mergeProps(customProps, onlyDefinedProps({
      disabled,
      group,
      target
    }), rest);
  } else {
    transitionProps = mergeProps({
      name: disabled || !transition ? "" : transition
    }, rest);
  }
  return h(component, transitionProps, slots);
};

export {
  makeTransitionProps,
  MaybeTransition
};
//# sourceMappingURL=chunk-DJI4G7MN.js.map
