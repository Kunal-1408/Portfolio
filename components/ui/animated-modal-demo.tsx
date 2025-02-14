"use client"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal "
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AnimatedModalDemo() {
  return (
    <Modal>
      <ModalTrigger className="bg-zinc-900/80 text-white flex justify-center group/modal-btn rounded-full px-6 pb-2 pt-2 border border-zinc-800">
        <span className="group-hover/modal-btn:translate-x-[150%] text-center transition duration-500 font-bold ">
          Let&apos;s connect
        </span>
        <div className="-translate-x-[150%] group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          🤝
        </div>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <motion.h4
            className="text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let&apos;s Connect!
          </motion.h4>
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Name
              </label>
              <Input id="name" type="text" placeholder="Your name" className="w-full" />
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                E-mail address
              </label>
              <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label htmlFor="query" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Query
              </label>
              <Textarea id="query" placeholder="Your wish is my command" className="w-full min-h-[100px]" />
            </motion.div>
          </motion.form>
        </ModalContent>
        <ModalFooter>
          <motion.button
            className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black w-full group/submit-btn overflow-hidden relative"
            whileHover="hover"
            initial="initial"
            animate="animate"
          >
            <motion.span
              className="inline-block w-full text-center"
              variants={{
                initial: { x: 0 },
                hover: { x: "100%" },
              }}
              transition={{ duration: 0.3 }}
            >
              Submit
            </motion.span>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { x: "-100%" },
                hover: { x: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              🚀
            </motion.div>
          </motion.button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  )
}

