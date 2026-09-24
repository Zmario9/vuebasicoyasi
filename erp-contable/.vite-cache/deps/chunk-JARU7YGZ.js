import {
  makeDensityProps,
  useDensity
} from "./chunk-NBJUUCTC.js";
import {
  genOverlays,
  makeVariantProps,
  useVariant
} from "./chunk-YUYWEGBU.js";
import {
  VIcon
} from "./chunk-3T75OT2A.js";
import {
  VImg
} from "./chunk-G3UPRB5C.js";
import {
  makeBorderProps,
  useBorder
} from "./chunk-BMQNBYWP.js";
import {
  VDefaultsProvider
} from "./chunk-FJ5YFZEN.js";
import {
  makeSizeProps,
  useSize
} from "./chunk-7OFNFRBU.js";
import {
  makeRoundedProps,
  useRounded
} from "./chunk-7P2YSCJH.js";
import {
  makeTagProps
} from "./chunk-Z4FZV4DU.js";
import {
  IconValue
} from "./chunk-D4O5S6WB.js";
import {
  makeThemeProps,
  provideTheme
} from "./chunk-32ZEMQ6R.js";
import {
  genericComponent,
  makeComponentProps,
  propsFactory,
  useRender
} from "./chunk-L22KC4UD.js";
import {
  createVNode,
  normalizeClass,
  normalizeStyle
} from "./chunk-HBNSJJCE.js";

// node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/components/VAvatar/VAvatar.js
import "C:/Users/Equipo/Desktop/VUEBASICO/erp-contable/node_modules/.pnpm/vuetify@3.13.5_vite-plugin-vuetify@2.1.3_vue@3.5.43/node_modules/vuetify/lib/components/VAvatar/VAvatar.css";
var makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAvatar");
var VAvatar = genericComponent()({
  name: "VAvatar",
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-avatar", {
        "v-avatar--start": props.start,
        "v-avatar--end": props.end
      }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class]),
      "style": normalizeStyle([colorStyles.value, sizeStyles.value, props.style])
    }, {
      default: () => [!slots.default ? props.image ? createVNode(VImg, {
        "key": "image",
        "src": props.image,
        "alt": "",
        "cover": true
      }, null) : props.icon ? createVNode(VIcon, {
        "key": "icon",
        "icon": props.icon
      }, null) : props.text : createVNode(VDefaultsProvider, {
        "key": "content-defaults",
        "defaults": {
          VImg: {
            cover: true,
            src: props.image
          },
          VIcon: {
            icon: props.icon
          }
        }
      }, {
        default: () => [slots.default()]
      }), genOverlays(false, "v-avatar")]
    }));
    return {};
  }
});

export {
  VAvatar
};
//# sourceMappingURL=chunk-JARU7YGZ.js.map
