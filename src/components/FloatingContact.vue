<script setup lang="ts">
import { Phone } from '@lucide/vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button as-child size="icon" class="floating-contact">
    <a
      href="tel:0327227803"
      aria-label="Gọi liên hệ dự án Ví nhỏ thông minh: 0327 227 803"
      title="Gọi 0327 227 803"
    >
      <Phone aria-hidden="true" />
    </a>
  </Button>
</template>

<style scoped>
.floating-contact {
  position: fixed;
  right: calc(24px + env(safe-area-inset-right, 0px));
  bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  z-index: 50;
  width: 56px;
  height: 56px;
  border: 1px solid #e3ac48;
  border-radius: 50%;
  background: #d99b32;
  color: #192f20;
  box-shadow: 0 5px 18px #183f2c26;
  transition: background .2s, transform .2s, box-shadow .2s;
}

.floating-contact :deep(svg) { width: 24px; height: 24px; stroke-width: 1.8; }
.floating-contact:hover { background: #edb44d; transform: translateY(-3px); box-shadow: 0 8px 22px #183f2c33; }
.floating-contact:focus-visible { outline: 3px solid #244d3e; outline-offset: 4px; }

@media (max-width: 600px) {
  .floating-contact {
    right: calc(16px + env(safe-area-inset-right, 0px));
    bottom: calc(16px + env(safe-area-inset-bottom, 0px));
    width: 52px;
    height: 52px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .floating-contact { transition: none; }
  .floating-contact:hover { transform: none; }
}

@media print {
  .floating-contact { display: none; }
}
</style>
