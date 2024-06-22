# Define variables
PACKAGE_MANAGER = pnpm
DEV_CMD = run dev
BUILD_CMD = run build
CACHE_CLEAR_CMD = store prune
INSTALL_CMD = install

# Default target
all: install

# Run development server
dev:
	$(PACKAGE_MANAGER) $(DEV_CMD)

# Build the project
build:
	$(PACKAGE_MANAGER) $(BUILD_CMD)

# Clear npm cache
clean:
	$(PACKAGE_MANAGER) $(CACHE_CLEAR_CMD)

# Install dependencies
install:
	$(PACKAGE_MANAGER) $(INSTALL_CMD)
