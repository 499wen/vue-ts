import { Message } from 'element-ui';
import { ElMessageComponent } from 'element-ui/types/message';
let messageInstance: ElMessageComponent | null = null;
const resetMessage = (options: any) => {
    if(messageInstance) {
      messageInstance.close()
    }
    messageInstance = Message(options)
  }
;
['error','success','info','warning'].forEach(type => {
  resetMessage[type] = (options: { type?: any; message?: string | number; }) => {
    let opt = {
      type,
      message: ''
    }
    if(typeof options === 'string' || typeof options === 'number') {
      opt.message = options
    }
    opt.type = type;
    return resetMessage(opt);
  }
});
export default resetMessage