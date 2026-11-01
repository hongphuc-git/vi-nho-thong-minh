<script setup lang="ts">
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui'
import { X } from '@lucide/vue'
import { Button } from '@/components/ui/button'

defineProps<{
  open: boolean
  title: string
  description: string
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
  closeAutoFocus: [event: Event]
}>()
</script>

<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogTrigger v-if="$slots.trigger" as-child><slot name="trigger" /></DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="dialog-overlay" />
      <DialogContent class="dialog-content" @close-auto-focus="emit('closeAutoFocus', $event)">
        <header class="dialog-heading">
          <div><DialogTitle class="dialog-title">{{ title }}</DialogTitle><DialogDescription class="dialog-description">{{ description }}</DialogDescription></div>
          <DialogClose as-child><Button type="button" variant="ghost" size="icon" class="dialog-close" aria-label="Đóng cửa sổ"><X aria-hidden="true" /></Button></DialogClose>
        </header>
        <div class="dialog-body"><slot /></div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
.dialog-overlay { position: fixed; inset: 0; z-index: 100; background: #2d241cc4; backdrop-filter: blur(5px); }
.dialog-content { position: fixed; z-index: 101; top: 50%; left: 50%; transform: translate(-50%, -50%); width: min(960px, calc(100% - 32px)); max-height: calc(100svh - 40px); display: flex; flex-direction: column; overflow: hidden; border: 1px solid #e5d5bf; border-radius: 22px; background: var(--surface-paper); color: #54392c; box-shadow: 0 24px 80px #1d120d55; }
.dialog-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; padding: 22px 24px; border-bottom: 1px dashed #ddcfbb; flex-shrink: 0; }
.dialog-title { font-family: 'Lora', Georgia, serif; font-size: clamp(20px, 3vw, 27px); line-height: 1.4; font-weight: 700; }
.dialog-description { margin-top: 7px; font-size: 12px; line-height: 1.8; color: #79634d; }
.dialog-close { width: 44px; height: 44px; flex-shrink: 0; border: 1px solid #ddcfbb; border-radius: 50%; }
.dialog-body { min-height: 0; overflow-y: auto; overscroll-behavior: contain; padding: 24px; }
@media (max-width: 600px) { .dialog-heading { padding: 18px 16px; gap: 12px; } .dialog-body { padding: 16px; } .dialog-content { width: calc(100% - 20px); max-height: calc(100svh - 24px); border-radius: 17px; } }
</style>
