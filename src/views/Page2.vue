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

        <ion-title>Page2</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Page2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item @click="goToPage3Page()">
          <ion-label class="ion-text-wrap">
            <h2>Go to Page3</h2>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import router from "@/router";

export default defineComponent({
  name: "page2",

  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
  },

  setup() {
    const getBackButtonText = () => {
      const win = window as any;
      const mode = win && win.Ionic && win.Ionic.mode;
      return mode === "ios" ? "Inbox" : "";
    };

    function goToPage3Page() {
      router.push({
        name: "page3",
      });
    }

    return { goToPage3Page, getBackButtonText };
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