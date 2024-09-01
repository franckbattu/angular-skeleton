#!/usr/bin/env zx
import { fs, globby } from 'zx';
import jsonlint from 'jsonlint';
import chalk from 'chalk';
import yaml from 'yaml';

/**
 * Generic function to check file format.
 *
 * @param {string[]} patterns - Glob patterns to match files
 * @param {Function} parseFunction - Function to parse the file content
 * @param {string} formatName - Name of the format for logging
 * @param {string[]} [ignoreDirs] - Directories to ignore
 * @returns {Promise<void>}
 */
async function checkFiles(patterns, parseFunction, formatName, ignoreDirs = ['dist/**', 'node_modules/**']) {
  console.log(chalk.blue.bold(`🔍 Start checking ${formatName} files...\n`));

  const files = await globby(patterns, { ignore: ignoreDirs });

  for (const file of files) {
    try {
      const data = await fs.readFile(file, 'utf8');
      parseFunction(data);
    } catch (error) {
      console.error(chalk.red(`❌ ${file} is not formatted correctly: ${error.message}`));
    }
  }
}

/**
 * Main function to check different file formats
 */
async function main() {
  await checkFiles(['**/*.json'], jsonlint.parse, 'JSON');
  await checkFiles(['**/*.yml', '**/*.yaml'], yaml.parse, 'YAML');
  console.log(chalk.blue.bold('✅ Checking completed!'));
}

await main();
