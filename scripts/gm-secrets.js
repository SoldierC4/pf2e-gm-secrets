
//Hooks.once('init', async function() {
//});

Hooks.once('ready', async function() {
    console.log("GM Secrets: Rendering");
    let secrets = new GMSecretsApp()
    secrets.render(true);
});

class GMSecretsApp extends FormApplication {

    constructor() {
        super();
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            //classes: ['form'],
            popOut: true,
            template: 'modules/pf2e-gm-secrets/templates/gm-secrets.html',
            id: 'gm-secrets-app',
            title: 'GM Secrets',
        });
    }

    async _updateObject(event, formData) {
        //
    }

  getData() {
    // Send values to the HTML template.
    return {
      timeValue: 0,
      hourString: "0",
      minuteString: "1",
      dateString: "Time o' clock",
    };
  }
}
