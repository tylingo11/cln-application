import { easeOut, motion } from 'framer-motion';
import { OPACITY_VARIANTS } from '../utilities/constants';

export const NoChannelDarkSVG = props => {
  return (
      <motion.svg
        className={props.className}
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 935.88 763.33"
        variants={OPACITY_VARIANTS}
        initial={{ opacity: 0.5, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0, ease: easeOut }}
      >
        <defs>
          <clipPath id="clippath">
            <polygon
              className="cls-1"
              points="265.63 207.16 755.68 491.94 741.53 763.33 251.49 478.54 265.63 207.16"
            />
          </clipPath>
          <clipPath id="clippath-1">
            <polygon
              className="cls-1"
              points="173.25 153.47 755.68 491.94 772.98 194.26 454.56 0 173.25 153.47"
            />
          </clipPath>
          <linearGradient
            id="lgchdark1"
            x1="737.46"
            y1="505.24"
            x2="737.46"
            y2="293.07"
            gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#e1bb2d" stopOpacity=".8" />
            <stop offset=".05" stopColor="#e1bb2d" stopOpacity=".74" />
            <stop offset=".22" stopColor="#e1bb2d" stopOpacity=".51" />
            <stop offset=".39" stopColor="#e1bb2e" stopOpacity=".33" />
            <stop offset=".56" stopColor="#e1bb2e" stopOpacity=".19" />
            <stop offset=".72" stopColor="#e1bb2e" stopOpacity=".08" />
            <stop offset=".87" stopColor="#e1bb2e" stopOpacity=".02" />
            <stop offset="1" stopColor="#e1bb2f" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lgchdark2" x1="313.34" y1="266.8" x2="313.34" y2="54.64" xlinkHref="#lgchdark1" />
        </defs>
        <g id="Layer_1-2">
          <g>
            <g className="cls-4">
              <path
                className="cls-2"
                d="M519.07,77.5c116.33,67.16,210.36,229.99,209.98,363.7-.38,133.67-95.02,187.57-211.35,120.41-116.36-67.18-210.36-229.99-209.98-363.67,.38-133.71,94.99-187.63,211.35-120.44Z"
              />
            </g>
            <path
              className="cls-8"
              d="M933.87,486.67c0,.12-.01,.24-.02,.36,0,.11-.01,.22-.02,.33v.02c.03-.44,.05-.89,.05-1.33-.04-7.32-4.97-14.18-13.88-19.33l-122.94-70.98c-8.91-5.14-20.77-7.98-33.41-7.98-12.64,0-24.47,2.83-33.32,7.98l-308.75,179.42c-8.85,5.14-13.7,12.01-13.66,19.33l-.03,12.07c.04,7.32,4.97,14.18,13.88,19.33l122.94,70.98c.27,.16,.55,.31,.82,.46,.09,.05,.19,.1,.28,.15,.19,.1,.37,.2,.56,.3,.11,.06,.23,.12,.34,.18,.17,.09,.34,.18,.52,.26,.12,.06,.25,.12,.37,.18,.17,.08,.33,.16,.5,.24,.13,.06,.26,.12,.39,.18,.16,.08,.33,.15,.5,.23,.13,.06,.27,.12,.41,.18,.16,.07,.33,.15,.5,.22,.14,.06,.28,.12,.42,.18,.17,.07,.33,.14,.5,.21,.14,.06,.29,.12,.43,.17,.11,.04,.21,.09,.32,.13,.04,.02,.09,.03,.14,.05,.4,.16,.81,.31,1.22,.46,.03,.01,.07,.02,.1,.04,.38,.14,.76,.27,1.15,.4,.12,.04,.23,.08,.35,.12,.36,.12,.72,.24,1.09,.35,.07,.02,.13,.04,.2,.06,.42,.13,.85,.26,1.28,.38,.04,.01,.08,.02,.12,.04,.09,.03,.19,.05,.28,.08,.24,.07,.47,.13,.71,.19,.15,.04,.3,.08,.45,.12,.24,.06,.47,.12,.71,.18,.15,.04,.3,.07,.45,.11,.25,.06,.5,.12,.76,.18,.14,.03,.27,.06,.41,.09,.31,.07,.63,.14,.95,.21,.07,.01,.13,.03,.2,.04h.03c.37,.08,.74,.16,1.11,.23h.02c.37,.07,.73,.14,1.1,.21,.12,.02,.25,.04,.38,.06,.25,.04,.51,.09,.76,.13,.15,.02,.3,.05,.46,.07,.23,.03,.46,.07,.69,.1h.08c.15,.03,.31,.05,.47,.08,.19,.03,.38,.05,.58,.08,.18,.02,.37,.05,.56,.07,.19,.02,.39,.05,.58,.07,.19,.02,.37,.04,.56,.06,.2,.02,.39,.04,.59,.06,.19,.02,.37,.03,.56,.05,.2,.02,.39,.04,.59,.05,.04,0,.07,0,.11,0,.15,.01,.31,.02,.46,.03,.2,.02,.4,.03,.59,.04,.19,.01,.38,.02,.57,.04,.2,.01,.4,.03,.6,.04,.19,.01,.38,.02,.57,.03,.2,0,.4,.02,.6,.03,.19,0,.38,.01,.57,.02,.2,0,.4,.01,.6,.02,.04,0,.08,0,.13,0,.05,0,.11,0,.16,0,.64,.02,1.29,.02,1.94,.02,.44,0,.88,0,1.32-.01,.14,0,.28,0,.42,0,.3,0,.6-.01,.9-.02,.07,0,.14,0,.21,0,.1,0,.2,0,.29-.01,.25,0,.51-.02,.76-.03,.17,0,.34-.02,.51-.03,.25-.01,.51-.03,.76-.04,.16-.01,.33-.02,.49-.03,.27-.02,.54-.04,.81-.06,.14-.01,.29-.02,.43-.03,.35-.03,.69-.06,1.04-.09,.06,0,.12-.01,.17-.02h.02c.46-.05,.91-.1,1.37-.15,.13-.02,.26-.03,.39-.05,.34-.04,.68-.09,1.02-.13,.13-.02,.27-.04,.4-.05,.45-.06,.9-.13,1.34-.2h0c.45-.07,.89-.15,1.33-.23,.05,0,.1-.02,.15-.03,.11-.02,.23-.04,.34-.06,.2-.04,.39-.07,.59-.11,.17-.03,.35-.07,.52-.1,.19-.04,.39-.08,.58-.12,.17-.04,.35-.07,.52-.11,.19-.04,.38-.08,.57-.13,.17-.04,.34-.08,.52-.12,.19-.04,.38-.09,.56-.13,.17-.04,.34-.08,.51-.13,.19-.05,.37-.09,.56-.14,.17-.04,.34-.09,.5-.13,.18-.05,.37-.1,.55-.15,.17-.05,.33-.09,.5-.14,.18-.05,.37-.11,.55-.16,.16-.05,.33-.1,.49-.15,.18-.06,.36-.11,.54-.17,.1-.03,.2-.06,.29-.09,.05-.02,.1-.03,.14-.05,.42-.14,.84-.28,1.26-.42,.02,0,.05-.02,.07-.03,.39-.14,.78-.28,1.17-.42,.11-.04,.22-.08,.34-.13,.35-.13,.69-.27,1.03-.4,.06-.03,.13-.05,.2-.08,.4-.16,.79-.33,1.18-.5,.1-.04,.2-.09,.29-.13,.31-.14,.62-.28,.93-.42,.09-.04,.19-.09,.28-.13,.38-.18,.75-.36,1.12-.55,.07-.04,.14-.07,.21-.11,.31-.16,.61-.32,.91-.48,.1-.05,.2-.11,.3-.16,.36-.2,.72-.4,1.07-.6l3.63-2.11,305.12-177.32h0c.22-.13,.44-.26,.65-.38,.03-.02,.05-.03,.08-.05,.15-.09,.3-.19,.45-.28,.12-.08,.24-.15,.36-.23,.15-.1,.3-.19,.44-.29,.11-.08,.23-.15,.34-.23,.15-.1,.3-.2,.45-.31,.11-.07,.21-.15,.32-.22,.16-.11,.31-.22,.46-.34,.09-.07,.18-.13,.27-.2,.18-.14,.36-.27,.54-.41,.06-.04,.12-.09,.17-.13,.23-.18,.46-.37,.69-.55,.06-.05,.11-.1,.17-.14,.17-.14,.33-.28,.49-.42,.08-.07,.16-.14,.24-.22,.13-.12,.27-.24,.39-.35l.03-.03s.06-.06,.1-.09c.2-.19,.4-.38,.6-.57,.07-.07,.14-.14,.21-.21,.17-.18,.34-.35,.51-.53,.06-.06,.12-.12,.17-.18,.22-.23,.43-.47,.63-.71,.04-.04,.07-.09,.11-.13,.17-.2,.33-.39,.49-.59,.03-.03,.06-.07,.08-.1,.04-.05,.07-.1,.11-.15,.1-.13,.2-.26,.29-.38,.07-.09,.13-.18,.2-.27,.09-.13,.19-.26,.28-.4,.06-.09,.12-.18,.18-.26,.09-.14,.18-.28,.27-.42,.05-.08,.1-.16,.15-.24,.11-.17,.21-.35,.31-.52,.03-.04,.05-.09,.08-.13v-.02c.1-.17,.19-.33,.28-.5,.03-.05,.05-.1,.08-.14,.11-.22,.22-.43,.32-.65,.03-.06,.05-.12,.08-.18,.07-.16,.14-.32,.21-.48,.04-.08,.07-.17,.1-.25,.06-.14,.11-.27,.16-.41v-.03c.05-.1,.08-.19,.11-.29,.04-.11,.08-.22,.12-.33,.04-.11,.07-.22,.1-.33,.03-.11,.07-.22,.1-.34,.03-.11,.06-.22,.09-.33,.03-.11,.06-.22,.09-.34,.03-.11,.05-.22,.07-.33,.03-.11,.05-.23,.08-.34v-.04c.03-.09,.04-.19,.06-.28,.02-.12,.05-.24,.06-.36,.02-.11,.03-.21,.05-.32,.02-.12,.03-.24,.05-.36,.01-.11,.02-.22,.03-.33,.01-.12,.02-.24,.03-.36,0-.11,.01-.22,.02-.33,0-.12,.01-.24,.02-.36,0-.02,0-.04,0-.06,0-.19,0-.38,0-.57l.03-12.07c0,.21,0,.42,0,.63Z"
            />
            <path
              className="cls-8"
              d="M525.98,248.92c0,.12-.01,.24-.02,.36,0,.11-.01,.22-.02,.33v.02c.03-.44,.05-.89,.05-1.33-.04-7.32-4.97-14.18-13.88-19.33l-122.94-70.98c-8.91-5.14-20.77-7.98-33.41-7.98-12.64,0-24.47,2.83-33.32,7.98L13.7,337.41C4.84,342.56,0,349.42,.03,356.74l-.03,12.07c.04,7.32,4.97,14.18,13.88,19.33l122.94,70.98c.27,.16,.55,.31,.82,.46,.09,.05,.19,.1,.28,.15,.19,.1,.37,.2,.56,.3,.11,.06,.23,.12,.34,.18,.17,.09,.34,.18,.52,.26,.12,.06,.25,.12,.37,.18,.17,.08,.33,.16,.5,.24,.13,.06,.26,.12,.39,.18,.16,.08,.33,.15,.5,.23,.13,.06,.27,.12,.41,.18,.16,.07,.33,.15,.5,.22,.14,.06,.28,.12,.42,.18,.17,.07,.33,.14,.5,.21,.14,.06,.29,.12,.43,.17,.11,.04,.21,.09,.32,.13,.04,.02,.09,.03,.14,.05,.4,.16,.81,.31,1.22,.46,.03,.01,.07,.02,.1,.04,.38,.14,.76,.27,1.15,.4,.12,.04,.23,.08,.35,.12,.36,.12,.72,.24,1.09,.35,.07,.02,.13,.04,.2,.06,.42,.13,.85,.26,1.28,.38,.04,.01,.08,.02,.12,.04,.09,.03,.19,.05,.28,.08,.24,.07,.47,.13,.71,.19,.15,.04,.3,.08,.45,.12,.24,.06,.47,.12,.71,.18,.15,.04,.3,.07,.45,.11,.25,.06,.5,.12,.76,.18,.14,.03,.27,.06,.41,.09,.31,.07,.63,.14,.95,.21,.07,.01,.13,.03,.2,.04h.03c.37,.08,.74,.16,1.11,.23h.02c.37,.07,.73,.14,1.1,.21,.12,.02,.25,.04,.38,.06,.25,.04,.51,.09,.76,.13,.15,.02,.3,.05,.46,.07,.23,.03,.46,.07,.69,.1h.08c.15,.03,.31,.05,.47,.08,.19,.03,.38,.05,.58,.08,.18,.02,.37,.05,.56,.07,.19,.02,.39,.05,.58,.07,.19,.02,.37,.04,.56,.06,.2,.02,.39,.04,.59,.06,.19,.02,.37,.03,.56,.05,.2,.02,.39,.04,.59,.05,.04,0,.07,0,.11,0,.15,.01,.31,.02,.46,.03,.2,.02,.4,.03,.59,.04,.19,.01,.38,.02,.57,.04,.2,.01,.4,.03,.6,.04,.19,.01,.38,.02,.57,.03,.2,0,.4,.02,.6,.03,.19,0,.38,.01,.57,.02,.2,0,.4,.01,.6,.02,.04,0,.08,0,.13,0,.05,0,.11,0,.16,0,.64,.02,1.29,.02,1.94,.02,.44,0,.88,0,1.32-.01,.14,0,.28,0,.42,0,.3,0,.6-.01,.9-.02,.07,0,.14,0,.21,0,.1,0,.2,0,.29-.01,.25,0,.51-.02,.76-.03,.17,0,.34-.02,.51-.03,.25-.01,.51-.03,.76-.04,.16-.01,.33-.02,.49-.03,.27-.02,.54-.04,.81-.06,.14-.01,.29-.02,.43-.03,.35-.03,.69-.06,1.04-.09,.06,0,.12-.01,.17-.02h.02c.46-.05,.91-.1,1.37-.15,.13-.02,.26-.03,.39-.05,.34-.04,.68-.09,1.02-.13,.13-.02,.27-.04,.4-.05,.45-.06,.9-.13,1.34-.2h0c.45-.07,.89-.15,1.33-.23,.05,0,.1-.02,.15-.03,.11-.02,.23-.04,.34-.06,.2-.04,.39-.07,.59-.11,.17-.03,.35-.07,.52-.1,.19-.04,.39-.08,.58-.12,.17-.04,.35-.07,.52-.11,.19-.04,.38-.08,.57-.13,.17-.04,.34-.08,.52-.12,.19-.04,.38-.09,.56-.13,.17-.04,.34-.08,.51-.13,.19-.05,.37-.09,.56-.14,.17-.04,.34-.09,.5-.13,.18-.05,.37-.1,.55-.15,.17-.05,.33-.09,.5-.14,.18-.05,.37-.11,.55-.16,.16-.05,.33-.1,.49-.15,.18-.06,.36-.11,.54-.17,.1-.03,.2-.06,.29-.09,.05-.02,.1-.03,.14-.05,.42-.14,.84-.28,1.26-.42,.02,0,.05-.02,.07-.03,.39-.14,.78-.28,1.17-.42,.11-.04,.22-.08,.34-.13,.35-.13,.69-.27,1.03-.4,.06-.03,.13-.05,.2-.08,.4-.16,.79-.33,1.18-.5,.1-.04,.2-.09,.29-.13,.31-.14,.62-.28,.93-.42,.09-.04,.19-.09,.28-.13,.38-.18,.75-.36,1.12-.55,.07-.04,.14-.07,.21-.11,.31-.16,.61-.32,.91-.48,.1-.05,.2-.11,.3-.16,.36-.2,.72-.4,1.07-.6l3.63-2.11,305.12-177.32h0c.22-.13,.44-.26,.65-.38,.03-.02,.05-.03,.08-.05,.15-.09,.3-.19,.45-.28,.12-.08,.24-.15,.36-.23,.15-.1,.3-.19,.44-.29,.11-.08,.23-.15,.34-.23,.15-.1,.3-.2,.45-.31,.11-.07,.21-.15,.32-.22,.16-.11,.31-.22,.46-.34,.09-.07,.18-.13,.27-.2,.18-.14,.36-.27,.54-.41,.06-.04,.12-.09,.17-.13,.23-.18,.46-.37,.69-.55,.06-.05,.11-.1,.17-.14,.17-.14,.33-.28,.49-.42,.08-.07,.16-.14,.24-.22,.13-.12,.27-.24,.39-.35l.03-.03s.06-.06,.1-.09c.2-.19,.4-.38,.6-.57,.07-.07,.14-.14,.21-.21,.17-.18,.34-.35,.51-.53,.06-.06,.12-.12,.17-.18,.22-.23,.43-.47,.63-.71,.04-.04,.07-.09,.11-.13,.17-.2,.33-.39,.49-.59,.03-.03,.06-.07,.08-.1,.04-.05,.07-.1,.11-.15,.1-.13,.2-.26,.29-.38,.07-.09,.13-.18,.2-.27,.09-.13,.19-.26,.28-.4,.06-.09,.12-.18,.18-.26,.09-.14,.18-.28,.27-.42,.05-.08,.1-.16,.15-.24,.11-.17,.21-.35,.31-.52,.03-.04,.05-.09,.08-.13v-.02c.1-.17,.19-.33,.28-.5,.03-.05,.05-.1,.08-.14,.11-.22,.22-.43,.32-.65,.03-.06,.05-.12,.08-.18,.07-.16,.14-.32,.21-.48,.04-.08,.07-.17,.1-.25,.06-.14,.11-.27,.16-.41v-.03c.05-.1,.08-.19,.11-.29,.04-.11,.08-.22,.12-.33,.04-.11,.07-.22,.1-.33,.03-.11,.07-.22,.1-.34,.03-.11,.06-.22,.09-.33,.03-.11,.06-.22,.09-.34,.03-.11,.05-.22,.07-.33,.03-.11,.05-.23,.08-.34v-.04c.03-.09,.04-.19,.06-.28,.02-.12,.05-.24,.06-.36,.02-.11,.03-.21,.05-.32,.02-.12,.03-.24,.05-.36,.01-.11,.02-.22,.03-.33,.01-.12,.02-.24,.03-.36,0-.11,.01-.22,.02-.33,0-.12,.01-.24,.02-.36,0-.02,0-.04,0-.06,0-.19,0-.38,0-.57l.03-12.07c0,.21,0,.42,0,.63Z"
            />
            <g>
              <path
                className="cls-6"
                d="M934.88,456.44c.04,7.32-4.81,14.18-13.66,19.33l-308.75,179.42c-8.85,5.14-20.68,7.98-33.32,7.98-12.64,0-24.5-2.83-33.41-7.98l-122.94-70.98c-8.91-5.14-13.84-12.01-13.88-19.33-.04-7.32,4.81-14.18,13.66-19.33l308.75-179.42c8.85-5.14,20.69-7.98,33.32-7.98,12.64,0,24.5,2.83,33.41,7.98l122.94,70.98c8.91,5.14,13.84,12.01,13.88,19.33Zm-330.97,193.81l308.75-179.42c13.65-7.93,13.57-20.84-.16-28.77l-15.66-9.04-6.01,3.49c-5.74,3.33-15.16,3.33-20.94,0l-70.62-40.77c-5.77-3.33-5.8-8.79-.07-12.13l6.01-3.49-15.66-9.04c-13.74-7.93-36.02-7.93-49.67,0l-308.75,179.42c-13.65,7.93-13.58,20.84,.16,28.77l122.94,70.98c13.73,7.93,36.02,7.93,49.67,0m228.43-248.91c-1.27-.73-3.35-.74-4.62,0s-1.26,1.94,.02,2.67l27.77,16.03c1.27,.74,3.35,.73,4.61,0,1.27-.74,1.26-1.94-.01-2.67l-27.77-16.03m35.09,20.26c-1.27-.73-3.35-.74-4.62,0s-1.26,1.94,.02,2.67,3.35,.73,4.61,0c1.27-.74,1.26-1.94-.01-2.67"
              />
              <path
                className="cls-6"
                d="M860.11,417.37c1.27,.74,1.28,1.94,.02,2.67-1.26,.73-3.34,.73-4.61,0l-27.76-16.03c-1.27-.73-1.28-1.94-.02-2.67,1.27-.74,3.34-.74,4.61,0l27.76,16.03Z"
              />
              <path
                className="cls-6"
                d="M867.44,421.6c1.27,.73,1.28,1.94,.01,2.67-1.26,.73-3.34,.73-4.61,0s-1.28-1.94-.02-2.67,3.34-.73,4.62,0Z"
              />
              <path
                className="cls-6"
                d="M912.5,442.06c13.74,7.93,13.81,20.84,.16,28.77l-308.75,179.42c-13.65,7.93-35.93,7.93-49.66,0l-122.94-70.98c-13.74-7.93-13.81-20.84-.16-28.77l308.75-179.42c13.65-7.93,35.93-7.93,49.66,0l15.66,9.04-6.01,3.49c-5.74,3.33-5.71,8.79,.07,12.13l70.62,40.77c5.78,3.34,15.2,3.34,20.93,0l6.01-3.49,15.66,9.04Z"
              />
              <path
                className="cls-6"
                d="M934.87,457.07c0,.12-.01,.24-.02,.36,0,.11-.01,.22-.02,.33,0,.12-.02,.24-.03,.36-.01,.11-.02,.22-.03,.32-.01,.12-.03,.24-.05,.36-.01,.11-.03,.21-.05,.32-.02,.12-.04,.24-.07,.36-.02,.1-.04,.21-.06,.31-.02,.11-.05,.23-.08,.34-.02,.11-.05,.22-.07,.33-.03,.11-.06,.23-.09,.34-.03,.11-.06,.22-.09,.33-.03,.11-.07,.23-.1,.34-.03,.11-.07,.22-.1,.32-.04,.11-.08,.23-.12,.34-.04,.11-.07,.21-.11,.32-.05,.14-.11,.28-.16,.41-.03,.08-.07,.17-.1,.25-.07,.16-.14,.32-.21,.48-.03,.06-.05,.12-.08,.18-.1,.22-.21,.44-.32,.65-.02,.05-.05,.1-.08,.14-.09,.17-.18,.34-.27,.5-.03,.05-.06,.1-.09,.15-.1,.18-.2,.35-.31,.52-.05,.08-.1,.16-.15,.24-.09,.14-.18,.28-.27,.43-.06,.09-.12,.18-.18,.26-.09,.13-.18,.26-.28,.4-.06,.09-.13,.18-.2,.27-.1,.13-.19,.26-.29,.38-.06,.08-.13,.17-.2,.25-.16,.2-.32,.4-.49,.59-.04,.04-.07,.09-.11,.13-.2,.24-.41,.47-.63,.71-.06,.06-.12,.12-.17,.18-.17,.18-.34,.35-.51,.53-.07,.07-.14,.14-.21,.21-.2,.19-.39,.38-.6,.57-.04,.04-.08,.08-.13,.12-.13,.12-.26,.24-.4,.36-.08,.07-.16,.14-.24,.21-.16,.14-.33,.28-.5,.42-.05,.05-.11,.09-.16,.14-.23,.19-.45,.37-.69,.55-.05,.04-.11,.08-.16,.13-.18,.14-.36,.28-.55,.42-.09,.07-.18,.13-.27,.2-.15,.11-.31,.23-.47,.34-.1,.07-.21,.15-.32,.22-.15,.1-.3,.21-.45,.31l-2.33,1.46-308.75,179.42h0c-.35,.2-.71,.4-1.07,.6-.1,.05-.2,.11-.3,.16-.3,.16-.61,.32-.91,.48-.07,.04-.14,.07-.21,.11-.37,.19-.74,.37-1.12,.55-.09,.04-.19,.09-.28,.13-.31,.14-.61,.28-.93,.42-.1,.04-.2,.09-.29,.13-.39,.17-.78,.33-1.18,.5-.06,.03-.13,.05-.2,.08-.34,.14-.68,.27-1.03,.4-.11,.04-.22,.09-.34,.13-.39,.14-.77,.29-1.17,.42l-.07,.03c-.42,.14-.84,.28-1.26,.42-.15,.05-.29,.09-.44,.14-.18,.06-.36,.11-.54,.17-.16,.05-.33,.1-.49,.15-.18,.05-.36,.11-.55,.16-.17,.05-.33,.09-.5,.14-.18,.05-.37,.1-.55,.15-.17,.05-.34,.09-.5,.13-.19,.05-.37,.1-.56,.14-.17,.04-.34,.08-.51,.13-.19,.05-.38,.09-.56,.13-.17,.04-.34,.08-.52,.12-.19,.04-.38,.08-.57,.13-.17,.04-.35,.08-.52,.11-.19,.04-.38,.08-.58,.12-.17,.03-.35,.07-.52,.1-.2,.04-.39,.07-.59,.11-.16,.03-.33,.06-.49,.09-.44,.08-.88,.15-1.33,.23h0c-.44,.07-.89,.14-1.34,.2-.13,.02-.27,.04-.4,.05-.34,.05-.68,.09-1.02,.13-.13,.02-.26,.03-.39,.05-.46,.05-.91,.1-1.37,.15-.06,0-.13,.01-.19,.02-.35,.03-.69,.07-1.04,.09-.14,.01-.29,.02-.43,.03-.27,.02-.54,.04-.81,.06-.16,.01-.33,.02-.49,.03-.25,.02-.51,.03-.76,.04-.17,0-.34,.02-.51,.03-.25,.01-.51,.02-.76,.03-.17,0-.33,.01-.5,.02-.3,0-.6,.02-.9,.02-.14,0-.28,0-.42,0-.44,0-.88,.01-1.32,.01-.65,0-1.3,0-1.94-.02-.1,0-.19,0-.29,0-.2,0-.4-.01-.6-.02-.19,0-.38-.01-.57-.02-.2,0-.4-.02-.6-.03-.19,0-.38-.02-.57-.03-.2-.01-.4-.02-.6-.04-.19-.01-.38-.02-.57-.04-.2-.01-.4-.03-.6-.05-.19-.01-.37-.03-.56-.04-.2-.02-.4-.04-.6-.05-.18-.02-.37-.03-.55-.05-.2-.02-.4-.04-.59-.06-.18-.02-.37-.04-.55-.06-.2-.02-.39-.05-.59-.07-.18-.02-.37-.04-.55-.07-.2-.02-.39-.05-.58-.08-.18-.02-.36-.05-.54-.07-.23-.03-.46-.07-.69-.1-.15-.02-.3-.04-.45-.07-.25-.04-.51-.08-.76-.13-.13-.02-.25-.04-.38-.06-.37-.06-.74-.13-1.1-.2h-.02c-.37-.08-.75-.15-1.11-.23-.08-.02-.15-.03-.22-.05-.32-.07-.63-.13-.95-.2-.14-.03-.27-.06-.41-.09-.25-.06-.51-.12-.76-.18-.15-.04-.3-.07-.45-.11-.24-.06-.47-.12-.71-.18-.15-.04-.3-.08-.45-.12-.24-.06-.47-.13-.71-.2-.13-.04-.27-.08-.4-.11-.43-.12-.86-.25-1.29-.38-.07-.02-.13-.04-.2-.06-.37-.11-.73-.23-1.09-.35-.12-.04-.23-.08-.35-.12-.39-.13-.77-.27-1.15-.4-.03-.01-.07-.02-.1-.04-.41-.15-.82-.3-1.22-.46-.15-.06-.3-.12-.45-.18-.14-.06-.29-.11-.43-.17-.17-.07-.33-.14-.5-.21-.14-.06-.28-.12-.42-.18-.17-.07-.33-.14-.5-.22-.14-.06-.27-.12-.41-.18-.17-.08-.33-.15-.5-.23-.13-.06-.26-.12-.39-.18-.17-.08-.33-.16-.5-.24-.12-.06-.25-.12-.37-.18-.17-.09-.34-.18-.52-.26-.11-.06-.23-.12-.34-.18-.19-.1-.37-.2-.56-.3-.09-.05-.19-.1-.28-.15-.28-.15-.55-.31-.82-.46l-122.94-70.98c-8.91-5.14-13.84-12.01-13.88-19.33l-.03,12.07c.04,7.32,4.97,14.18,13.88,19.33l122.94,70.98c.27,.16,.55,.31,.82,.46,.09,.05,.19,.1,.28,.15,.19,.1,.37,.2,.56,.3,.11,.06,.23,.12,.34,.18,.17,.09,.34,.18,.52,.26,.12,.06,.25,.12,.37,.18,.17,.08,.33,.16,.5,.24,.13,.06,.26,.12,.39,.18,.16,.08,.33,.15,.5,.23,.13,.06,.27,.12,.41,.18,.16,.07,.33,.15,.5,.22,.14,.06,.28,.12,.42,.18,.17,.07,.33,.14,.5,.21,.14,.06,.29,.12,.43,.17,.11,.04,.21,.09,.32,.13,.04,.02,.09,.03,.14,.05,.4,.16,.81,.31,1.22,.46,.03,.01,.07,.02,.1,.04,.38,.14,.77,.27,1.15,.4,.12,.04,.23,.08,.35,.12,.36,.12,.72,.24,1.09,.35,.07,.02,.13,.04,.2,.06,.42,.13,.85,.26,1.28,.38,.04,.01,.08,.02,.12,.04,.09,.03,.19,.05,.29,.08,.23,.07,.47,.13,.71,.19,.15,.04,.3,.08,.45,.12,.24,.06,.47,.12,.71,.18,.15,.04,.3,.07,.45,.11,.25,.06,.5,.12,.76,.18,.14,.03,.27,.06,.41,.09,.31,.07,.63,.14,.95,.2,.07,.01,.13,.03,.2,.04h.03c.37,.08,.74,.16,1.11,.23h.02c.37,.07,.73,.14,1.1,.2,.12,.02,.25,.04,.38,.06,.25,.04,.51,.09,.76,.13,.15,.02,.3,.05,.46,.07,.23,.03,.46,.07,.69,.1h.08c.16,.03,.31,.05,.47,.08,.19,.03,.38,.05,.58,.08,.18,.02,.37,.05,.56,.07,.19,.02,.39,.05,.58,.07,.19,.02,.37,.04,.56,.06,.2,.02,.39,.04,.59,.06,.19,.02,.37,.03,.56,.05,.2,.02,.39,.04,.59,.05,.04,0,.07,0,.11,0,.15,.01,.31,.02,.46,.03,.2,.02,.4,.03,.59,.04,.19,.01,.38,.02,.57,.04,.2,.01,.4,.03,.6,.04,.19,.01,.38,.02,.57,.03,.2,0,.4,.02,.6,.03,.19,0,.38,.01,.57,.02,.2,0,.4,.01,.6,.02,.04,0,.08,0,.13,0,.05,0,.11,0,.16,0,.64,.01,1.29,.02,1.94,.02,.44,0,.88,0,1.32-.01,.14,0,.28,0,.42,0,.3,0,.6-.01,.9-.02,.07,0,.14,0,.21,0,.1,0,.2,0,.29-.01,.25,0,.51-.02,.76-.03,.17,0,.34-.02,.51-.03,.25-.01,.51-.03,.76-.04,.16-.01,.33-.02,.49-.03,.27-.02,.54-.04,.81-.06,.14-.01,.29-.02,.43-.03,.35-.03,.69-.06,1.04-.09,.06,0,.12-.01,.17-.02h.02c.46-.05,.92-.1,1.37-.15,.13-.02,.26-.03,.39-.05,.34-.04,.68-.09,1.02-.13,.13-.02,.27-.04,.4-.05,.45-.06,.9-.13,1.34-.2h0c.45-.07,.89-.15,1.33-.23,.05,0,.1-.02,.15-.03,.11-.02,.23-.04,.34-.06,.2-.04,.39-.07,.59-.11,.17-.03,.35-.07,.52-.1,.19-.04,.39-.08,.58-.12,.17-.04,.35-.07,.52-.11,.19-.04,.38-.08,.57-.13,.17-.04,.34-.08,.52-.12,.19-.04,.38-.09,.56-.13,.17-.04,.34-.08,.51-.13,.19-.05,.37-.09,.56-.14,.17-.04,.34-.09,.5-.13,.18-.05,.37-.1,.55-.15,.17-.05,.33-.09,.5-.14,.18-.05,.37-.11,.55-.16,.16-.05,.33-.1,.49-.15,.18-.06,.36-.11,.54-.17,.1-.03,.2-.06,.29-.09,.05-.02,.1-.03,.14-.05,.42-.14,.84-.28,1.26-.42l.07-.03c.39-.14,.78-.28,1.17-.42,.11-.04,.22-.08,.34-.13,.35-.13,.69-.27,1.03-.4,.06-.03,.13-.05,.2-.08,.4-.16,.79-.33,1.18-.5,.1-.04,.2-.09,.29-.13,.31-.14,.62-.28,.93-.42,.09-.04,.19-.09,.28-.13,.38-.18,.75-.36,1.12-.55,.07-.03,.14-.07,.21-.11,.31-.16,.61-.32,.91-.48,.1-.05,.2-.11,.3-.16,.36-.2,.72-.4,1.07-.6l3.63-2.11,305.12-177.32h0c.22-.13,.44-.26,.65-.38,.03-.02,.05-.03,.08-.05,.15-.09,.3-.19,.45-.28,.12-.08,.24-.15,.36-.23,.15-.1,.3-.19,.44-.29,.11-.08,.23-.15,.34-.23,.15-.1,.3-.2,.45-.31,.11-.07,.21-.15,.32-.22,.16-.11,.31-.22,.46-.34,.09-.07,.18-.13,.27-.2,.18-.14,.36-.27,.54-.41,.06-.04,.12-.09,.17-.13,.23-.18,.46-.37,.69-.55,.06-.05,.11-.1,.17-.14,.17-.14,.33-.28,.49-.42,.08-.07,.16-.14,.24-.22,.13-.12,.27-.24,.39-.35l.03-.03s.06-.06,.1-.09c.2-.19,.4-.38,.6-.57,.07-.07,.14-.14,.21-.21,.17-.18,.34-.35,.51-.53,.06-.06,.12-.12,.17-.18,.22-.23,.43-.47,.63-.71,.04-.04,.07-.09,.11-.13,.17-.2,.33-.39,.49-.59,.03-.03,.06-.07,.08-.1,.04-.05,.07-.1,.11-.15,.1-.13,.2-.26,.29-.38,.07-.09,.13-.18,.2-.27,.09-.13,.19-.26,.28-.4,.06-.09,.12-.18,.18-.26,.09-.14,.18-.28,.27-.42,.05-.08,.1-.16,.15-.24,.11-.17,.21-.35,.31-.52,.03-.04,.05-.09,.08-.13v-.02c.1-.17,.19-.33,.28-.5,.03-.05,.05-.1,.08-.14,.11-.22,.22-.43,.32-.65,.03-.06,.05-.12,.08-.18,.07-.16,.14-.32,.21-.48,.04-.08,.07-.17,.1-.25,.06-.14,.11-.27,.16-.41v-.03c.05-.1,.08-.19,.11-.29,.04-.11,.08-.22,.12-.33,.04-.11,.07-.22,.1-.33,.03-.11,.07-.22,.1-.34,.03-.11,.06-.22,.09-.33,.03-.11,.06-.22,.09-.34,.03-.11,.05-.22,.07-.33,.03-.11,.05-.23,.08-.34v-.04c.03-.09,.04-.19,.06-.28,.02-.12,.05-.24,.06-.36,.02-.11,.03-.21,.05-.32,.02-.12,.03-.24,.05-.36,.01-.11,.02-.22,.03-.33,.01-.12,.02-.24,.03-.36,0-.11,.01-.22,.02-.33,0-.12,.01-.24,.02-.36,0-.02,0-.04,0-.06,0-.19,0-.38,0-.57l.03-12.07c0,.21,0,.42,0,.63Z"
              />
            </g>
            <g>
              <path
                className="cls-6"
                d="M526.99,219.04c.04,7.32-4.81,14.18-13.66,19.33L204.58,417.79c-8.85,5.14-20.68,7.98-33.32,7.98-12.64,0-24.5-2.83-33.41-7.98L14.92,346.81c-8.91-5.14-13.84-12.01-13.88-19.33-.04-7.32,4.81-14.18,13.66-19.33L323.45,128.73c8.85-5.14,20.69-7.98,33.32-7.98,12.64,0,24.5,2.83,33.41,7.98l122.94,70.98c8.91,5.14,13.84,12.01,13.88,19.33ZM196.03,412.84L504.77,233.42c13.65-7.93,13.57-20.84-.16-28.77l-15.66-9.04-6.01,3.49c-5.74,3.33-15.16,3.33-20.94,0l-70.62-40.77c-5.77-3.33-5.8-8.79-.07-12.13l6.01-3.49-15.66-9.04c-13.74-7.93-36.02-7.93-49.67,0L23.26,313.1c-13.65,7.93-13.58,20.84,.16,28.77l122.94,70.98c13.73,7.93,36.02,7.93,49.67,0m228.43-248.91c-1.27-.73-3.35-.74-4.62,0s-1.26,1.94,.02,2.67l27.77,16.03c1.27,.74,3.35,.73,4.61,0s1.26-1.94-.01-2.67l-27.77-16.03m35.09,20.26c-1.27-.73-3.35-.74-4.62,0s-1.26,1.94,.02,2.67c1.27,.74,3.35,.73,4.61,0,1.27-.74,1.26-1.94-.01-2.67"
              />
              <path
                className="cls-6"
                d="M452.23,179.97c1.27,.74,1.28,1.94,.02,2.67-1.26,.73-3.34,.73-4.61,0l-27.76-16.03c-1.27-.73-1.28-1.94-.02-2.67,1.27-.74,3.34-.74,4.61,0l27.76,16.03Z"
              />
              <path
                className="cls-6"
                d="M459.56,184.2c1.27,.73,1.28,1.94,.01,2.67s-3.34,.73-4.61,0-1.28-1.94-.02-2.67,3.34-.73,4.62,0Z"
              />
              <path
                className="cls-6"
                d="M504.61,204.65c13.74,7.93,13.81,20.84,.16,28.77L196.02,412.85c-13.65,7.93-35.93,7.93-49.66,0L23.42,341.87c-13.74-7.93-13.81-20.84-.16-28.77L332.01,133.68c13.65-7.93,35.93-7.93,49.66,0l15.66,9.04-6.01,3.49c-5.74,3.33-5.71,8.79,.07,12.13l70.62,40.77c5.78,3.34,15.2,3.34,20.93,0l6.01-3.49,15.66,9.04Z"
              />
              <path
                className="cls-6"
                d="M526.99,219.66c0,.12-.01,.24-.02,.36,0,.11-.01,.22-.02,.33,0,.12-.02,.24-.03,.36-.01,.11-.02,.22-.03,.32-.01,.12-.03,.24-.05,.36-.01,.11-.03,.21-.05,.32-.02,.12-.04,.24-.07,.36-.02,.1-.04,.21-.06,.31-.02,.11-.05,.23-.08,.34-.02,.11-.05,.22-.07,.33-.03,.11-.06,.23-.09,.34-.03,.11-.06,.22-.09,.33-.03,.11-.07,.23-.1,.34-.03,.11-.07,.22-.1,.32-.04,.11-.08,.23-.12,.34-.04,.11-.07,.21-.11,.32-.05,.14-.11,.28-.16,.41-.03,.08-.07,.17-.1,.25-.07,.16-.14,.32-.21,.48-.03,.06-.05,.12-.08,.18-.1,.22-.21,.44-.32,.65-.02,.05-.05,.1-.08,.14-.09,.17-.18,.34-.27,.5-.03,.05-.06,.1-.09,.15-.1,.18-.2,.35-.31,.52-.05,.08-.1,.16-.15,.24-.09,.14-.18,.28-.27,.43-.06,.09-.12,.18-.18,.26-.09,.13-.18,.26-.28,.4-.06,.09-.13,.18-.2,.27-.1,.13-.19,.26-.29,.38-.06,.08-.13,.17-.2,.25-.16,.2-.32,.4-.49,.59-.04,.04-.07,.09-.11,.13-.2,.24-.41,.47-.63,.71-.06,.06-.12,.12-.17,.18-.17,.18-.34,.35-.51,.53-.07,.07-.14,.14-.21,.21-.2,.19-.39,.38-.6,.57-.04,.04-.08,.08-.13,.12-.13,.12-.26,.24-.4,.36-.08,.07-.16,.14-.24,.21-.16,.14-.33,.28-.5,.42-.05,.05-.11,.09-.16,.14-.23,.19-.45,.37-.69,.55-.05,.04-.11,.08-.16,.13-.18,.14-.36,.28-.55,.42-.09,.07-.18,.13-.27,.2-.15,.11-.31,.23-.47,.34-.1,.07-.21,.15-.32,.22-.15,.1-.3,.21-.45,.31l-2.33,1.46L204.58,417.79h0c-.35,.2-.71,.4-1.07,.6-.1,.05-.2,.11-.3,.16-.3,.16-.61,.32-.91,.48-.07,.04-.14,.07-.21,.11-.37,.19-.74,.37-1.12,.55-.09,.04-.19,.09-.28,.13-.31,.14-.61,.28-.93,.42-.1,.04-.2,.09-.29,.13-.39,.17-.78,.33-1.18,.5-.06,.03-.13,.05-.2,.08-.34,.14-.68,.27-1.03,.4-.11,.04-.22,.09-.34,.13-.39,.14-.77,.29-1.17,.42l-.07,.03c-.42,.14-.84,.28-1.26,.42-.15,.05-.29,.09-.44,.14-.18,.06-.36,.11-.54,.17-.16,.05-.33,.1-.49,.15-.18,.05-.36,.11-.55,.16-.17,.05-.33,.09-.5,.14-.18,.05-.37,.1-.55,.15-.17,.05-.34,.09-.5,.13-.19,.05-.37,.1-.56,.14-.17,.04-.34,.08-.51,.13-.19,.05-.38,.09-.56,.13-.17,.04-.34,.08-.52,.12-.19,.04-.38,.08-.57,.13-.17,.04-.35,.08-.52,.11-.19,.04-.38,.08-.58,.12-.17,.03-.35,.07-.52,.1-.2,.04-.39,.07-.59,.11-.16,.03-.33,.06-.49,.09-.44,.08-.88,.15-1.33,.23h0c-.44,.07-.89,.14-1.34,.2-.13,.02-.27,.04-.4,.05-.34,.05-.68,.09-1.02,.13-.13,.02-.26,.03-.39,.05-.46,.05-.91,.1-1.37,.15-.06,0-.13,.01-.19,.02-.35,.03-.69,.07-1.04,.09-.14,.01-.29,.02-.43,.03-.27,.02-.54,.04-.81,.06-.16,.01-.33,.02-.49,.03-.25,.02-.51,.03-.76,.04-.17,0-.34,.02-.51,.03-.25,.01-.51,.02-.76,.03-.17,0-.33,.01-.5,.02-.3,0-.6,.02-.9,.02-.14,0-.28,0-.42,0-.44,0-.88,.01-1.32,.01-.65,0-1.3,0-1.94-.02-.1,0-.19,0-.29,0-.2,0-.4-.01-.6-.02-.19,0-.38-.01-.57-.02-.2,0-.4-.02-.6-.03-.19,0-.38-.02-.57-.03-.2-.01-.4-.02-.6-.04-.19-.01-.38-.02-.57-.04-.2-.01-.4-.03-.6-.05-.19-.01-.37-.03-.56-.04-.2-.02-.4-.04-.6-.05-.18-.02-.37-.03-.55-.05-.2-.02-.4-.04-.59-.06-.18-.02-.37-.04-.55-.06-.2-.02-.39-.05-.59-.07-.18-.02-.37-.04-.55-.07-.2-.02-.39-.05-.58-.08-.18-.02-.36-.05-.54-.07-.23-.03-.46-.07-.69-.1-.15-.02-.3-.04-.45-.07-.25-.04-.51-.08-.76-.13-.13-.02-.25-.04-.38-.06-.37-.06-.74-.13-1.1-.2h-.02c-.37-.08-.75-.15-1.11-.23-.08-.02-.15-.03-.22-.05-.32-.07-.63-.13-.95-.2-.14-.03-.27-.06-.41-.09-.25-.06-.51-.12-.76-.18-.15-.04-.3-.07-.45-.11-.24-.06-.47-.12-.71-.18-.15-.04-.3-.08-.45-.12-.24-.06-.47-.13-.71-.2-.13-.04-.27-.08-.4-.11-.43-.12-.86-.25-1.29-.38-.07-.02-.13-.04-.2-.06-.37-.11-.73-.23-1.09-.35-.12-.04-.23-.08-.35-.12-.39-.13-.77-.27-1.15-.4-.03-.01-.07-.02-.1-.04-.41-.15-.82-.3-1.22-.46-.15-.06-.3-.12-.45-.18-.14-.06-.29-.11-.43-.17-.17-.07-.33-.14-.5-.21-.14-.06-.28-.12-.42-.18-.17-.07-.33-.14-.5-.22-.14-.06-.27-.12-.41-.18-.17-.08-.33-.15-.5-.23-.13-.06-.26-.12-.39-.18-.17-.08-.33-.16-.5-.24-.12-.06-.25-.12-.37-.18-.17-.09-.34-.18-.52-.26-.11-.06-.23-.12-.34-.18-.19-.1-.37-.2-.56-.3-.09-.05-.19-.1-.28-.15-.28-.15-.55-.31-.82-.46L14.92,346.81c-8.91-5.14-13.84-12.01-13.88-19.33l-.03,12.07c.04,7.32,4.97,14.18,13.88,19.33l122.94,70.98c.27,.16,.55,.31,.82,.46,.09,.05,.19,.1,.28,.15,.19,.1,.37,.2,.56,.3,.11,.06,.23,.12,.34,.18,.17,.09,.34,.18,.52,.26,.12,.06,.25,.12,.37,.18,.17,.08,.33,.16,.5,.24,.13,.06,.26,.12,.39,.18,.16,.08,.33,.15,.5,.23,.13,.06,.27,.12,.41,.18,.16,.07,.33,.15,.5,.22,.14,.06,.28,.12,.42,.18,.17,.07,.33,.14,.5,.21,.14,.06,.29,.12,.43,.17,.11,.04,.21,.09,.32,.13,.04,.02,.09,.03,.14,.05,.4,.16,.81,.31,1.22,.46,.03,.01,.07,.02,.1,.04,.38,.14,.77,.27,1.15,.4,.12,.04,.23,.08,.35,.12,.36,.12,.72,.24,1.09,.35,.07,.02,.13,.04,.2,.06,.42,.13,.85,.26,1.28,.38,.04,.01,.08,.02,.12,.04,.09,.03,.19,.05,.29,.08,.23,.07,.47,.13,.71,.19,.15,.04,.3,.08,.45,.12,.24,.06,.47,.12,.71,.18,.15,.04,.3,.07,.45,.11,.25,.06,.5,.12,.76,.18,.14,.03,.27,.06,.41,.09,.31,.07,.63,.14,.95,.2,.07,.01,.13,.03,.2,.04h.03c.37,.08,.74,.16,1.11,.23h.02c.37,.07,.73,.14,1.1,.2,.12,.02,.25,.04,.38,.06,.25,.04,.51,.09,.76,.13,.15,.02,.3,.05,.46,.07,.23,.03,.46,.07,.69,.1h.08c.16,.03,.31,.05,.47,.08,.19,.03,.38,.05,.58,.08,.18,.02,.37,.05,.56,.07,.19,.02,.39,.05,.58,.07,.19,.02,.37,.04,.56,.06,.2,.02,.39,.04,.59,.06,.19,.02,.37,.03,.56,.05,.2,.02,.39,.04,.59,.05,.04,0,.07,0,.11,0,.15,.01,.31,.02,.46,.03,.2,.02,.4,.03,.59,.04,.19,.01,.38,.02,.57,.04,.2,.01,.4,.03,.6,.04,.19,.01,.38,.02,.57,.03,.2,0,.4,.02,.6,.03,.19,0,.38,.01,.57,.02,.2,0,.4,.01,.6,.02,.04,0,.08,0,.13,0,.05,0,.11,0,.16,0,.64,.01,1.29,.02,1.94,.02,.44,0,.88,0,1.32-.01,.14,0,.28,0,.42,0,.3,0,.6-.01,.9-.02,.07,0,.14,0,.21,0,.1,0,.2,0,.29-.01,.25,0,.51-.02,.76-.03,.17,0,.34-.02,.51-.03,.25-.01,.51-.03,.76-.04,.16-.01,.33-.02,.49-.03,.27-.02,.54-.04,.81-.06,.14-.01,.29-.02,.43-.03,.35-.03,.69-.06,1.04-.09,.06,0,.12-.01,.17-.02h.02c.46-.05,.92-.1,1.37-.15,.13-.02,.26-.03,.39-.05,.34-.04,.68-.09,1.02-.13,.13-.02,.27-.04,.4-.05,.45-.06,.9-.13,1.34-.2h0c.45-.07,.89-.15,1.33-.23,.05,0,.1-.02,.15-.03,.11-.02,.23-.04,.34-.06,.2-.04,.39-.07,.59-.11,.17-.03,.35-.07,.52-.1,.19-.04,.39-.08,.58-.12,.17-.04,.35-.07,.52-.11,.19-.04,.38-.08,.57-.13,.17-.04,.34-.08,.52-.12,.19-.04,.38-.09,.56-.13,.17-.04,.34-.08,.51-.13,.19-.05,.37-.09,.56-.14,.17-.04,.34-.09,.5-.13,.18-.05,.37-.1,.55-.15,.17-.05,.33-.09,.5-.14,.18-.05,.37-.11,.55-.16,.16-.05,.33-.1,.49-.15,.18-.06,.36-.11,.54-.17,.1-.03,.2-.06,.29-.09,.05-.02,.1-.03,.14-.05,.42-.14,.84-.28,1.26-.42l.07-.03c.39-.14,.78-.28,1.17-.42,.11-.04,.22-.08,.34-.13,.35-.13,.69-.27,1.03-.4,.06-.03,.13-.05,.2-.08,.4-.16,.79-.33,1.18-.5,.1-.04,.2-.09,.29-.13,.31-.14,.62-.28,.93-.42,.09-.04,.19-.09,.28-.13,.38-.18,.75-.36,1.12-.55,.07-.03,.14-.07,.21-.11,.31-.16,.61-.32,.91-.48,.1-.05,.2-.11,.3-.16,.36-.2,.72-.4,1.07-.6l3.63-2.11,305.12-177.32h0c.22-.13,.44-.26,.65-.38,.03-.02,.05-.03,.08-.05,.15-.09,.3-.19,.45-.28,.12-.08,.24-.15,.36-.23,.15-.1,.3-.19,.44-.29,.11-.08,.23-.15,.34-.23,.15-.1,.3-.2,.45-.31,.11-.07,.21-.15,.32-.22,.16-.11,.31-.22,.46-.34,.09-.07,.18-.13,.27-.2,.18-.14,.36-.27,.54-.41,.06-.04,.12-.09,.17-.13,.23-.18,.46-.37,.69-.55,.06-.05,.11-.1,.17-.14,.17-.14,.33-.28,.49-.42,.08-.07,.16-.14,.24-.22,.13-.12,.27-.24,.39-.35l.03-.03s.06-.06,.1-.09c.2-.19,.4-.38,.6-.57,.07-.07,.14-.14,.21-.21,.17-.18,.34-.35,.51-.53,.06-.06,.12-.12,.17-.18,.22-.23,.43-.47,.63-.71,.04-.04,.07-.09,.11-.13,.17-.2,.33-.39,.49-.59,.03-.03,.06-.07,.08-.1,.04-.05,.07-.1,.11-.15,.1-.13,.2-.26,.29-.38,.07-.09,.13-.18,.2-.27,.09-.13,.19-.26,.28-.4,.06-.09,.12-.18,.18-.26,.09-.14,.18-.28,.27-.42,.05-.08,.1-.16,.15-.24,.11-.17,.21-.35,.31-.52,.03-.04,.05-.09,.08-.13v-.02c.1-.17,.19-.33,.28-.5,.03-.05,.05-.1,.08-.14,.11-.22,.22-.43,.32-.65,.03-.06,.05-.12,.08-.18,.07-.16,.14-.32,.21-.48,.04-.08,.07-.17,.1-.25,.06-.14,.11-.27,.16-.41v-.03c.05-.1,.08-.19,.11-.29,.04-.11,.08-.22,.12-.33,.04-.11,.07-.22,.1-.33,.03-.11,.07-.22,.1-.34,.03-.11,.06-.22,.09-.33,.03-.11,.06-.22,.09-.34,.03-.11,.05-.22,.07-.33,.03-.11,.05-.23,.08-.34v-.04c.03-.09,.04-.19,.06-.28,.02-.12,.05-.24,.06-.36,.02-.11,.03-.21,.05-.32,.02-.12,.03-.24,.05-.36,.01-.11,.02-.22,.03-.33,.01-.12,.02-.24,.03-.36,0-.11,.01-.22,.02-.33,0-.12,.01-.24,.02-.36,0-.02,0-.04,0-.06,0-.19,0-.38,0-.57l.03-12.07c0,.21,0,.42,0,.63Z"
              />
            </g>
            <g>
              <path
                className="cls-6"
                d="M762.13,471.14c-7.68,4.46-20.17,4.46-27.9,0-7.73-4.46-7.77-11.7-.09-16.16,7.68-4.46,20.17-4.46,27.9,0,7.73,4.46,7.76,11.7,.09,16.16Z"
              />
              <path
                className="cls-6"
                d="M734.24,471.14c15.36,8.87,20.48,21.43,15.33,32.74-19.51,3.02-41.21,.1-56.58-8.77-15.37-8.87-20.49-21.44-15.34-32.75,19.51-3.02,41.21-.09,56.58,8.78Z"
              />
              <path
                className="cls-6"
                d="M775.48,447.18c22.92,13.23,23.04,34.7,.27,47.93-.11,.06-.21,.12-.32,.18-.17,.1-.25,.14-.33,.19-.19,.11-.29,.16-.39,.22-.14,.08-.25,.14-.36,.2-.17,.09-.25,.13-.33,.18-.2,.11-.29,.15-.37,.2-.17,.09-.28,.15-.39,.2-.53,.27-.62,.32-.7,.36-.19,.1-.3,.15-.41,.2-.91,.44-1.02,.49-1.13,.54-.93,.43-1.05,.48-1.16,.53-.15,.07-.25,.11-.34,.15-.59,.26-.71,.3-.82,.35-.95,.39-1.05,.43-1.16,.47-.2,.08-.29,.12-.39,.15-1.01,.39-1.11,.43-1.2,.46-.99,.36-1.11,.4-1.22,.44-1.01,.35-1.13,.39-1.24,.43-1.01,.33-1.13,.37-1.24,.4-1.04,.32-1.15,.35-1.26,.38-1.28,.37-1.37,.39-1.47,.42-1.04,.28-1.19,.32-1.34,.36-.99,.25-1.19,.3-1.38,.34-2.61,.61-4.89,1.06-7.21,1.42,5.15-11.31,.03-23.87-15.33-32.74,7.73,4.46,20.22,4.46,27.9,0,7.68-4.46,7.64-11.7-.09-16.16-7.73-4.46-20.22-4.46-27.9,0-7.68,4.46-7.64,11.7,.09,16.16-15.37-8.87-37.07-11.8-56.58-8.78,.61-1.34,1.37-2.67,2.27-3.97,.18-.26,.36-.5,.54-.75,.26-.34,.35-.46,.45-.58,.47-.59,.6-.74,.73-.89,.33-.38,.4-.46,.47-.55,.6-.66,.65-.72,.71-.78,.71-.73,.77-.79,.82-.84,3.14-2.79,3.22-2.85,3.3-2.92,.72-.55,.8-.62,.88-.68,.74-.54,.83-.61,.92-.67,.76-.53,.85-.59,.95-.66,.14-.1,.21-.14,.29-.19,.5-.33,.6-.39,.69-.45,.13-.09,.22-.14,.3-.19,.51-.32,.61-.38,.71-.44,.12-.08,.21-.13,.31-.19,.53-.31,.63-.38,.74-.44,22.78-13.24,59.83-13.24,82.75,0Z"
              />
            </g>
            <g>
              <path
                className="cls-6"
                d="M337.9,232.62c-7.68,4.46-20.17,4.46-27.9,0-7.73-4.46-7.77-11.7-.09-16.16s20.17-4.46,27.9,0c7.73,4.46,7.76,11.7,.09,16.16Z"
              />
              <path
                className="cls-6"
                d="M310.01,232.62c15.36,8.87,20.48,21.43,15.33,32.74-19.51,3.02-41.21,.1-56.58-8.77-15.37-8.87-20.49-21.44-15.34-32.75,19.51-3.02,41.21-.09,56.58,8.78Z"
              />
              <path
                className="cls-6"
                d="M351.25,208.65c22.92,13.23,23.04,34.7,.27,47.93-.11,.06-.21,.12-.32,.18-.17,.1-.25,.14-.33,.19-.19,.11-.29,.16-.39,.22-.14,.08-.25,.14-.36,.2-.17,.09-.25,.13-.33,.18-.2,.11-.29,.15-.37,.2-.17,.09-.28,.15-.39,.2-.53,.27-.62,.32-.7,.36-.19,.1-.3,.15-.41,.2-.91,.44-1.02,.49-1.13,.54-.93,.43-1.05,.48-1.16,.53-.15,.07-.25,.11-.34,.15-.59,.26-.71,.3-.82,.35-.95,.39-1.05,.43-1.16,.47-.2,.08-.29,.12-.39,.15-1.01,.39-1.11,.43-1.2,.46-.99,.36-1.11,.4-1.22,.44-1.01,.35-1.13,.39-1.24,.43-1.01,.33-1.13,.37-1.24,.4-1.04,.32-1.15,.35-1.26,.38-1.28,.37-1.37,.39-1.47,.42-1.04,.28-1.19,.32-1.34,.36-.99,.25-1.19,.3-1.38,.34-2.61,.61-4.89,1.06-7.21,1.42,5.15-11.31,.03-23.87-15.33-32.74,7.73,4.46,20.22,4.46,27.9,0,7.68-4.46,7.64-11.7-.09-16.16-7.73-4.46-20.22-4.46-27.9,0-7.68,4.46-7.64,11.7,.09,16.16-15.37-8.87-37.07-11.8-56.58-8.78,.61-1.34,1.37-2.67,2.27-3.97,.18-.26,.36-.5,.54-.75,.26-.34,.35-.46,.45-.58,.47-.59,.6-.74,.73-.89,.33-.38,.4-.46,.47-.55,.6-.66,.65-.72,.71-.78,.71-.73,.77-.79,.82-.84,3.14-2.79,3.22-2.85,3.3-2.92,.72-.55,.8-.62,.88-.68,.74-.54,.83-.61,.92-.67,.76-.53,.85-.59,.95-.66,.14-.1,.21-.14,.29-.19,.5-.33,.6-.39,.69-.45,.13-.09,.22-.14,.3-.19,.51-.32,.61-.38,.71-.44,.12-.08,.21-.13,.31-.19,.53-.31,.63-.38,.74-.44,22.78-13.24,59.83-13.24,82.75,0Z"
              />
            </g>
            <polygon
              className="cls-5"
              points="423.93 501.02 408.93 463.65 443.2 484.44 427.49 485.56 423.93 501.02"
            />
            <g>
              <path
                className="cls-6"
                d="M392.6,437.23c5.51-8.97,4.39-25.21-3.71-40.82s-20.72-25.88-31.22-26.55l-1.01-1.95-6.67,3.46c-11.28,5.85-12.15,26.54-1.95,46.22,10.2,19.68,27.62,30.89,38.9,25.04l6.67-3.46-1.01-1.95Z"
              />
              <ellipse
                className="cls-6"
                cx="375.13"
                cy="403.55"
                rx="23.01"
                ry="40.14"
                transform="translate(-143.65 217.97) rotate(-27.41)"
              />
              <ellipse
                className="cls-6"
                cx="375.13"
                cy="403.55"
                rx="17.42"
                ry="30.4"
                transform="translate(-143.65 217.97) rotate(-27.41)"
              />
            </g>
            <g className="cls-7">
              <path
                className="cls-2"
                d="M519.07,77.5c116.33,67.16,210.36,229.99,209.98,363.7-.38,133.67-95.02,187.57-211.35,120.41-116.36-67.18-210.36-229.99-209.98-363.67,.38-133.71,94.99-187.63,211.35-120.44Z"
              />
            </g>
            <g>
              <path
                className="cls-6"
                d="M544.47,88.6c.9-10.49-7.38-24.5-21.61-34.82-14.23-10.32-30.12-13.85-39.81-9.74l-1.78-1.29-4.41,6.08c-7.46,10.28,1.04,29.17,18.98,42.19,17.94,13.02,38.54,15.23,46,4.95l4.41-6.08-1.78-1.29Z"
              />
              <ellipse
                className="cls-6"
                cx="513.76"
                cy="66.32"
                rx="23.01"
                ry="40.14"
                transform="translate(158.37 443.22) rotate(-54.04)"
              />
              <ellipse
                className="cls-6"
                cx="513.76"
                cy="66.32"
                rx="17.42"
                ry="30.4"
                transform="translate(158.37 443.22) rotate(-54.04)"
              />
            </g>
            <g>
              <path
                className="cls-6"
                d="M718.38,328.96c6.05-8.62,5.93-24.89-1.19-40.97-7.12-16.07-19.08-27.1-29.53-28.42l-.89-2.01-6.87,3.04c-11.62,5.14-13.76,25.74-4.79,46.02,8.97,20.27,25.67,32.53,37.28,27.39l6.87-3.04-.89-2.01Z"
              />
              <ellipse
                className="cls-6"
                cx="703.02"
                cy="294.26"
                rx="23.01"
                ry="40.14"
                transform="translate(-58.94 309.75) rotate(-23.88)"
              />
              <ellipse
                className="cls-6"
                cx="703.02"
                cy="294.26"
                rx="17.42"
                ry="30.4"
                transform="translate(-58.94 309.75) rotate(-23.88)"
              />
            </g>
            <polygon
              className="cls-5"
              points="631.15 158.21 642.83 196.74 610.51 173.04 626.26 173.3 631.15 158.21"
            />
            <polygon
              className="cls-5"
              points="741.65 431.61 729.14 474.49 716.43 446.17 729.07 447.67 741.65 431.61"
            />
            <path
              className="cls-3"
              d="M860.34,298.76l-245.75-5.69,60.53,178.8,1.13,5.14h.19c1.99,6.7,7.44,13.13,16.39,18.3,15.36,8.87,37.07,11.79,56.58,8.77h0c2.31-.36,4.59-.8,7.21-1.41,.2-.05,.39-.09,1.38-.34,.15-.04,.3-.08,1.34-.36,.1-.03,.2-.06,1.47-.42,.11-.03,.22-.07,1.26-.38,.12-.04,.23-.07,1.24-.4,.12-.04,.24-.08,1.24-.43,.11-.04,.23-.08,1.22-.44,.1-.04,.19-.07,1.2-.46,.09-.04,.18-.07,.39-.15,.1-.04,.2-.08,1.16-.47,.11-.05,.22-.09,.82-.35,.09-.04,.19-.08,.34-.15,.11-.05,.23-.1,1.16-.53,.11-.05,.22-.1,1.13-.54,.11-.05,.22-.11,.41-.21,.09-.04,.17-.09,.7-.36,.11-.06,.22-.11,.39-.2,.09-.05,.18-.09,.37-.2,.08-.04,.16-.09,.33-.18,.11-.06,.22-.12,.36-.2,.1-.06,.2-.11,.39-.22,.08-.04,.16-.09,.33-.19,.11-.06,.21-.12,.32-.18,8.26-4.8,13.49-10.69,15.74-16.87h.23l68.8-179.69Z"
            />
            <path
              className="cls-9"
              d="M436.21,60.32l-245.75-5.69,60.53,178.8,1.13,5.14h.19c1.99,6.7,7.44,13.13,16.39,18.3,15.36,8.87,37.07,11.79,56.58,8.77h0c2.31-.36,4.59-.8,7.21-1.41,.2-.05,.39-.09,1.38-.34,.15-.04,.3-.08,1.34-.36,.1-.03,.2-.06,1.47-.42,.11-.03,.22-.07,1.26-.38,.12-.04,.23-.07,1.24-.4,.12-.04,.24-.08,1.24-.43,.11-.04,.23-.08,1.22-.44,.1-.04,.19-.07,1.2-.46,.09-.04,.18-.07,.39-.15,.1-.04,.2-.08,1.16-.47,.11-.05,.22-.09,.82-.35,.09-.04,.19-.08,.34-.15,.11-.05,.23-.1,1.16-.53,.11-.05,.22-.1,1.13-.54,.11-.05,.22-.11,.41-.21,.09-.04,.17-.09,.7-.36,.11-.06,.22-.11,.39-.2,.09-.05,.18-.09,.37-.2,.08-.04,.16-.09,.33-.18,.11-.06,.22-.12,.36-.2,.1-.06,.2-.11,.39-.22,.08-.04,.16-.09,.33-.19,.11-.06,.21-.12,.32-.18,8.26-4.8,13.49-10.69,15.74-16.87h.23L436.21,60.32Z"
            />
          </g>
        </g>
      </motion.svg>
  );
};
