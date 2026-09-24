import {
  VOverlay,
  makeVOverlayProps
} from "./chunk-SGTAFT6V.js";
import {
  forwardRefs
} from "./chunk-3WCK3N3S.js";
import {
  useScopeId
} from "./chunk-2YVPWOGS.js";
import {
  VDialogTransition
} from "./chunk-BTVVIDL6.js";
import {
  VDefaultsProvider
} from "./chunk-FJ5YFZEN.js";
import {
  useProxiedModel
} from "./chunk-66DRMMXC.js";
import {
  genericComponent,
  getActiveElement,
  omit,
  propsFactory,
  useRender
} from "./chunk-L22KC4UD.js";
import {
  createVNode,
  mergeProps,
  nextTick,
  ref,
  watch
} from "./chunk-HBNSJJCE.js";

// node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/components/VDialog/VDialog.js
import "C:/Users/Equipo/Desktop/VUEBASICO/erp-contable/node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/components/VDialog/VDialog.css";
var makeVDialogProps = propsFactory({
  fullscreen: Boolean,
  scrollable: Boolean,
  ...omit(makeVOverlayProps({
    captureFocus: true,
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: VDialogTransition
    },
    zIndex: 2400,
    retainFocus: true
  }), ["disableInitialFocus"])
}, "VDialog");
var VDialog = genericComponent()({
  name: "VDialog",
  props: makeVDialogProps(),
  emits: {
    "update:modelValue": (value) => true,
    afterEnter: () => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const overlay = ref();
    function onAfterEnter() {
      var _a;
      emit("afterEnter");
      if ((props.scrim || props.retainFocus) && ((_a = overlay.value) == null ? void 0 : _a.contentEl) && !overlay.value.contentEl.contains(getActiveElement())) {
        overlay.value.contentEl.focus({
          preventScroll: true
        });
      }
    }
    function onAfterLeave() {
      emit("afterLeave");
    }
    watch(isActive, async (val) => {
      var _a, _b;
      if (!val) {
        await nextTick();
        (_b = (_a = overlay.value) == null ? void 0 : _a.activatorEl) == null ? void 0 : _b.focus({
          preventScroll: true
        });
      }
    });
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      const activatorProps = mergeProps({
        "aria-haspopup": "dialog"
      }, props.activatorProps);
      const contentProps = mergeProps({
        tabindex: -1
      }, props.contentProps);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps,
        "contentProps": contentProps,
        "height": !props.fullscreen ? props.height : void 0,
        "width": !props.fullscreen ? props.width : void 0,
        "maxHeight": !props.fullscreen ? props.maxHeight : void 0,
        "maxWidth": !props.fullscreen ? props.maxWidth : void 0,
        "role": "dialog",
        "onAfterEnter": onAfterEnter,
        "onAfterLeave": onAfterLeave
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VDialog"
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});

export {
  makeVDialogProps,
  VDialog
};
//# sourceMappingURL=chunk-K7HCHKHI.js.map
