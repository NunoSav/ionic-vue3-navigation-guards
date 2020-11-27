<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button
            :text="getBackButtonText()"
            default-href="/"
          ></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-item>
        <ion-label class="ion-text-wrap">
          <h2>Page3</h2>
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { onBeforeRouteLeave } from "vue-router";
import {
  alertController,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import router from "@/router";

export default defineComponent({
  name: "page3",

  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonToolbar,
  },

  setup() {
    const cantGoBack = ref(true);

    async function showAlert(): Promise<void> {
      const alert = await alertController.create({
        backdropDismiss: false,
        header: "Confirm",
        message: "Loose data?",
        buttons: [
          {
            text: "Discard",
            handler: () => {
              cantGoBack.value = false;
              router.back();
            },
          },
          {
            text: "Click Here",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              cantGoBack.value = false;
            },
          },
        ],
      });

      await alert.present();
    }

    onBeforeRouteLeave((_to, _from) => {
      if (cantGoBack.value) {
        showAlert();
        return false;
      }

      return true;
    });

    const getBackButtonText = () => {
      const win = window as any;
      const mode = win && win.Ionic && win.Ionic.mode;
      return mode === "ios" ? "Inbox" : "";
    };

    return { getBackButtonText };
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>