import { QinColumn, QinLabel } from "qinpel-cps"

class AdMister extends QinColumn {

    private qinHello: QinLabel = new QinLabel("Hello, AdMister!");

    public constructor() {
        super();
        this.qinHello.install(this);
    }

}

new AdMister().putAsBody();