<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/manikur-pedikur.jpg" alt="Manikür Pedikür">
        <div class="description">
          <h1>Manikür Pedikür</h1>
          <p>
            Manikür, el ve özellikle eldeki tırnakların bakımının genel adı. Tırnak törpüleme, oje sürme ve tırnak dibi etlerinin temizlenmesi gibi eylemlerin geneline denir.
          </p>
          <p>
            Pedikür, ayak tırnaklarının bakımı, ayak tırnaklarına oje sürme ve ayak nasırlarının yumuşatılması gibi bakım işlemlerinin geneline verilen işlemdir.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Cilt Bakım'
  }
}
</script>

<style lang="scss" scoped>
  .cover {
    .container {
      h1 {
        font-size: 2.25rem;
        margin-top: .75rem;
      }
      p {
        margin-top: 20px;
      }
    }

    @media screen and (min-width: 768px) {
      max-width: 1200px;
      display: block;
      margin: auto;
      .container {
        margin: auto;
        display: grid;
        grid-template: 1fr / 3fr 6fr;
        grid-gap: 20px;

        .description {
          margin-top: 1.5rem;
          p {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
</style>