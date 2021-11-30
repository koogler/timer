for (i = 0; i < process.argv.length; i++) {
  let delay = 0
  if (process.argv[i] >= 0) {
    setTimeout(() => {
      process.stdout.write("/x07")
    }, Number(process.argv[i]) * 1000)
  }

}


process.stdout.write('\x07');