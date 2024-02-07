#!/bin/sh

set -e

check_dependency() {
    if ! command -v $1 > /dev/null 2>&1; then
        echo "Error: $1 is not installed."
        exit 1
    fi
}

check_dependency "curl"
check_dependency "tar"

redwood_install="${HOME}/.rw"
bin_dir="$redwood_install/bin"
exe="$bin_dir/rw"

if [ ! -d "$bin_dir" ]; then
	mkdir -p "$bin_dir"
fi

os=$(uname -s)
arch=$(uname -m)
download_url="https://github.com/redwoodjs/rw-cli/releases/latest/download/rw_${os}_${arch}.tar.gz"

curl --fail --location --progress-bar --output "$exe.tar.gz" $download_url

tar -xzf "$exe.tar.gz" -C "$bin_dir"
chmod +x "$exe"

rm "$exe.tar.gz"

echo "Redwood CLI (rw) was installed successfully to $exe"

if command -v rw >/dev/null; then
    echo "Run 'rw --help' to get started"
else
    case $SHELL in
    /bin/zsh) shell_profile=".zshrc" ;;
    *) shell_profile=".bash_profile" ;;
    esac
    echo "Manually add the directory to your \$HOME/$shell_profile (or similar)"
    echo "  export REDWOOD_INSTALL=\"$redwood_install\""
    echo "  export PATH=\"\$REDWOOD_INSTALL/bin:\$PATH\""
    echo "Run '$exe --help' to get started"
fi
