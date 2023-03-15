<template>
  <v-container fluid>
    <v-form>
      <v-file-input label="Selecione as legendas" prepend-icon="mdi-message-text" append-outer-icon="mdi-send" outlined
        multiple chips v-model="files" @click:append-outer="processSubtitles" />
    </v-form>

    <div class="pills">
      <!-- : servem para interpretar o que está sendo chamado. O uso sem : implica em repetir o texto que foi previamente escrito -->
      <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount" />
    </div>
  </v-container>
</template>

<script>
// ipcRenderer = Usado para disparar o evento na interface gráfica quando o usuário selecionar o ProcessSubtitle
import { ipcRenderer } from "electron";
import Pill from "./Pill";

export default {
  components: { Pill },

  data: function () {
    return {
      files: [],
      groupedWords: [],
    };
  },
  methods: {
    processSubtitles() {
      // Pegar apenas os paths
      const paths = this.files.map(f => f.path)

      // Comunicação async
      // Enviar para o canal de comunicação (process-subtitles) um determinado parâmetro (files)
      ipcRenderer.send("process-subtitles", paths);
      // Receber uma resposta no mesmo canal que envia (process-subtitles) - podia ser em outro canal, basta mudar aqui e no backend)
      ipcRenderer.on("process-subtitles", (event, resp) => {
        this.groupedWords = resp;
      });
    },
  },
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>