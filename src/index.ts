import { QinPanel } from "qinpel-cps";

class AdMister extends QinPanel {
  public constructor() {
    super();
    const qinDesk = this.qinpel().manager.newDesk(
      this.qinpel(),
      (manifest) => manifest.group == "admister"
    );
    this.getMain().appendChild(qinDesk.getMain());
  }
}

new AdMister().putAsBody();
