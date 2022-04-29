import { QinPanel } from "qinpel-cps";

class AdMister extends QinPanel {
  public constructor() {
    super();
    const qinDesk = this.qinpel.chief.newDesk(this.qinpel, {
      addsApps: (manifest) => manifest.group == "admister",
      showCfgs: false,
    });
    this.getMain().appendChild(qinDesk.getMain());
  }
}

new AdMister().style.putAsBody();
