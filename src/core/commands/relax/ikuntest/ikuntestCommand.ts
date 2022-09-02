import { CommandType } from "../../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**
 * 学习通快捷
 * @author yupi
 */
const ikuntestCommand: CommandType = {
  func: "xxt",
  name: "学习通",
  desc: "学习通快捷",
  options: [],
  collapsible: true,
  action(options, terminal) {
    const output: ComponentOutputType = {
      type: "component",
      component: defineAsyncComponent(() => import("./IkunTestBox.vue")),
      props: {},
    };
    terminal.writeResult(output);
  },
};

export default ikuntestCommand;
