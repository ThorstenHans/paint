import { updateContext } from '../helpers/update-context.js';
export class ToolBoxAction {
  isChecked({
    view: {
      toolBox
    }
  }) {
    return toolBox;
  }

  execute(drawingContext) {
    drawingContext.view.toolBox = !drawingContext.view.toolBox;
    updateContext(drawingContext.element);
  }

}