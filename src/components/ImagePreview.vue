<script setup lang="ts">
import { ref } from 'vue'
import { ZoomIn } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'

defineProps<{ src: string; alt: string }>()
const open = ref(false)
const failed = ref(false)
</script>

<template>
  <div class="image-preview">
    <Dialog v-model:open="open" :title="alt" description="Ảnh kích thước lớn. Nhấn Esc hoặc nút đóng để quay lại vị trí đang xem.">
      <template #trigger>
        <Button type="button" variant="ghost" class="image-preview-trigger" :aria-label="`Phóng to ảnh: ${alt}`" @click="failed = false">
          <slot><img :src="src" :alt="alt" loading="lazy" /></slot>
          <span class="image-preview-hint"><ZoomIn aria-hidden="true" /> Xem ảnh lớn</span>
        </Button>
      </template>
      <img v-if="!failed" class="image-preview-full" :src="src" :alt="alt" @error="failed = true" />
      <p v-else role="status">Chưa tải được ảnh. Hãy đóng rồi mở lại để thử lại.</p>
    </Dialog>
  </div>
</template>

<style scoped>
.image-preview { min-width: 0; }
.image-preview-trigger { position: relative; display: block; width: 100%; height: auto; min-height: 44px; padding: 0; border: 0; border-radius: inherit; background: transparent; white-space: normal; cursor: zoom-in; overflow: hidden; }
.image-preview-trigger:hover { background: transparent; }
.image-preview-trigger > img { display: block; width: 100%; height: auto; }
.image-preview-hint { position: absolute; display: inline-flex; align-items: center; gap: 6px; bottom: 8px; right: 8px; padding: 6px 9px; border: 1px solid #e1d5c3; background: #fffaf1f2; color: #54392c; border-radius: 20px; font-size: 10px; line-height: 1.5; }
.image-preview-hint svg { width: 14px; height: 14px; }
.image-preview-full { display: block; width: 100%; max-height: 68svh; object-fit: contain; }
</style>
