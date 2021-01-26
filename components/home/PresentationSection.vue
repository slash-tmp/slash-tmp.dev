<template>
  <div class="presentation-section flow">
    <h1 class="presentation-section__title">
      <!-- &shy; => This is a soft hyphen, only appearing when the word is wrapped. -->
      Dévelop&shy;pement et qualité&nbsp;web
    </h1>
    <p>
      Bonjour ! Nous c’est Adrien et Quentin. On est 2 développeurs web très
      attachés à la qualité web et à l’expérience utilisateur.
    </p>
    <p>
      Et c’est pour ça qu’on a créé “/tmp” (ça se prononce “slash tmp”) : un
      petit studio de développement où on code des sites et on fait de la
      qualité web.
    </p>
    <div class="presentation-section__avatars">
      <img
        class="presentation-section__avatar"
        src="https://i.pravatar.cc?img=50"
        alt="Adrien"
      />
      <img
        class="presentation-section__avatar"
        src="https://i.pravatar.cc?img=69"
        alt="Quentin"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PresentationSection'
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.presentation-section {
  font-size: 1.5rem;
  position: relative;

  --flow: 3rem;
  --avatar-size: 10rem;
  --avatar-offset: 1rem;
  --avatar-border-width: 0.5rem;

  &__title {
    font-size: 3.5em;
    color: inherit;
    line-height: 1.2;

    @media (max-width: 1200px) {
      font-size: 3em;
    }

    @media (max-width: 900px) {
      font-size: 2.5em;
    }
  }

  &__section {
    margin: 0 auto;
  }

  &__avatars {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0;

    > :nth-child(1) {
      transform: translateY(calc(var(--avatar-offset)));
    }

    > :nth-child(2) {
      transform: translateY(calc(var(--avatar-offset) * -1));
    }
  }

  &__avatar {
    border-radius: 50%;
    border: var(--avatar-border-width) solid $color-white;
    width: var(--avatar-size);
    height: var(--avatar-size);
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;

    --flow: 2.5rem;
  }

  @media (max-width: 900px) {
    font-size: 1rem;

    --flow: 2rem;
    --avatar-offset: 0.5rem;
    --avatar-size: 7rem;
    --avatar-border-width: 0.3rem;
  }

  @media (max-width: 400px) {
    --avatar-size: 5rem;
  }
}
</style>
