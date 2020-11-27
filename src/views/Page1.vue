<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Page1</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Page1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item @click="goToPage2Page()">
          <ion-label class="ion-text-wrap">
            <h2>Go to page2</h2>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
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
  name: "page1",

  components: {
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
    function goToPage2Page() {
      router.push({
        name: "page2",
      });
    }

    return {
      goToPage2Page,
    };
  },
});
</script>