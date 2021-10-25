import {OPEN_MODAL, CLOSE_MODAL} from './types'

export const openModal = (open, code) => ({
    type:OPEN_MODAL,
    payload:{open,code}
});

export const closeModal = (open) => ({
    type: CLOSE_MODAL,
    payload:{open}
});