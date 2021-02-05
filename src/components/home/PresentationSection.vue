<template>
  <div class="presentation-section flow">
    <h1 class="presentation-section__title">
      <!-- &shy; => This is a soft hyphen, only appearing when the word is wrapped. -->
      Dévelop&shy;pement et qualité&nbsp;web
    </h1>
    <p>
      Bonjour ! Nous c’est
      <span
        :data-highlight="`Là${'\xa0'}c'est${'\xa0'}Adrien`"
        :class="[
          'presentation-section__name',
          {
            'presentation-section__name--highlighted':
              highlightedName === 'adrien'
          }
        ]"
        >Adrien</span
      >
      et
      <span
        :data-highlight="`Là${'\xa0'}c'est${'\xa0'}Quentin`"
        :class="[
          'presentation-section__name',
          {
            'presentation-section__name--highlighted':
              highlightedName === 'quentin'
          }
        ]"
        >Quentin</span
      >. On est 2 développeurs web très attachés à la qualité web et à
      l’expérience utilisateur.
    </p>
    <p>
      Et c’est pour ça qu’on a créé “/tmp” (ça se prononce “slash tmp”) : un
      petit studio de développement où on code des sites et on fait de la
      qualité web.
    </p>

    <div class="presentation-section__avatars">
      <button
        :class="[
          'presentation-section__button',
          {
            'presentation-section__button--highlighted':
              highlightedName === 'adrien'
          }
        ]"
        @click="highlightName('adrien')"
      >
        <picture>
          <source
            srcset="@/assets/img/adrien.jpg?resize&size=200&format=webp"
            type="image/webp"
          />
          <source
            srcset="@/assets/img/adrien.jpg?resize&size=200"
            type="image/jpeg"
          />
          <img
            class="presentation-section__avatar"
            src="@/assets/img/adrien.jpg?resize&size=200"
            alt="Adrien"
          />
        </picture>
      </button>

      <button
        :class="[
          'presentation-section__button',
          {
            'presentation-section__button--highlighted':
              highlightedName === 'quentin'
          }
        ]"
        @click="highlightName('quentin')"
      >
        <picture>
          <source
            srcset="@/assets/img/quentin.jpg?resize&size=200&format=webp"
            type="image/webp"
          />
          <source
            srcset="@/assets/img/quentin.jpg?resize&size=200"
            type="image/jpeg"
          />
          <img
            class="presentation-section__avatar"
            src="@/assets/img/quentin.jpg?resize&size=200"
            alt="Quentin"
          />
        </picture>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PresentationSection',
  data() {
    return {
      highlightedName: null,
      highlightTimeOutId: null
    }
  },
  methods: {
    highlightName(name) {
      clearTimeout(this.highlightTimeOutId)

      if (this.highlightedName === name) {
        this.highlightedName = null
        return
      }
      this.highlightedName = name

      this.highlightTimeOutId = setTimeout(() => {
        this.highlightedName = null
      }, 4000)
    }
  }
}
</script>

<style lang="scss">
.presentation-section {
  font-size: 1.5rem;
  position: relative;

  --flow: 3rem;
  --avatar-size: 10rem;
  --avatar-offset: 1rem;
  --avatar-border-width: 0.5rem;
  --outline-color: #{$color-white};

  &__title {
    color: inherit;
  }

  &__section {
    margin: 0 auto;
  }

  &__name {
    position: relative;

    &::after {
      background: $color-white;
      border-radius: 0.25rem;
      color: $color-purple;
      content: attr(data-highlight);
      left: 50%;
      opacity: 0;
      padding: 0.1rem 0.4rem;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: opacity 0.2s, transform 0.2s;
      z-index: 1;
    }

    &--highlighted {
      &::after {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.2) rotate(-10deg);
      }

      &:nth-child(2)::after {
        transform: translate(-50%, -50%) scale(1.2) rotate(10deg);
      }
    }
  }

  &__avatars {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0;
  }

  &__button {
    border: var(--avatar-border-width) solid $color-white;
    border-radius: 50%;
    height: var(--avatar-size);
    overflow: hidden;
    padding: 0;
    transform: translateY(var(--avatar-offset));
    transition: transform 0.2s;
    width: var(--avatar-size);

    &:nth-child(2) {
      transform: translateY(calc(var(--avatar-offset) * -1));
    }

    &--highlighted {
      transform: translateY(var(--avatar-offset)) scale(1.2) rotate(10deg);

      &:nth-child(2) {
        transform: translateY(calc(var(--avatar-offset) * -1)) scale(1.2)
          rotate(10deg);
      }
    }
  }

  &__avatar {
    width: 100%;
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
