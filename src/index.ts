import { AdNames } from "adcommon";
import { QinPanel } from "qinpel-cps";

class AdMister extends QinPanel {
  public constructor() {
    super();
    const qinDesk = this.qinpel.chief.newDesk(this.qinpel, {
      addsApps: (manifest) => manifest.group == AdNames.AdMister,
      addsCfgs: (manifest) =>
        [this.qinpel.our.names.QinBases as string].indexOf(manifest.title) > -1,
    });
    this.getMain().appendChild(qinDesk.getMain());
  }
}

new AdMister().style.putAsBody();
